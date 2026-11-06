/* Level page: every lesson of the level as a card. A card opens that lesson on its own page. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var ALL = LEVELS.concat([{ id: "l6", name: "Level 6", title: "Advanced IT Specializations", color: "#f472b6" }]);
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var idx = -1, id = new URLSearchParams(location.search).get("l");
  ALL.forEach(function (x, i) { if (x.id === id) idx = i; });
  if (idx < 0) { location.replace("index.html"); return; }
  var lv = ALL[idx], isPaths = lv.id === "l6";
  document.title = lv.name + " · " + lv.title + " · 10-Minute IT Roadmap";
  document.body.style.setProperty("--c", lv.color);
  $("lv-badge").textContent = lv.name; $("lv-title").textContent = lv.title;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function tag(t, cls) { return el("span", "tg " + cls, t); }
  var list = $("level-list");

  if (isPaths) {
    $("lv-bar").style.display = "none"; $("lv-meta").textContent = PATHS.length + " paths · choose one";
    PATHS.forEach(function (p, i) {
      var a = el("a", "lc"); a.href = "lesson.html?p=" + i; a.style.setProperty("--c", p.color);
      a.innerHTML = '<span class="lc-dot"></span><span class="lc-body"><b></b><small></small></span>';
      a.querySelector("b").textContent = p.name; a.querySelector("small").textContent = p.items.length + " topics";
      list.appendChild(a);
    });
  } else {
    var c = 0;
    lv.lessons.forEach(function (row) {
      var n = row[0], a = el("a", "lc" + (done[n] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(n);
      if (done[n]) c++;
      a.innerHTML = '<span class="ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
      a.querySelector(".ico").innerHTML = iconSVG(n, lv.color);
      a.querySelector("b").textContent = row[1]; a.querySelector("small").textContent = "Lesson " + n + " · 10 min";
      var tg = a.querySelector(".lc-tags"), has = LESSON_PAGES[n];
      if (has) tg.appendChild(tag("Lesson", "t-les"));
      if (QUIZZES[n]) tg.appendChild(tag("Quiz", "t-quiz"));
      if (LAB_PAGES[n]) tg.appendChild(tag("Lab", "t-lab")); else if (row[2]) tg.appendChild(tag("🔒 Lab", "t-lock"));
      if (!has) tg.appendChild(tag("Coming soon", "t-soon"));
      list.appendChild(a);
    });
    $("lv-meta").textContent = lv.lessons.length + " lessons · " + c + " / " + lv.lessons.length + " done";
    document.querySelector("#lv-bar i").style.width = (c / lv.lessons.length * 100) + "%";
  }
  var nav = $("lv-nav"), prev = ALL[idx - 1], next = ALL[idx + 1];
  function nl(x, txt, cls) { var a = el("a", "lv-nl " + cls, txt); a.href = "level.html?l=" + x.id; a.style.setProperty("--c", x.color); nav.appendChild(a); }
  if (prev) nl(prev, "← " + prev.name + " · " + prev.title, "prev"); else nav.appendChild(el("span"));
  if (next) nl(next, next.name + " · " + next.title + " →", "next");
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
