/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Languages page: every language as a card with its level gauge, search and category filter. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var cat = "", q = "";
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function chip(label, val, on) {
    var b = el("button", "cx-chip" + (on ? " on" : ""), label); b.type = "button";
    b.addEventListener("click", function () { $("lg-cats").querySelectorAll(".cx-chip").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); cat = val; render(); });
    $("lg-cats").appendChild(b);
  }
  chip("All", "", true);
  LANG_GROUPS.forEach(function (g) { chip(g.emoji + " " + g.name, g.id); });
  $("lg-q").addEventListener("input", function () { q = this.value.trim().toLowerCase(); render(); });
  function card(L) {
    var p = langProgress(L), a = el("a", "lg-card" + (p === 3 ? " is-done" : "")); a.href = "language.html?l=" + L.id; a.style.setProperty("--c", L.color);
    a.innerHTML = '<div class="lg-top">' + langIcon(L, 52) + '<div class="lg-body"><b></b><p></p></div></div><div class="lg-gauge">' + langGauge(p) + '<small></small></div>';
    a.querySelector("b").textContent = L.name; a.querySelector("p").textContent = L.desc;
    a.querySelector("small").textContent = p === 3 ? "✓ All 3 levels done" : "Now: " + LANG_LEVELS[p].name + " · 3 levels · " + (L.lv[0].length + L.lv[1].length + L.lv[2].length) + " lessons";
    return a;
  }
  function render() {
    var grid = $("lg-grid"), n = 0; grid.innerHTML = "";
    LANG_GROUPS.forEach(function (g) {
      if (cat && cat !== g.id) return;
      var list = LANGS.filter(function (L) { return L.group === g.id && (!q || (L.name + " " + L.desc + " " + L.levels.join(" ")).toLowerCase().indexOf(q) >= 0); });
      if (!list.length) return;
      grid.appendChild(el("h2", "tl-group", g.emoji + " " + g.name));
      var box = el("div", "lg-grid"); list.forEach(function (L) { n++; box.appendChild(card(L)); }); grid.appendChild(box);
    });
    $("lg-count").textContent = n ? n + " language" + (n === 1 ? "" : "s") : "No language found. Try another name or clear the filter.";
  }
  render();
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
