/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Advanced page: the same modules as Intermediate, in the same tree; lessons come from ADVANCED_LESSONS. */
(function () {
  var root = document.getElementById("adv-root"); if (!root) return;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var yr = document.getElementById("adv-year"); if (yr) yr.textContent = new Date().getFullYear();

  var IL = (typeof INTERMEDIATE_LEVELS !== "undefined") ? INTERMEDIATE_LEVELS : [];
  var AL = (typeof ADVANCED_LESSONS !== "undefined") ? ADVANCED_LESSONS : {};   // { "im4": [[key, title], ...] } filled in later
  var SL = (typeof SPEC_LESSONS !== "undefined") ? SPEC_LESSONS : {};
  /* the advanced lessons already published, placed under the matching module */
  var ADV_MAP = {
    im4: ["Switching Technologies", "Routing Technologies", "Network Security", "Troubleshooting and Monitoring", "High Availability", "Advanced Network Security", "Wireless Networking", "Cloud Networking", "Data Center Networking", "Network Automation and Programmability", "Service Provider and Telecom Networking", "Network Architecture and Design"],
    im3: ["Linux Server", "Operating System Internals"],
    im9: ["SIEM and Incident Response"]
  };
  function sectionsOf(lv) {
    var out = (ADV_MAP[lv.id] || []).filter(function (n) { return SL[n]; }).map(function (n) { return { title: n, lessons: SL[n].lessons }; });
    if (AL[lv.id] && AL[lv.id].length) out.push({ title: "More lessons", lessons: AL[lv.id] });
    return out;
  }
  function lessonsOf(lv) { return sectionsOf(lv).reduce(function (a, x) { return a.concat(x.lessons); }, []); }
  var total = 0, doneN = 0;
  IL.forEach(function (lv) { lessonsOf(lv).forEach(function (r) { total++; if (done[r[0]]) doneN++; }); });
  document.getElementById("adv-progress-text").textContent = doneN + " / " + total + " lessons";
  document.getElementById("adv-bar-fill").style.width = (total ? doneN / total * 100 : 0) + "%";

  function link() { return el("div", "adv-link"); }
  function stage(title, text) { var s = el("div", "adv-stage"); s.appendChild(el("h2", "", title)); if (text) s.appendChild(el("p", "", text)); return s; }

  root.appendChild(stage("Advanced modules", "The same modules as the Intermediate level, one level deeper. Advanced lessons are added here as they are published."));
  root.appendChild(link());
  var road = el("div", "road adv-road"); var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "road-lines"); road.appendChild(svg);
  var lev = el("div", "levels"); road.appendChild(lev);
  var cards = [];
  function card(i, parent) {
    var lv = IL[i], L = lessonsOf(lv), dn = 0; L.forEach(function (r) { if (done[r[0]]) dn++; });
    var w = el("div", "lv"); w.style.setProperty("--c", lv.color);
    w.innerHTML = '<a class="lv-card" style="text-decoration:none"><span class="badge"></span><h2></h2><div class="lv-meta"></div><div class="lv-bar"><i></i></div></a>';
    var c = w.querySelector(".lv-card"); if (L.length) c.href = "#adv-" + lv.id; else c.style.cursor = "default";
    w.querySelector(".badge").textContent = "Module " + (i + 1);
    w.querySelector("h2").textContent = lv.title.replace(/^Intermediate /, "");
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

  var any = IL.some(function (lv) { return lessonsOf(lv).length; });
  if (any) {
    root.appendChild(link()); root.appendChild(stage("Lessons by module", "Open a lesson to start."));
    IL.forEach(function (lv) {
      var L = lessonsOf(lv); if (!L.length) return;
      root.appendChild(link());
      var box = el("div", "adv-mod"); box.id = "adv-" + lv.id; box.appendChild(el("h3", "", "Advanced · " + lv.title.replace(/^Intermediate /, "")));
      sectionsOf(lv).forEach(function (sec) {
        if (sectionsOf(lv).length > 1) box.appendChild(el("h4", "adv-sec", sec.title));
        var list = el("div", "lvlist sp-lessons");
        sec.lessons.forEach(function (r) {
          var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
          a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">\u2713</span>';
          a.querySelector(".cl-ico").textContent = (typeof LBL !== "undefined" && LBL[r[0]]) || r[0]; a.querySelector("b").textContent = r[1];
          a.querySelector("small").textContent = "Lesson " + ((typeof LBL !== "undefined" && LBL[r[0]]) || "") + " \u00B7 10 min";
          var tg = (typeof lessonTags === "function") ? lessonTags(r[0]) : [];
          tg.forEach(function (x) { a.querySelector(".lc-tags").appendChild(el("span", "tg " + x[1], x[0])); });
          list.appendChild(a);
        });
        box.appendChild(list);
      });
      root.appendChild(box);
    });
  }
})();
