/* One tool: a pyramid of levels (basics at the bottom, expert at the top).
   Click a level to see its certification and the lessons for it. The page takes the colour of the chosen level. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var qs = new URLSearchParams(location.search), tool = null;
  TOOLS.forEach(function (t) { if (t.id === qs.get("t")) tool = t; });
  if (!tool) { location.replace("tools.html"); return; }
  var done = {}; try { done = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { done = {}; }
  var main = $("tp"), N = tool.levels.length, sel = parseInt(qs.get("l"), 10);
  if (!(sel >= 0 && sel < N)) sel = -1;
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  document.title = tool.name + " · 10-Minute IT Roadmap";

  // hero
  var hero = el("section", "lvhero tp-hero");
  hero.innerHTML = '<nav class="crumb"><a href="index.html#map">Road map</a><span class="sep">›</span><a href="tools.html">Tools</a><span class="sep">›</span><span class="now"></span></nav>' +
    '<div class="tp-title"><img alt="" width="72" height="72"><div><span class="badge"></span><h1></h1></div></div><p class="tp-desc"></p><p class="tp-note"></p>';
  hero.querySelector(".now").textContent = tool.name;
  hero.querySelector("img").src = "assets/tool-icons/" + tool.id + ".png";
  hero.querySelector(".badge").textContent = (TOOL_GROUPS.filter(function (g) { return g.id === tool.group; })[0] || {}).name || "Tool";
  hero.querySelector("h1").textContent = tool.name;
  hero.querySelector(".tp-desc").textContent = tool.desc;
  hero.querySelector(".tp-note").textContent = tool.note || "";
  main.appendChild(hero);

  // pyramid
  var pyr = el("section", "pyr"); pyr.setAttribute("aria-label", tool.name + " levels");
  main.appendChild(el("p", "pyr-hint", "Click a level to see its lessons. Level 0 is the base; the top is expert."));
  for (var j = 0; j < N; j++) {
    var i = N - 1 - j, lv = tool.levels[i];
    var top = j / N, bot = (j + 1) / N;
    var row = el("a", "pyr-row"); row.href = "tool.html?t=" + tool.id + "&l=" + i; row.dataset.i = i; row.style.setProperty("--c", lv.color);
    row.innerHTML = '<span class="pyr-l"></span><span class="pyr-mid"><span class="pyr-shape"></span><span class="pyr-num"></span></span><span class="pyr-r"></span>';
    row.querySelector(".pyr-shape").style.clipPath = "polygon(" + (50 - 50 * top) + "% 0," + (50 + 50 * top) + "% 0," + (50 + 50 * bot) + "% 100%," + (50 - 50 * bot) + "% 100%)";
    row.querySelector(".pyr-num").textContent = "L" + i;
    row.querySelector(".pyr-l").textContent = lv.cert ? lv.cert[0] : "Level " + i;
    row.querySelector(".pyr-r").textContent = lv.role || lv.title;
    row.addEventListener("click", function (e) { e.preventDefault(); pick(parseInt(this.dataset.i, 10), true); });
    pyr.appendChild(row);
  }
  main.appendChild(pyr);
  var panel = el("section", "tp-panel"); main.appendChild(panel);

  function pick(i, user) {
    sel = i;
    pyr.querySelectorAll(".pyr-row").forEach(function (r) { r.classList.toggle("on", parseInt(r.dataset.i, 10) === i); });
    pyr.classList.toggle("has-sel", i >= 0);
    var color = i >= 0 ? tool.levels[i].color : tool.color;
    document.body.style.setProperty("--c", color); main.style.setProperty("--c", color);
    if (user) history.replaceState(null, "", "tool.html?t=" + tool.id + (i >= 0 ? "&l=" + i : ""));
    panel.innerHTML = "";
    if (i < 0) return;
    var lv = tool.levels[i], c = 0;
    panel.style.setProperty("--c", lv.color);
    var head = el("div", "tp-head");
    if (lv.cert) {
      head.innerHTML = '<div class="cx-badge"><small></small><b></b></div>';
      head.querySelector(".cx-badge").style.setProperty("--vc", lv.color);
      head.querySelector("small").textContent = lv.cert[2]; head.querySelector("b").textContent = lv.cert[0];
    } else head.innerHTML = '<div class="tp-lvnum"></div>';
    var info = el("div", "tp-info");
    info.innerHTML = '<p class="lp-track"></p><h2></h2><p class="tp-cert"></p>';
    info.querySelector(".lp-track").textContent = "Level " + i + " of " + (N - 1) + " · " + (lv.role || "");
    info.querySelector("h2").textContent = lv.title;
    if (lv.cert) { var p = info.querySelector(".tp-cert"); p.textContent = "Certification: " + lv.cert[1] + " (" + lv.cert[2] + ") "; var a = el("a", "", "View in Certifications →"); a.href = "certs.html?q=" + encodeURIComponent(lv.cert[0]); p.appendChild(a); }
    else info.querySelector(".tp-cert").textContent = "No exam at this level: just the skills you need on the job.";
    if (!lv.cert) head.querySelector(".tp-lvnum").textContent = "L" + i;
    head.appendChild(info); panel.appendChild(head);
    var list = el("div", "lvlist");
    lv.lessons.forEach(function (r, k) {
      var a = el("a", "lc" + (done[r[0]] ? " done" : "")); a.href = "lesson.html?n=" + encodeURIComponent(r[0]);
      if (done[r[0]]) c++;
      a.innerHTML = '<span class="cl-ico"></span><span class="lc-body"><b></b><small></small></span><span class="lc-tags"></span><span class="lc-check">✓</span>';
      a.querySelector(".cl-ico").textContent = LBL[r[0]];
      a.querySelector("b").textContent = r[1];
      a.querySelector("small").textContent = "Lesson " + LBL[r[0]] + " · 10 min";
      a.querySelector(".lc-tags").appendChild(el("span", "tg " + (VIDEOS[r[0]] ? "t-les" : "t-soon"), VIDEOS[r[0]] ? "Lesson" : "Coming soon"));
      list.appendChild(a);
    });
    panel.appendChild(el("p", "lv-meta", lv.lessons.length + " lessons · " + c + " / " + lv.lessons.length + " done"));
    panel.appendChild(list);
    var nav = el("nav", "lv-nav");
    function nb(j, txt) { var a = el("a", "lv-nl", txt); a.href = "tool.html?t=" + tool.id + "&l=" + j; a.style.setProperty("--c", tool.levels[j].color); a.addEventListener("click", function (e) { e.preventDefault(); pick(j, true); panel.scrollIntoView({ behavior: "smooth", block: "start" }); }); return a; }
    nav.appendChild(i > 0 ? nb(i - 1, "← Level " + (i - 1)) : el("span"));
    nav.appendChild(i < N - 1 ? nb(i + 1, "Level " + (i + 1) + " →") : el("span"));
    panel.appendChild(nav);
    if (user) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  pick(sel, false);
  if (sel >= 0) setTimeout(function () { panel.scrollIntoView({ block: "start" }); }, 50);
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
