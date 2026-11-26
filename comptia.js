/* © 10-Minute IT Roadmap. All rights reserved. */
/* CompTIA certification roadmap: core foundation, then four specializations. Click a cert to see its details. */
(function () {
  var C = COMPTIA;

  var CORE = ["tech", "a", "network", "security"];
  var SPEC = [
    { name: "Cybersecurity", color: "#22c55e", bg: "#123d2c", icon: '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>', certs: ["cysa", "pentest", "securityx", "secai", "secot"] },
    { name: "Infrastructure", color: "#60a5fa", bg: "#183459", icon: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v4M6 16v-2h12v2"/>', certs: ["server", "linux", "cloud", "cloudnetx"] },
    { name: "Data & AI", color: "#fbbf24", bg: "#45321a", icon: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>', certs: ["data", "datasys", "dataai"] },
    { name: "Management", color: "#c4b5fd", bg: "#33255a", icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>', certs: ["project"] }
  ];
  var IMG = ["tech","a","network","security","cysa","pentest","securityx","secai","secot","server","linux","cloud","cloudnetx","data","datasys","dataai","project"];
  function badge(id, size) { return IMG.indexOf(id) >= 0 ? '<img class="cr-badge" src="assets/comptia/' + id + '.png" alt="" width="' + size + '" height="' + size + '">' : '<span class="ct-badge cr-fb"><small>CompTIA</small><b>' + C[id][0].replace(" Essentials", " Ess.") + '</b></span>'; }
  var LVC = { Beginner: "#22c55e", Practitioner: "#eab308", Advanced: "#f97316", Expert: "#ef4444" };
  var detail = document.getElementById("cr-detail"), chips = {};
  function chip(id, cls) {
    var b = document.createElement("button"); b.type = "button"; b.className = cls + " cr-tile"; b.innerHTML = badge(id, 64) + '<span class="cr-tname"></span>'; b.querySelector(".cr-tname").textContent = C[id][0]; b.dataset.id = id;
    b.onclick = function () { show(id, true); }; (chips[id] = chips[id] || []).push(b); return b;
  }
  function show(id, scroll) {
    var c = C[id]; if (!c) return;
    Object.keys(chips).forEach(function (k) { chips[k].forEach(function (b) { b.classList.toggle("on", k === id); }); });
    detail.hidden = false; detail.style.setProperty("--c", LVC[c[1]]);
    detail.innerHTML = badge(id, 96) + '<div class="cr-dinfo"><span class="cr-lvl"></span><h3></h3><p></p></div>';
    detail.querySelector("h3").textContent = "CompTIA " + c[0];
    detail.querySelector(".cr-lvl").textContent = c[1] + " level"; detail.querySelector("p").textContent = c[2];
    if (c[3]) { var f = document.createElement("em"); f.textContent = "📍 " + c[3]; detail.querySelector(".cr-dinfo").appendChild(f); }
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
    if (scroll) detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  var core = document.getElementById("cr-core");
  CORE.forEach(function (id, i) { if (i) { var a = document.createElement("span"); a.className = "cr-to"; a.textContent = "→"; core.appendChild(a); } core.appendChild(chip(id, "cr-chip")); });

  var grid = document.getElementById("cr-grid");
  SPEC.forEach(function (s) {
    var d = document.createElement("div"); d.className = "cr-spec"; d.style.setProperty("--c", s.color); d.style.setProperty("--bg", s.bg);
    d.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + s.icon + '</svg><h3></h3><div class="cr-specchips"></div>';
    d.querySelector("h3").textContent = s.name;
    s.certs.forEach(function (id) { d.querySelector(".cr-specchips").appendChild(chip(id, "cr-chip cr-chip-s")); });
    grid.appendChild(d);
  });
  var h = (location.hash || "").slice(1);
  if (C[h]) setTimeout(function () { show(h, false); detail.scrollIntoView({ block: "center" }); }, 150);
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
