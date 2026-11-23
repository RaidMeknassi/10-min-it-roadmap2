/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Level page: every lesson of the level as a card. A card opens that lesson on its own page. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var imLevels = (typeof INTERMEDIATE_LEVELS !== "undefined") ? INTERMEDIATE_LEVELS : [];
  var ALL = LEVELS.concat([LEVEL55, LEVEL54, LEVEL52, LEVEL53]).concat(imLevels).concat([{ id: "l6m", name: INTERMEDIATE.name, title: INTERMEDIATE.title, color: INTERMEDIATE.color }, { id: "l6", name: "Level 7", title: "Advanced Specializations", color: "#f472b6" }]);
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var idx = -1, id = new URLSearchParams(location.search).get("l");
  ALL.forEach(function (x, i) { if (x.id === id) idx = i; });
  if (idx < 0) { location.replace("index.html"); return; }
  if (ALL[idx].id === "l6m") { location.replace("intermediate.html"); return; }
  var lv = ALL[idx], isPaths = lv.id === "l6";
  document.title = lv.name + " · " + lv.title + " · 10-Minute IT Roadmap";
  document.body.style.setProperty("--c", lv.color);
  $("lv-badge").textContent = lv.name; $("lv-title").textContent = lv.title;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function tag(t, cls) { return el("span", "tg " + cls, t); }
  var list = $("level-list");
  /* objective of the whole level, above the lessons */
  (function () {
    var goals = (typeof LEVEL_OBJECTIVES !== "undefined" && LEVEL_OBJECTIVES[lv.id]) || null;
    if (!goals || isPaths) return;
    var ob = el("div", "obj-box"); ob.appendChild(el("h3", "", "🎯 Objective"));
    ob.appendChild(el("p", "", "By the end of this level you will be able to:"));
    var ul = el("ul"); goals.forEach(function (g) { ul.appendChild(el("li", "", g)); }); ob.appendChild(ul);
    list.parentNode.insertBefore(ob, list);
  })();

  if (TRACKS[lv.id]) {
    var groups = TRACKS[lv.id], total = 0;
    $("lv-bar").style.display = "none";
    list.className = "lvlist groups";
    if (lv.id === "l8") { var note = el("p", "lv-note", "You work through real attacks step by step, only inside safe practice labs that we provide. Never try these techniques on systems you do not own or have written permission to test."); list.parentNode.insertBefore(note, list); }
    else { var note7 = el("p", "lv-note", "Pick the career you want. Each group is a set of paths, from beginner to advanced."); list.parentNode.insertBefore(note7, list); }
    groups.forEach(function (g, gi) {
      var head = el("div", "grp-head"); head.style.setProperty("--c", g.color);
      head.innerHTML = "<h2></h2><p></p>"; head.querySelector("h2").textContent = g.name; head.querySelector("p").textContent = g.blurb; list.appendChild(head);
      g.paths.forEach(function (pt, pi) {
        total++;
        var a = el("a", "lc"); a.href = "lesson.html?t=" + lv.id + "&g=" + gi + "&p=" + pi; a.style.setProperty("--c", g.color);
        a.innerHTML = '<span class="lc-dot"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"><span class="tg t-soon">Coming soon</span></span>';
        a.querySelector("b").textContent = pt.name; a.querySelector("small").textContent = pt.topics.length + " topics";
        list.appendChild(a);
      });
    });
    $("lv-meta").textContent = groups.length + " groups \u00B7 " + total + " paths";
  } else if (isPaths) {
    $("lv-bar").style.display = "none"; $("lv-meta").textContent = PATHS.length + " paths · choose one";
    /* the specializations as a colour ring */
    var NS = "http://www.w3.org/2000/svg", C = 450, RO = 430, RI = 185, N = PATHS.length;
    var ICON = [
      '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L15.5 9.5"/>',
      '<rect x="9.5" y="3" width="5" height="4" rx="1"/><rect x="3" y="17" width="5" height="4" rx="1"/><rect x="16" y="17" width="5" height="4" rx="1"/><path d="M12 7v4M12 11l-6.5 6M12 11l6.5 6"/>',
      '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M7.5 7h.01M7.5 17h.01M12 10v4"/>',
      '<path d="M7 18a4 4 0 0 1-.6-7.9 5.5 5.5 0 0 1 10.6-1.2A4.5 4.5 0 0 1 17 18z"/>',
      '<path d="M6 9a3 3 0 1 0 0 6c4 0 6-6 12-6a3 3 0 1 1 0 6c-6 0-8-6-12-6z"/>',
      '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14"/>',
      '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
      '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1.5-2 2-5 2"/>',
      '<path d="M4 21V5l8-2v18M12 8h8v13M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2M3 21h18"/>'];
    var SHORT = { "Data and Artificial Intelligence": "Data and AI", "DevOps and Automation": "DevOps and Automation", "IT Support Engineering": "IT Support" };
    function pt(r, deg) { var t = deg * Math.PI / 180; return [C + r * Math.cos(t), C + r * Math.sin(t)]; }
    var svg = document.createElementNS(NS, "svg"); svg.setAttribute("viewBox", "0 0 900 900"); svg.setAttribute("class", "sp-ring"); svg.setAttribute("role", "list");
    PATHS.forEach(function (p, i) {
      var a0 = -90 + i * 360 / N, a1 = a0 + 360 / N, mid = (a0 + a1) / 2, o0 = pt(RO, a0), o1 = pt(RO, a1), i1 = pt(RI, a1), i0 = pt(RI, a0);
      var g = document.createElementNS(NS, "a"); g.setAttribute("href", "spec.html?s=" + i); g.setAttribute("class", "sp-seg"); g.style.setProperty("--c", p.color); g.setAttribute("role", "listitem");
      var d = "M" + o0 + " A" + RO + " " + RO + " 0 0 1 " + o1 + " L" + i1 + " A" + RI + " " + RI + " 0 0 0 " + i0 + " Z";
      var path = document.createElementNS(NS, "path"); path.setAttribute("d", d); g.appendChild(path);
      var m = pt((RO + RI) / 2, mid), label = SHORT[p.name] || p.name, words = label.split(" "), lines = [], cur = "";
      words.forEach(function (w) { if ((cur + " " + w).trim().length > 13 && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); }); lines.push(cur);
      var ic = document.createElementNS(NS, "g"); ic.setAttribute("class", "sp-ico"); ic.setAttribute("transform", "translate(" + (m[0] - 21) + " " + (m[1] - 38 - lines.length * 11) + ") scale(1.75)"); ic.innerHTML = ICON[i] || ICON[0]; g.appendChild(ic);
      var tx = document.createElementNS(NS, "text"); tx.setAttribute("x", m[0]); tx.setAttribute("text-anchor", "middle");
      lines.forEach(function (ln, k) { var ts = document.createElementNS(NS, "tspan"); ts.setAttribute("x", m[0]); ts.setAttribute("y", m[1] + 28 - lines.length * 11 + k * 24); ts.textContent = ln; tx.appendChild(ts); });
      g.appendChild(tx);
      var ti = document.createElementNS(NS, "title"); ti.textContent = p.name; g.appendChild(ti);
      svg.appendChild(g);
    });
    var ct = document.createElementNS(NS, "text"); ct.setAttribute("class", "sp-center"); ct.setAttribute("text-anchor", "middle");
    [["Specializations", 450, 440, "sp-c1"], ["Choose one path", 450, 480, "sp-c2"]].forEach(function (r) { var ts = document.createElementNS(NS, "tspan"); ts.setAttribute("x", r[1]); ts.setAttribute("y", r[2]); ts.setAttribute("class", r[3]); ts.textContent = r[0]; ct.appendChild(ts); });
    svg.appendChild(ct);
    var wrap = el("div", "sp-ring-wrap"); wrap.appendChild(svg); list.appendChild(wrap);
  } else {
    var c = 0;
    lv.lessons.forEach(function (row, rk) {
      var n = row[0], a = el("a", "lc" + (done[n] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(n) + "&from=" + encodeURIComponent(lv.id);
      if (done[n]) c++;
      a.innerHTML = '<span class="ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
      var iconSrc = /^im\d+\./.test(n) ? "assets/lesson-icons/" + n + ".png" : "assets/lesson-icons/" + n + ".png";
      a.querySelector(".ico").innerHTML = '<img src="' + iconSrc + '" alt="" width="28" height="28" style="border-radius:8px;vertical-align:middle;">';
      a.querySelector("b").textContent = row[1]; a.querySelector("small").textContent = "Lesson " + (lv.lbl ? lv.lbl(rk) : (LBL[n] || n)) + " · 10 min";
      var tg = a.querySelector(".lc-tags"), has = LESSON_PAGES[n] || VIDEOS[n];
      if (has) tg.appendChild(tag("Lesson", "t-les"));
      if (QUIZZES[n]) tg.appendChild(tag("Quiz", "t-quiz"));
      if (hasLab(n)) tg.appendChild(tag("Lab", "t-lab"));
      if (!has && !QUIZZES[n]) tg.appendChild(tag("Coming soon", "t-soon"));
      list.appendChild(a);
    });
    $("lv-meta").textContent = lv.lessons.length + " lessons · " + c + " / " + lv.lessons.length + " done";
    document.querySelector("#lv-bar i").style.width = (c / lv.lessons.length * 100) + "%";

    var tbx = levelToolsBox(lv.id);
    if (tbx) { var th = el("h3", "cert-rec-title", "\uD83D\uDEE0 Tools for this level"); var wrap = el("div", "lv-toolsbox"); wrap.appendChild(th); wrap.appendChild(tbx); list.parentNode.insertBefore(wrap, list.nextSibling); }
  }
  var nav = $("lv-nav"), prev = ALL[idx - 1], next = ALL[idx + 1];
  function nl(x, txt, cls) { var a = el("a", "lv-nl " + cls, txt); a.href = "level.html?l=" + x.id; a.style.setProperty("--c", x.color); nav.appendChild(a); }
  if (prev) nl(prev, "← " + prev.name + " · " + prev.title, "prev"); else nav.appendChild(el("span"));
  if (next) nl(next, next.name + " · " + next.title + " →", "next");
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
