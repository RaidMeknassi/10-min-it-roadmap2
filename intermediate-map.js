/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Intermediate road map in "map" style: small boxes with branch lines, lessons listed below.
   Networking -> [Windows -> Active Directory] [Linux -> Web] -> Virtualization -> Databases -> Cloud -> Cybersecurity */
(function () {
  var root = document.getElementById("int-root"); if (!root) return;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var IL = INTERMEDIATE_LEVELS;   // 0 Networking, 1 Windows, 2 Linux, 3 AD, 4 Web, 5 Virtualization, 6 Databases, 7 Cloud, 8 Cybersecurity
  var total = 0, doneN = 0;
  function stats(lv) { var d = 0; lv.lessons.forEach(function (r) { if (done[r[0]]) d++; }); return d; }
  IL.forEach(function (lv) { total += lv.lessons.length; doneN += stats(lv); });
  var pt = document.getElementById("int-progress-text"), bf = document.getElementById("int-bar-fill");
  if (pt) pt.textContent = doneN + " / " + total + " lessons"; if (bf) bf.style.width = (total ? doneN / total * 100 : 0) + "%";
  var yr = document.getElementById("int-year"); if (yr) yr.textContent = new Date().getFullYear();
  var chips = document.getElementById("int-chips");
  if (chips) IL.forEach(function (lv) { var a = el("a"); a.href = "#" + lv.id; a.style.setProperty("--c", lv.color); a.innerHTML = "<i></i>" + lv.name; chips.appendChild(a); });

  function link() { return el("div", "im-link"); }
  function node(lv, wide) {
    var n = el("a", "nt-node" + (wide ? " nt-wide" : "")); n.href = "#" + lv.id; n.style.setProperty("--c", lv.color);
    n.appendChild(el("b", "", lv.name + " · " + lv.title));
    n.appendChild(el("small", "", lv.lessons.length + " lessons · " + stats(lv) + " / " + lv.lessons.length + " done"));
    return n;
  }
  function chain(a, b) {
    var col = el("div", "nt-col");
    col.appendChild(el("span", "nt-stub nt-top")); col.appendChild(node(a)); col.appendChild(el("span", "nt-stub")); col.appendChild(node(b)); col.appendChild(el("span", "nt-stub nt-bot"));
    return col;
  }

  /* the map */
  var map = el("div", "im-map");
  map.appendChild(node(IL[0], true)); map.appendChild(link());
  var row = el("div", "nt-row nt-join nt-two"); row.style.setProperty("--n", 2);
  row.appendChild(chain(IL[1], IL[3])); row.appendChild(chain(IL[2], IL[4]));
  map.appendChild(row); map.appendChild(link());
  [5, 6, 7, 8].forEach(function (k, j) { map.appendChild(node(IL[k], true)); if (j < 3) map.appendChild(link()); });
  if (typeof itilRecCard === "function") {
    [["itilpath", "#34d399"], ["agile", "#f59e0b"]].forEach(function (c) {
      var card = itilRecCard(c[0]); if (!card) return;
      var l = link(); l.classList.add("im-dash"); l.style.setProperty("--lc", c[1]); map.appendChild(l);
      var w = el("div", "final itil-rec-node"); w.appendChild(card); map.appendChild(w);
    });
  }
  root.appendChild(map);

  /* lessons by module */
  var h = el("div", "adv-stage"); h.style.marginTop = "34px"; h.appendChild(el("h2", "", "Lessons by module")); h.appendChild(el("p", "", "Open a lesson, or open the module page for its objective.")); root.appendChild(h);
  [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(function (k) {
    var lv = IL[k]; root.appendChild(link());
    var box = el("div", "adv-mod im-mod"); box.id = lv.id; box.style.setProperty("--c", lv.color);
    var hd = el("a", "im-mod-h"); hd.href = "level.html?l=" + lv.id; hd.appendChild(el("h3", "", lv.name + " · " + lv.title)); hd.appendChild(el("span", "", "Objective and lessons →")); box.appendChild(hd);
    var sugg = (typeof langSuggestBox === "function") ? langSuggestBox(lv.id) : null; if (sugg) box.appendChild(sugg);
    var list = el("div", "lvlist sp-lessons");
    lv.lessons.forEach(function (r) {
      var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]) + "&from=" + lv.id;
      a.innerHTML = '<span class="cl-ico"><img alt="" width="40" height="40" style="border-radius:10px"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
      var im = a.querySelector("img"); im.src = "assets/lesson-icons/" + r[0] + ".png"; im.onerror = function () { var c = im.parentNode; c.textContent = LBL[r[0]]; };
      a.querySelector("b").textContent = r[1]; a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
      var tg = (typeof lessonTags === "function") ? lessonTags(r[0]) : [["Coming soon", "t-soon"]];
      tg.forEach(function (x) { a.querySelector(".lc-tags").appendChild(el("span", "tg " + x[1], x[0])); });
      list.appendChild(a);
    });
    box.appendChild(list); root.appendChild(box);
  });
})();
