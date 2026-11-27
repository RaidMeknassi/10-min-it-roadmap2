/* © 10-Minute IT Roadmap. All rights reserved. */
/* Cisco certification roadmap: Entry → Associate → Professional → Expert. Click a certification to see its details. */
(function () {
  var C = window.CISCO = {
    ccstnet: ["CCST Networking", "Entry", "Networking basics: devices, cables, IP addressing, wireless and simple troubleshooting.", "Recommended after Beginner Level 3: Networking"],
    ccstsec: ["CCST Cybersecurity", "Entry", "Security basics: threats, network and endpoint security, vulnerability assessment and incident handling.", ""],
    ccstit: ["CCST IT Support", "Entry", "Help desk skills: hardware, operating systems, troubleshooting and customer support.", ""],
    ccna: ["CCNA", "Associate", "The classic network engineer exam: switching, routing, IP services, security and automation basics.", "Recommended in Advanced Module 1: Networking"],
    ccnacyber: ["CCNA Cybersecurity", "Associate", "SOC analyst skills: security monitoring, host and network analysis, and incident response. Formerly CyberOps Associate.", "Recommended after Intermediate Module 9: Cybersecurity"],
    ccnaauto: ["CCNA Automation", "Associate", "Network automation and programming: APIs, Python, Cisco platforms and DevOps basics. Formerly DevNet Associate.", ""],
    ccnpent: ["CCNP Enterprise", "Professional", "Enterprise networks: one core exam (ENCOR) plus one concentration such as advanced routing, SD-WAN or wireless.", "Network Engineering specialization"],
    ccnpsec: ["CCNP Security", "Professional", "Network security: firewalls, VPNs, identity and secure access, with a core exam plus one concentration.", "Network Engineering specialization"],
    ccnpcyber: ["CCNP Cybersecurity", "Professional", "Advanced SOC and incident response work. Formerly CyberOps Professional.", "Cybersecurity specialization"],
    ccnpdc: ["CCNP Data Center", "Professional", "Data center networks, compute, storage and automation.", ""],
    ccnpcol: ["CCNP Collaboration", "Professional", "Voice, video and messaging systems such as Webex and call control.", ""],
    ccnpauto: ["CCNP Automation", "Professional", "Building automation and software for Cisco networks. Formerly DevNet Professional.", "DevOps and Automation specialization"],
    ccie: ["CCIE", "Expert", "Cisco's expert level: a written exam plus an 8-hour hands-on lab. Tracks: Enterprise Infrastructure, Enterprise Wireless, Security, Data Center, Collaboration and Automation.", ""],
    ccde: ["CCDE", "Expert", "Cisco Certified Design Expert: large network design and architecture decisions.", ""]
  };
  var LV = [
    { name: "Entry", sub: "CCST: a first step, no experience needed", color: "#22c55e", ids: ["ccstnet", "ccstsec", "ccstit"] },
    { name: "Associate", sub: "CCNA: job-ready skills", color: "#0ea5e9", ids: ["ccna", "ccnacyber", "ccnaauto"] },
    { name: "Professional", sub: "CCNP: core exam + one concentration", color: "#a78bfa", ids: ["ccnpent", "ccnpsec", "ccnpcyber", "ccnpdc", "ccnpcol", "ccnpauto"] },
    { name: "Expert", sub: "CCIE and CCDE: the top of the ladder", color: "#f59e0b", ids: ["ccie", "ccde"] }
  ];
  var VALID = { Entry: "Valid 5 years if earned from 15 July 2025 (earlier CCSTs are valid for life). Renew by passing any Cisco exam.", Associate: "Valid 3 years. Renew with Cisco continuing education credits or by passing an exam.", Professional: "Valid 3 years. Renew with Cisco continuing education credits or by passing an exam.", Expert: "Valid 3 years. Renew with continuing education credits or exams." };
  var root = document.getElementById("cs-levels"), detail = document.getElementById("cr-detail"), chips = {};
  function badge(id) { var c = C[id]; return '<span class="ct-badge ct-vbadge" style="--vb:#0ea5e9;width:56px;height:56px"><small>Cisco</small><b>' + c[0].replace(/^CCST |^CCNA |^CCNP /, function (m) { return m; }).split(" ")[0] + '</b></span>'; }
  function show(id, scroll) {
    var c = C[id]; if (!c) return;
    Object.keys(chips).forEach(function (k) { chips[k].classList.toggle("on", k === id); });
    var lv = LV.filter(function (l) { return l.ids.indexOf(id) >= 0; })[0];
    detail.hidden = false; detail.style.setProperty("--c", lv.color);
    detail.innerHTML = badge(id) + '<div class="cr-dinfo"><span class="cr-lvl"></span><h3></h3><p></p><div class="cx-valid"><p class="cs-v"></p></div></div>';
    detail.querySelector(".cr-lvl").textContent = c[1] + " level"; detail.querySelector("h3").textContent = "Cisco " + c[0]; detail.querySelector("p").textContent = c[2];
    detail.querySelector(".cs-v").textContent = "⏳ " + VALID[c[1]];
    if (c[3]) { var f = document.createElement("em"); f.textContent = "📍 " + c[3]; detail.querySelector(".cr-dinfo").appendChild(f); }
    if (id === "ccna") { var w = document.createElement("div"); w.className = "cx-life st-soon"; w.innerHTML = "<p></p>"; w.querySelector("p").textContent = "📅 Exam 200-301 v1.1 ends 2 February 2027. The new CCNA v2.0 starts 3 February 2027."; detail.querySelector(".cr-dinfo").appendChild(w); }
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
    if (scroll) detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  LV.forEach(function (lv, i) {
    if (i) { var ar = document.createElement("div"); ar.className = "cr-arrow"; ar.textContent = "↓"; root.appendChild(ar); }
    var box = document.createElement("div"); box.className = "cs-level"; box.style.setProperty("--c", lv.color);
    box.innerHTML = '<h3></h3><p class="cs-sub"></p><div class="cs-chips"></div>';
    box.querySelector("h3").textContent = lv.name; box.querySelector(".cs-sub").textContent = lv.sub;
    lv.ids.forEach(function (id) {
      var b = document.createElement("button"); b.type = "button"; b.className = "cr-chip cr-tile"; b.innerHTML = badge(id) + '<span class="cr-tname"></span>';
      b.querySelector(".cr-tname").textContent = C[id][0]; b.onclick = function () { show(id, true); }; chips[id] = b; box.querySelector(".cs-chips").appendChild(b);
    });
    root.appendChild(box);
  });
  var h = (location.hash || "").slice(1); if (C[h]) setTimeout(function () { show(h, false); detail.scrollIntoView({ block: "center" }); }, 150);
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
