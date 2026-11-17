/* int-app.js — Intermediate level roadmap tree renderer
   Layout (11 modules):
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
  mapEl.appendChild(mid1);
  mapEl.appendChild(br2);
  mapEl.appendChild(mid2);
  mapEl.appendChild(br3);
  // recommended ITIL certification at the end of the tree
  var recEl = document.createElement("div"); recEl.className = "final itil-rec-node";
  var recCard = (typeof itilRecCard === "function") ? itilRecCard("intermediate") : null;
  if (recCard) { recEl.appendChild(recCard); mapEl.appendChild(recEl); }

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

    var card = lv.querySelector(".lv-card");
    card.addEventListener("click", function (e) {
      e.stopPropagation();
      location.href = "level.html?l=" + info.id;
    });

    var en = {
      info: info, lv: lv, card: card,
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
      ic.innerHTML = iconSVG(n, info.color);
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        location.href = "lesson.html?n=" + encodeURIComponent(n);
      });
      list.appendChild(b);
      en.items.push({ el: b, n: n });
    });
    return en;
  }

  /* ---- build tree ---- */
  //  Trunk: M1, M2, M3
  makeLevel(INTERMEDIATE_LEVELS[0], trunk,  false); // entries[0]
  makeLevel(INTERMEDIATE_LEVELS[1], trunk,  false); // entries[1]
  makeLevel(INTERMEDIATE_LEVELS[2], trunk,  false); // entries[2]
  //  Branches 1: M4(flip), M5
  makeLevel(INTERMEDIATE_LEVELS[3], br1,    true);  // entries[3]
  makeLevel(INTERMEDIATE_LEVELS[4], br1,    false); // entries[4]
  //  Single: M6 Python
  makeLevel(INTERMEDIATE_LEVELS[5], mid1,   false); // entries[5]
  //  Branches 2: M7(flip), M8
  makeLevel(INTERMEDIATE_LEVELS[6], br2,    true);  // entries[6]
  makeLevel(INTERMEDIATE_LEVELS[7], br2,    false); // entries[7]
  //  Single: M9 Cybersec
  makeLevel(INTERMEDIATE_LEVELS[8], mid2,   false); // entries[8]
  //  Branches 3: M10(flip), M11
  makeLevel(INTERMEDIATE_LEVELS[9],  br3,   true);  // entries[9]
  makeLevel(INTERMEDIATE_LEVELS[10], br3,   false); // entries[10]

  /* ---- connecting lines ---- */
  function drawRoad() {
    if (!svg || !road || entries.length < 11) return;
    var base = road.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var stacked = window.innerWidth <= 720;
    var out = "";

    function link(i, j) {
      var a = entries[i].card.getBoundingClientRect();
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

    // trunk
    link(0, 1); link(1, 2);
    if (stacked) {
      // straight chain on mobile
      link(2, 3); link(3, 4); link(4, 5);
      link(5, 6); link(6, 7); link(7, 8);
      link(8, 9); link(9, 10);
    } else {
      // desktop topology: fork → converge × 3
      link(2, 3); link(2, 4);        // fork to M4 & M5
      link(3, 5); link(4, 5);        // converge at M6
      link(5, 6); link(5, 7);        // fork to M7 & M8
      link(6, 8); link(7, 8);        // converge at M9
      link(8, 9); link(8, 10);       // final fork to M10 & M11
    }
    if (recCard) {
      var rc = recCard.getBoundingClientRect();
      function dash(i) {
        var a = entries[i].card.getBoundingClientRect();
        var x1 = a.left + a.width / 2 - base.left, y1 = a.bottom - base.top, x2 = rc.left + rc.width / 2 - base.left, y2 = rc.top - base.top, my = (y1 + y2) / 2;
        out += '<path stroke="#34d399" stroke-dasharray="6 5" opacity="0.7" d="M' + x1 + " " + y1 + " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2 + '"/>';
      }
      if (stacked) dash(10); else { dash(9); dash(10); }
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
