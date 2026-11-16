/* ITIL page: the ITIL certification pyramid. Level 1 (Foundation) shows the full Foundation course;
   the higher levels show their modules and exam preparation. The page takes the colour of the chosen level. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var C = ITIL_COURSE, P = C.path, N = P.length, main = $("cp");
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  var qs = new URLSearchParams(location.search), sel = parseInt(qs.get("l"), 10);
  if (!(sel >= 0 && sel < N)) sel = 0;
  document.title = "ITIL Certifications · 10-Minute IT Roadmap";

  var hero = el("section", "lvhero");
  hero.innerHTML = '<nav class="crumb"><a href="index.html#map">Road map</a><span class="sep">›</span><a href="level.html?l=l5">Level 5</a><span class="sep">›</span><span class="now">ITIL</span></nav>' +
    '<div class="tp-title"><div class="cx-badge"><small></small><b></b></div><div><span class="badge">Recommended certification</span><h1>ITIL Certifications</h1></div></div><p class="tp-desc"></p><p class="tp-note"></p>';
  hero.querySelector(".cx-badge").style.setProperty("--vc", C.color);
  hero.querySelector(".cx-badge small").textContent = C.vendor; hero.querySelector(".cx-badge b").textContent = "ITIL";
  hero.querySelector(".tp-desc").textContent = C.desc;
  hero.querySelector(".tp-note").textContent = C.note;
  main.appendChild(hero);

  // pyramid (top = Master, bottom = Foundation)
  main.appendChild(el("p", "pyr-hint", "Click a level to see its lessons. Foundation is the base; ITIL Master is the top."));
  var pyr = el("section", "pyr"); pyr.setAttribute("aria-label", "ITIL levels");
  for (var j = 0; j < N; j++) {
    var i = N - 1 - j, t = P[i], top = j / N, bot = (j + 1) / N;
    var row = el("a", "pyr-row"); row.href = "course.html?c=itil&l=" + i; row.dataset.i = i; row.style.setProperty("--c", t.color);
    row.innerHTML = '<span class="pyr-l"></span><span class="pyr-mid"><span class="pyr-shape"></span><span class="pyr-num"></span></span><span class="pyr-r"></span>';
    row.querySelector(".pyr-shape").style.clipPath = "polygon(" + (50 - 50 * top) + "% 0," + (50 + 50 * top) + "% 0," + (50 + 50 * bot) + "% 100%," + (50 - 50 * bot) + "% 100%)";
    row.querySelector(".pyr-num").textContent = "L" + (i + 1);
    row.querySelector(".pyr-l").textContent = "Level " + (i + 1) + ": " + t.code;
    row.querySelector(".pyr-r").textContent = t.role;
    row.addEventListener("click", function (e) { e.preventDefault(); pick(parseInt(this.dataset.i, 10), true); });
    pyr.appendChild(row);
  }
  main.appendChild(pyr);
  var panel = el("section", "tp-panel"); main.appendChild(panel);

  function card(r) {
    var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
    a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
    a.querySelector(".cl-ico").textContent = LBL[r[0]];
    a.querySelector("b").textContent = r[1];
    a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
    a.querySelector(".lc-tags").appendChild(el("span", "tg " + (VIDEOS[r[0]] ? "t-les" : "t-soon"), VIDEOS[r[0]] ? "Lesson" : "Coming soon"));
    return a;
  }
  function head(t, i, sub) {
    var h = el("div", "tp-head");
    h.innerHTML = '<div class="cx-badge"><small>PeopleCert</small><b></b></div><div class="tp-info"><p class="lp-track"></p><h2></h2><p class="tp-cert"></p></div>';
    h.querySelector(".cx-badge").style.setProperty("--vc", t.color);
    h.querySelector(".cx-badge b").textContent = t.code === "Foundation" ? "ITIL 4" : t.code;
    h.querySelector(".lp-track").textContent = "Level " + (i + 1) + " of " + N + " · " + t.role;
    h.querySelector("h2").textContent = t.title;
    h.querySelector(".tp-cert").textContent = sub;
    return h;
  }

  function foundation() {
    var total = 0, c = 0;
    C.levels.forEach(function (lv) { lv.lessons.forEach(function (r) { total++; if (done[r[0]]) c++; }); });
    panel.appendChild(head(P[0], 0, "The full ITIL 4 Foundation course: " + C.levels.length + " levels · " + total + " lessons · " + c + " / " + total + " done."));
    var chips = el("nav", "cx-chips cp-jump");
    C.levels.forEach(function (lv, i) { var a = el("a", "cx-chip", "Level " + i); a.href = "#lv" + i; chips.appendChild(a); });
    panel.appendChild(chips);
    var list = el("section", "lvlist groups");
    C.levels.forEach(function (lv, i) {
      var h = el("div", "grp-head" + (lv.exam ? " exam-grp" : "")); h.id = "lv" + i;
      h.innerHTML = "<h2></h2><p></p>"; h.querySelector("h2").textContent = (lv.exam ? "📝 " : "") + "Level " + i + " · " + lv.title;
      var d = 0; lv.lessons.forEach(function (r) { if (done[r[0]]) d++; });
      h.querySelector("p").textContent = lv.lessons.length + " lessons · " + d + " / " + lv.lessons.length + " done";
      list.appendChild(h);
      lv.lessons.forEach(function (r) { list.appendChild(card(r)); });
    });
    panel.appendChild(list);
  }
  function higher(i) {
    var t = P[i], all = t.lessons.concat(t.examLessons), c = 0;
    all.forEach(function (r) { if (done[r[0]]) c++; });
    var need = i === N - 1 ? "Earned by holding all three designations: Practice Manager, Managing Professional and Strategic Leader." : "Needs ITIL Foundation first (ITIL 4 Foundation counts).";
    panel.appendChild(head(t, i, need));
    panel.appendChild(el("p", "lv-meta", all.length + " lessons · " + c + " / " + all.length + " done"));
    var list = el("div", "lvlist"); t.lessons.forEach(function (r) { list.appendChild(card(r)); }); panel.appendChild(list);
    if (t.examLessons.length) {
      var ex = el("div", "exam-sec");
      ex.innerHTML = '<div class="exam-head"><span class="exam-ico">📝</span><div><h3></h3><p></p></div></div>';
      ex.querySelector("h3").textContent = "Exam Preparation · " + t.title;
      ex.querySelector("p").textContent = "Get ready for the " + t.exam + " exams: know the format, check every objective, practise, then take a full mock exam.";
      var l2 = el("div", "lvlist"); t.examLessons.forEach(function (r) { l2.appendChild(card(r)); }); ex.appendChild(l2);
      panel.appendChild(ex);
    }
  }
  function pick(i, user) {
    sel = i;
    pyr.querySelectorAll(".pyr-row").forEach(function (r) { r.classList.toggle("on", parseInt(r.dataset.i, 10) === i); });
    pyr.classList.add("has-sel");
    document.body.style.setProperty("--c", P[i].color); main.style.setProperty("--c", P[i].color); panel.style.setProperty("--c", P[i].color);
    if (user) history.replaceState(null, "", "course.html?c=itil" + (i ? "&l=" + i : ""));
    panel.innerHTML = "";
    if (P[i].foundation) foundation(); else higher(i);
    var nav = el("nav", "lv-nav");
    function nb(j, txt) { var a = el("a", "lv-nl", txt); a.href = "course.html?c=itil&l=" + j; a.style.setProperty("--c", P[j].color); a.addEventListener("click", function (e) { e.preventDefault(); pick(j, true); }); return a; }
    nav.appendChild(i > 0 ? nb(i - 1, "← " + P[i - 1].title) : el("span"));
    nav.appendChild(i < N - 1 ? nb(i + 1, P[i + 1].title + " →") : el("span"));
    panel.appendChild(nav);
    if (user) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  pick(sel, false);
  if (location.hash) setTimeout(function () { var t = document.querySelector(location.hash); if (t) t.scrollIntoView({ block: "start" }); }, 50);
  else if (qs.get("l")) setTimeout(function () { panel.scrollIntoView({ block: "start" }); }, 50);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
