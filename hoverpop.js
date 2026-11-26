/* © 10-Minute IT Roadmap. All rights reserved. */
/* Hover popup: each language, tool or certificate icon on the trees shows ITS OWN lessons (not the module's). */
(function () {
  if (!window.matchMedia || !matchMedia("(hover: hover)").matches) return;
  var CERT_INFO = {
    tech: ["CompTIA Tech+", "#ef4444", "A first certificate for absolute beginners. A good check after Levels 0 to 2.", ["IT concepts and terminology", "Hardware, devices and infrastructure", "Applications and software", "Software development basics", "Data and database basics", "Security basics"]],
    a: ["CompTIA A+", "#ef4444", "The classic first-job certificate for help desk and IT support.", ["Hardware and mobile devices", "Operating systems: Windows, Linux, macOS", "Networking basics", "Security basics", "Software and hardware troubleshooting", "Operational procedures and ticketing"]],
    network: ["CompTIA Network+", "#ef4444", "Recommended certification after this module.", ["Networking concepts: OSI, ports and protocols", "IP addressing and subnetting", "Switching, VLANs and wireless", "Routing basics", "DNS, DHCP and network services", "Network security basics", "Network troubleshooting"]] };
  var pop = document.createElement("div"); pop.className = "flyout-card hov-pop"; document.body.appendChild(pop);
  var cur = null, timer = null;
  function q(href, k) { var m = new RegExp("[?&]" + k + "=([^&#]+)").exec(href || ""); return m ? decodeURIComponent(m[1]) : null; }
  function add(cls, text, href) { var n = document.createElement(href ? "a" : "div"); n.className = cls; if (href) n.href = href; n.textContent = text; pop.appendChild(n); return n; }
  function item(row) { var a = document.createElement("a"); a.className = "fl-item fl-sub"; a.href = "lesson.html?n=" + encodeURIComponent(row[0]); a.innerHTML = '<span class="fl-dot"></span><span class="fl-title"></span>'; a.querySelector(".fl-title").textContent = row[1]; pop.appendChild(a); }
  function build(el) {
    var href = el.getAttribute("href") || "", id; pop.innerHTML = "";
    if ((id = q(href, "l")) && /language\.html/.test(href) && typeof langById === "function") {
      var L = langById(id); if (!L) return false; pop.style.setProperty("--c", "#22c3ee"); add("fl-head", L.name + " · Lessons");
      (L.lv || []).forEach(function (rows, i) { add("fl-group fl-group-link", LANG_LEVELS[i].name, "language.html?l=" + L.id + "&v=" + (i + 1)); rows.forEach(item); });
      return true;
    }
    if ((id = q(href, "t")) && /tool\.html/.test(href) && typeof TOOLS !== "undefined") {
      var T = TOOLS.filter(function (t) { return t.id === id; })[0]; if (!T) return false; pop.style.setProperty("--c", T.color); add("fl-head", T.name + " · Lessons");
      T.levels.forEach(function (lv, i) { add("fl-group fl-group-link", (T.single ? "" : "Level " + i + " · ") + lv.title, "tool.html?t=" + T.id + "&l=" + i); lv.lessons.forEach(item); });
      return true;
    }
    if (/comptia\.html#/.test(href)) {
      var cid = href.split("#")[1], c = CERT_INFO[cid];
      if (!c && typeof COMPTIA !== "undefined" && COMPTIA[cid]) c = ["CompTIA " + COMPTIA[cid][0], "#ef4444", COMPTIA[cid][1] + " level. " + COMPTIA[cid][3] + ".", [COMPTIA[cid][2]]];
      if (!c) return false; pop.style.setProperty("--c", c[1]); add("fl-head", c[0] + " · What it covers");
      var p = document.createElement("p"); p.className = "hp-desc"; p.textContent = c[2]; pop.appendChild(p);
      c[3].forEach(function (t) { var d = document.createElement("div"); d.className = "fl-item fl-sub"; d.innerHTML = '<span class="fl-dot"></span><span class="fl-title"></span>'; d.querySelector(".fl-title").textContent = t; pop.appendChild(d); });
      add("fl-group fl-group-link", "Open the CompTIA roadmap →", href);
      return true;
    }
    return false;
  }
  function place(el) {
    var r = el.getBoundingClientRect(), w = 320, x = r.right + 10; if (x + w > innerWidth - 8) x = Math.max(8, r.left - w - 10);
    pop.style.left = x + "px"; pop.classList.add("on");
    var h = pop.offsetHeight, y = Math.min(Math.max(8, r.top - 20), Math.max(8, innerHeight - h - 8)); pop.style.top = y + "px";
  }
  function hide() { pop.classList.remove("on"); cur = null; }
  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest && e.target.closest(".lang-sugg-a, .tool-chip, .tool-icon, .ct-tree, .ct-tile");
    if (el) { clearTimeout(timer); if (el !== cur) { if (build(el)) { cur = el; place(el); } else hide(); } return; }
    if (e.target.closest && e.target.closest(".hov-pop")) { clearTimeout(timer); return; }
    if (cur) { clearTimeout(timer); timer = setTimeout(hide, 220); }
  });
  window.addEventListener("scroll", function () { if (cur) hide(); }, { passive: true });
})();
