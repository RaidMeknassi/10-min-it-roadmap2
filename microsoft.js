/* © 10-Minute IT Roadmap. All rights reserved. */
/* Microsoft certification roadmap: job areas, each from Fundamentals to Expert. Names and codes checked November 2026.
   [exam code, name, level (F/A/E/S), what it covers, where it fits on this roadmap] */
(function () {
  var TR = [
    { name: "Azure and Infrastructure", sub: "Cloud and server administration", color: "#38bdf8", certs: [
      ["AZ-900", "Azure Fundamentals", "F", "Cloud concepts, core Azure services, pricing and security basics.", "Recommended after Intermediate Module 8: Cloud"],
      ["AZ-104", "Azure Administrator", "A", "Manage Azure identities, storage, virtual machines, networks and monitoring.", "Recommended in Advanced Module 8: Cloud"],
      ["AZ-700", "Azure Network Engineer", "A", "Design and run Azure networking: virtual networks, VPN, load balancing and private access.", "Network Engineering specialization"],
      ["AZ-802", "Windows Server Administrator", "A", "Active Directory, DNS, DHCP, storage and hybrid Windows Server. Replaced AZ-800 and AZ-801.", "Recommended after Intermediate Module 4: Active Directory"],
      ["AZ-305", "Azure Solutions Architect", "E", "Design complete Azure solutions: identity, data, compute, networking and business continuity.", "Long-term goal for the Cloud specialization"],
      ["AZ-140", "Azure Virtual Desktop", "S", "Plan, deliver and manage virtual desktops and remote apps on Azure.", "Remote Desktop tool path"],
      ["AZ-120", "Azure for SAP Workloads", "S", "Plan and run SAP systems on Azure.", "Enterprise Systems specialization"] ] },
    { name: "Security and Identity", sub: "Protect identities, devices, data and cloud", color: "#f472b6", certs: [
      ["SC-900", "Security, Compliance and Identity Fundamentals", "F", "Security, compliance and identity basics: Entra ID, Defender, Sentinel and Purview.", "Cybersecurity specialization: Security Analyst"],
      ["SC-200", "Security Operations Analyst", "A", "SOC work with Defender XDR and Microsoft Sentinel: KQL hunting, incidents and response.", "Cybersecurity specialization: Security Analyst"],
      ["SC-300", "Identity and Access Administrator", "A", "Entra ID, single sign-on, MFA, Conditional Access and identity governance.", "Recommended in Advanced Module 4: Active Directory"],
      ["SC-401", "Information Security Administrator", "A", "Protect data with Microsoft Purview: labels, data loss prevention and retention. Replaced SC-400.", ""],
      ["SC-500", "Cloud and AI Security Engineer", "A", "Secure Azure and AI workloads: identity, network, compute, data and posture. Replaced AZ-500.", "Cloud specialization: Cloud Security Engineer"],
      ["SC-100", "Cybersecurity Architect", "E", "Design a full zero trust security strategy across identity, devices, apps and data.", "Long-term goal for the Cybersecurity specialization"] ] },
    { name: "Microsoft 365 and Devices", sub: "The workplace: users, laptops, Teams and Copilot", color: "#fb923c", certs: [
      ["AB-900", "Microsoft 365 Copilot and Agent Administration Fundamentals", "F", "Microsoft 365 basics with Copilot and agents. Replaced MS-900.", "Microsoft 365 tool path"],
      ["MD-102", "Endpoint Administrator", "A", "Deploy, configure and secure Windows devices with Intune.", "Recommended after Intermediate Module 2: Windows"],
      ["MS-700", "Teams Administrator", "A", "Manage Microsoft Teams: chat, meetings, calling and governance.", "Microsoft 365 tool path"],
      ["MS-721", "Collaboration Communications Systems Engineer", "A", "Teams Phone, meeting rooms and voice systems.", ""],
      ["AB-650", "Microsoft 365 and AI Services Administrator", "A", "Run a Microsoft 365 tenant with its AI services. Replaces MS-102 (retires 30 November 2026).", "Microsoft 365 tool path"] ] },
    { name: "Data and AI", sub: "Databases, analytics and AI applications", color: "#a78bfa", certs: [
      ["DP-900", "Azure Data Fundamentals", "F", "Core data concepts and Azure data services.", "Data and AI specialization: Data Engineer"],
      ["AI-901", "Azure AI Fundamentals", "F", "AI and machine learning concepts and Azure AI services. Replaced AI-900.", "Data and AI specialization: AI and ML Engineer"],
      ["PL-300", "Power BI Data Analyst", "A", "Model data and build reports and dashboards in Power BI.", "Data and AI specialization: Data Analyst"],
      ["DP-300", "Azure Database Administrator", "A", "Run SQL databases on Azure: performance, security, backup and high availability.", "Data and AI specialization: Database Administrator"],
      ["DP-600", "Fabric Analytics Engineer", "A", "Build analytics solutions with Microsoft Fabric.", ""],
      ["DP-700", "Fabric Data Engineer", "A", "Build data pipelines and lakehouses with Microsoft Fabric.", ""],
      ["DP-750", "Azure Databricks Data Engineer", "A", "Data engineering with Azure Databricks.", ""],
      ["DP-800", "SQL AI Developer", "A", "Build AI-powered applications on SQL databases.", ""],
      ["AI-103", "Azure AI Apps and Agents Developer", "A", "Build AI apps and agents on Azure. Replaced AI-102.", ""],
      ["AI-200", "Azure AI Cloud Developer", "A", "Build cloud and AI applications on Azure. Replaced AZ-204.", "Software Development specialization"],
      ["AI-300", "Machine Learning Operations Engineer", "A", "Train, deploy and monitor machine learning models. Replaced DP-100.", ""],
      ["DP-420", "Azure Cosmos DB Developer", "S", "Design and build applications on Azure Cosmos DB.", ""],
      ["AI-500", "Multi-Agent AI Solutions (beta)", "E", "Design solutions where several AI agents work together.", ""] ] },
    { name: "DevOps and GitHub", sub: "Code, pipelines and automation", color: "#4ade80", certs: [
      ["GH-900", "GitHub Foundations", "F", "Repositories, pull requests, Actions and collaboration basics.", "DevOps specialization: DevOps Engineer"],
      ["GH-100", "GitHub Administration", "A", "Manage a GitHub organization: users, permissions and policies.", ""],
      ["GH-200", "GitHub Actions", "A", "Automate builds, tests and deployments with GitHub Actions.", ""],
      ["GH-300", "GitHub Copilot", "A", "Use GitHub Copilot well and responsibly when writing code.", ""],
      ["GH-500", "GitHub Advanced Security", "A", "Code scanning, secret scanning and dependency security.", ""],
      ["GH-600", "GitHub Agentic AI Developer", "A", "Build with AI agents in the GitHub workflow.", ""],
      ["AZ-400", "DevOps Engineer", "E", "Design DevOps processes: source control, CI/CD, security and monitoring.", "Long-term goal for the DevOps specialization"] ] },
    { name: "Power Platform and Business AI", sub: "Low-code apps, automation and AI for business", color: "#fbbf24", certs: [
      ["PL-900", "Power Platform Fundamentals", "F", "What Power Apps, Power Automate, Power BI and Copilot Studio can do.", ""],
      ["AB-730", "AI Business Professional", "F", "Using AI in everyday business work.", ""],
      ["AB-731", "AI Transformation Leader", "F", "Planning and leading AI adoption in an organization.", ""],
      ["AB-410", "Intelligent Applications Builder", "A", "Build business apps with AI on Power Platform. Replaced PL-200.", ""],
      ["AB-620", "AI Agent Builder", "A", "Build AI agents with Copilot Studio.", ""],
      ["AB-400", "Power Platform Developer", "A", "Extend Power Platform with code. Replaces PL-400.", ""],
      ["AB-100", "Agentic AI Business Solutions Architect", "E", "Design AI business solutions across Power Platform and Dynamics 365.", ""] ] }
  ];
  var LVN = { F: "Fundamentals", A: "Associate", E: "Expert", S: "Specialty" }, LVC = { F: "#22c55e", A: "#38bdf8", E: "#f59e0b", S: "#c084fc" };
  var VALID = { F: "Does not expire (Fundamentals have no renewal).", A: "Valid 1 year. Renew for free online each year with a short Microsoft Learn assessment.", E: "Valid 1 year. Renew for free online each year. Expert level usually needs an Associate certification first.", S: "Valid 1 year. Renew for free online each year." };
  var root = document.getElementById("cs-levels"), detail = document.getElementById("cr-detail"), chips = {}, byId = {};
  function id(c) { return c[0].toLowerCase(); }
  function badge(c, size) { return '<span class="ct-badge ct-vbadge" style="--vb:' + LVC[c[2]] + ';width:' + size + 'px;height:' + size + 'px"><small>Microsoft</small><b>' + c[0] + '</b></span>'; }
  function show(k, scroll) {
    var c = byId[k]; if (!c) return;
    Object.keys(chips).forEach(function (x) { chips[x].classList.toggle("on", x === k); });
    detail.hidden = false; detail.style.setProperty("--c", LVC[c[2]]);
    detail.innerHTML = badge(c, 64) + '<div class="cr-dinfo"><span class="cr-lvl"></span><h3></h3><p></p><div class="cx-valid"><p class="cs-v"></p></div></div>';
    detail.querySelector(".cr-lvl").textContent = LVN[c[2]] + " · exam " + c[0]; detail.querySelector("h3").textContent = "Microsoft " + c[1]; detail.querySelector("p").textContent = c[3];
    detail.querySelector(".cs-v").textContent = "⏳ " + VALID[c[2]];
    if (c[4]) { var f = document.createElement("em"); f.textContent = "📍 " + c[4]; detail.querySelector(".cr-dinfo").appendChild(f); }
    try { history.replaceState(null, "", "#" + k); } catch (e) {}
    if (scroll) detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  TR.forEach(function (t) {
    var box = document.createElement("div"); box.className = "cs-level ms-track"; box.style.setProperty("--c", t.color);
    box.innerHTML = '<h3></h3><p class="cs-sub"></p><div class="cs-chips"></div>';
    box.querySelector("h3").textContent = t.name; box.querySelector(".cs-sub").textContent = t.sub;
    var prev = null;
    t.certs.forEach(function (c) {
      byId[id(c)] = c;
      var host = box.querySelector(".cs-chips");
      if (prev && prev !== c[2]) { var g = document.createElement("span"); g.className = "vr-pair"; g.innerHTML = '<span class="cr-to">\u2192</span>'; host.appendChild(g); host = g; }
      prev = c[2];
      var b = document.createElement("button"); b.type = "button"; b.className = "cr-chip cr-tile"; b.innerHTML = badge(c, 56) + '<span class="cr-tname"></span>';
      b.querySelector(".cr-tname").textContent = c[1].replace(" (beta)", ""); b.onclick = function () { show(id(c), true); }; chips[id(c)] = b; host.appendChild(b);
    });
    root.appendChild(box);
  });
  var h = (location.hash || "").slice(1).toLowerCase(); if (byId[h]) setTimeout(function () { show(h, false); detail.scrollIntoView({ block: "center" }); }, 150);
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
