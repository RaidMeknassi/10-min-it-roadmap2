/* ITIL page: the ITIL (Version 5) certification roadmap. Click any box: Foundation shows the full Foundation course,
   every other box shows its lessons and exam preparation. The page takes the colour of the chosen box. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var C = ITIL_COURSE, M = C.modules, main = $("cp");
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  var qs = new URLSearchParams(location.search), sel = qs.get("m");
  if (!M[sel]) sel = "foundation";
  document.title = "ITIL Certifications · 10-Minute IT Roadmap";

  var hero = el("section", "lvhero");
  hero.innerHTML = '<nav class="crumb"><a href="index.html#map">Road map</a><span class="sep">›</span><a href="level.html?l=l5">Level 5</a><span class="sep">›</span><span class="now">ITIL</span></nav>' +
    '<div class="tp-title"><div class="cx-badge"><small></small><b></b></div><div><span class="badge">Recommended certification</span><h1>ITIL Certifications</h1></div></div><p class="tp-desc"></p><p class="tp-note"></p>';
  hero.querySelector(".cx-badge").outerHTML = itilBadgeImg("foundation", 96);
  hero.querySelector(".tp-desc").textContent = C.desc;
  hero.querySelector(".tp-note").textContent = C.note;
  main.appendChild(hero);

  // roadmap diagram
  var rm = el("section", "irm"); rm.setAttribute("aria-label", "ITIL Version 5 certification roadmap");
  function modDone(id) { var t = M[id]; if (t.foundation) { var r = []; C.levels.forEach(function (lv) { r = r.concat(lv.lessons); }); return rowsDone(r); } return rowsDone(t.lessons.concat(t.examLessons || [])); }
  function box(id, num, extra) {
    var t = M[id], a = el("a", "irm-box irm-" + id + (extra ? " " + extra : "")); a.href = "course.html?c=itil&m=" + id; a.dataset.m = id; a.style.setProperty("--c", t.color);
    if (modDone(id)) a.classList.add("is-done");
    a.innerHTML = (num ? '<span class="irm-num"></span>' : "") + itilBadgeImg(id, 64, "irm-logo") + "<h3></h3><p></p>";
    if (num) a.querySelector(".irm-num").textContent = num;
    a.querySelector("h3").textContent = t.title.replace(/^ITIL /, "ITIL ").toUpperCase();
    a.querySelector("p").textContent = t.desc;
    a.addEventListener("click", function (e) { e.preventDefault(); pick(id, true); });
    return a;
  }
  function arrow(txt) { var d = el("div", "irm-arrow"); d.innerHTML = "<span>↓</span>" + (txt ? "<small></small>" : ""); if (txt) d.querySelector("small").textContent = txt; return d; }
  rm.appendChild(el("h2", "irm-title", "ITIL VERSION 5"));
  rm.appendChild(el("p", "irm-sub", "CERTIFICATION ROADMAP · click any box"));
  rm.appendChild(box("foundation", "1"));
  rm.appendChild(arrow());
  rm.appendChild(box("transformation", "2"));
  rm.appendChild(arrow("Choose your professional pathway"));
  var paths = el("div", "irm-paths");
  C.designations.forEach(function (d, k) {
    var sec = el("section", "irm-path"); sec.style.setProperty("--c", d.color);
    sec.innerHTML = '<span class="irm-num"></span>' + itilBadgeImg(d.id, 64, "irm-logo") + '<h3></h3><p class="irm-pdesc"></p><p class="irm-rule"></p><div class="irm-mods"></div>';
    sec.querySelector(".irm-num").textContent = String(3 + k);
    sec.querySelector("h3").textContent = d.name.toUpperCase();
    sec.querySelector(".irm-pdesc").textContent = d.desc;
    sec.querySelector(".irm-rule").textContent = d.rule;
    d.modules.forEach(function (id) {
      var t = M[id], a = el("a", "irm-mod" + (modDone(id) ? " is-done" : "")); a.href = "course.html?c=itil&m=" + id; a.dataset.m = id;
      a.innerHTML = itilBadgeImg(id, 40, "irm-mod-logo") + "<b></b><small></small>"; a.querySelector("b").textContent = t.code.toUpperCase(); a.querySelector("small").textContent = t.desc;
      a.addEventListener("click", function (e) { e.preventDefault(); pick(id, true); });
      sec.querySelector(".irm-mods").appendChild(a);
    });
    paths.appendChild(sec);
  });
  rm.appendChild(paths);
  rm.appendChild(arrow("Achieve all three designations"));
  rm.appendChild(box("master", "★"));
  var opt = box("aigov", "", "irm-optional"); opt.querySelector("h3").textContent = "OPTIONAL EXTENSION · ITIL AI GOVERNANCE"; rm.appendChild(opt);
  main.appendChild(rm);
  var panel = el("section", "tp-panel"); main.appendChild(panel);

  function card(r) {
    var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
    a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
    a.querySelector(".cl-ico").textContent = LBL[r[0]];
    a.querySelector("b").textContent = r[1];
    a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
    a.querySelector(".lc-tags").appendChild(function () { var w = document.createDocumentFragment(); lessonTags(r[0]).forEach(function (t) { w.appendChild(el("span", "tg " + t[1], t[0])); }); return w; }());
    return a;
  }
  function head(t, sub) {
    var h = el("div", "tp-head");
    h.innerHTML = '<div class="cx-badge"><small>PeopleCert</small><b></b></div><div class="tp-info"><p class="lp-track"></p><h2></h2><p class="tp-cert"></p></div>';
    h.querySelector(".cx-badge").style.setProperty("--vc", t.color);
    h.querySelector(".cx-badge b").textContent = t.code === "Foundation" ? "ITIL" : t.code;
    var des = C.designations.filter(function (d) { return d.modules.indexOf(sel) >= 0; })[0];
    h.querySelector(".lp-track").textContent = des ? "Part of " + des.name + " · " + des.rule : (sel === "transformation" ? "Shared by all three designations" : sel === "aigov" ? "Optional certification" : "ITIL certification");
    h.querySelector("h2").textContent = t.title;
    h.querySelector(".tp-cert").textContent = sub;
    var img = itilBadgeImg(sel, 104); if (img) h.querySelector(".cx-badge").outerHTML = img;
    return h;
  }

  function foundation() {
    var total = 0, c = 0;
    C.levels.forEach(function (lv) { lv.lessons.forEach(function (r) { total++; if (done[r[0]]) c++; }); });
    panel.appendChild(head(M.foundation, "The full ITIL Foundation course: " + C.levels.length + " levels · " + total + " lessons · " + c + " / " + total + " done."));
    var ab0 = certAbout("foundation"); if (ab0) panel.appendChild(ab0);
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
  function higher(id) {
    var t = M[id], all = t.lessons.concat(t.examLessons), c = 0;
    all.forEach(function (r) { if (done[r[0]]) c++; });
    panel.appendChild(head(t, t.desc + (id === "master" ? "" : " Needs ITIL Foundation first (ITIL 4 Foundation counts).")));
    var ab = certAbout(id); if (ab) panel.appendChild(ab);
    panel.appendChild(el("p", "lv-meta", all.length + " lessons · " + c + " / " + all.length + " done"));
    var list = el("div", "lvlist"); t.lessons.forEach(function (r) { list.appendChild(card(r)); }); panel.appendChild(list);
    if (t.examLessons.length) {
      var ex = el("div", "exam-sec");
      ex.innerHTML = '<div class="exam-head"><span class="exam-ico">📝</span><div><h3></h3><p></p></div></div>';
      ex.querySelector("h3").textContent = "Exam Preparation · " + t.title;
      ex.querySelector("p").textContent = "Get ready for the " + t.title + " exam: know the format, check every objective, practise, then take a full mock exam.";
      var l2 = el("div", "lvlist"); t.examLessons.forEach(function (r) { l2.appendChild(card(r)); }); ex.appendChild(l2);
      panel.appendChild(ex);
    }
  }
  var ORDER = ["foundation", "transformation", "msf", "pic", "cai", "product", "service", "experience", "strategy", "master", "aigov"];
  function pick(id, user) {
    sel = id; var t = M[id];
    rm.querySelectorAll("[data-m]").forEach(function (b) { b.classList.toggle("on", b.dataset.m === id); });
    rm.classList.add("has-sel");
    document.body.style.setProperty("--c", t.color); main.style.setProperty("--c", t.color); panel.style.setProperty("--c", t.color);
    if (user) history.replaceState(null, "", "course.html?c=itil" + (id !== "foundation" ? "&m=" + id : ""));
    panel.innerHTML = "";
    if (t.foundation) foundation(); else higher(id);
    var k = ORDER.indexOf(id), nav = el("nav", "lv-nav");
    function nb(j, txt) { var a = el("a", "lv-nl", txt); a.href = "course.html?c=itil&m=" + ORDER[j]; a.style.setProperty("--c", M[ORDER[j]].color); a.addEventListener("click", function (e) { e.preventDefault(); pick(ORDER[j], true); }); return a; }
    nav.appendChild(k > 0 ? nb(k - 1, "← " + M[ORDER[k - 1]].title) : el("span"));
    nav.appendChild(k < ORDER.length - 1 ? nb(k + 1, M[ORDER[k + 1]].title + " →") : el("span"));
    panel.appendChild(nav);
    if (user) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  pick(sel, false);
  if (location.hash) setTimeout(function () { var t = document.querySelector(location.hash); if (t) t.scrollIntoView({ block: "start" }); }, 50);
  else if (qs.get("m")) setTimeout(function () { panel.scrollIntoView({ block: "start" }); }, 50);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
