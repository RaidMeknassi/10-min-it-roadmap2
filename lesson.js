/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Lesson page: one lesson (or Level 6 path) on a whole page of its own. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var LEVEL6 = { id: "l6", name: "Level 7", title: "Advanced Specializations", color: "#f472b6" };
  var KEY = "itroadmap-v2-done", done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
  var flat = [];
  var allLevels = LEVELS.concat([LEVEL55]).concat((typeof LEVEL54 !== "undefined") ? [LEVEL54] : []).concat((typeof LEVEL52 !== "undefined") ? [LEVEL52] : []).concat((typeof LEVEL53 !== "undefined") ? [LEVEL53] : []).concat((typeof INTERMEDIATE_LEVELS !== "undefined") ? INTERMEDIATE_LEVELS : []).concat((typeof ADVANCED_LEVELS !== "undefined") ? ADVANCED_LEVELS : []).concat((typeof COURSE_LEVELS !== "undefined") ? COURSE_LEVELS : []);
  allLevels.forEach(function (lv) { lv.lessons.forEach(function (r) { flat.push({ n: r[0], title: r[1], lab: !!r[2], level: lv }); }); });
  var qs = new URLSearchParams(location.search), main = $("lp"), tab = "lesson";
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var small = function () { return window.innerWidth <= 720; };

  function crumbs(parts) {
    var c = el("nav", "crumb"); c.setAttribute("aria-label", "Breadcrumb");
    parts.forEach(function (p, i) {
      if (i) c.appendChild(el("span", "sep", "›"));
      if (p[1]) { var a = el("a", "", p[0]); a.href = p[1]; c.appendChild(a); } else c.appendChild(el("span", "now", p[0]));
    });
    return c;
  }

  // ---------- Level 7 / 8 path (cybersecurity track) ----------
  if (qs.get("t") !== null) {
    var tid = qs.get("t"), gi = parseInt(qs.get("g"), 10), pi = parseInt(qs.get("p"), 10);
    var grp = TRACKS[tid] && TRACKS[tid][gi], tp = grp && grp.paths[pi], tl = tid === "l7" ? LEVEL7 : LEVEL8;
    var spI = /^sp\d+$/.test(tid) ? parseInt(tid.slice(2), 10) : -1, backHref = "level.html?l=" + tid;   // sp<N>: career tree of specialization N
    if (spI >= 0 && PATHS[spI]) { tl = { name: PATHS[spI].name, title: "Specialization" }; backHref = "spec.html?s=" + spI; }
    else if (tid === "l7") backHref = "spec.html?s=0";
    if (!tp) { location.replace("index.html"); return; }
    document.title = tp.name + " · 10-Minute IT Roadmap"; main.style.setProperty("--c", grp.color);
    main.appendChild(crumbs([["Road map", "index.html#map"], [tl.name + " · " + tl.title, backHref], [grp.name], [tp.name]]));
    var th = el("div", "lp-head"); th.innerHTML = '<div class="lp-title"><p class="lp-track"></p><h1></h1></div>';
    th.querySelector(".lp-track").textContent = tl.name + " · " + grp.name; th.querySelector("h1").textContent = tp.name; main.appendChild(th);
    var tc = el("div", "lp-stage t-card");
    tc.innerHTML = "<div class='lp-card'><h3>What you will learn</h3><ul class='lp-topics'></ul><p></p></div>";
    tp.topics.forEach(function (t) { tc.querySelector("ul").appendChild(el("li", "", t)); });
    tc.querySelector("p").innerHTML = tid === "l8" ? "These are <b>real attack practice</b> labs in a safe environment. Coming soon. Only practise on systems you own or are allowed to test." : "Lessons and labs for this path are <b>coming soon</b>.";
    main.appendChild(tc);
    var tf = el("div", "lp-foot"), flatPaths = [];
    TRACKS[tid].forEach(function (g, a) { g.paths.forEach(function (x, b) { flatPaths.push([a, b, x, g]); }); });
    var fi = 0; flatPaths.forEach(function (x, i) { if (x[0] === gi && x[1] === pi) fi = i; });
    function tb(x, txt) { var l = el("a", "lp-btn", txt); l.href = "lesson.html?t=" + tid + "&g=" + x[0] + "&p=" + x[1]; l.style.setProperty("--c", x[3].color); return l; }
    tf.appendChild(fi > 0 ? tb(flatPaths[fi - 1], "← " + flatPaths[fi - 1][2].name) : el("span"));
    var tm = el("a", "lp-btn lp-mid", "All " + tl.name + " paths"); tm.href = backHref; tf.appendChild(tm);
    tf.appendChild(fi < flatPaths.length - 1 ? tb(flatPaths[fi + 1], flatPaths[fi + 1][2].name + " →") : el("span"));
    main.appendChild(tf);
    var yy = $("year"); if (yy) yy.textContent = new Date().getFullYear();
    return;
  }

  // ---------- Level 6 path ----------
  if (qs.get("p") !== null) {
    var p = PATHS[parseInt(qs.get("p"), 10)];
    if (!p) { location.replace("index.html"); return; }
    document.title = p.name + " · 10-Minute IT Roadmap"; main.style.setProperty("--c", p.color);
    main.appendChild(crumbs([["Road map", "index.html#map"], ["Level 7 · " + LEVEL6.title, "level.html?l=l6"], [p.name]]));
    var h = el("div", "lp-head"); h.innerHTML = '<div class="lp-title"><p class="lp-track">Level 7 · Specialization path</p><h1></h1></div>'; h.querySelector("h1").textContent = p.name; main.appendChild(h);
    var card = el("div", "lp-stage t-card"); card.innerHTML = "<div class='lp-card'><h3>Topics in this path</h3><ul class='lp-topics'></ul><p>Detailed lessons for this path are <b>coming soon</b>.</p></div>";
    p.items.forEach(function (t) { card.querySelector("ul").appendChild(el("li", "", t)); }); main.appendChild(card);
    var back = el("div", "lp-foot"); var b = el("a", "lp-btn", "← All paths"); b.href = "level.html?l=l6"; back.appendChild(b);
    main.appendChild(back);
    return;
  }

  // ---------- one lesson ----------
  // the same lesson can sit in two places (e.g. a ServiceNow lesson in Level 5.1 and on the ServiceNow page):
  // "from" says which place it was opened from; without it, the first place (the road map) is used
  var n = qs.get("n"), from = qs.get("from"), ix = -1;
  flat.forEach(function (l, i) { if (l.n === n && (ix < 0 || (from && l.level.id === from))) ix = i; });
  if (ix < 0) { location.replace("index.html"); return; }
  if (typeof isLive === "function" && flat.filter(function (l) { return l.n === n; }).every(function (l) { return !isLive(l.level.id); })) {   // lesson of a module that is not released yet
    var sl = flat[ix].level, sh = /^adv-/.test(sl.id) ? ["advanced.html", "\u2190 Back to Advanced"] : /^im\d+$/.test(sl.id) ? ["intermediate.html", "\u2190 Back to Intermediate"] : ["index.html#map", "\u2190 Back to the road map"];
    document.title = "Coming soon · 10-Minute IT Roadmap"; main.appendChild(comingSoonBox(sh[0], sh[1]));
    return;
  }
  function lblOf(it) {   // a level can number its lessons itself (Level 5 -> 5.4, Level 5.1 -> 5.1.7 ...)
    if (it.level.lbl) { var k = -1; it.level.lessons.forEach(function (r, i) { if (k < 0 && r[0] === it.n) k = i; }); if (k >= 0) return it.level.lbl(k); }
    return LBL[it.n] || it.n;
  }
  var item = flat[ix], level = item.level, lvHref = level.href || ("level.html?l=" + level.id);
  // previous / next only move inside the same course (main road map, ITIL, or one tool)
  var grp = level.group || "", sib = flat.filter(function (l) { return (l.level.group || "") === grp; }), si = sib.indexOf(item);
  document.title = "Lesson " + lblOf(item) + " · " + item.title + " · 10-Minute IT Roadmap";
  main.style.setProperty("--c", level.color);
  main.appendChild(crumbs((level.crumbs || (/^im\d+$/.test(level.id) ? [["Intermediate", "intermediate.html"]] : /^adv-/.test(level.id) ? [["Advanced", "advanced.html"]] : [["Road map", "index.html#map"]])).concat([[level.name + " · " + level.title, lvHref], ["Lesson " + lblOf(item)]])));

  var head = el("div", "lp-head");
  head.innerHTML = '<span class="ico"></span><div class="lp-title"><p class="lp-track"></p><h1></h1></div><button type="button" class="lp-done"></button>';
  head.querySelector(".ico").innerHTML = (level.id === "l55" || level.id === "l54" || /^im\d+$/.test(level.id)) ? '<img src="assets/lesson-icons/' + item.n + '.png" alt="" width="64" height="64" style="border-radius:14px">' : level.group ? '<img src="assets/lesson-icons/' + item.n + '.png" alt="" width="64" height="64" style="border-radius:14px" onerror="var s=document.createElement(\'span\');s.className=\'cl-ico\';s.style.setProperty(\'--c\',\'' + level.color + '\');s.textContent=\'' + lblOf(item) + '\';this.replaceWith(s)">' : iconSVG(item.n, level.color);
  head.querySelector(".lp-track").textContent = level.name + " · Lesson " + lblOf(item) + " · 10 min";
  head.querySelector("h1").textContent = item.title;
  var db = head.querySelector(".lp-done");
  function dl() { db.textContent = done[item.n] ? "✓ Done" : "Mark as done"; db.classList.toggle("on", !!done[item.n]); }
  dl(); db.onclick = function () { if (done[item.n]) delete done[item.n]; else { done[item.n] = true; if (window.celebrate) celebrate(); } save(); if (window.__progressSaved) window.__progressSaved(); dl(); };
  main.appendChild(head);

  var tabs = el("div", "lp-tabs");
  var SUM = (typeof SUMMARIES !== "undefined" && SUMMARIES[item.n]) || null;
  [["lesson", "▶ Lesson", true], ["summary", "Summary", !!SUM], ["quiz", "Quiz", !!QUIZZES[item.n]], ["lab", "Lab", realLab(item.n)]].forEach(function (t) {
    var b = el("button", "lp-tab", t[1]); b.type = "button"; b.dataset.t = t[0]; b.disabled = !t[2];
    b.onclick = function () { tab = t[0]; stage(); }; tabs.appendChild(b);
  });
  var quizOnly = !!QUIZZES[item.n] && !VIDEOS[item.n] && !LESSON_PAGES[item.n] && !LABS[item.n] && !LAB_PAGES[item.n] && !item.lab;
  if (quizOnly) tab = "quiz"; else main.appendChild(tabs);
  /* objective of this lesson, above the lesson */
  var goal = (typeof LESSON_OBJECTIVES !== "undefined" && LESSON_OBJECTIVES[item.n]) || ("Explain the key ideas of \u201C" + item.title + "\u201D.");
  var ob = el("div", "obj-box obj-lesson"); ob.appendChild(el("h3", "", "🎯 Objective"));
  ob.appendChild(el("p", "", "By the end of this lesson you will be able to: " + goal.charAt(0).toLowerCase() + goal.slice(1)));
  main.appendChild(ob);
  var box = el("div", "lp-stage"), note = el("p", "lp-note"); main.appendChild(box); main.appendChild(note);

  function frame(src, title) { var f = document.createElement("iframe"); f.src = src; f.title = title; f.allow = "autoplay; fullscreen"; f.allowFullscreen = true; return f; }
  function launch(src, label) {
    var a = el("a", "lp-launch"); a.href = src; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = '<span>▶</span>' + label + '<small>Opens full screen. Turn your phone sideways.</small>'; return a;
  }
  function stage() {
    box.innerHTML = ""; note.innerHTML = "";
    var page = LESSON_PAGES[item.n], lab = LABS[item.n], labPage = LAB_PAGES[item.n], quiz = QUIZZES[item.n], vid = VIDEOS[item.n];
    tabs.querySelectorAll(".lp-tab").forEach(function (t) { t.classList.toggle("on", t.dataset.t === tab); });
    if (tab === "lesson") {
      box.className = "lp-stage t-lesson";
      if (page && small()) { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center")).appendChild(launch(page, "Open the lesson")); }
      else if (page) { box.appendChild(frame(page, item.title)); var a = el("a", "", "Open full screen ↗"); a.href = page; a.target = "_blank"; a.rel = "noopener"; note.appendChild(a); }
      else if (vid) box.appendChild(frame("https://www.youtube-nocookie.com/embed/" + encodeURIComponent(vid), item.title));
      else { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center", "This lesson is coming soon.")); }
    } else if (tab === "summary") {
      box.className = "lp-stage t-card";
      var sd = el("div", "lp-sum"); sd.appendChild(el("h3", "", "In short"));
      sd.appendChild(el("p", "", SUM.s));
      if (SUM.k && SUM.k.length) { sd.appendChild(el("h4", "", "Key points")); var ul = el("ul"); SUM.k.forEach(function (k) { ul.appendChild(el("li", "", k)); }); sd.appendChild(ul); }
      box.appendChild(sd);
    } else if (tab === "quiz") {
      box.className = "lp-stage t-quiz";
      if (quiz) { var q = el("div"); box.appendChild(q); renderQuiz(item.n, q, function (s) { try { var k = JSON.parse(localStorage.getItem("itroadmap-v2-quiz") || "{}"); if (!k[item.n] || s > k[item.n]) k[item.n] = s; localStorage.setItem("itroadmap-v2-quiz", JSON.stringify(k)); } catch (e) {} }); }
      else box.appendChild(el("div", "lp-center", "No quiz for this lesson yet."));
    } else {
      if (lab && lab.video) { box.className = "lp-stage t-lesson"; box.appendChild(frame("https://www.youtube-nocookie.com/embed/" + encodeURIComponent(lab.video), lab.title)); note.textContent = "🧪 Lab: " + lab.title; }
      else if (labPage && small()) { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center")).appendChild(launch(labPage, "Start the lab")); }
      else if (labPage) { box.className = "lp-stage t-lab"; box.appendChild(frame(labPage, lab ? lab.title : "Lab")); var a2 = el("a", "", "Open full screen ↗"); a2.href = labPage; a2.target = "_blank"; a2.rel = "noopener"; note.appendChild(a2); }
      else { box.className = "lp-stage t-card"; var d = el("div", "lp-card"); d.innerHTML = "<h3></h3><p></p>"; d.querySelector("h3").textContent = lab ? "🔒 Lab: " + lab.title : item.lab ? "🔒 Lab available" : "No lab for this lesson"; d.querySelector("p").textContent = lab ? lab.text + " (Coming soon.)" : item.lab ? "A hands-on lab for this lesson is coming soon." : "Just watch the lesson and take the quiz."; box.appendChild(d); }
    }
  }
  stage();

  var foot = el("div", "lp-foot");
  var ICON_PREV = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  var ICON_NEXT = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  function nb(l, dir) {
    var a = el("a", "lp-btn lp-arrow lp-" + dir); a.href = "lesson.html?n=" + encodeURIComponent(l.n) + "&from=" + encodeURIComponent(l.level.id);
    a.innerHTML = dir === "prev" ? ICON_PREV : ICON_NEXT;
    var lbl = (dir === "prev" ? "Previous lesson: " : "Next lesson: ") + l.title; a.title = lbl; a.setAttribute("aria-label", lbl);
    a.style.setProperty("--c", l.level.color); return a;
  }
  foot.appendChild(si > 0 ? nb(sib[si - 1], "prev") : el("span", "lp-arrow-gap"));
  var mid = el("a", "lp-btn lp-mid", "All " + level.name + " lessons"); mid.href = lvHref; foot.appendChild(mid);
  foot.appendChild(si < sib.length - 1 ? nb(sib[si + 1], "next") : el("span", "lp-arrow-gap"));
  main.appendChild(foot);
  /* "Report an issue" link: opens the visitor's mail app (change REPORT_EMAIL to your real address) */
  var REPORT_EMAIL = "test@example.com";
  var rp = el("a", "lp-report", "\u26A0 Report an issue or mistake");
  rp.href = "mailto:" + REPORT_EMAIL + "?subject=" + encodeURIComponent("Issue in lesson " + lblOf(item) + ": " + item.title) +
    "&body=" + encodeURIComponent("Lesson: " + lblOf(item) + " " + item.title + "\nPage: " + location.href + "\n\nWhat is wrong?\n");
  var rw = el("div", "lp-report-wrap"); rw.appendChild(rp); main.appendChild(rw);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
