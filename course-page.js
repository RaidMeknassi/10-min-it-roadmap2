/* Course page (ITIL 4 Foundation): every level with its lessons. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var C = ITIL_COURSE, main = $("cp");
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  document.title = C.name + " · 10-Minute IT Roadmap";
  document.body.style.setProperty("--c", C.color); main.style.setProperty("--c", C.color);
  var total = 0, c = 0;
  C.levels.forEach(function (lv) { lv.lessons.forEach(function (r) { total++; if (done[r[0]]) c++; }); });

  var hero = el("section", "lvhero");
  hero.innerHTML = '<nav class="crumb"><a href="index.html#map">Road map</a><span class="sep">›</span><a href="level.html?l=l5">Level 5</a><span class="sep">›</span><span class="now"></span></nav>' +
    '<div class="tp-title"><div class="cx-badge"><small></small><b></b></div><div><span class="badge">Recommended certification</span><h1></h1></div></div><p class="tp-desc"></p><p class="lv-meta"></p><div class="lv-bar"><i></i></div>' +
    '<p class="tp-note"><a href="certs.html?q=ITIL">View in Certifications →</a></p>';
  hero.querySelector(".now").textContent = C.name;
  hero.querySelector(".cx-badge").style.setProperty("--vc", C.color);
  hero.querySelector(".cx-badge small").textContent = C.vendor; hero.querySelector(".cx-badge b").textContent = C.badge;
  hero.querySelector("h1").textContent = C.name;
  hero.querySelector(".tp-desc").textContent = C.desc;
  hero.querySelector(".lv-meta").textContent = C.levels.length + " levels · " + total + " lessons · " + c + " / " + total + " done";
  hero.querySelector(".lv-bar i").style.width = (c / total * 100) + "%";
  main.appendChild(hero);

  // level jump chips
  var chips = el("nav", "cx-chips cp-jump");
  C.levels.forEach(function (lv, i) { var a = el("a", "cx-chip", "Level " + i); a.href = "#lv" + i; chips.appendChild(a); });
  main.appendChild(chips);

  var list = el("section", "lvlist groups");
  C.levels.forEach(function (lv, i) {
    var h = el("div", "grp-head"); h.id = "lv" + i;
    h.innerHTML = "<h2></h2><p></p>"; h.querySelector("h2").textContent = "Level " + i + " · " + lv.title;
    var d = 0; lv.lessons.forEach(function (r) { if (done[r[0]]) d++; });
    h.querySelector("p").textContent = lv.lessons.length + " lessons · " + d + " / " + lv.lessons.length + " done";
    list.appendChild(h);
    lv.lessons.forEach(function (r) {
      var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
      a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
      a.querySelector(".cl-ico").textContent = LBL[r[0]];
      a.querySelector("b").textContent = r[1];
      a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
      a.querySelector(".lc-tags").appendChild(el("span", "tg " + (VIDEOS[r[0]] ? "t-les" : "t-soon"), VIDEOS[r[0]] ? "Lesson" : "Coming soon"));
      list.appendChild(a);
    });
  });
  main.appendChild(list);
  if (location.hash) setTimeout(function () { var t = document.querySelector(location.hash); if (t) t.scrollIntoView({ block: "start" }); }, 50);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
