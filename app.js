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

  var entries = [];   // 0..5 = Levels 0-5, 6 = Level 6 (paths)
  var total = 0;

  var LEVEL6 = { id: "l6", name: "Level 6", title: "Advanced IT Specializations", color: "#f472b6" };

  // ----- level chips (jump links) -----
  var chips = document.getElementById("chips");
  LEVELS.concat([LEVEL6]).forEach(function (lv) {
    var a = document.createElement("a");
    a.href = "#" + lv.id;
    a.style.setProperty("--c", lv.color);
    a.innerHTML = "<i></i>" + lv.name;
    chips.appendChild(a);
  });

  // ----- containers: trunk (Levels 0-2), three branches (Levels 3-5), final (Level 6) -----
  var trunk = document.createElement("div");   trunk.className = "trunk";
  var branches = document.createElement("div"); branches.className = "branches";
  var finalEl = document.createElement("div");  finalEl.className = "final";
  levelsEl.appendChild(trunk);
  levelsEl.appendChild(branches);
  levelsEl.appendChild(finalEl);

  function closeAll(except) {
    entries.forEach(function (en) { if (en.lv !== except) en.lv.classList.remove("open"); });
  }

  function makeLevel(info, container, flip) {
    var lv = document.createElement("div");
    lv.className = "lv" + (flip ? " flip" : "");
    lv.id = info.id;
    lv.style.setProperty("--c", info.color);
    lv.innerHTML =
      '<button type="button" class="lv-card" aria-haspopup="true">' +
        '<span class="badge"></span><h2></h2><div class="lv-meta"></div>' +
        '<div class="lv-bar"><i></i></div>' +
      '</button>' +
      '<div class="flyout"><div class="flyout-card"><div class="fl-head"></div><div class="fl-list"></div></div></div>';
    lv.querySelector(".badge").textContent = info.name;
    lv.querySelector("h2").textContent = info.title;
    lv.querySelector(".fl-head").textContent = info.name + " · " + info.title;
    container.appendChild(lv);

    var card = lv.querySelector(".lv-card");
    card.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = !lv.classList.contains("open");
      closeAll(lv);
      lv.classList.toggle("open", willOpen);
      requestAnimationFrame(drawRoad);
    });

    var en = { info: info, lv: lv, card: card, metaEl: lv.querySelector(".lv-meta"),
               barEl: lv.querySelector(".lv-bar i"), barWrap: lv.querySelector(".lv-bar"), items: [] };
    entries.push(en);
    return en;
  }

  // Levels 0-5: lessons
  LEVELS.forEach(function (lv, li) {
    var en = makeLevel(lv, li < 3 ? trunk : branches, li === 5);
    var list = en.lv.querySelector(".fl-list");
    lv.lessons.forEach(function (row) {
      var lesson = { n: row[0], title: row[1], lab: !!row[2], level: lv };
      total++;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "fl-item";
      b.innerHTML = '<span class="fl-num"></span><span class="fl-title"></span>' + (lesson.lab ? '<span class="fl-lock" title="Has a lab">🔒</span>' : "");
      b.querySelector(".fl-num").textContent = lesson.n;
      b.querySelector(".fl-title").textContent = lesson.title;
      b.addEventListener("click", function (e) { e.stopPropagation(); openLesson(lesson); });
      list.appendChild(b);
      en.items.push({ el: b, lesson: lesson });
    });
  });

  // Level 6: specialization paths
  (function () {
    var en = makeLevel(LEVEL6, finalEl, false);
    var list = en.lv.querySelector(".fl-list");
    en.barWrap.style.display = "none";
    en.metaEl.textContent = PATHS.length + " paths · choose one";
    PATHS.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "fl-item";
      b.style.setProperty("--c", p.color);
      b.innerHTML = '<span class="fl-dot"></span><span class="fl-title"></span>';
      b.querySelector(".fl-title").textContent = p.name;
      b.addEventListener("click", function (e) { e.stopPropagation(); openPath(p); });
      list.appendChild(b);
    });
  })();

  // ----- connecting lines between the level nodes -----
  function drawRoad() {
    var base = road.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var stacked = window.innerWidth <= 720;
    var out = "";

    function link(i, j, colorIdx) {
      var a = entries[i].card.getBoundingClientRect();
      var b = entries[j].card.getBoundingClientRect();
      var x1 = a.left + a.width / 2 - base.left, y1 = a.bottom - base.top;
      var x2 = b.left + b.width / 2 - base.left, y2 = b.top - base.top;
      var my = (y1 + y2) / 2;
      var d = Math.abs(x1 - x2) < 1
        ? "M" + x1 + " " + y1 + " L" + x2 + " " + y2
        : "M" + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2;
      var cls = entries[i].complete ? "done" : "";
      out += '<path class="' + cls + '" stroke="' + entries[colorIdx].info.color + '" d="' + d + '"/>';
    }

    link(0, 1, 1);
    link(1, 2, 2);
    if (stacked) {
      link(2, 3, 3); link(3, 4, 4); link(4, 5, 5); link(5, 6, 6);
    } else {
      link(2, 3, 3); link(2, 4, 4); link(2, 5, 5);
      link(3, 6, 3); link(4, 6, 4); link(5, 6, 5);
    }
    svg.innerHTML = out;
  }

  // ----- progress -----
  function refresh() {
    var n = 0;
    entries.forEach(function (en, i) {
      if (i > 5) return;
      var c = 0;
      en.items.forEach(function (it) {
        var d = !!done[it.lesson.n];
        if (d) { n++; c++; }
        it.el.classList.toggle("done", d);
      });
      en.complete = (c === en.items.length);
      en.metaEl.textContent = en.items.length + " lessons · " + c + " / " + en.items.length + " done";
      en.barEl.style.width = (c / en.items.length * 100) + "%";
    });
    document.getElementById("progress-text").textContent = n + " / " + total + " lessons";
    document.getElementById("bar-fill").style.width = (n / total * 100) + "%";
    drawRoad();
  }

  // ----- panel (lesson or specialization path) -----
  function showPanel(isLesson) {
    document.getElementById("p-video").style.display = isLesson ? "" : "none";
    document.getElementById("p-topics").hidden = isLesson;
    document.getElementById("p-done").style.display = isLesson ? "" : "none";
    overlay.hidden = false;
  }

  function openLesson(l) {
    current = l;
    closeAll();
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
    showPanel(true);
  }

  function openPath(p) {
    current = null;
    closeAll();
    var tr = document.getElementById("p-track");
    tr.textContent = "Level 6 · Specialization path";
    tr.style.color = p.color;
    document.getElementById("p-title").textContent = p.name;
    var ul = document.getElementById("p-topics");
    ul.innerHTML = "";
    p.items.forEach(function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
    document.getElementById("p-lab").innerHTML = "Detailed lessons for this path are <b>coming soon</b>.";
    showPanel(false);
  }

  function closePanel() { overlay.hidden = true; document.getElementById("p-video").innerHTML = ""; }

  document.getElementById("p-close").addEventListener("click", closePanel);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closePanel(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closePanel(); closeAll(); drawRoad(); } });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lv")) { var any = document.querySelector(".lv.open"); closeAll(); if (any) drawRoad(); }
  });
  document.getElementById("p-done").addEventListener("click", function () {
    if (!current) return;
    if (done[current.n]) delete done[current.n]; else done[current.n] = true;
    save(); refresh(); closePanel();
  });

  // ----- certifications -----
  (function () {
    var grid = document.getElementById("certs-grid");
    CERTS.forEach(function (c) {
      var card = document.createElement("div");
      card.className = "cert-card";
      card.style.setProperty("--c", c.color);
      card.innerHTML = '<span class="badge"></span><h3></h3><ul></ul>';
      card.querySelector(".badge").textContent = c.stage;
      card.querySelector("h3").textContent = c.title;
      var ul = card.querySelector("ul");
      c.items.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      grid.appendChild(card);
    });

    var wrap = document.getElementById("cert-paths");
    var h = document.createElement("h3");
    h.textContent = "Level 6 \u00B7 Certifications by specialization";
    wrap.appendChild(h);
    var rows = document.createElement("div");
    rows.className = "cert-rows";
    PATH_CERTS.forEach(function (r) {
      var row = document.createElement("div");
      row.className = "cert-row";
      row.style.setProperty("--c", r[1]);
      row.innerHTML = '<b></b><span></span>';
      row.querySelector("b").textContent = r[0];
      row.querySelector("span").textContent = r[2].join("  \u00B7  ");
      rows.appendChild(row);
    });
    wrap.appendChild(rows);
  })();

  document.getElementById("subscribe-btn").addEventListener("click", function (e) { e.preventDefault(); });
  document.getElementById("year").textContent = new Date().getFullYear();

  var timer;
  window.addEventListener("resize", function () { clearTimeout(timer); timer = setTimeout(drawRoad, 80); });
  window.addEventListener("load", drawRoad);
  refresh();
})();
