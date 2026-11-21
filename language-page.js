/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* One language: a gauge with 3 levels. Click a level to see its lessons. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var qs = new URLSearchParams(location.search), L = langById(qs.get("l"));
  if (!L) { location.replace("languages.html"); return; }
  var done = langDone(), main = $("lp-main"), sel = parseInt(qs.get("v"), 10) - 1;
  if (!(sel >= 0 && sel < 3)) sel = Math.min(langProgress(L), 2);
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  document.title = L.name + " · Languages · 10-Minute IT Roadmap";
  var hero = el("section", "lvhero tp-hero");
  hero.innerHTML = '<nav class="crumb"><a href="index.html#map">Road map</a><span class="sep">›</span><a href="languages.html">Languages</a><span class="sep">›</span><span class="now"></span></nav>' +
    '<div class="tp-title">' + langIcon(L, 72) + '<div><span class="badge"></span><h1></h1></div></div><p class="tp-desc"></p>';
  hero.querySelector(".now").textContent = L.name; hero.querySelector("h1").textContent = L.name;
  hero.querySelector(".badge").textContent = (LANG_GROUPS.filter(function (g) { return g.id === L.group; })[0] || {}).name || "Language";
  hero.querySelector(".tp-desc").textContent = L.desc;
  main.appendChild(hero);
  var gWrap = el("section", "lg-big"); main.appendChild(el("p", "pyr-hint", "Click a level on the gauge to see its lessons."));
  main.appendChild(gWrap);
  var panel = el("section", "tp-panel"); main.appendChild(panel);
  function lessonCard(r) {
    var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
    a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
    a.querySelector(".cl-ico").textContent = LBL[r[0]]; a.querySelector("b").textContent = r[1];
    a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
    lessonTags(r[0]).forEach(function (t) { a.querySelector(".lc-tags").appendChild(el("span", "tg " + t[1], t[0])); });
    return a;
  }
  function pick(i, user) {
    sel = i; var lvl = LANG_LEVELS[i], rows = L.lv[i], c = 0;
    rows.forEach(function (r) { if (done[r[0]]) c++; });
    gWrap.innerHTML = langGauge(langProgress(L), { sel: i, labels: true, cls: "big" });
    gWrap.querySelectorAll(".g-seg").forEach(function (s) { s.addEventListener("click", function () { pick(parseInt(s.getAttribute("data-i"), 10), true); }); });
    document.body.style.setProperty("--c", lvl.color); main.style.setProperty("--c", lvl.color); panel.style.setProperty("--c", lvl.color);
    if (user) history.replaceState(null, "", "language.html?l=" + L.id + "&v=" + (i + 1));
    panel.innerHTML = "";
    var head = el("div", "tp-head" + (c === rows.length ? " is-done-head" : ""));
    head.innerHTML = '<div class="tp-lvnum"></div><div class="tp-info"><p class="lp-track"></p><h2></h2><p class="tp-cert"></p></div>';
    head.querySelector(".tp-lvnum").textContent = String(i + 1);
    head.querySelector(".lp-track").textContent = "Level " + (i + 1) + " of 3 · " + lvl.name;
    head.querySelector("h2").textContent = L.name + " · " + lvl.name;
    head.querySelector(".tp-cert").textContent = rows.length + " lessons · " + c + " / " + rows.length + " done";
    if (c === rows.length) head.querySelector(".tp-info").appendChild(el("p", "cert-done", "✓ Level completed"));
    panel.appendChild(head);
    var list = el("div", "lvlist"); rows.forEach(function (r) { list.appendChild(lessonCard(r)); }); panel.appendChild(list);
    var nav = el("nav", "lv-nav");
    function nb(j, txt) { var a = el("a", "lv-nl", txt); a.href = "language.html?l=" + L.id + "&v=" + (j + 1); a.style.setProperty("--c", LANG_LEVELS[j].color); a.addEventListener("click", function (e) { e.preventDefault(); pick(j, true); }); return a; }
    nav.appendChild(i > 0 ? nb(i - 1, "← " + LANG_LEVELS[i - 1].name) : el("span"));
    nav.appendChild(i < 2 ? nb(i + 1, LANG_LEVELS[i + 1].name + " →") : el("span"));
    panel.appendChild(nav);
  }
  pick(sel, false);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
