/* Certifications page: search + filters by level and by specialization. */
(function () {
  var LEVELS_F = [["b", "Beginner"], ["i", "Intermediate"], ["a", "Advanced"]];
  var STAGE = { l02: "b", l3: "b", l4: "b", l5: "b", l6: "i", l7: "a", b: "b", i: "i", a: "a" };
  var SPECS_F = ["Cybersecurity", "Network Engineering", "Systems Engineering", "Cloud Computing", "DevOps and Automation", "Software Development", "Data and Artificial Intelligence", "IT Support Engineering"];
  var V = { CompTIA: "#ef4444", Cisco: "#0ea5e9", Microsoft: "#38bdf8", Google: "#34a853", AWS: "#f59e0b", "Red Hat": "#f43f5e", ISC2: "#84cc16", PeopleCert: "#a855f7", "Scrum.org": "#38bdf8", "Scrum Alliance": "#fb923c", PMI: "#a78bfa", "Scaled Agile": "#22d3ee", ServiceNow: "#62d84e", Atlassian: "#2684ff", Salesforce: "#c084fc", HashiCorp: "#8b5cf6", GitHub: "#94a3b8", VMware: "#2dd4bf", "Python Institute": "#facc15", CNCF: "#3b82f6", OffSec: "#fb923c" };
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
    ["ITIL Foundation", "PeopleCert", "ITIL", ["l5"], ["IT Support Engineering"], "course.html?c=itil", "foundation"],
    ["CompTIA Linux+", "CompTIA", "LNX+", ["l6"], ["Systems Engineering"]],
    ["Red Hat RHCSA", "Red Hat", "RHCSA", ["l6", "l7"], ["Systems Engineering"]],
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
  /* certifications from the tool pages (courses.js): each one links to its level on the tool page */
  if (typeof ITIL_COURSE !== "undefined") {
    var IM = ITIL_COURSE.modules;
    ["transformation", "msf", "pic", "cai", "product", "service", "experience", "strategy", "aigov"].forEach(function (id) {
      var t = IM[id]; C.push([t.title + (id === "aigov" ? " (optional)" : ""), "PeopleCert", t.code, [id === "transformation" ? "i" : "a"], ["IT Support Engineering"], "course.html?c=itil&m=" + id, id, function () { return t.lessons.concat(t.examLessons || []); }]);
    });
    ITIL_COURSE.designations.forEach(function (d) { C.push(["ITIL " + d.name + " (designation)", "PeopleCert", d.id.toUpperCase(), ["a"], ["IT Support Engineering"], "course.html?c=itil&m=" + d.modules[0], d.id, function () { var r = []; d.modules.forEach(function (m) { r = r.concat(IM[m].lessons, IM[m].examLessons || []); }); return r; }]); });
    C.push(["ITIL Master", "PeopleCert", "Master", ["a"], ["IT Support Engineering"], "course.html?c=itil&m=master", "master", function () { return IM.master.lessons.concat(IM.master.examLessons || []); }]);
  }

  if (typeof AGILE_PATH !== "undefined") AGILE_PATH.tracks.forEach(function (t) {
    t.certs.forEach(function (c, k) { C.push([c.title + " (" + c.code + ")", c.vendor, c.code, [k === 0 ? "i" : "a"], ["Software Development", "IT Support Engineering"], "path.html?p=agile&c=" + c.id, null, function () { return c.lessons.concat(c.examLessons || []); }]); });
  });
  if (typeof TOOLS !== "undefined") TOOLS.forEach(function (t) {
    var withCert = t.levels.map(function (l, i) { return [l, i]; }).filter(function (x) { return x[0].cert; });
    withCert.forEach(function (x, k) {
      var l = x[0], stage = k === 0 ? "b" : (k === withCert.length - 1 && withCert.length > 2 ? "a" : "i");
      var specs = ["IT Support Engineering"]; if (l.cert[0] === "AZ-140") specs.push("Cloud Computing"); if (t.id === "microsoft365") specs.push("Systems Engineering");
      C.push([l.cert[1] + " (" + t.name + ")", l.cert[2], l.cert[0], [stage], specs, "tool.html?t=" + t.id + "&l=" + x[1], null, function () { return l.lessons.concat(l.exam || []); }]);
    });
  });
  C.forEach(function (c) { var o = []; c[3].forEach(function (l) { var t = STAGE[l]; if (o.indexOf(t) < 0) o.push(t); }); c[3] = o; });
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
  var q0 = new URLSearchParams(location.search).get("q"); if (q0) { $("cx-q").value = q0; q = q0.toLowerCase(); }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function render() {
    var grid = $("cx-grid"); grid.innerHTML = ""; var n = 0;
    C.forEach(function (c) {
      if (selL && c[3].indexOf(selL) < 0) return;
      if (selS && c[4].indexOf(selS) < 0) return;
      if (q && (c[0] + " " + c[1] + " " + c[2]).toLowerCase().indexOf(q) < 0) return;
      n++;
      var col = V[c[1]] || "#a78bfa", card = el(c[5] ? "a" : "div", "cx-card" + (c[5] ? " cx-link" : "")); if (c[5]) card.href = c[5]; card.style.setProperty("--vc", col);
      var certDone = c[7] && typeof rowsDone === "function" && rowsDone(c[7]()); if (certDone) card.classList.add("is-done");
      var badge = el("div", "cx-badge"); badge.appendChild(el("small", "", c[1])); badge.appendChild(el("b", "", c[2]));
      if (c[6] && typeof itilBadgeImg === "function") { var w = document.createElement("div"); w.innerHTML = itilBadgeImg(c[6], 106, "cx-img"); card.appendChild(w.firstChild); } else card.appendChild(badge);
      card.appendChild(el("h3", "", c[0]));
      var tags = el("div", "cx-tags");
      c[3].forEach(function (l) { tags.appendChild(el("span", "cx-tag", lname[l])); });
      c[4].forEach(function (s) { tags.appendChild(el("span", "cx-tag cx-tag-s", s)); });
      card.appendChild(tags); if (c[5]) card.appendChild(el("span", "cx-go", certDone ? "✓ Completed" : c[5].indexOf("course") === 0 ? "Start the course →" : "See the lessons →")); grid.appendChild(card);
    });
    $("cx-count").textContent = n ? n + " certification" + (n === 1 ? "" : "s") : "No certification found. Try another name or clear a filter.";
  }
  render();
})();
