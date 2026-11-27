/* © 10-Minute IT Roadmap. All rights reserved. */
/* Google Cloud certification roadmap. Names checked against the official catalog, November 2026.
   [short code, name, level key, what it covers, where it fits on this roadmap, extra note] */
(function () {
  var VENDOR = "Google", LV = [{"k": "F", "name": "Foundational", "sub": "No experience needed. Cloud and AI knowledge for everyone.", "color": "#22c55e", "valid": "Valid 3 years. Renew by passing the exam again before it expires."}, {"k": "A", "name": "Associate", "sub": "Hands-on basics: deploy and run things on Google Cloud.", "color": "#38bdf8", "valid": "Valid 3 years. Renew by passing the exam again before it expires."}, {"k": "P", "name": "Professional", "sub": "Job-role certifications. Google recommends 3+ years of experience.", "color": "#f59e0b", "valid": "Valid 2 years. Renew by passing the exam again before it expires."}], CERTS = [["CDL", "Google Cloud Digital Leader", "F", "Cloud concepts, Google Cloud products, data and AI, security and cost basics.", "Recommended after Intermediate Module 8: Cloud", ""], ["GAIL", "Google Cloud Generative AI Leader", "F", "What generative AI is and how a business can use Google's AI tools. Non-technical.", "", ""], ["ACE", "Google Associate Cloud Engineer", "A", "Deploy applications, manage projects and run workloads on Google Cloud.", "Cloud specialization: Google Cloud Engineer", ""], ["GWA", "Google Associate Google Workspace Administrator", "A", "Manage users, Gmail, Drive, security and devices in Google Workspace.", "Google Workspace tool path", ""], ["ADP", "Google Associate Data Practitioner", "A", "Prepare, store, analyze and share data on Google Cloud.", "Data and AI specialization", ""], ["PCA", "Google Professional Cloud Architect", "P", "Design, build and manage secure and reliable solutions on Google Cloud.", "Long-term goal for the Cloud specialization", ""], ["PCD", "Google Professional Cloud Developer", "P", "Build and run scalable applications with Google Cloud tools.", "Software Development specialization", ""], ["PCDE", "Google Professional Cloud DevOps Engineer", "P", "Delivery pipelines, reliability (SRE) and monitoring on Google Cloud.", "DevOps specialization", ""], ["PCNE", "Google Professional Cloud Network Engineer", "P", "Design and run Google Cloud and hybrid networks.", "Network Engineering specialization", ""], ["PCSE", "Google Professional Cloud Security Engineer", "P", "Secure Google Cloud: identity, data protection, network security and compliance.", "Cloud specialization: Cloud Security Engineer", ""], ["PSOE", "Google Professional Security Operations Engineer", "P", "SOC work on Google Security Operations: detection, investigation and response.", "Cybersecurity specialization: Security Analyst", ""], ["PDE", "Google Professional Data Engineer", "P", "Design data pipelines and data processing systems.", "Data and AI specialization: Data Engineer", ""], ["PCDB", "Google Professional Cloud Database Engineer", "P", "Design, run and migrate databases on Google Cloud.", "Data and AI specialization: Database Administrator", ""], ["PMLE", "Google Professional Machine Learning Engineer", "P", "Build, deploy and monitor machine learning models on Google Cloud.", "Data and AI specialization: AI and ML Engineer", ""], ["PAA", "Google Professional Agentic Architect", "P", "Design solutions built from AI agents on Google Cloud.", "", "A new certification: check Google's page for the latest details."]], PATHS = [["Cloud", ["cdl", "ace", "pca"]], ["DevOps", ["ace", "pcde"]], ["Security", ["ace", "pcse"]], ["Security Operations (SOC)", ["ace", "psoe"]], ["Networking", ["ace", "pcne"]], ["Data", ["adp", "pde"]], ["Database", ["ace", "pcdb"]], ["AI and Machine Learning", ["ace", "pmle"]], ["Development", ["ace", "pcd"]]];
  var root = document.getElementById("cs-levels"), detail = document.getElementById("cr-detail"), chips = {}, byId = {}, lvOf = {};
  LV.forEach(function (l) { lvOf[l.k] = l; });
  function id(c) { return c[0].toLowerCase(); }
  function badge(c, size) { return '<span class="ct-badge ct-vbadge" style="--vb:' + lvOf[c[2]].color + ';width:' + size + 'px;height:' + size + 'px"><small>' + VENDOR + '</small><b>' + c[0] + '</b></span>'; }
  function show(k, scroll) {
    var c = byId[k]; if (!c) return;
    Object.keys(chips).forEach(function (x) { chips[x].classList.toggle("on", x === k); });
    detail.hidden = false; detail.style.setProperty("--c", lvOf[c[2]].color);
    detail.innerHTML = badge(c, 64) + '<div class="cr-dinfo"><span class="cr-lvl"></span><h3></h3><p></p><div class="cx-valid"><p class="cs-v"></p></div></div>';
    detail.querySelector(".cr-lvl").textContent = lvOf[c[2]].name; detail.querySelector("h3").textContent = c[1]; detail.querySelector("p").textContent = c[3];
    detail.querySelector(".cs-v").textContent = "⏳ " + lvOf[c[2]].valid;
    var info = detail.querySelector(".cr-dinfo");
    if (c[5]) { var n = document.createElement("p"); n.className = "vr-note"; n.textContent = "⚠ " + c[5]; info.appendChild(n); }
    if (c[4]) { var f = document.createElement("em"); f.textContent = "📍 " + c[4]; info.appendChild(f); }
    try { history.replaceState(null, "", "#" + k); } catch (e) {}
    if (scroll) detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  CERTS.forEach(function (c) { byId[id(c)] = c; });
  LV.forEach(function (l) {
    var box = document.createElement("div"); box.className = "cs-level ms-track"; box.style.setProperty("--c", l.color);
    box.innerHTML = '<h3></h3><p class="cs-sub"></p><div class="cs-chips"></div>';
    box.querySelector("h3").textContent = l.name; box.querySelector(".cs-sub").textContent = l.sub;
    CERTS.forEach(function (c) {
      if (c[2] !== l.k) return;
      var b = document.createElement("button"); b.type = "button"; b.className = "cr-chip cr-tile"; b.innerHTML = badge(c, 56) + '<span class="cr-tname"></span>';
      b.querySelector(".cr-tname").textContent = c[1].replace(/^(AWS Certified|Google Cloud|Google) /, "").replace(/ [-–] (Associate|Professional|Specialty)$/, "").replace(" (beta)", ""); b.onclick = function () { show(id(c), true); }; chips[id(c)] = b; box.querySelector(".cs-chips").appendChild(b);
    });
    root.appendChild(box);
  });
  var pb = document.getElementById("vr-paths");
  PATHS.forEach(function (p) {
    var row = document.createElement("div"); row.className = "vr-path"; var h = document.createElement("b"); h.textContent = p[0]; row.appendChild(h);
    var line = document.createElement("span"); line.className = "vr-steps";
    p[1].forEach(function (k, i) {
      if (i) { var a = document.createElement("i"); a.textContent = "→"; line.appendChild(a); }
      var s = document.createElement("button"); s.type = "button"; s.className = "vr-step"; s.style.setProperty("--vb", lvOf[byId[k][2]].color); s.textContent = byId[k][0]; s.title = byId[k][1]; s.onclick = function () { show(k, true); }; line.appendChild(s);
    });
    row.appendChild(line); pb.appendChild(row);
  });
  var h = (location.hash || "").slice(1).toLowerCase(); if (byId[h]) setTimeout(function () { show(h, false); detail.scrollIntoView({ block: "center" }); }, 150);
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
