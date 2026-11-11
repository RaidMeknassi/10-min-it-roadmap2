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

  function certStage() {
    var row = PATH_CERTS.filter(function (r) { return r[0] === P.name; })[0];
    if (!row) return;
    tree.appendChild(link());
    var st = stage("Recommended Certifications", "Optional exams you can aim for in this specialization.");
    var ul = el("ul", "sp-certs"); row[2].forEach(function (t) { ul.appendChild(el("li", "", t)); }); st.appendChild(ul);
    tree.appendChild(st);
  }

  if (MID) {
    document.title = "Intermediate · 10-Minute IT Roadmap";
    document.getElementById("sp-title").textContent = "Intermediate Learning Roadmap";
    document.getElementById("sp-sub").textContent = INTERMEDIATE.desc + " Work through these topics in order. Lessons are coming soon.";
    tree.appendChild(stage("Level 6 \u00B7 Intermediate", "You finished the beginner levels. Now learn how real IT technologies work."));
    INTERMEDIATE.items.forEach(function (it) {
      tree.appendChild(link());
      var c = pathCard(it[0], null, INTERMEDIATE.color, it[1]);
      if (it[2]) { var ul = el("ul", "sp-subs"); it[2].forEach(function (t) { ul.appendChild(el("li", "", t)); }); c.insertBefore(ul, c.querySelector(".sp-bar")); }
      tree.appendChild(c);
    });
    tree.appendChild(link());
    tree.appendChild(stage("What's next?", "Continue to Level 7 and choose your Advanced Specialization."));
    var go = el("a", "sp-go", "Level 7 \u00B7 Advanced Specializations \u2192"); go.href = "level.html?l=l6"; tree.appendChild(go);
  } else if (i === 0) {
    document.getElementById("sp-title").textContent = "Cyber Security Learning Roadmap";
    document.getElementById("sp-sub").textContent = "From fundamental principles to advanced techniques, this roadmap provides clear steps and essential resources to help you build a robust skill set.";
    tree.appendChild(stage("Computer Science Basics", "Acquire the basic computer science skills required to get started in cyber security."));
    tree.appendChild(link()); tree.appendChild(pathCard("Pre-Security Basics"));
    tree.appendChild(link());
    tree.appendChild(stage("Cyber Security Foundations", "Develop cyber security skills needed to enter any career in the industry."));
    tree.appendChild(link()); tree.appendChild(pathCard("Cybersecurity Foundations 101"));
    tree.appendChild(link());
    tree.appendChild(stage("Cyber Security Career Skills", "Master the specific skills necessary for your career of interest. Not sure which career path is right for you? Look at the groups below and pick the one that fits you."));
    tree.appendChild(link());
    var grid = el("div", "sp-groups");
    var groups = TRACKS.l7.concat([]);
    groups.forEach(function (g, gi) {
      var col = el("div", "sp-group"); col.style.setProperty("--pc", g.color);
      col.appendChild(el("h3", "", g.name)); col.appendChild(el("p", "", g.blurb));
      g.paths.forEach(function (pt, pi) {
        col.appendChild(link());
        col.appendChild(pathCard(pt.name, "lesson.html?t=l7&g=" + gi + "&p=" + pi, g.color, pt.topics.length + " topics · coming soon"));
      });
      grid.appendChild(col);
    });
    tree.appendChild(grid);
    tree.appendChild(link());
    certStage();
    tree.appendChild(link());
    tree.appendChild(stage("What's next?", "More labs, rooms and challenges will be added over time."));
  } else {
    document.getElementById("sp-title").textContent = P.name + " Learning Roadmap";
    document.getElementById("sp-sub").textContent = "This specialization is coming soon. Here is the path we are planning, step by step.";
    tree.appendChild(stage("Start here", "Finish Levels 0 to 5 on the main road map first, then follow this path."));
    P.items.forEach(function (t) { tree.appendChild(link()); tree.appendChild(pathCard(t)); });
    tree.appendChild(link());
    certStage();
    tree.appendChild(link());
    tree.appendChild(stage("What's next?", "Lessons for this path will appear here as they are published."));
  }
})();
