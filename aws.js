/* © 10-Minute IT Roadmap. All rights reserved. */
/* AWS certification roadmap. Names checked against the official catalog, November 2026.
   [short code, name, level key, what it covers, where it fits on this roadmap, extra note] */
(function () {
  var VENDOR = "AWS", LV = [{"k": "F", "name": "Foundational", "sub": "No experience needed. Start here.", "color": "#22c55e", "valid": "Valid 3 years. Renew by passing the current exam again, or by passing a higher-level AWS exam."}, {"k": "A", "name": "Associate", "sub": "For people who work hands-on with AWS (about 1 year).", "color": "#38bdf8", "valid": "Valid 3 years. Renew by passing the current exam again, or by passing a higher-level AWS exam. Passing a Professional exam also renews the matching Associate."}, {"k": "P", "name": "Professional", "sub": "Advanced design and operations (about 2 years of AWS experience).", "color": "#f59e0b", "valid": "Valid 3 years. Renew by passing the current exam again, or by passing a higher-level AWS exam."}, {"k": "S", "name": "Specialty", "sub": "Deep knowledge in one area.", "color": "#c084fc", "valid": "Valid 3 years. Renew by passing the current exam again, or by passing a higher-level AWS exam."}, {"k": "B", "name": "Business", "sub": "For managers and decision makers, not technical.", "color": "#f472b6", "valid": "New certification. Check the AWS page for its validity rules."}], CERTS = [["CLF", "AWS Certified Cloud Practitioner", "F", "Cloud concepts, core AWS services, security, pricing and billing. Exam CLF-C02.", "Recommended after Intermediate Module 8: Cloud", ""], ["AIF", "AWS Certified AI Practitioner", "F", "AI, machine learning and generative AI concepts and the AWS services for them. Exam AIF-C01.", "Data and AI specialization", ""], ["SAA", "AWS Certified Solutions Architect - Associate", "A", "Design secure, reliable and cost-effective systems on AWS. The most requested AWS certification. Exam SAA-C03.", "Recommended in Advanced Module 8: Cloud", ""], ["DVA", "AWS Certified Developer - Associate", "A", "Build, deploy and debug applications on AWS.", "Software Development specialization", "The exam is changing from DVA-C02 to DVA-C03. The last day for DVA-C02 is 30 November 2026."], ["SOA", "AWS Certified CloudOps Engineer - Associate", "A", "Deploy, run, monitor and fix systems on AWS. This is the new name of SysOps Administrator. Exam SOA-C03.", "Cloud specialization: AWS Cloud Engineer", ""], ["DEA", "AWS Certified Data Engineer - Associate", "A", "Build data pipelines, data lakes and data stores on AWS. Exam DEA-C01.", "Data and AI specialization: Data Engineer", ""], ["MLA", "AWS Certified Machine Learning Engineer - Associate", "A", "Build, deploy and monitor machine learning solutions on AWS.", "Data and AI specialization: AI and ML Engineer", "A new exam version is expected in January 2027."], ["SAP", "AWS Certified Solutions Architect - Professional", "P", "Design complex systems across many accounts: migration, cost control and continuous improvement. Exam SAP-C03 (new since November 2026).", "Long-term goal for the Cloud specialization", ""], ["DOP", "AWS Certified DevOps Engineer - Professional", "P", "Automate delivery, infrastructure, monitoring and incident response on AWS. Exam DOP-C02.", "Long-term goal for the DevOps specialization", ""], ["AIP", "AWS Certified Generative AI Developer - Professional", "P", "Build production generative AI applications on AWS. Exam AIP-C01.", "Data and AI specialization", ""], ["SCS", "AWS Certified Security - Specialty", "S", "Secure AWS workloads: identity, detection, data protection and incident response. Exam SCS-C03.", "Cloud specialization: Cloud Security Engineer", ""], ["ANS", "AWS Certified Advanced Networking - Specialty", "S", "Design and run complex AWS and hybrid networks. Exam ANS-C01.", "Network Engineering specialization", "AWS retires this exam on 31 December 2026. Do not start studying for it now."], ["AIB", "AWS Certified AI Business Strategist (beta)", "B", "Decide where AI fits a business problem. Non-technical. Exam AIB-C01.", "", "Still in beta: details may change."]], PATHS = [["Cloud Architect", ["clf", "saa", "sap"]], ["Cloud Administrator", ["clf", "soa"]], ["DevOps", ["soa", "dop"]], ["Developer", ["clf", "dva", "dop"]], ["Security", ["clf", "saa", "scs"]], ["Data", ["clf", "dea"]], ["AI and Machine Learning", ["aif", "mla", "aip"]]];
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
