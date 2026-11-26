/* © 10-Minute IT Roadmap. All rights reserved. */
/* CompTIA certifications: [name, level, what it covers, where it fits on the roadmap].
   COMPTIA_REC says which certificates are recommended under which level / module (trees and module pages). */
var COMPTIA = {
  tech: ["Tech+", "Beginner", "Perfect for absolute beginners in tech: basic IT concepts, devices, software and security.", "Recommended after Beginner Levels 0 to 2"],
  a: ["A+", "Beginner", "IT support, hardware, operating systems and troubleshooting. The classic first job certificate for help desk.", "Recommended after Beginner Level 5: IT Workplace and Career Preparation"],
  network: ["Network+", "Beginner", "Networking basics: IP addressing, DNS, DHCP, routing, switching, VLANs and network troubleshooting.", "Recommended after Intermediate Module 1: Networking"],
  security: ["Security+", "Practitioner", "Core cybersecurity concepts and defence: threats, identity, network security, risk and incident response.", "Recommended after Intermediate Module 9: Cybersecurity"],
  cysa: ["CySA+", "Advanced", "SOC analyst skills: threat detection, log analysis, vulnerability management and incident response.", "Recommended in Advanced Module 9: Cybersecurity"],
  pentest: ["PenTest+", "Advanced", "Ethical hacking and penetration testing: planning, scanning, exploiting and reporting.", "Recommended in Advanced Module 9: Cybersecurity"],
  securityx: ["SecurityX", "Expert", "Enterprise security architecture, engineering and strategy for senior security roles.", "Recommended in Advanced Module 9: Cybersecurity (expert level)"],
  secai: ["SecAI+", "Advanced", "AI security: protecting AI systems and using AI safely in security work.", "Recommended in Advanced Module 9: Cybersecurity"],
  secot: ["SecOT+", "Advanced", "Operational technology (OT) and industrial control system security.", "Recommended in Advanced Module 9: Cybersecurity"],
  server: ["Server+", "Practitioner", "Servers, storage, virtualization and data center infrastructure.", "Recommended after Intermediate Module 6: Virtualization"],
  linux: ["Linux+", "Practitioner", "Linux administration, permissions, services, scripting and troubleshooting.", "Recommended after Intermediate Module 3: Linux"],
  cloud: ["Cloud+", "Practitioner", "Cloud operations and security: deploying, managing and troubleshooting cloud systems.", "Recommended after Intermediate Module 8: Cloud"],
  cloudnetx: ["CloudNetX", "Expert", "Advanced cloud networking and hybrid network architecture.", "Recommended in Advanced Module 8: Cloud (expert level)"],
  data: ["Data+", "Advanced", "Data analytics and visualization: mining, analysing and reporting on data.", "Recommended in Advanced Module 7: Databases"],
  datasys: ["DataSys+", "Advanced", "Database administration and data systems: deploy, maintain and secure databases.", "Recommended after Intermediate Module 7: Databases"],
  dataai: ["DataAI", "Advanced", "Data and AI: preparing data and working with machine-learning systems.", "Recommended in Advanced Module 7: Databases"],
  project: ["Project+", "Practitioner", "IT project management fundamentals: planning, scheduling, budgets and teams.", "Recommended with the Agile & Project Management pathway"]
};
/* certificates from other vendors shown with the same cards: [short name, level, what it covers, fit, {full, href, vendor, color}] */
COMPTIA.isc2cc = ["CC", "Beginner", "ISC2's entry-level security certificate: security principles, access control, network security, incident response and security operations.", "Recommended after Beginner Level 4: Cybersecurity Fundamentals", { full: "ISC2 Certified in Cybersecurity (CC)", href: "certs.html?q=ISC2", vendor: "ISC2", color: "#84cc16" }];
COMPTIA.sc900 = ["SC-900", "Fundamentals", "Microsoft security, compliance and identity basics: Entra ID, Defender, Sentinel and Purview.", "Recommended in Advanced Module 9: Cybersecurity", { full: "Microsoft SC-900 Security, Compliance and Identity Fundamentals", href: "certs.html?q=SC-900", vendor: "Microsoft", color: "#38bdf8" }];
function certFull(id) { var c = COMPTIA[id]; return c[4] ? c[4].full : "CompTIA " + c[0]; }
function certHref(id) { var c = COMPTIA[id]; return c[4] ? c[4].href : "comptia.html#" + id; }
var COMPTIA_REC = {
  l2: ["tech"], l4: ["isc2cc"], l5: ["a"],
  im4: ["network"], im3: ["linux"], im10: ["server"], im7: ["datasys"], im11: ["cloud"], im9: ["security"],
  "adv-im9": ["cysa", "pentest", "securityx", "secai", "secot", "sc900"], "adv-im7": ["data", "dataai"], "adv-im11": ["cloudnetx"]
};
function comptiaBadge(id, size) {
  var x = COMPTIA[id] && COMPTIA[id][4];
  if (x) return '<span class="ct-badge ct-vbadge" style="--vb:' + x.color + ';width:' + size + 'px;height:' + size + 'px"><small>' + x.vendor + '</small><b>' + COMPTIA[id][0] + '</b></span>';
  return '<img class="cr-badge" src="assets/comptia/' + id + '.png" alt="" width="' + size + '" height="' + size + '">'; }
/* card(s) shown under a level / module on the trees */
function comptiaRecNode(levelId) {
  var ids = COMPTIA_REC[levelId]; if (!ids) return null;
  function stop(n) { n.addEventListener("click", function (e) { e.stopPropagation(); }); return n; }
  if (ids.length === 1) {
    var id = ids[0], a = document.createElement("a"); a.className = "cert-node-card ct-tree ct-rec"; a.href = certHref(id);
    a.innerHTML = comptiaBadge(id, 58) + '<div class="cert-node-text"><b></b><span>Recommended Certification</span></div>';
    a.querySelector(".cert-node-text b").textContent = certFull(id); return stop(a);
  }
  var box = document.createElement("div"); box.className = "ct-recbox ct-rec";
  box.innerHTML = '<span class="ct-recbox-t">Recommended certifications</span><div class="ct-recbox-i"></div>';
  ids.forEach(function (id) {
    var t = document.createElement("a"); t.className = "ct-tile"; t.href = certHref(id); t.title = certFull(id);
    t.innerHTML = comptiaBadge(id, 52) + '<span class="ct-tname"></span>'; t.querySelector(".ct-tname").textContent = COMPTIA[id][0];
    box.querySelector(".ct-recbox-i").appendChild(stop(t));
  });
  return stop(box);
}
/* "Suggested certificate" box at the bottom of a level / module page */
function comptiaLevelBox(levelId) {
  var ids = COMPTIA_REC[levelId]; if (!ids) return null;
  var w = document.createElement("div"); w.className = "lv-toolsbox";
  var h = document.createElement("h3"); h.className = "cert-rec-title"; h.textContent = "\uD83C\uDF93 Suggested certificate" + (ids.length > 1 ? "s" : ""); w.appendChild(h);
  var list = document.createElement("div"); list.className = "lv-certs"; w.appendChild(list);
  ids.forEach(function (id) {
    var c = COMPTIA[id], a = document.createElement("a"); a.className = "lv-cert"; a.href = certHref(id);
    a.innerHTML = comptiaBadge(id, 64) + '<div class="ct-info"><b></b><span></span></div>';
    a.querySelector(".ct-info b").textContent = certFull(id); a.querySelector(".ct-info span").textContent = c[2] + (c[4] ? " See it on the Certifications page \u2192" : " See all CompTIA certifications \u2192");
    list.appendChild(a);
  });
  return w;
}
