/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Advanced page: the specializations as a tree, and the advanced lessons that are ready. */
(function () {
  var root = document.getElementById("adv-root"); if (!root) return;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var yr = document.getElementById("adv-year"); if (yr) yr.textContent = new Date().getFullYear();

  var SL = (typeof SPEC_LESSONS !== "undefined") ? SPEC_LESSONS : {};
  var total = 0, doneN = 0;
  Object.keys(SL).forEach(function (n) { SL[n].lessons.forEach(function (r) { total++; if (done[r[0]]) doneN++; }); });
  document.getElementById("adv-progress-text").textContent = doneN + " / " + total + " lessons";
  document.getElementById("adv-bar-fill").style.width = (total ? doneN / total * 100 : 0) + "%";

  function link() { return el("div", "adv-link"); }
  function stage(title, text) { var s = el("div", "adv-stage"); s.appendChild(el("h2", "", title)); if (text) s.appendChild(el("p", "", text)); return s; }

  root.appendChild(stage("Advanced modules", "Finish the intermediate modules first, then work through the advanced modules. Click a module to jump to its lessons."));
  root.appendChild(link());
  /* tree: start node -> three columns of three specializations (same cards as the Intermediate tree) */
  var road = el("div", "road adv-road"); var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "road-lines"); road.appendChild(svg);
  var lev = el("div", "levels"); road.appendChild(lev);
  var top = el("div", "trunk"); lev.appendChild(top);
  var start = el("div", "lv"); start.style.setProperty("--c", "#a78bfa");
  start.innerHTML = '<div class="lv-card" style="cursor:default"><span class="badge">Start</span><h2>Intermediate complete</h2></div>';
  top.appendChild(start);
  var cols = el("div", "branches"); cols.style.marginTop = "70px"; lev.appendChild(cols);
  var COLS = [["Operating System Internals", "Linux Server", "SIEM and Incident Response"],
    ["Switching Technologies", "Routing Technologies", "Network Security", "Troubleshooting and Monitoring", "High Availability"],
    ["Advanced Network Security", "Wireless Networking", "Cloud Networking", "Data Center Networking"],
    ["Network Automation and Programmability", "Service Provider and Telecom Networking", "Network Architecture and Design"]];
  var COLORS = ["#fb923c", "#60a5fa", "#a78bfa", "#2dd4bf"], modNo = 0, cardEls = [];
  function slug(n) { return "adv-" + n.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
  COLS.forEach(function (names, ci) {
    var col = el("div", "trunk"); col.style.gap = "50px"; col.style.width = "100%"; col.style.alignItems = "center"; cols.appendChild(col); var chain = [];
    names.forEach(function (name) {
      var S = SL[name]; if (!S) return; modNo++;
      var dn = 0; S.lessons.forEach(function (r) { if (done[r[0]]) dn++; });
      var lv = el("div", "lv"); lv.style.setProperty("--c", COLORS[ci]);
      lv.innerHTML = '<a class="lv-card" style="text-decoration:none"><span class="badge"></span><h2></h2><div class="lv-meta"></div><div class="lv-bar"><i></i></div></a>';
      var c = lv.querySelector(".lv-card"); c.href = "#" + slug(name);
      lv.querySelector(".badge").textContent = "Module " + modNo;
      lv.querySelector("h2").textContent = name;
      lv.querySelector(".lv-meta").textContent = S.lessons.length + " lessons \u00B7 " + dn + " / " + S.lessons.length + " done";
      lv.querySelector(".lv-bar i").style.width = (dn / S.lessons.length * 100) + "%";
      col.appendChild(lv); chain.push({ el: c, color: COLORS[ci] });
    });
    cardEls.push(chain);
  });
  root.appendChild(road);
  function draw() {
    var base = road.getBoundingClientRect(), out = "";
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    function pt(e, bottom) { var r = e.getBoundingClientRect(); return [r.left + r.width / 2 - base.left, (bottom ? r.bottom : r.top) - base.top]; }
    function line(a, b, col) { var my = (a[1] + b[1]) / 2; out += '<path stroke="' + col + '" d="M' + a[0] + " " + a[1] + (Math.abs(a[0] - b[0]) < 1 ? " L" + b[0] + " " + b[1] : " C" + a[0] + " " + my + "," + b[0] + " " + my + "," + b[0] + " " + b[1]) + '"/>'; }
    var s0 = pt(start.querySelector(".lv-card"), true);
    cardEls.forEach(function (chain) {
      if (!chain.length) return; line(s0, pt(chain[0].el, false), chain[0].color);
      for (var k = 1; k < chain.length; k++) line(pt(chain[k - 1].el, true), pt(chain[k].el, false), chain[k].color);
    });
    svg.innerHTML = out;
  }
  window.addEventListener("load", draw); window.addEventListener("resize", draw); draw();

  var names = Object.keys(SL);
  if (names.length) {
    root.appendChild(link());
    root.appendChild(stage("Lessons by module", "Open a lesson to start."));
    names.forEach(function (name) {
      var S = SL[name];
      root.appendChild(link());
      var box = el("div", "adv-mod"); box.id = slug(name); box.appendChild(el("h3", "", name));
      var list = el("div", "lvlist sp-lessons");
      S.lessons.forEach(function (r) {
        var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
        a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
        a.querySelector(".cl-ico").textContent = LBL[r[0]]; a.querySelector("b").textContent = r[1];
        a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
        var tg = (typeof lessonTags === "function") ? lessonTags(r[0]) : [["Coming soon", "t-soon"]];
        tg.forEach(function (x) { a.querySelector(".lc-tags").appendChild(el("span", "tg " + x[1], x[0])); });
        list.appendChild(a);
      });
      box.appendChild(list); root.appendChild(box);
    });
  }
})();
