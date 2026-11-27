/* © 10-Minute IT Roadmap. All rights reserved. */
/* ISC2 certification roadmap: Entry → Practitioner → Professional → Expert. */
(function () {
  var C = window.ISC2 = {
    cc: ["CC", "Entry", "Certified in Cybersecurity: security principles, access control, network security, incident response and security operations.", "Recommended after Beginner Level 4: Cybersecurity Fundamentals", "No experience needed"],
    sscp: ["SSCP", "Practitioner", "Systems Security Certified Practitioner: hands-on security for admins and analysts, from access controls to incident response.", "Recommended in Advanced Module 9: Cybersecurity", "1 year of security work"],
    cgrc: ["CGRC", "Practitioner", "Governance, Risk and Compliance: managing risk, security controls and audits (formerly CAP).", "", "2 years of work in GRC"],
    cissp: ["CISSP", "Professional", "Certified Information Systems Security Professional: the best-known senior security certificate, across 8 security domains.", "Long-term goal for the Cybersecurity specialization", "5 years in at least 2 of the 8 domains"],
    ccsp: ["CCSP", "Professional", "Certified Cloud Security Professional: securing cloud data, apps and platforms.", "Long-term goal for the Cloud specialization", "5 years in IT, including 3 in security and 1 in cloud security"],
    csslp: ["CSSLP", "Professional", "Certified Secure Software Lifecycle Professional: building security into software from design to release.", "", "4 years in the software lifecycle"],
    issap: ["ISSAP", "Expert", "CISSP concentration in security architecture.", "", "CISSP + 2 years in architecture (or 7 years in total)"],
    issep: ["ISSEP", "Expert", "CISSP concentration in security engineering.", "", "CISSP + 2 years in engineering (or 7 years in total)"],
    issmp: ["ISSMP", "Expert", "CISSP concentration in security management and leadership.", "", "CISSP + 2 years in management (or 7 years in total)"]
  };
  var LV = [
    { name: "Entry", sub: "Start here, no experience needed", color: "#84cc16", ids: ["cc"] },
    { name: "Practitioner", sub: "For people already working in security or IT", color: "#22d3ee", ids: ["sscp", "cgrc"] },
    { name: "Professional", sub: "Senior roles: years of experience required", color: "#a78bfa", ids: ["cissp", "ccsp", "csslp"] },
    { name: "Expert", sub: "CISSP concentrations", color: "#f59e0b", ids: ["issap", "issep", "issmp"] }
  ];
  var VALID = { Entry: "3-year cycle: earn CPE credits and pay the yearly ISC2 fee.", Practitioner: "3-year cycle: earn CPE credits and pay the yearly ISC2 fee.", Professional: "3-year cycle: earn CPE credits and pay the yearly ISC2 fee.", Expert: "3-year cycle: earn CPE credits and pay the yearly ISC2 fee." };
  var root = document.getElementById("cs-levels"), detail = document.getElementById("cr-detail"), chips = {};
  function badge(id) { return '<span class="ct-badge ct-vbadge" style="--vb:#84cc16;width:56px;height:56px"><small>ISC2</small><b>' + C[id][0] + '</b></span>'; }
  function show(id, scroll) {
    var c = C[id]; if (!c) return;
    Object.keys(chips).forEach(function (k) { chips[k].classList.toggle("on", k === id); });
    var lv = LV.filter(function (l) { return l.ids.indexOf(id) >= 0; })[0];
    detail.hidden = false; detail.style.setProperty("--c", lv.color);
    detail.innerHTML = badge(id) + '<div class="cr-dinfo"><span class="cr-lvl"></span><h3></h3><p></p><div class="cx-valid"><p class="cs-v"></p></div></div>';
    detail.querySelector(".cr-lvl").textContent = c[1] + " level"; detail.querySelector("h3").textContent = "ISC2 " + c[0]; detail.querySelector("p").textContent = c[2];
    detail.querySelector(".cs-v").textContent = "\uD83D\uDCBC Experience: " + c[4] + ". \u23F3 " + VALID[c[1]];
    if (c[3]) { var f = document.createElement("em"); f.textContent = "📍 " + c[3]; detail.querySelector(".cr-dinfo").appendChild(f); }
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
