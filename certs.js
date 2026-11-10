/* Certifications page: search + filters by level and by specialization. */
(function () {
  var LEVELS_F = [["l02", "Levels 0-2"], ["l3", "Level 3"], ["l4", "Level 4"], ["l5", "Level 5"], ["l6", "Level 6 Intermediate"], ["l7", "Level 7 Advanced"]];
  var SPECS_F = ["Cybersecurity", "Network Engineering", "Systems Engineering", "Cloud Computing", "DevOps and Automation", "Software Development", "Data and Artificial Intelligence", "IT Support Engineering"];
  var V = { CompTIA: "#ef4444", Cisco: "#0ea5e9", Microsoft: "#38bdf8", Google: "#34a853", AWS: "#f59e0b", "Red Hat": "#f43f5e", ISC2: "#84cc16", PeopleCert: "#a855f7", HashiCorp: "#8b5cf6", GitHub: "#94a3b8", VMware: "#2dd4bf", "Python Institute": "#facc15", CNCF: "#3b82f6", OffSec: "#fb923c" };
  /* [name, vendor, badge text, levels, specializations] */
  var C = [
    ["CompTIA IT Fundamentals (ITF+)", "CompTIA", "ITF+", ["l02"], []],
    ["CompTIA A+", "CompTIA", "A+", ["l02", "l5"], ["IT Support Engineering"]],
    ["Google IT Support Professional Certificate", "Google", "IT", ["l02"], ["IT Support Engineering"]],
    ["CompTIA Network+", "CompTIA", "N+", ["l3"], ["Network Engineering"]],
    ["Cisco CCNA", "Cisco", "CCNA", ["l3"], ["Network Engineering"]],
    ["CompTIA Security+", "CompTIA", "SEC+", ["l4"], ["Cybersecurity"]],
    ["ISC2 Certified in Cybersecurity (CC)", "ISC2", "CC", ["l4"], ["Cybersecurity"]],
    ["Microsoft SC-900", "Microsoft", "SC-900", ["l4"], ["Cybersecurity"]],
    ["ITIL 4 Foundation", "PeopleCert", "ITIL 4", ["l5"], ["IT Support Engineering"]],
    ["CompTIA Linux+", "CompTIA", "LNX+", ["l6"], ["Systems Engineering"]],
    ["Red Hat RHCSA", "Red Hat", "RHCSA", ["l6", "l7"], ["Systems Engineering"]],
    ["Microsoft Endpoint Administrator (MD-102)", "Microsoft", "MD-102", ["l6", "l7"], ["IT Support Engineering", "Systems Engineering"]],
    ["Microsoft AZ-900 Azure Fundamentals", "Microsoft", "AZ-900", ["l6", "l7"], ["Cloud Computing"]],
    ["AWS Cloud Practitioner", "AWS", "CLF", ["l6", "l7"], ["Cloud Computing"]],
    ["Microsoft DP-900 Data Fundamentals", "Microsoft", "DP-900", ["l6", "l7"], ["Data and Artificial Intelligence"]],
    ["Python Institute PCEP", "Python Institute", "PCEP", ["l6", "l7"], ["Software Development"]],
    ["Microsoft SC-200", "Microsoft", "SC-200", ["l7"], ["Cybersecurity"]],
    ["CompTIA CySA+", "CompTIA", "CySA+", ["l7"], ["Cybersecurity"]],
    ["CompTIA PenTest+", "CompTIA", "PT+", ["l7"], ["Cybersecurity"]],
    ["OffSec OSCP", "OffSec", "OSCP", ["l7"], ["Cybersecurity"]],
    ["Cisco CCNP Enterprise", "Cisco", "CCNP", ["l7"], ["Network Engineering"]],
    ["Cisco CCNP Security", "Cisco", "CCNP SEC", ["l7"], ["Network Engineering", "Cybersecurity"]],
    ["Microsoft AZ-800 Windows Server Hybrid Administrator", "Microsoft", "AZ-800", ["l7"], ["Systems Engineering"]],
    ["VMware VCP", "VMware", "VCP", ["l7"], ["Systems Engineering"]],
    ["Microsoft AZ-104 Azure Administrator", "Microsoft", "AZ-104", ["l7"], ["Cloud Computing"]],
    ["AWS Solutions Architect Associate", "AWS", "SAA", ["l7"], ["Cloud Computing"]],
    ["Google Associate Cloud Engineer", "Google", "ACE", ["l7"], ["Cloud Computing"]],
    ["Certified Kubernetes Administrator (CKA)", "CNCF", "CKA", ["l7"], ["DevOps and Automation"]],
    ["HashiCorp Terraform Associate", "HashiCorp", "TF", ["l7"], ["DevOps and Automation"]],
    ["GitHub Foundations", "GitHub", "GH", ["l7"], ["DevOps and Automation", "Software Development"]],
    ["Python Institute PCAP", "Python Institute", "PCAP", ["l7"], ["Software Development"]],
    ["Microsoft AZ-204 Azure Developer", "Microsoft", "AZ-204", ["l7"], ["Software Development"]],
    ["Microsoft AI-900 Azure AI Fundamentals", "Microsoft", "AI-900", ["l7"], ["Data and Artificial Intelligence"]],
    ["Google Data Analytics Certificate", "Google", "DATA", ["l7"], ["Data and Artificial Intelligence"]]
  ];
  var $ = function (i) { return document.getElementById(i); };
  var selL = "", selS = "", q = "";
  var lname = {}; LEVELS_F.forEach(function (l) { lname[l[0]] = l[1]; });
  function chip(box, label, val, onPick, isAll) {
    var b = document.createElement("button"); b.type = "button"; b.className = "cx-chip" + (isAll ? " on" : ""); b.textContent = label; b.setAttribute("data-v", val);
    b.addEventListener("click", function () { box.querySelectorAll(".cx-chip").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); onPick(val); render(); });
    box.appendChild(b);
  }
  chip($("cx-levels"), "All", "", function (v) { selL = v; }, true);
  LEVELS_F.forEach(function (l) { chip($("cx-levels"), l[1], l[0], function (v) { selL = v; }); });
  chip($("cx-specs"), "All", "", function (v) { selS = v; }, true);
  SPECS_F.forEach(function (s) { chip($("cx-specs"), s, s, function (v) { selS = v; }); });
  $("cx-q").addEventListener("input", function () { q = this.value.trim().toLowerCase(); render(); });
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function render() {
    var grid = $("cx-grid"); grid.innerHTML = ""; var n = 0;
    C.forEach(function (c) {
      if (selL && c[3].indexOf(selL) < 0) return;
      if (selS && c[4].indexOf(selS) < 0) return;
      if (q && (c[0] + " " + c[1] + " " + c[2]).toLowerCase().indexOf(q) < 0) return;
      n++;
      var col = V[c[1]] || "#a78bfa", card = el("div", "cx-card"); card.style.setProperty("--vc", col);
      var badge = el("div", "cx-badge"); badge.appendChild(el("small", "", c[1])); badge.appendChild(el("b", "", c[2]));
      card.appendChild(badge); card.appendChild(el("h3", "", c[0]));
      var tags = el("div", "cx-tags");
      c[3].forEach(function (l) { tags.appendChild(el("span", "cx-tag", lname[l])); });
      c[4].forEach(function (s) { tags.appendChild(el("span", "cx-tag cx-tag-s", s)); });
      card.appendChild(tags); grid.appendChild(card);
    });
    $("cx-count").textContent = n ? n + " certification" + (n === 1 ? "" : "s") : "No certification found. Try another name or clear a filter.";
  }
  render();
})();
