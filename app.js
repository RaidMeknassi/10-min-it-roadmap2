(function () {
  var road = document.getElementById("road");
  var svg = document.getElementById("road-lines");
  var levelsEl = document.getElementById("map");
  var overlay = document.getElementById("overlay");
  var current = null;

  // ----- saved progress (stays in this browser only) -----
  var KEY = "itroadmap-v2-done";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var maps = [];   // one per level: { level, head, nodes:[{el, lesson}], countEl }
  var total = 0;

  // ----- level chips (jump links) -----
  var chips = document.getElementById("chips");
  LEVELS.forEach(function (lv) {
    var a = document.createElement("a");
    a.href = "#" + lv.id;
    a.style.setProperty("--c", lv.color);
    a.innerHTML = "<i></i>" + lv.name;
    chips.appendChild(a);
  });
  var pa = document.createElement("a");
  pa.href = "#paths";
  pa.style.setProperty("--c", "#f472b6");
  pa.innerHTML = "<i></i>Level 6";
  chips.appendChild(pa);

  // ----- build levels: Levels 0-2 are the trunk, Levels 3-5 are three branches -----
  var trunk = document.createElement("div");
  trunk.className = "trunk";
  var branches = document.createElement("div");
  branches.className = "branches";
  levelsEl.appendChild(trunk);
  levelsEl.appendChild(branches);

  LEVELS.forEach(function (lv, li) {
    var sec = document.createElement("section");
    sec.className = "level";
    sec.id = lv.id;
    sec.style.setProperty("--c", lv.color);
    sec.innerHTML =
      '<header class="level-head"><span class="badge"></span><span class="level-count"></span><h2></h2></header>' +
      '<div class="vmap"></div>';
    sec.querySelector(".badge").textContent = lv.name;
    sec.querySelector("h2").textContent = lv.title;
    (li < 3 ? trunk : branches).appendChild(sec);

    var vmap = sec.querySelector(".vmap");
    var entry = { level: lv, head: sec.querySelector(".level-head"), nodes: [], countEl: sec.querySelector(".level-count") };

    lv.lessons.forEach(function (row) {
      var lesson = { n: row[0], title: row[1], lab: !!row[2], level: lv };
      total++;
      var b = document.createElement("button");
      b.className = "node";
      b.type = "button";
      b.innerHTML =
        '<span class="orb"><span class="num"></span>' + (lesson.lab ? '<span class="lock" title="Has a lab">🔒</span>' : "") + "</span>" +
        '<span class="n-title"></span><span class="n-meta">10 min</span>';
      b.querySelector(".num").textContent = lesson.n;
      b.querySelector(".n-title").textContent = lesson.title;
      b.addEventListener("click", function () { openPanel(lesson); });
      vmap.appendChild(b);
      entry.nodes.push({ el: b, lesson: lesson });
    });
    maps.push(entry);
  });

  // ----- Level 6 paths -----
  var pg = document.getElementById("paths-grid");
  PATHS.forEach(function (p) {
    var card = document.createElement("div");
    card.className = "path";
    card.style.setProperty("--c", p.color);
    card.innerHTML = "<h3></h3><ul></ul>";
    card.querySelector("h3").textContent = p.name;
    var ul = card.querySelector("ul");
    p.items.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    pg.appendChild(card);
  });

  // ----- connecting lines (one overlay for the whole road) -----
  function drawRoad() {
    var base = road.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var stacked = window.innerWidth <= 720;   // branches stack on phones
    var out = "";

    function cx(r) { return r.left + r.width / 2 - base.left; }
    function curve(x1, y1, x2, y2, color, cls) {
      var my = (y1 + y2) / 2;
      var d = (Math.abs(x1 - x2) < 1)
        ? "M" + x1 + " " + y1 + " L" + x2 + " " + y2
        : "M" + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2;
      out += '<path class="' + (cls || "") + '" stroke="' + color + '" d="' + d + '"/>';
    }
    function lastBottom(m) {
      var r = m.nodes[m.nodes.length - 1].el.getBoundingClientRect();
      return { x: cx(r), y: r.bottom - base.top + 2 };
    }

    maps.forEach(function (m, li) {
      var color = m.level.color;
      var hr = m.head.getBoundingClientRect();

      // from the previous level (trunk), or from the end of Level 2 (fork into 3 branches)
      if (li > 0) {
        var prev = (li <= 3 || stacked) ? maps[li - 1] : maps[2];
        if (li >= 3 && !stacked) prev = maps[2];
        var from = lastBottom(prev);
        curve(from.x, from.y, cx(hr), hr.top - base.top, color);
      }

      // header -> first lesson, then lesson -> lesson
      var first = m.nodes[0].el.querySelector(".orb").getBoundingClientRect();
      curve(cx(hr), hr.bottom - base.top, cx(first), first.top - base.top, color);

      for (var i = 1; i < m.nodes.length; i++) {
        var A = m.nodes[i - 1], B = m.nodes[i];
        var ra = A.el.getBoundingClientRect();
        var ob = B.el.querySelector(".orb").getBoundingClientRect();
        var cls = done[A.lesson.n] && done[B.lesson.n] ? "done" : "";
        curve(cx(ra), ra.bottom - base.top + 2, cx(ob), ob.top - base.top, color, cls);
      }
    });

    // merge: the end of the branches flows into Level 6
    var ph = document.getElementById("paths-head").getBoundingClientRect();
    var ends = stacked ? [maps[maps.length - 1]] : [maps[3], maps[4], maps[5]];
    ends.forEach(function (m) {
      var f = lastBottom(m);
      curve(f.x, f.y, cx(ph), ph.top - base.top, m.level.color);
    });

    svg.innerHTML = out;
  }

  // ----- progress -----
  function refresh() {
    var n = 0;
    maps.forEach(function (m) {
      var c = 0;
      m.nodes.forEach(function (nd) {
        var d = !!done[nd.lesson.n];
        if (d) { n++; c++; }
        nd.el.classList.toggle("done", d);
      });
      m.countEl.textContent = c + " / " + m.nodes.length + " done";
    });
    document.getElementById("progress-text").textContent = n + " / " + total + " lessons";
    document.getElementById("bar-fill").style.width = (n / total * 100) + "%";
    drawRoad();
  }

  // ----- lesson panel -----
  function openPanel(l) {
    current = l;
    var tr = document.getElementById("p-track");
    tr.textContent = l.level.name + " · Lesson " + l.n + " · 10 min";
    tr.style.color = l.level.color;
    document.getElementById("p-title").textContent = l.title;

    var v = document.getElementById("p-video");
    v.innerHTML = "";
    var id = (typeof VIDEOS !== "undefined") ? VIDEOS[l.n] : "";
    if (id) {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
      f.title = l.title;
      f.loading = "lazy";
      f.allow = "accelerometer; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      v.appendChild(f);
    } else {
      v.innerHTML = '<div class="soon">Video coming soon</div>';
    }

    document.getElementById("p-lab").innerHTML = l.lab
      ? "🔒 <b>Lab available.</b> Practise this lesson hands-on. Labs are for subscribers (coming soon)."
      : "This lesson has no lab. Just watch and learn.";

    document.getElementById("p-done").textContent = done[l.n] ? "Mark as not done" : "Mark as done";
    overlay.hidden = false;
  }
  function closePanel() { overlay.hidden = true; document.getElementById("p-video").innerHTML = ""; }

  document.getElementById("p-close").addEventListener("click", closePanel);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closePanel(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
  document.getElementById("p-done").addEventListener("click", function () {
    if (!current) return;
    if (done[current.n]) delete done[current.n]; else done[current.n] = true;
    save(); refresh(); closePanel();
  });

  document.getElementById("subscribe-btn").addEventListener("click", function (e) { e.preventDefault(); });
  document.getElementById("year").textContent = new Date().getFullYear();

  var timer;
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(drawRoad, 80);
  });
  window.addEventListener("load", drawRoad);
  refresh();
})();
