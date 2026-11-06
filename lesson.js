/* Lesson page: one lesson (or Level 6 path) on a whole page of its own. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var LEVEL6 = { id: "l6", name: "Level 6", title: "Advanced IT Specializations", color: "#f472b6" };
  var KEY = "itroadmap-v2-done", done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
  var flat = [];
  LEVELS.forEach(function (lv) { lv.lessons.forEach(function (r) { flat.push({ n: r[0], title: r[1], lab: !!r[2], level: lv }); }); });
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

  // ---------- Level 6 path ----------
  if (qs.get("p") !== null) {
    var p = PATHS[parseInt(qs.get("p"), 10)];
    if (!p) { location.replace("index.html"); return; }
    document.title = p.name + " · 10-Minute IT Roadmap"; main.style.setProperty("--c", p.color);
    main.appendChild(crumbs([["Road map", "index.html#map"], ["Level 6 · " + LEVEL6.title, "level.html?l=l6"], [p.name]]));
    var h = el("div", "lp-head"); h.innerHTML = '<div class="lp-title"><p class="lp-track">Level 6 · Specialization path</p><h1></h1></div>'; h.querySelector("h1").textContent = p.name; main.appendChild(h);
    var card = el("div", "lp-stage t-card"); card.innerHTML = "<div class='lp-card'><h3>Topics in this path</h3><ul class='lp-topics'></ul><p>Detailed lessons for this path are <b>coming soon</b>.</p></div>";
    p.items.forEach(function (t) { card.querySelector("ul").appendChild(el("li", "", t)); }); main.appendChild(card);
    var back = el("div", "lp-foot"); var b = el("a", "lp-btn", "← All paths"); b.href = "level.html?l=l6"; back.appendChild(b); main.appendChild(back);
    return;
  }

  // ---------- one lesson ----------
  var n = qs.get("n"), ix = -1;
  flat.forEach(function (l, i) { if (l.n === n) ix = i; });
  if (ix < 0) { location.replace("index.html"); return; }
  var item = flat[ix], level = item.level;
  document.title = "Lesson " + item.n + " · " + item.title + " · 10-Minute IT Roadmap";
  main.style.setProperty("--c", level.color);
  main.appendChild(crumbs([["Road map", "index.html#map"], [level.name + " · " + level.title, "level.html?l=" + level.id], ["Lesson " + item.n]]));

  var head = el("div", "lp-head");
  head.innerHTML = '<span class="ico"></span><div class="lp-title"><p class="lp-track"></p><h1></h1></div><button type="button" class="lp-done"></button>';
  head.querySelector(".ico").innerHTML = iconSVG(item.n, level.color);
  head.querySelector(".lp-track").textContent = level.name + " · Lesson " + item.n + " · 10 min";
  head.querySelector("h1").textContent = item.title;
  var db = head.querySelector(".lp-done");
  function dl() { db.textContent = done[item.n] ? "✓ Done" : "Mark as done"; db.classList.toggle("on", !!done[item.n]); }
  dl(); db.onclick = function () { if (done[item.n]) delete done[item.n]; else { done[item.n] = true; if (window.celebrate) celebrate(); } save(); dl(); };
  main.appendChild(head);

  var tabs = el("div", "lp-tabs");
  [["lesson", "▶ Lesson", true], ["quiz", "Quiz", !!QUIZZES[item.n]], ["lab", (item.lab || LAB_PAGES[item.n]) ? "🔒 Lab" : "Lab", true]].forEach(function (t) {
    var b = el("button", "lp-tab", t[1]); b.type = "button"; b.dataset.t = t[0]; b.disabled = !t[2];
    b.onclick = function () { tab = t[0]; stage(); }; tabs.appendChild(b);
  });
  main.appendChild(tabs);
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
    } else if (tab === "quiz") {
      box.className = "lp-stage t-quiz";
      if (quiz) { var q = el("div"); box.appendChild(q); renderQuiz(item.n, q, function (s) { try { var k = JSON.parse(localStorage.getItem("itroadmap-v2-quiz") || "{}"); if (!k[item.n] || s > k[item.n]) k[item.n] = s; localStorage.setItem("itroadmap-v2-quiz", JSON.stringify(k)); } catch (e) {} }); }
      else box.appendChild(el("div", "lp-center", "No quiz for this lesson yet."));
    } else {
      if (labPage && small()) { box.className = "lp-stage t-card"; box.appendChild(el("div", "lp-center")).appendChild(launch(labPage, "Start the lab")); }
      else if (labPage) { box.className = "lp-stage t-lab"; box.appendChild(frame(labPage, lab ? lab.title : "Lab")); var a2 = el("a", "", "Open full screen ↗"); a2.href = labPage; a2.target = "_blank"; a2.rel = "noopener"; note.appendChild(a2); }
      else { box.className = "lp-stage t-card"; var d = el("div", "lp-card"); d.innerHTML = "<h3></h3><p></p>"; d.querySelector("h3").textContent = lab ? "🔒 Lab: " + lab.title : item.lab ? "🔒 Lab available" : "No lab for this lesson"; d.querySelector("p").textContent = lab ? lab.text + " (Coming soon.)" : item.lab ? "A hands-on lab for this lesson is coming soon." : "Just watch the lesson and take the quiz."; box.appendChild(d); }
    }
  }
  stage();

  var foot = el("div", "lp-foot");
  function nb(l, txt) { var a = el("a", "lp-btn", txt); a.href = "lesson.html?n=" + encodeURIComponent(l.n); a.style.setProperty("--c", l.level.color); return a; }
  foot.appendChild(ix > 0 ? nb(flat[ix - 1], "← " + flat[ix - 1].title) : el("span"));
  var mid = el("a", "lp-btn lp-mid", "All " + level.name + " lessons"); mid.href = "level.html?l=" + level.id; foot.appendChild(mid);
  foot.appendChild(ix < flat.length - 1 ? nb(flat[ix + 1], flat[ix + 1].title + " →") : el("span"));
  main.appendChild(foot);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
