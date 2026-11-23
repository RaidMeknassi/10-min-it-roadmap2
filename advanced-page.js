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

  root.appendChild(stage("Choose your specialization", "Finish the beginner levels and the intermediate modules, then go deep in the area you like most."));
  root.appendChild(link());
  var grid = el("div", "adv-grid");
  PATHS.forEach(function (p, i) {
    var ready = 0, dn = 0;
    (p.groups ? p.groups.reduce(function (a, g) { return a.concat(g.items); }, []) : p.items).forEach(function (t) {
      if (SL[t]) SL[t].lessons.forEach(function (r) { ready++; if (done[r[0]]) dn++; });
    });
    var topics = p.groups ? p.groups.reduce(function (a, g) { return a + g.items.length; }, 0) : p.items.length;
    var a = el("a", "adv-card"); a.href = "spec.html?s=" + i; a.style.setProperty("--c", p.color);
    a.appendChild(el("span", "adv-badge", "Specialization " + (i + 1)));
    a.appendChild(el("h3", "", p.title || p.name));
    a.appendChild(el("p", "adv-meta", topics + " paths" + (ready ? " · " + dn + " / " + ready + " lessons done" : " · coming soon")));
    var bar = el("div", "adv-bar"); var bi = el("i"); bi.style.width = (ready ? dn / ready * 100 : 0) + "%"; bar.appendChild(bi); a.appendChild(bar);
    grid.appendChild(a);
  });
  root.appendChild(grid);

  var names = Object.keys(SL);
  if (names.length) {
    root.appendChild(link());
    root.appendChild(stage("Advanced lessons ready now", "These advanced lessons are already published."));
    names.forEach(function (name) {
      var S = SL[name];
      root.appendChild(link());
      var box = el("div", "adv-mod"); box.appendChild(el("h3", "", name));
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
