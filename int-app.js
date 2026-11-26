/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* int-app.js — Intermediate level roadmap tree renderer
   Layout (10 modules; Python moved to the Languages page):
     trunk    : M1 (OS), M2 (Windows), M3 (Linux)
     branches : M4 (Networking), M5 (Active Directory)
     single   : M6 (Python)
     branches : M7 (Databases), M8 (Web)
     single   : M9 (Cybersecurity)
     branches : M10 (Virtualization), M11 (Cloud)
   entries[0..10] = M1..M11, drawRoad mirrors beginner 3-fork topology. */
(function () {
  var road  = document.getElementById("int-road");
  var svg   = document.getElementById("int-road-lines");
  var mapEl = document.getElementById("int-map");
  if (!mapEl) return;

  var KEY  = "itroadmap-v2-done";
  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var entries = [];
  var total   = 0;

  /* ---- jump chips ---- */
  var chips = document.getElementById("int-chips");
  if (chips) INTERMEDIATE_LEVELS.forEach(function (lv) {
    var a = document.createElement("a");
    a.href = "#" + lv.id;
    a.style.setProperty("--c", lv.color);
    a.innerHTML = "<i></i>" + lv.name;
    chips.appendChild(a);
  });

  /* ---- containers ---- */
  var trunk  = document.createElement("div"); trunk.className  = "trunk";
  var br1    = document.createElement("div"); br1.className    = "branches";
  var mid1   = document.createElement("div"); mid1.className   = "final";      // M6 Python
  var br2    = document.createElement("div"); br2.className    = "branches";
  var mid2   = document.createElement("div"); mid2.className   = "final";      // M9 Cybersec
  var br3    = document.createElement("div"); br3.className    = "branches";   // M10 + M11
  mapEl.appendChild(trunk);
  mapEl.appendChild(br1);
  mapEl.appendChild(br2);
  mapEl.appendChild(mid2);
  var mid3 = document.createElement("div"); mid3.className = "final"; mapEl.appendChild(mid3);
  var mid4 = document.createElement("div"); mid4.className = "final"; mapEl.appendChild(mid4);
  var mid5 = document.createElement("div"); mid5.className = "final"; mapEl.appendChild(mid5);
  // recommended ITIL certification at the end of the tree
  var recEl = document.createElement("div"); recEl.className = "final itil-rec-node";
  var recCard = (typeof itilRecCard === "function") ? itilRecCard("itilpath") : null;
  var agileCard = (typeof itilRecCard === "function") ? itilRecCard("agile") : null;
  var agileEl = document.createElement("div"); agileEl.className = "final itil-rec-node";
  if (recCard) { recEl.appendChild(recCard); mapEl.appendChild(recEl); agileEl.appendChild(agileCard); mapEl.appendChild(agileEl); }

  /* ---- makeLevel: create a level card with flyout lesson list ---- */
  function makeLevel(info, container, flip) {
    var lv = document.createElement("div");
    lv.className = "lv" + (flip ? " flip" : "");
    lv.id = info.id;
    lv.style.setProperty("--c", info.color);
    lv.innerHTML =
      '<button type="button" class="lv-card" aria-haspopup="true">' +
        '<span class="badge"></span>' +
        '<img class="im-icon" src="assets/int-icons/' + info.id + '.png" alt="" aria-hidden="true" width="72" height="72">' +
        '<h2></h2><p class="lv-desc"></p><div class="lv-meta"></div>' +
        '<div class="lv-bar"><i></i></div>' +
      '</button>' +
      '<div class="flyout"><div class="flyout-card"><div class="fl-head"></div><div class="fl-list"></div></div></div>';
    lv.querySelector(".badge").textContent    = info.name;
    lv.querySelector("h2").textContent        = info.title;
    lv.querySelector(".fl-head").textContent  = info.name + " · " + info.title;
    var dEl = lv.querySelector(".lv-desc");
    if (info.desc) dEl.textContent = info.desc; else dEl.remove();
    container.appendChild(lv);
    var sugg = (typeof langSuggestBox === "function" && info.id !== "im4") ? langSuggestBox(info.id) : null;   // Networking: no languages box on the tree
    if (sugg) lv.insertBefore(sugg, lv.querySelector(".flyout"));
    var tb = (typeof levelToolsBox === "function") ? levelToolsBox(info.id) : null;   // recommended tool(s) under the module
    if (tb) { var tt = document.createElement("div"); tt.className = "lang-sugg-t"; tt.textContent = "Recommended tools to learn"; tb.insertBefore(tt, tb.firstChild); tb.querySelectorAll(".tools-group-title").forEach(function (x) { x.remove(); }); tb.classList.add("ct-rec"); lv.insertBefore(tb, lv.querySelector(".flyout")); }
    var cn = (typeof comptiaRecNode === "function") ? comptiaRecNode(info.id) : null;   // recommended CompTIA certificate(s)
    if (cn) lv.insertBefore(cn, lv.querySelector(".flyout"));

    var card = lv.querySelector(".lv-card");
    card.addEventListener("click", function (e) {
      e.stopPropagation();
      location.href = "level.html?l=" + info.id;
    });

    var en = {
      info: info, lv: lv, card: card, sugg: lv.querySelector(".ct-rec") || sugg,
      metaEl: lv.querySelector(".lv-meta"),
      barEl:  lv.querySelector(".lv-bar i"),
      barWrap: lv.querySelector(".lv-bar"),
      items: []
    };
    entries.push(en);

    var list = lv.querySelector(".fl-list");
    info.lessons.forEach(function (row) {
      var n = row[0];
      total++;
      var b = document.createElement("button");
      b.type = "button"; b.className = "fl-item";
      b.innerHTML = '<span class="ico"></span><span class="fl-num"></span><span class="fl-title"></span>';
      b.querySelector(".fl-num").textContent   = LBL[n] || n;
      b.querySelector(".fl-title").textContent = row[1];
      var ic = b.querySelector(".ico"); ic.style.setProperty("--c", info.color);
      ic.innerHTML = '<img src="assets/lesson-icons/' + n + '.png" alt="" width="28" height="28" style="border-radius:8px;vertical-align:middle;">';
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        location.href = "lesson.html?n=" + encodeURIComponent(n);
      });
      list.appendChild(b);
      en.items.push({ el: b, n: n });
    });
    return en;
  }

  /* ---- build tree ----
     Networking -> split [Windows -> Active Directory] and [Linux -> Web]
     -> join at Virtualization -> Databases -> Cloud -> Cybersecurity */
  makeLevel(INTERMEDIATE_LEVELS[0], trunk, false); // 0 Networking
  makeLevel(INTERMEDIATE_LEVELS[1], br1,   true);  // 1 Windows
  makeLevel(INTERMEDIATE_LEVELS[2], br1,   false); // 2 Linux
  makeLevel(INTERMEDIATE_LEVELS[3], br2,   true);  // 3 Active Directory
  makeLevel(INTERMEDIATE_LEVELS[4], br2,   false); // 4 Web
  makeLevel(INTERMEDIATE_LEVELS[5], mid2,  false); // 5 Virtualization
  makeLevel(INTERMEDIATE_LEVELS[6], mid3,  false); // 6 Databases
  makeLevel(INTERMEDIATE_LEVELS[7], mid4,  false); // 7 Cloud
  makeLevel(INTERMEDIATE_LEVELS[8], mid5,  false); // 8 Cybersecurity

  /* ---- connecting lines ---- */
  function drawRoad() {
    if (!svg || !road || entries.length < 9) return;
    var base = road.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var stacked = window.innerWidth <= 720;
    var out = "";

    function link(i, j) {
      var a = (entries[i].sugg || entries[i].card).getBoundingClientRect();
      var b = entries[j].card.getBoundingClientRect();
      var x1 = a.left + a.width / 2 - base.left, y1 = a.bottom - base.top;
      var x2 = b.left + b.width / 2 - base.left, y2 = b.top  - base.top;
      var my = (y1 + y2) / 2;
      var d  = Math.abs(x1 - x2) < 1
        ? "M" + x1 + " " + y1 + " L" + x2 + " " + y2
        : "M" + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2;
      var col = entries[j].info.color;
      var cls = entries[i].complete ? "done" : "";
      out += '<path class="' + cls + '" stroke="' + col + '" d="' + d + '"/>';
    }

    if (stacked) {
      for (var k = 0; k < 8; k++) link(k, k + 1);   // straight chain on phones
    } else {
      link(0, 1); link(0, 2);        // Networking splits to Windows & Linux
      link(1, 3); link(2, 4);        // Windows -> AD, Linux -> Web
      link(3, 5); link(4, 5);        // join at Virtualization
      link(5, 6); link(6, 7); link(7, 8); // Databases -> Cloud -> Cybersecurity
    }
    if (recCard) {
      var rc = recCard.getBoundingClientRect();
      function dash(i) {
        var a = (entries[i].sugg || entries[i].card).getBoundingClientRect();
        var x1 = a.left + a.width / 2 - base.left, y1 = a.bottom - base.top, x2 = rc.left + rc.width / 2 - base.left, y2 = rc.top - base.top, my = (y1 + y2) / 2;
        out += '<path stroke="#34d399" stroke-dasharray="6 5" opacity="0.7" d="M' + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2 + '"/>';
      }
      dash(8);
      var ac = agileCard.getBoundingClientRect();
      out += '<path stroke="#f59e0b" stroke-dasharray="6 5" opacity="0.7" d="M' + (rc.left + rc.width / 2 - base.left) + " " + (rc.bottom - base.top) + " L" + (ac.left + ac.width / 2 - base.left) + " " + (ac.top - base.top) + '"/>';
    }
    svg.innerHTML = out;
  }

  /* ---- progress ---- */
  function refresh() {
    var n = 0;
    entries.forEach(function (en) {
      var c = 0;
      en.items.forEach(function (it) {
        var d = !!done[it.n];
        if (d) { n++; c++; }
        it.el.classList.toggle("done", d);
      });
      en.complete = (c === en.items.length && en.items.length > 0);
      en.metaEl.textContent = en.items.length + " lessons · " + c + " / " + en.items.length + " done";
      en.barEl.style.width  = en.items.length ? (c / en.items.length * 100) + "%" : "0%";
    });
    var pt = document.getElementById("int-progress-text");
    var bf = document.getElementById("int-bar-fill");
    if (pt && total) pt.textContent = n + " / " + total + " lessons";
    if (bf && total) bf.style.width = (n / total * 100) + "%";
    drawRoad();
  }

  /* ---- close open flyouts on outside click ---- */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lv")) {
      entries.forEach(function (en) { en.lv.classList.remove("open"); });
      drawRoad();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      entries.forEach(function (en) { en.lv.classList.remove("open"); });
      drawRoad();
    }
  });
  window.addEventListener("pageshow", function () {
    entries.forEach(function (en) { en.lv.classList.remove("open"); });
  });
  var timer;
  window.addEventListener("resize", function () { clearTimeout(timer); timer = setTimeout(drawRoad, 80); });
  window.addEventListener("load", drawRoad);

  refresh();

  var yr = document.getElementById("int-year"); if (yr) yr.textContent = new Date().getFullYear();
})();
