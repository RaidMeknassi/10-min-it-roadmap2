/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Advanced page: the same modules as Intermediate, in the same tree; lessons come from ADVANCED_LESSONS. */
(function () {
  var root = document.getElementById("adv-root"); if (!root) return;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var yr = document.getElementById("adv-year"); if (yr) yr.textContent = new Date().getFullYear();

  var IL = (typeof ADVANCED_LEVELS !== "undefined") ? ADVANCED_LEVELS : [];
  function lessonsOf(lv) { return lv.lessons || []; }
  var total = 0, doneN = 0;
  IL.forEach(function (lv) { lessonsOf(lv).forEach(function (r) { total++; if (done[r[0]]) doneN++; }); });
  document.getElementById("adv-progress-text").textContent = doneN + " / " + total + " lessons";
  document.getElementById("adv-bar-fill").style.width = (total ? doneN / total * 100 : 0) + "%";

  function link() { return el("div", "adv-link"); }
  function stage(title, text) { var s = el("div", "adv-stage"); s.appendChild(el("h2", "", title)); if (text) s.appendChild(el("p", "", text)); return s; }

  root.appendChild(stage("Advanced modules", "The same modules as the Intermediate level, one level deeper. Click a module to open its lessons."));
  root.appendChild(link());
  var road = el("div", "road adv-road"); var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "road-lines"); road.appendChild(svg);
  var lev = el("div", "levels"); road.appendChild(lev);
  var cards = [];
  function card(i, parent) {
    var lv = IL[i], L = lessonsOf(lv), dn = 0; L.forEach(function (r) { if (done[r[0]]) dn++; });
    var w = el("div", "lv"); w.style.setProperty("--c", lv.color);
    w.innerHTML = '<a class="lv-card" style="text-decoration:none"><span class="badge"></span><h2></h2><div class="lv-meta"></div><div class="lv-bar"><i></i></div></a>';
    var c = w.querySelector(".lv-card"); c.href = "level.html?l=" + lv.id;
    w.querySelector(".badge").textContent = "Advanced " + (i + 1);
    w.querySelector("h2").textContent = lv.title;
    w.querySelector(".lv-meta").textContent = L.length ? L.length + " lessons \u00B7 " + dn + " / " + L.length + " done" : "Lessons coming soon";
    w.querySelector(".lv-bar i").style.width = (L.length ? dn / L.length * 100 : 0) + "%";
    parent.appendChild(w); cards[i] = { el: c, color: lv.color }; return w;
  }
  function single(i) { var d = el("div", "final"); d.style.marginTop = "56px"; lev.appendChild(d); card(i, d); }
  var t0 = el("div", "trunk"); lev.appendChild(t0); card(0, t0);
  var two = el("div", "branches"); two.style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))"; two.style.maxWidth = "640px"; two.style.margin = "70px auto 0"; lev.appendChild(two);
  [[1, 3], [2, 4]].forEach(function (pair) {
    var col = el("div", "trunk"); col.style.gap = "50px"; col.style.width = "100%"; two.appendChild(col); pair.forEach(function (i) { card(i, col); });
  });
  [5, 6, 7, 8].forEach(single);
  root.appendChild(road);
  function draw() {
    var base = road.getBoundingClientRect(), out = "";
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    function pt(i, bottom) { var r = cards[i].el.getBoundingClientRect(); return [r.left + r.width / 2 - base.left, (bottom ? r.bottom : r.top) - base.top]; }
    function ln(i, j) { var a = pt(i, true), b = pt(j, false), my = (a[1] + b[1]) / 2;
      out += '<path stroke="' + cards[j].color + '" d="M' + a[0] + " " + a[1] + (Math.abs(a[0] - b[0]) < 1 ? " L" + b[0] + " " + b[1] : " C" + a[0] + " " + my + "," + b[0] + " " + my + "," + b[0] + " " + b[1]) + '"/>'; }
    [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [5, 6], [6, 7], [7, 8]].forEach(function (e) { ln(e[0], e[1]); });
    svg.innerHTML = out;
  }
  window.addEventListener("load", draw); window.addEventListener("resize", draw); draw();

})();
