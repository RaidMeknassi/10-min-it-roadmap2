(function () {
  var road = document.getElementById("road");
  var svg = document.getElementById("road-lines");
  var levelsEl = document.getElementById("map");
  var overlay = document.getElementById("overlay");
  var current = null;
  var LEVEL_MODE = false;

  // ----- saved progress (stays in this browser only) -----
  var KEY = "itroadmap-v2-done";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var entries = [];   // 0..5 = Levels 0-5, 6 = Level 6 (paths)
  var total = 0;

  var LEVEL6 = { id: "l6", desc: "Choose the specialization you want to grow into.", name: "Level 6", title: "Advanced IT Specializations", color: "#f472b6" };

  // ----- level chips (jump links) -----
  var chips = document.getElementById("chips");
  if (chips) LEVELS.concat([LEVEL6, LEVEL7, LEVEL8]).forEach(function (lv) {
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
  var trackEl = document.createElement("div");  trackEl.className = "final track";
  if (levelsEl) { levelsEl.appendChild(trunk); levelsEl.appendChild(branches); levelsEl.appendChild(finalEl); levelsEl.appendChild(trackEl); }

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
        '<span class="badge"></span><h2></h2><p class="lv-desc"></p><div class="lv-meta"></div>' +
        '<div class="lv-bar"><i></i></div>' +
      '</button>' +
      '<div class="flyout"><div class="flyout-card"><div class="fl-head"></div><div class="fl-list"></div></div></div>';
    lv.querySelector(".badge").textContent = info.name;
    var dEl = lv.querySelector(".lv-desc"); if (info.desc) dEl.textContent = info.desc; else dEl.remove();
    lv.querySelector("h2").textContent = info.title;
    lv.querySelector(".fl-head").textContent = info.name + " · " + info.title;
    container.appendChild(lv);

    var card = lv.querySelector(".lv-card");
    card.addEventListener("click", function (e) {
      e.stopPropagation();
      location.href = info.href || ("level.html?l=" + info.id);
    });

    var en = { info: info, lv: lv, card: card, metaEl: lv.querySelector(".lv-meta"),
               barEl: lv.querySelector(".lv-bar i"), barWrap: lv.querySelector(".lv-bar"), items: [] };
    entries.push(en);
    return en;
  }

  // Levels 0-5: lessons
  if (!LEVEL_MODE) LEVELS.forEach(function (lv, li) {
    var en = makeLevel(lv, li < 4 ? trunk : branches, li === 6);
    var list = en.lv.querySelector(".fl-list");
    if (lv.jobReady) { var fl = document.createElement("div"); fl.className = "job-flag"; fl.innerHTML = '<span class="jf-text"></span><span class="jf-arrow" aria-hidden="true">\u2192</span>'; fl.querySelector(".jf-text").textContent = lv.jobReady; en.lv.appendChild(fl); }
    lv.lessons.forEach(function (row) {
      var lesson = { n: row[0], title: row[1], lab: !!row[2], level: lv };
      total++;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "fl-item";
      b.innerHTML = '<span class="ico"></span><span class="fl-num"></span><span class="fl-title"></span>' + (lesson.lab ? '<span class="fl-lock" title="Has a lab">🔒</span>' : "");
      b.querySelector(".fl-num").textContent = lesson.n;
      var ic = b.querySelector(".ico"); ic.style.setProperty("--c", lv.color);
      ic.innerHTML = iconSVG(lesson.n, lv.color);
      b.querySelector(".fl-title").textContent = lesson.title;
      b.addEventListener("click", function (e) { e.stopPropagation(); location.href = "lesson.html?n=" + encodeURIComponent(lesson.n); });
      list.appendChild(b);
      en.items.push({ el: b, lesson: lesson });
    });
  });

  // Level 6: specialization paths
  if (!LEVEL_MODE) (function () {
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
      b.addEventListener("click", function (e) { e.stopPropagation(); location.href = "lesson.html?p=" + PATHS.indexOf(p); });
      list.appendChild(b);
    });
  })();

  // Level 6 splits into one separate card per specialization. Cybersecurity continues down into Levels 7 and 8.
  if (!LEVEL_MODE) (function () {
    function spec(p, i, flip) {
      var info = { id: "s" + i, desc: (i === 0 ? "Blue team, red team and security operations." : "Optional path: " + p.items.slice(0, 2).join(", ") + " and more."), name: "Specialization", title: p.name, color: p.color, href: "lesson.html?p=" + i };
      var en = makeLevel(info, trackEl, flip), list = en.lv.querySelector(".fl-list");
      en.barWrap.style.display = "none";
      en.lv.classList.add("spec");
      p.items.forEach(function (t) {
        var b = document.createElement("button"); b.type = "button"; b.className = "fl-item"; b.style.setProperty("--c", p.color);
        b.innerHTML = '<span class="fl-dot"></span><span class="fl-title"></span>'; b.querySelector(".fl-title").textContent = t;
        b.addEventListener("click", function (e) { e.stopPropagation(); location.href = "lesson.html?p=" + i; });
        list.appendChild(b);
      });
      en.metaEl.textContent = p.items.length + " topics \u00B7 coming soon";
      return en;
    }
    function track(lvInfo, row) {
      var groups = TRACKS[lvInfo.id], en = makeLevel(lvInfo, trackEl, false), list = en.lv.querySelector(".fl-list"), count = 0;
      en.barWrap.style.display = "none"; en.lv.style.gridColumn = "1"; en.lv.style.gridRow = String(row);
      groups.forEach(function (g, gi) {
        var h = document.createElement("div"); h.className = "fl-group"; h.style.setProperty("--c", g.color); h.textContent = g.name; list.appendChild(h);
        g.paths.forEach(function (pt, pi) {
          count++;
          var b = document.createElement("button"); b.type = "button"; b.className = "fl-item"; b.style.setProperty("--c", g.color);
          b.innerHTML = '<span class="fl-dot"></span><span class="fl-title"></span>'; b.querySelector(".fl-title").textContent = pt.name;
          b.addEventListener("click", function (e) { e.stopPropagation(); location.href = "lesson.html?t=" + lvInfo.id + "&g=" + gi + "&p=" + pi; });
          list.appendChild(b);
        });
      });
      en.metaEl.textContent = groups.length + " groups \u00B7 " + count + " paths";
    }
    // entries: 7 = Cybersecurity, 8 = Level 7, 9 = Level 8, 10..16 = the other specializations
    var cy = spec(PATHS[0], 0, false); cy.lv.style.gridColumn = "1"; cy.lv.style.gridRow = "1";
    cy.metaEl.textContent = "Continues with Levels 7 and 8 \u2193";
    track(LEVEL7, 2); track(LEVEL8, 3);
    PATHS.slice(1).forEach(function (p, k) {
      var en = spec(p, k + 1, k % 3 !== 0 || false);
      en.lv.style.gridColumn = String(2 + (k % 3)); en.lv.style.gridRow = String(1 + Math.floor(k / 3));
      if (k % 3 === 0) en.lv.classList.remove("flip");
      if (k % 3 === 2) en.lv.classList.add("flip");
    });
  })();

  // ----- connecting lines between the level nodes -----
  function drawRoad() {
    if (!svg || !road || entries.length < 18) return;
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
    link(2, 3, 3);
    if (stacked) {
      link(3, 4, 4); link(4, 5, 5); link(5, 6, 6); link(6, 7, 7);
      for (var q = 7; q < 17; q++) link(q, q + 1, q + 1);
    } else {
      link(3, 4, 4); link(3, 5, 5); link(3, 6, 6);
      link(4, 7, 4); link(5, 7, 5); link(6, 7, 6);
      link(7, 8, 8); link(8, 9, 9); link(9, 10, 10);
      for (var q = 11; q < 14; q++) link(7, q, q);
      for (var q2 = 14; q2 < 18; q2++) link(q2 - 3, q2, q2);
    }
    svg.innerHTML = out;
  }

  // ----- progress -----
  function refresh() {
    var n = 0;
    entries.forEach(function (en, i) {
      if (i > 6 || !en.items.length) return;
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
    var pt = document.getElementById("progress-text"), bf = document.getElementById("bar-fill");
    if (pt && total) pt.textContent = n + " / " + total + " lessons";
    if (bf && total) bf.style.width = (n / total * 100) + "%";
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
    var pt = document.getElementById("p-title");
    pt.innerHTML = '<span class="ico ico-big"></span><span class="pt-text"></span>';
    pt.querySelector(".ico").style.setProperty("--c", l.level.color);
    pt.querySelector(".ico").innerHTML = iconSVG(l.n, l.level.color);
    pt.querySelector(".pt-text").textContent = l.title;

    var v = document.getElementById("p-video");
    v.innerHTML = ""; v.classList.remove("lab-view");
    var oldA = document.querySelector(".open-full"); if (oldA) oldA.remove();
    var page = (typeof LESSON_PAGES !== "undefined") ? LESSON_PAGES[l.n] : "";
    var id = (typeof VIDEOS !== "undefined") ? VIDEOS[l.n] : "";
    document.querySelector(".panel").classList.toggle("wide", !!page);
    if (page && window.innerWidth <= 720) {
      v.innerHTML = '<a class="launch" href="' + page + '" target="_blank" rel="noopener"><span>\u25B6</span>Open the lesson<small>Opens full screen. Turn your phone sideways.</small></a>';
    } else if (page) {
      var f = document.createElement("iframe");
      f.src = page;
      f.title = l.title;
      f.allow = "autoplay; fullscreen";
      f.allowFullscreen = true;
      v.appendChild(f);
      var a = document.createElement("a");
      a.className = "open-full";
      a.href = page; a.target = "_blank"; a.rel = "noopener";
      a.textContent = "Open full screen \u2197";
      v.parentNode.insertBefore(a, v.nextSibling);
    } else if (id) {
      var f2 = document.createElement("iframe");
      f2.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
      f2.title = l.title;
      f2.loading = "lazy";
      f2.allow = "accelerometer; encrypted-media; picture-in-picture";
      f2.allowFullscreen = true;
      v.appendChild(f2);
    } else {
      v.innerHTML = '<div class="soon">Lesson coming soon</div>';
    }

    var qb = document.getElementById("p-quizbtn"), qbox = document.getElementById("p-quiz");
    qbox.hidden = true; qbox.innerHTML = "";
    var hasQuiz = (typeof QUIZZES !== "undefined") && QUIZZES[l.n];
    qb.hidden = !hasQuiz;
    qb.onclick = function () {
      qb.hidden = true; qbox.hidden = false;
      renderQuiz(l.n, qbox, function (s, t) { try { var k = JSON.parse(localStorage.getItem("itroadmap-v2-quiz") || "{}"); if (!k[l.n] || s > k[l.n]) k[l.n] = s; localStorage.setItem("itroadmap-v2-quiz", JSON.stringify(k)); } catch (e) {} });
      qbox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    var lab = (typeof LABS !== "undefined") ? LABS[l.n] : null;
    document.getElementById("p-lab").innerHTML = lab
      ? "🔒 <b>Lab: " + lab.title + "</b><br>" + lab.text + "<br><small>Labs are for subscribers (coming soon).</small>"
      : l.lab ? "🔒 <b>Lab available.</b> Practise this lesson hands-on. Labs are for subscribers (coming soon)."
      : "This lesson has no lab. Just watch and learn.";
    var labPage = (typeof LAB_PAGES !== "undefined") ? LAB_PAGES[l.n] : "";
    if (labPage && lab) {
      var lb = document.createElement("button");
      lb.type = "button"; lb.className = "btn btn-full lab-start"; lb.textContent = "\u25B6 Start the lab";
      var mobile = window.innerWidth <= 720, inLab = false;
      lb.onclick = function () {
        if (mobile) { window.open(labPage, "_blank", "noopener"); return; }
        var vv = document.getElementById("p-video"), oa = document.querySelector(".open-full");
        inLab = !inLab; vv.innerHTML = "";
        var ff = document.createElement("iframe");
        ff.src = inLab ? labPage : (page || "");
        ff.title = inLab ? lab.title : l.title;
        ff.allow = "autoplay; fullscreen"; ff.allowFullscreen = true;
        if (inLab || page) vv.appendChild(ff);
        vv.classList.toggle("lab-view", inLab);
        if (oa) oa.href = inLab ? labPage : page;
        lb.textContent = inLab ? "\u2190 Back to the lesson" : "\u25B6 Start the lab";
        document.querySelector(".panel").classList.add("wide");
        vv.scrollIntoView({ behavior: "smooth", block: "nearest" });
      };
      document.getElementById("p-lab").appendChild(document.createElement("br"));
      document.getElementById("p-lab").appendChild(lb);
    }
    document.getElementById("p-done").textContent = done[l.n] ? "Mark as not done" : "Mark as done";
    showPanel(true);
  }

  function openPath(p) {
    current = null;
    closeAll();
    var tr = document.getElementById("p-track");
    tr.textContent = "Level 6 · Specialization path";
    tr.style.color = p.color;
    document.querySelector(".panel").classList.remove("wide");
    var oa = document.querySelector(".open-full"); if (oa) oa.remove();
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

  function closePanel() { overlay.hidden = true; document.getElementById("p-video").innerHTML = ""; document.getElementById("p-video").classList.remove("lab-view"); document.getElementById("p-quiz").innerHTML = ""; var a = document.querySelector(".open-full"); if (a) a.remove(); }

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
  if (document.getElementById("certs-grid")) (function () {
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

  var sb = document.getElementById("subscribe-btn"); if (sb) sb.addEventListener("click", function (e) { e.preventDefault(); });
  var yr = document.getElementById("year"); if (yr) yr.textContent = new Date().getFullYear();

  // coming back with the Back button must not leave a lesson list open
  window.addEventListener("pageshow", function () { var a = document.activeElement; if (a && a.blur && a !== document.body) a.blur(); closeAll(); });
  var timer;
  window.addEventListener("resize", function () { clearTimeout(timer); timer = setTimeout(drawRoad, 80); });
  window.addEventListener("load", drawRoad);
  refresh();
})();
