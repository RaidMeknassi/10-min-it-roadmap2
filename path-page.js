/* Agile & Project Management pathway: columns of certifications (entry -> expert).
   Click a certification to see its lessons and exam preparation. The page takes its colour. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var P = AGILE_PATH, main = $("pp"), byId = {};
  P.tracks.forEach(function (t) { t.certs.forEach(function (c) { byId[c.id] = c; }); });
  var ORDER = []; P.tracks.forEach(function (t) { t.certs.forEach(function (c) { ORDER.push(c.id); }); });
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  var qs = new URLSearchParams(location.search), sel = qs.get("c");
  if (!byId[sel]) sel = ORDER[0];
  document.title = P.name + " · 10-Minute IT Roadmap";

  var hero = el("section", "lvhero");
  hero.innerHTML = '<nav class="crumb"><a href="intermediate.html">Intermediate</a><span class="sep">›</span><span class="now"></span></nav>' +
    '<div class="tp-title"><div class="cx-badge"><small>Agile</small><b>PM</b></div><div><span class="badge">Recommended certifications</span><h1></h1></div></div><p class="tp-desc"></p><p class="tp-note"></p>';
  hero.querySelector(".now").textContent = P.name;
  hero.querySelector(".cx-badge").style.setProperty("--vc", P.color);
  hero.querySelector("h1").textContent = P.name;
  hero.querySelector(".tp-desc").textContent = P.desc;
  hero.querySelector(".tp-note").textContent = P.note;
  main.appendChild(hero);

  var rm = el("section", "irm"); rm.setAttribute("aria-label", P.name);
  rm.appendChild(el("h2", "irm-title", "AGILE & PROJECT MANAGEMENT"));
  rm.appendChild(el("p", "irm-sub", "CERTIFICATION ROADMAP · click any certification"));
  var cols = el("div", "irm-paths irm-paths-4");
  P.tracks.forEach(function (t, k) {
    var sec = el("section", "irm-path"); sec.style.setProperty("--c", t.color);
    sec.innerHTML = '<span class="irm-num"></span><h3></h3><p class="irm-rule">Entry → Expert</p><div class="irm-mods"></div>';
    sec.querySelector(".irm-num").textContent = String(k + 1);
    sec.querySelector("h3").textContent = t.name.toUpperCase();
    var mods = sec.querySelector(".irm-mods");
    t.certs.forEach(function (c, j) {
      if (j) mods.appendChild(el("div", "irm-step" + (c.alt ? " irm-alt" : ""), c.alt ? "also popular:" : "↓"));
      var a = el("a", "irm-mod" + (rowsDone(c.lessons.concat(c.examLessons || [])) ? " is-done" : "")); a.href = "path.html?p=agile&c=" + c.id; a.dataset.m = c.id;
      a.innerHTML = "<b></b><small></small>"; a.querySelector("b").textContent = c.code; a.querySelector("small").textContent = c.title + " · " + c.vendor;
      a.addEventListener("click", function (e) { e.preventDefault(); pick(c.id, true); });
      mods.appendChild(a);
    });
    cols.appendChild(sec);
  });
  rm.appendChild(cols);
  main.appendChild(rm);
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
  function pick(id, user) {
    sel = id; var c = byId[id];
    rm.querySelectorAll("[data-m]").forEach(function (b) { b.classList.toggle("on", b.dataset.m === id); });
    document.body.style.setProperty("--c", c.color); main.style.setProperty("--c", c.color); panel.style.setProperty("--c", c.color);
    if (user) history.replaceState(null, "", "path.html?p=agile&c=" + id);
    panel.innerHTML = "";
    var h = el("div", "tp-head");
    h.innerHTML = '<div class="cx-badge"><small></small><b></b></div><div class="tp-info"><p class="lp-track"></p><h2></h2><p class="tp-cert"></p></div>';
    h.querySelector(".cx-badge").style.setProperty("--vc", c.color);
    h.querySelector(".cx-badge small").textContent = c.vendor; h.querySelector(".cx-badge b").textContent = c.code;
    var tr = P.tracks.filter(function (t) { return t.certs.indexOf(c) >= 0; })[0];
    h.querySelector(".lp-track").textContent = tr.name;
    h.querySelector("h2").textContent = c.title;
    var p = h.querySelector(".tp-cert"); p.textContent = c.desc + " "; var a = el("a", "", "View in Certifications →"); a.href = "certs.html?q=" + encodeURIComponent(c.code); p.appendChild(a);
    panel.appendChild(h);
    var ab = certAbout(id); if (ab) panel.appendChild(ab);
    var all = c.lessons.concat(c.examLessons), d = 0; all.forEach(function (r) { if (done[r[0]]) d++; });
    panel.appendChild(el("p", "lv-meta", all.length + " lessons · " + d + " / " + all.length + " done"));
    var list = el("div", "lvlist"); c.lessons.forEach(function (r) { list.appendChild(card(r)); }); panel.appendChild(list);
    var ex = el("div", "exam-sec");
    ex.innerHTML = '<div class="exam-head"><span class="exam-ico">📝</span><div><h3></h3><p></p></div></div>';
    ex.querySelector("h3").textContent = "Exam Preparation · " + c.code;
    ex.querySelector("p").textContent = "Get ready for the " + c.title + " exam (" + c.vendor + "): know the format, check every objective, practise, then take a full mock exam.";
    var l2 = el("div", "lvlist"); c.examLessons.forEach(function (r) { l2.appendChild(card(r)); }); ex.appendChild(l2); panel.appendChild(ex);
    var k = ORDER.indexOf(id), nav = el("nav", "lv-nav");
    function nb(j, txt) { var x = el("a", "lv-nl", txt); x.href = "path.html?p=agile&c=" + ORDER[j]; x.style.setProperty("--c", byId[ORDER[j]].color); x.addEventListener("click", function (e) { e.preventDefault(); pick(ORDER[j], true); }); return x; }
    nav.appendChild(k > 0 ? nb(k - 1, "← " + byId[ORDER[k - 1]].code) : el("span"));
    nav.appendChild(k < ORDER.length - 1 ? nb(k + 1, byId[ORDER[k + 1]].code + " →") : el("span"));
    panel.appendChild(nav);
    if (user) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  pick(sel, false);
  if (qs.get("c")) setTimeout(function () { panel.scrollIntoView({ block: "start" }); }, 50);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
