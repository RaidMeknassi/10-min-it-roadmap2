(function () {
  var levelsEl = document.getElementById("map");
  var overlay = document.getElementById("overlay");
  var current = null;

  // ----- saved progress (stays in this browser only) -----
  var KEY = "itroadmap-v2-done";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var maps = [];      // one entry per level: { level, grid, svg, nodes: [{el, lesson}], countEl }
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

  // ----- build every level -----
  LEVELS.forEach(function (lv, li) {
    if (li > 0) {
      var link = document.createElement("div");
      link.className = "level-link";
      levelsEl.appendChild(link);
    }
    var sec = document.createElement("section");
    sec.className = "level";
    sec.id = lv.id;
    sec.style.setProperty("--c", lv.color);
    sec.innerHTML =
      '<header class="level-head"><span class="badge"></span><h2></h2><span class="level-count"></span></header>' +
      '<div class="map"><svg class="lines" aria-hidden="true"></svg><div class="grid"></div></div>';
    sec.querySelector(".badge").textContent = lv.name;
    sec.querySelector("h2").textContent = lv.title;
    levelsEl.appendChild(sec);

    var grid = sec.querySelector(".grid");
    var entry = { level: lv, grid: grid, svg: sec.querySelector(".lines"), nodes: [], countEl: sec.querySelector(".level-count") };

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
      grid.appendChild(b);
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

  // ----- layout: snake path, number of columns depends on screen width -----
  function columns() {
    var w = window.innerWidth;
    return w >= 820 ? 4 : (w >= 520 ? 3 : 2);
  }
  function layout() {
    var cols = columns();
    maps.forEach(function (m) {
      m.grid.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
      m.nodes.forEach(function (nd, i) {
        var row = Math.floor(i / cols), pos = i % cols;
        var col = row % 2 === 0 ? pos : cols - 1 - pos;
        nd.row = row;
        nd.el.style.gridRow = row + 1;
        nd.el.style.gridColumn = col + 1;
      });
    });
  }

  // ----- connecting lines -----
  function drawLines() {
    maps.forEach(function (m) {
      var base = m.svg.parentNode.getBoundingClientRect();
      m.svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
      var color = m.level.color, out = "";
      for (var i = 1; i < m.nodes.length; i++) {
        var A = m.nodes[i - 1], B = m.nodes[i];
        var oa = A.el.querySelector(".orb").getBoundingClientRect();
        var ob = B.el.querySelector(".orb").getBoundingClientRect();
        var cls = done[A.lesson.n] && done[B.lesson.n] ? "done" : "";
        var d;
        if (A.row === B.row) {
          d = "M" + (oa.left + oa.width / 2 - base.left) + " " + (oa.top + oa.height / 2 - base.top) +
              " L" + (ob.left + ob.width / 2 - base.left) + " " + (ob.top + ob.height / 2 - base.top);
        } else {
          var na = A.el.getBoundingClientRect();
          var x1 = na.left + na.width / 2 - base.left, y1 = na.bottom - base.top + 2;
          var x2 = ob.left + ob.width / 2 - base.left, y2 = ob.top - base.top;
          var my = (y1 + y2) / 2;
          d = "M" + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2;
        }
        out += '<path class="' + cls + '" stroke="' + color + '" d="' + d + '"/>';
      }
      m.svg.innerHTML = out;
    });
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
    drawLines();
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
    timer = setTimeout(function () { layout(); drawLines(); }, 80);
  });
  window.addEventListener("load", drawLines);
  layout();
  refresh();
})();
