/* © 10-Minute IT Roadmap. All rights reserved. */
/* CompTIA certifications page: four levels, each exam with its main subject. */
(function () {
  var LV = [
    { name: "Beginner", sub: "Start your IT journey", color: "#22c55e", certs: [
      ["tech", "Tech+", "Perfect for absolute beginners in tech"],
      ["a", "A+", "IT support, hardware and troubleshooting"],
      ["network", "Network+", "Networking basics, DNS, routing and switching"],
      ["cloudess", "Cloud Essentials+", "Cloud concepts and business use"] ] },
    { name: "Practitioner", sub: "Build real skills", color: "#eab308", certs: [
      ["security", "Security+", "Core cybersecurity concepts and defence"],
      ["linux", "Linux+", "Linux administration and scripting"],
      ["server", "Server+", "Servers, virtualization and infrastructure"],
      ["cloud", "Cloud+", "Cloud operations and security"],
      ["project", "Project+", "IT project management fundamentals"] ] },
    { name: "Advanced", sub: "Specialize your career", color: "#f97316", certs: [
      ["cysa", "CySA+", "SOC analyst and threat detection"],
      ["pentest", "PenTest+", "Ethical hacking and penetration testing"],
      ["secai", "SecAI+", "AI security and protecting AI systems"],
      ["secot", "SecOT+", "Operational technology (OT) security"],
      ["data", "Data+", "Data analytics and visualization"],
      ["datasys", "DataSys+", "Database administration and data systems"],
      ["dataai", "DataAI", "Data and AI"] ] },
    { name: "Expert", sub: "Senior and leadership roles", color: "#ef4444", certs: [
      ["securityx", "SecurityX", "Enterprise security architecture and strategy"],
      ["datax", "DataX", "Advanced data science, governance and leadership"],
      ["cloudnetx", "CloudNetX", "Advanced cloud networking and hybrid architecture"] ] }
  ];
  var FOR = { network: "Recommended after Intermediate Module 1: Networking", linux: "Fits Intermediate Module 3: Linux", security: "Fits Intermediate Module 9: Cybersecurity", cysa: "Fits the Cybersecurity specialization", a: "Fits the Beginner levels", cloud: "Fits Intermediate Module 8: Cloud" };
  var root = document.getElementById("ct-levels"); if (!root) return;
  var hash = (location.hash || "").slice(1);
  LV.forEach(function (lv, i) {
    var col = document.createElement("section"); col.className = "ct-col"; col.style.setProperty("--c", lv.color);
    col.innerHTML = '<div class="ct-head"><span class="ct-step">' + (i + 1) + '</span><div><h3></h3><p></p></div></div><div class="ct-list"></div>';
    col.querySelector("h3").textContent = lv.name + " level"; col.querySelector("p").textContent = lv.sub;
    lv.certs.forEach(function (c) {
      var d = document.createElement("div"); d.className = "ct-card" + (c[0] === hash ? " on" : ""); d.id = c[0];
      d.innerHTML = '<span class="ct-badge"><small>CompTIA</small><b></b></span><div class="ct-info"><b></b><span></span></div>';
      d.querySelector(".ct-badge b").textContent = c[1]; d.querySelector(".ct-info b").textContent = "CompTIA " + c[1]; d.querySelector(".ct-info span").textContent = c[2];
      if (FOR[c[0]]) { var f = document.createElement("em"); f.textContent = FOR[c[0]]; d.querySelector(".ct-info").appendChild(f); }
      col.querySelector(".ct-list").appendChild(d);
    });
    root.appendChild(col);
  });
  if (hash) { var t = document.getElementById(hash); if (t) setTimeout(function () { t.scrollIntoView({ block: "center", behavior: "smooth" }); }, 200); }
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
