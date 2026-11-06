/* Level page: levels + progress on the left, the lesson fills the page on the right. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var ALL = LEVELS.concat([{ id: "l6", name: "Level 6", title: "Advanced IT Specializations", color: "#f472b6" }]);
  var KEY = "itroadmap-v2-done", done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var qs = new URLSearchParams(location.search), li = -1;
  ALL.forEach(function (x, i) { if (x.id === qs.get("l")) li = i; });
  if (li < 0) { location.replace("index.html"); return; }
  var level = ALL[li], isPaths = level.id === "l6", tab = "lesson", cur = null;
  var total = 0, flat = [];
  LEVELS.forEach(function (lv) { lv.lessons.forEach(function (r) { total++; flat.push({ n: r[0], title: r[1], lab: !!r[2], level: lv }); }); });
  function lessonsOf(lv) { return flat.filter(function (l) { return l.level === lv; }); }
  function href(lvId, extra) { return "level.html?l=" + lvId + (extra || ""); }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  var touch = window.matchMedia("(hover: none)").matches;
  var small = function () { return window.innerWidth <= 720; };

  // ----- left side: overall progress, all levels in order, hover to expand -----
  function sidebar() {
    var sb = $("sb"); sb.innerHTML = "";
    var n = flat.filter(function (l) { return done[l.n]; }).length;
    var pr = el("div", "sb-prog");
    pr.innerHTML = '<div class="sb-prog-top"><span>Your progress</span><b>' + n + ' / ' + total + ' lessons</b></div><div class="sb-bar"><i style="width:' + (n / total * 100) + '%"></i></div>';
    sb.appendChild(pr);
    ALL.forEach(function (lv) {
      var box = el("div", "sb-lv" + (lv === level ? " cur" : "")); box.style.setProperty("--c", lv.color);
      var ls = lv.id === "l6" ? null : lessonsOf(lv), c = ls ? ls.filter(function (l) { return done[l.n]; }).length : 0;
      var head = el("button", "sb-head"); head.type = "button";
      head.innerHTML = '<span class="sb-badge"></span><span class="sb-n"></span><span class="sb-t"></span><span class="sb-bar"><i></i></span>';
      head.querySelector(".sb-badge").textContent = lv.name;
      head.querySelector(".sb-t").textContent = lv.title;
      head.querySelector(".sb-n").textContent = ls ? c + "/" + ls.length : PATHS.length + " paths";
      head.querySelector(".sb-bar i").style.width = ls ? (c / ls.length * 100) + "%" : "0%";
      head.onclick = function () {
        if (touch || small()) { box.classList.toggle("open"); return; }
        if (lv !== level) location.href = href(lv.id);
      };
      box.appendChild(head);
      var list = el("div", "sb-list");
      if (ls) ls.forEach(function (l) {
        var b = el("button", "sb-it" + (cur && cur.n === l.n ? " on" : "") + (done[l.n] ? " done" : "")); b.type = "button";
        b.innerHTML = '<span class="ico"></span><span class="sb-num"></span><span class="sb-tt"></span><span class="sb-ck">✓</span>';
        b.querySelector(".ico").innerHTML = iconSVG(l.n, lv.color);
        b.querySelector(".sb-num").textContent = l.n; b.querySelector(".sb-tt").textContent = l.title;
        b.onclick = function () { if (lv === level) { select(l, true); closeDrawer(); } else location.href = href(lv.id, "&n=" + encodeURIComponent(l.n)); };
        list.appendChild(b);
      });
      else PATHS.forEach(function (p, i) {
        var b = el("button", "sb-it" + (cur && cur.name === p.name ? " on" : "")); b.type = "button"; b.style.setProperty("--c", p.color);
        b.innerHTML = '<span class="sb-dot"></span><span class="sb-tt"></span>'; b.querySelector(".sb-tt").textContent = p.name;
        b.onclick = function () { if (isPaths) { select(p, true); closeDrawer(); } else location.href = href("l6", "&p=" + i); };
        list.appendChild(b);
      });
      box.appendChild(list); sb.appendChild(box);
    });
  }
  function closeDrawer() { $("sb").classList.remove("show"); }
  $("sb-toggle").onclick = function () { $("sb").classList.toggle("show"); };

  // ----- main: the lesson (or the path) fills the page -----
  function frame(src, title) {
    var f = document.createElement("iframe"); f.src = src; f.title = title; f.allow = "autoplay; fullscreen"; f.allowFullscreen = true; return f;
  }
  function launch(src, label) {
    var a = el("a", "lp-launch"); a.href = src; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = '<span>▶</span>' + label + '<small>Opens full screen. Turn your phone sideways.</small>'; return a;
  }
  function stage() {
    var l = cur, box = $("lp-stage"), note = $("lp-note"); box.innerHTML = ""; note.innerHTML = "";
    var page = LESSON_PAGES[l.n], lab = LABS[l.n], labPage = LAB_PAGES[l.n], quiz = QUIZZES[l.n], vid = VIDEOS[l.n];
    document.querySelectorAll(".lp-tab").forEach(function (t) { t.classList.toggle("on", t.dataset.t === tab); });
    if (tab === "lesson") {
      box.className = "lp-stage t-lesson";
      if (page && small()) { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center")).appendChild(launch(page, "Open the lesson")); }
      else if (page) { box.appendChild(frame(page, l.title)); var a = el("a", "", "Open full screen ↗"); a.href = page; a.target = "_blank"; a.rel = "noopener"; note.appendChild(a); }
      else if (vid) box.appendChild(frame("https://www.youtube-nocookie.com/embed/" + encodeURIComponent(vid), l.title));
      else { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center", "This lesson is coming soon.")); }
    } else if (tab === "quiz") {
      box.className = "lp-stage t-quiz";
      if (quiz) { var q = el("div"); box.appendChild(q); renderQuiz(l.n, q, function (s) { try { var k = JSON.parse(localStorage.getItem("itroadmap-v2-quiz") || "{}"); if (!k[l.n] || s > k[l.n]) k[l.n] = s; localStorage.setItem("itroadmap-v2-quiz", JSON.stringify(k)); } catch (e) {} }); }
      else box.appendChild(el("div", "lp-center", "No quiz for this lesson yet."));
    } else {
      if (labPage && small()) { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center")).appendChild(launch(labPage, "Start the lab")); }
      else if (labPage) { box.className = "lp-stage"; box.appendChild(frame(labPage, lab ? lab.title : "Lab")); }
      else { box.className = "lp-stage t-card"; var d = el("div", "lp-card"); d.innerHTML = "<h3></h3><p></p>"; d.querySelector("h3").textContent = lab ? "🔒 Lab: " + lab.title : l.lab ? "🔒 Lab available" : "No lab for this lesson"; d.querySelector("p").textContent = lab ? lab.text + " (Coming soon.)" : l.lab ? "A hands-on lab for this lesson is coming soon." : "Just watch the lesson and take the quiz."; box.appendChild(d); }
    }
  }
  function select(item, push) {
    cur = item; $("lp").style.setProperty("--c", level.color);
    var main = $("lp"); main.innerHTML = "";
    if (isPaths) {
      document.title = item.name + " · 10-Minute IT Roadmap";
      main.style.setProperty("--c", item.color);
      var h = el("div", "lp-head"); h.innerHTML = '<div class="lp-title"><p class="lp-track">Level 6 · Specialization path</p><h1></h1></div>'; h.querySelector("h1").textContent = item.name; main.appendChild(h);
      var card = el("div", "lp-stage t-card"); card.innerHTML = "<div class='lp-card'><h3>Topics in this path</h3><ul class='lp-topics'></ul><p>Detailed lessons for this path are <b>coming soon</b>.</p></div>";
      item.items.forEach(function (t) { card.querySelector("ul").appendChild(el("li", "", t)); }); main.appendChild(card);
      if (push) history.pushState(null, "", href("l6", "&p=" + PATHS.indexOf(item)));
      sidebar(); return;
    }
    tab = "lesson";
    document.title = "Lesson " + item.n + " · " + item.title;
    var head = el("div", "lp-head");
    head.innerHTML = '<span class="ico"></span><div class="lp-title"><p class="lp-track"></p><h1></h1></div><button type="button" class="lp-done"></button>';
    head.querySelector(".ico").innerHTML = iconSVG(item.n, level.color);
    head.querySelector(".lp-track").textContent = level.name + " · Lesson " + item.n + " · 10 min";
    head.querySelector("h1").textContent = item.title;
    var db = head.querySelector(".lp-done");
    function dlabel() { db.textContent = done[item.n] ? "✓ Done" : "Mark as done"; db.classList.toggle("on", !!done[item.n]); }
    dlabel();
    db.onclick = function () { if (done[item.n]) delete done[item.n]; else done[item.n] = true; save(); dlabel(); sidebar(); };
    main.appendChild(head);
    var tabs = el("div", "lp-tabs");
    [["lesson", "▶ Lesson", true], ["quiz", "Quiz", !!QUIZZES[item.n]], ["lab", item.lab || LAB_PAGES[item.n] ? "🔒 Lab" : "Lab", true]].forEach(function (t) {
      var b = el("button", "lp-tab", t[1]); b.type = "button"; b.dataset.t = t[0]; b.disabled = !t[2];
      b.onclick = function () { tab = t[0]; stage(); }; tabs.appendChild(b);
    });
    main.appendChild(tabs);
    main.appendChild(el("div", "lp-stage", "")).id = "lp-stage";
    main.appendChild(el("p", "lp-note")).id = "lp-note";
    var foot = el("div", "lp-foot"), ix = flat.indexOf(flat.filter(function (l) { return l.n === item.n; })[0]);
    function nb(l, txt) { var b = el("button", "", txt); b.type = "button"; b.style.setProperty("--c", l.level.color); b.onclick = function () { if (l.level === level) { select(l, true); window.scrollTo(0, 0); } else location.href = href(l.level.id, "&n=" + encodeURIComponent(l.n)); }; return b; }
    foot.appendChild(ix > 0 ? nb(flat[ix - 1], "← " + flat[ix - 1].title) : el("span"));
    if (ix < flat.length - 1) foot.appendChild(nb(flat[ix + 1], flat[ix + 1].title + " →"));
    main.appendChild(foot);
    if (push) history.pushState(null, "", href(level.id, "&n=" + encodeURIComponent(item.n)));
    stage(); sidebar();
  }

  // ----- start: lesson from the address, else the first lesson not yet done -----
  function start() {
    if (isPaths) { var pi = parseInt(qs.get("p") || "0", 10); select(PATHS[pi] || PATHS[0], false); return; }
    var ls = lessonsOf(level), pick = ls.filter(function (l) { return l.n === qs.get("n"); })[0] || ls.filter(function (l) { return !done[l.n]; })[0] || ls[0];
    select(pick, false);
  }
  window.addEventListener("popstate", function () { qs = new URLSearchParams(location.search); start(); });
  start();
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
