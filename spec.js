/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Specialization page: its own progress tree, with its own background colour. */
(function () {
  var qs = new URLSearchParams(location.search), MID = qs.get("m") === "1";
  var i = parseInt(qs.get("s"), 10);
  if (!MID && (isNaN(i) || !PATHS[i])) { location.replace("index.html"); return; }
  var P = MID ? { name: INTERMEDIATE.title, color: INTERMEDIATE.color } : PATHS[i];
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  document.body.style.setProperty("--c", P.color);
  document.title = P.name + " · 10-Minute IT Roadmap";
  var tree = document.getElementById("sp-tree");

  function pathCard(name, href, color, sub) {
    var a = el(href ? "a" : "div", "sp-path");
    if (href) a.href = href;
    a.style.setProperty("--pc", color || P.color);
    a.appendChild(el("b", "", name));
    a.appendChild(el("span", "sp-state", sub || "Coming soon"));
    var bar = el("div", "sp-bar"); bar.appendChild(el("i")); a.appendChild(bar);
    return a;
  }
  function stage(title, text) {
    var s = el("div", "sp-stage"); s.appendChild(el("h2", "", title)); if (text) s.appendChild(el("p", "", text)); return s;
  }
  function link() { return el("div", "sp-link"); }

  /* "Languages to learn" box for this specialization */
  function langStage() {
    if (MID || typeof SPEC_LANGS === "undefined" || !SPEC_LANGS[P.name] || typeof langSuggestBox !== "function") return;
    var box = langSuggestBox(SPEC_LANGS[P.name]); if (!box) return;
    tree.appendChild(link());
    var st = stage("Languages to learn", "Languages and formats you will use in this specialization.");
    box.classList.add("sp-langs"); st.appendChild(box); tree.appendChild(st);
  }
  function certStage() {
    var row = PATH_CERTS.filter(function (r) { return r[0] === P.name; })[0];
    if (!row) return;
    tree.appendChild(link());
    var st = stage("Recommended Certifications", "Optional exams you can aim for in this specialization.");
    var ul = el("ul", "sp-certs"); row[2].forEach(function (t) { ul.appendChild(el("li", "", t)); }); st.appendChild(ul);
    tree.appendChild(st);
  }

  /* a specialization path that already has lessons: card with its lesson list */
  function specLessonsCard(t) {
    var S = (typeof SPEC_LESSONS !== "undefined") && SPEC_LESSONS[t]; if (!S) return null;
    var doneMap = {}; try { doneMap = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) {}
    var d = 0; S.lessons.forEach(function (r) { if (doneMap[r[0]]) d++; });
    var card = pathCard(t, null, P.color, S.lessons.length + " lessons \u00B7 " + d + " / " + S.lessons.length + " done");
    card.classList.add("sp-has-lessons"); card.querySelector(".sp-bar i").style.width = (d / S.lessons.length * 100) + "%";
    var list = el("div", "lvlist sp-lessons");
    S.lessons.forEach(function (r) {
      var a = el("a", "lc" + (doneMap[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
      a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">\u2713</span>';
      a.querySelector(".cl-ico").textContent = LBL[r[0]]; a.querySelector("b").textContent = r[1];
      a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " \u00B7 10 min";
      var tg = (typeof lessonTags === "function") ? lessonTags(r[0]) : (VIDEOS[r[0]] ? [["Lesson", "t-les"]] : [["Coming soon", "t-soon"]]);
      tg.forEach(function (x) { a.querySelector(".lc-tags").appendChild(el("span", "tg " + x[1], x[0])); });
      list.appendChild(a);
    });
    card.appendChild(list);
    return card;
  }

  var lvCard = function (card, name) {
    card.classList.add("sp-lv");
    var im = document.createElement("img"); im.className = "sp-lv-ico"; im.alt = ""; im.width = 64; im.height = 64;
    im.src = "assets/spec-icons/" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") + ".png?v=1"; im.onerror = function () { im.remove(); };
    card.insertBefore(im, card.firstChild); return card;
  };
  tree.classList.add("sp-compact", "sp-treeview");
  if (MID) {
    document.title = "Intermediate · 10-Minute IT Roadmap";
    document.getElementById("sp-title").textContent = "Intermediate Learning Roadmap";
    document.getElementById("sp-sub").textContent = INTERMEDIATE.desc + " Work through these topics in order. Lessons are coming soon.";
    tree.appendChild(stage("Level 6 \u00B7 Intermediate", "You finished the beginner levels. Now learn how real IT technologies work."));
    INTERMEDIATE.items.forEach(function (it) {
      tree.appendChild(link());
      var c = lvCard(pathCard(it[0], null, INTERMEDIATE.color, it[1]), it[0]);
      if (it[2]) { var ul = el("ul", "sp-subs"); it[2].forEach(function (t) { ul.appendChild(el("li", "", t)); }); c.insertBefore(ul, c.querySelector(".sp-bar")); }
      tree.appendChild(c);
    });
    tree.appendChild(link());
    tree.appendChild(stage("What's next?", "Continue to Level 7 and choose your Advanced Specialization."));
    var go = el("a", "sp-go", "Level 7 \u00B7 Advanced Specializations \u2192"); go.href = "level.html?l=l6"; tree.appendChild(go);
  } else if (i === 0) {
    document.getElementById("sp-title").textContent = "Cyber Security Learning Roadmap";
    document.getElementById("sp-sub").textContent = "From fundamental principles to advanced techniques, this roadmap provides clear steps and essential resources to help you build a robust skill set.";
    tree.appendChild(lvCard(pathCard("Pre-Security Basics"), "Pre-Security Basics"));
    tree.appendChild(link()); tree.appendChild(lvCard(pathCard("Cybersecurity Foundations 101"), "Cybersecurity Foundations 101"));
    tree.appendChild(link());
    var note = stage("Cyber Security Career Skills", "Master the specific skills necessary for your career of interest. Not sure which career path is right for you? Look at the groups below and pick the one that fits you.");
    note.classList.add("sp-note"); tree.appendChild(note);
    tree.appendChild(link());
    var grid = el("div", "sp-groups");
    var groups = TRACKS.l7.concat([]);
    groups.forEach(function (g, gi) {
      var col = el("div", "sp-group"); col.style.setProperty("--pc", g.color);
      col.appendChild(el("span", "sp-bt")); col.appendChild(el("span", "sp-stub"));
      var CIMG = { "Security Analyst": "analyst", "Penetration Tester": "pentester", "Security Engineer": "engineer", "AI Security": "ai" };
      var gh = el("div", "sp-ghead");
      if (CIMG[g.name]) { gh.classList.add("sp-gimg"); var gi2 = document.createElement("img"); gi2.src = "assets/career-icons/" + CIMG[g.name] + ".png?v=2"; gi2.alt = ""; gi2.title = g.blurb; gh.appendChild(gi2);
        var ws = g.name.split(" "), lt = el("div", "sp-gl"); lt.appendChild(el("span", "", ws.slice(0, -1).join(" "))); lt.appendChild(el("b", "", ws[ws.length - 1])); gh.appendChild(lt); gh.title = g.blurb; }
      else { gh.appendChild(el("h3", "", g.name)); gh.appendChild(el("p", "", g.blurb)); }
      col.appendChild(gh);
      g.paths.forEach(function (pt, pi) {
        col.appendChild(link());
        col.appendChild(lvCard(pathCard(pt.name, "lesson.html?t=l7&g=" + gi + "&p=" + pi, g.color, pt.topics.length + " topics · coming soon"), pt.name));
      });
      /* tools and certificates for this career */
      var key = "spec-" + (CIMG[g.name] || "");
      var tb = (typeof levelToolsBox === "function") ? levelToolsBox(key) : null;
      if (tb) { col.appendChild(link()); var tt = el("div", "lang-sugg-t", "Recommended tools"); tb.insertBefore(tt, tb.firstChild); tb.querySelectorAll(".tools-group-title").forEach(function (x) { x.remove(); }); tb.classList.add("sp-extra"); col.appendChild(tb); }
      var cr = (typeof comptiaRecNode === "function") ? comptiaRecNode(key) : null;
      if (cr) { col.appendChild(link()); cr.classList.add("sp-extra"); col.appendChild(cr); }
      col.appendChild(el("span", "sp-fill")); col.appendChild(el("span", "sp-bb")); col.appendChild(el("span", "sp-trunk"));
      grid.appendChild(col);
    });
    tree.appendChild(grid);
  } else {
    document.getElementById("sp-title").textContent = P.title || (P.name + " Learning Roadmap");
    document.getElementById("sp-sub").textContent = "This specialization is coming soon. Here is the path we are planning, step by step.";
    tree.appendChild(stage("Start here", "Finish Levels 0 to 5 on the main road map first, then follow this path."));
    function nodeRow(items, join) {
      var row = el("div", "nt-row" + (join ? " nt-join" : "")); row.style.setProperty("--n", items.length);
      items.forEach(function (it) {
        var col = el("div", "nt-col");
        col.appendChild(el("span", "nt-stub nt-top"));
        var n = el(it.href ? "a" : "div", "nt-node" + (it.href ? "" : " nt-off")); if (it.href) n.href = it.href;
        n.appendChild(el("b", "", it.t)); n.appendChild(el("small", "", it.sub));
        col.appendChild(n);
        if (join) col.appendChild(el("span", "nt-stub nt-bot"));
        row.appendChild(col);
      });
      return row;
    }
    function ntBox(t, href, sub) { var n = el(href ? "a" : "div", "nt-node nt-wide"); if (href) n.href = href; n.appendChild(el("b", "", t)); if (sub) n.appendChild(el("small", "", sub)); return n; }
    function cnt(name) { return SPEC_LESSONS[name] ? SPEC_LESSONS[name].lessons.length + " lessons" : "coming soon"; }
    function anc(name) { return SPEC_LESSONS[name] ? "#" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-") : null; }
    if (i === 1) {
      /* Network Engineering: roadmap map (fundamentals -> advanced -> five branches -> professional specializations -> careers) */
      document.getElementById("sp-title").textContent = P.title;
      document.getElementById("sp-sub").textContent = "A map from networking basics to a professional network career. Click a box to jump to its lessons.";
      tree.classList.add("nt-map");
      tree.innerHTML = "";   // the map starts at Networking Fundamentals
      tree.appendChild(ntBox("Networking Fundamentals", "level.html?l=l3", "Beginner Level 3 + Intermediate Module 1")); tree.appendChild(link());
      tree.appendChild(ntBox("Advanced Networking", null, "Configure, operate, troubleshoot and secure real networks")); tree.appendChild(link());
      tree.appendChild(nodeRow([
        { t: "Advanced Switching", href: anc("Switching Technologies"), sub: cnt("Switching Technologies") },
        { t: "Advanced Routing", href: anc("Routing Technologies"), sub: cnt("Routing Technologies") },
        { t: "Network Security", href: anc("Network Security"), sub: cnt("Network Security") },
        { t: "Troubleshooting", href: anc("Troubleshooting and Monitoring"), sub: cnt("Troubleshooting and Monitoring") },
        { t: "High Availability", href: anc("High Availability"), sub: cnt("High Availability") }], true));
      tree.appendChild(link());
      tree.appendChild(ntBox("Professional Specializations", null, "Choose the field you want. You do not need to study every one.")); tree.appendChild(link());
      tree.appendChild(nodeRow([
        { t: "Network Engineer", href: null, sub: "core path" },
        { t: "Network Security Engineer", href: anc("Advanced Network Security"), sub: cnt("Advanced Network Security") },
        { t: "Cloud Network Engineer", href: anc("Cloud Networking"), sub: cnt("Cloud Networking") },
        { t: "Wireless Network Engineer", href: anc("Wireless Networking"), sub: cnt("Wireless Networking") },
        { t: "Data Center Engineer", href: anc("Data Center Networking"), sub: cnt("Data Center Networking") },
        { t: "Network Automation Engineer", href: anc("Network Automation and Programmability"), sub: cnt("Network Automation and Programmability") },
        { t: "ISP / Telecom Engineer", href: anc("Service Provider and Telecom Networking"), sub: cnt("Service Provider and Telecom Networking") },
        { t: "Network Architect", href: anc("Network Architecture and Design"), sub: cnt("Network Architecture and Design") }], false));
      P.groups.forEach(function (g) {
        tree.appendChild(link()); tree.appendChild(stage(g.title + " · lessons", g.text));
        g.items.forEach(function (t) {
          tree.appendChild(link());
          var c = specLessonsCard(t); c.id = anc(t).slice(1); tree.appendChild(c);
        });
      });
      tree.appendChild(link()); langStage(); certStage();
      tree.appendChild(link());
      tree.appendChild(stage("What's next?", "Lessons for this path will appear here as they are published."));
      return;
    }
    function addItem(t) {
      tree.appendChild(link());
      var note = (typeof PATH_NOTES !== "undefined") && PATH_NOTES[t];
      tree.appendChild(specLessonsCard(t) || lvCard(pathCard(t, null, P.color, note ? note + " \u00B7 coming soon" : null), t));
    }
    if (P.groups) P.groups.forEach(function (g) { tree.appendChild(link()); tree.appendChild(stage(g.title, g.text)); g.items.forEach(addItem); });
    else P.items.forEach(addItem);
    tree.appendChild(link());
    langStage();
    certStage();
    tree.appendChild(link());
    tree.appendChild(stage("What's next?", "Lessons for this path will appear here as they are published."));
  }
})();
