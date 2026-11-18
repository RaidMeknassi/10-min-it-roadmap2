/* Tools page: every tool as a card, with search and category filter. A card opens that tool's page. */
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var cat = "", q = "";
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function chip(label, val, on) {
    var b = el("button", "cx-chip" + (on ? " on" : ""), label); b.type = "button";
    b.addEventListener("click", function () { $("tl-cats").querySelectorAll(".cx-chip").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); cat = val; render(); });
    $("tl-cats").appendChild(b);
  }
  chip("All", "", true);
  TOOL_GROUPS.forEach(function (g) { chip(g.emoji + " " + g.name, g.id); });
  $("tl-q").addEventListener("input", function () { q = this.value.trim().toLowerCase(); render(); });

  function card(t) {
    var a = el("a", "tl-card" + (rowsDone(toolRows(t)) ? " is-done" : "")); a.href = "tool.html?t=" + t.id; a.style.setProperty("--c", t.color);
    var certs = t.levels.filter(function (l) { return l.cert; }), lessons = 0;
    t.levels.forEach(function (l) { lessons += l.lessons.length + (l.exam ? l.exam.length : 0); });
    a.innerHTML = '<img src="assets/tool-icons/' + t.id + '.png" alt="" width="56" height="56"><div class="tl-body"><b></b><p></p><small></small></div><div class="tl-certs"></div>';
    a.querySelector("b").textContent = t.name;
    a.querySelector("p").textContent = t.desc;
    if (rowsDone(toolRows(t))) a.title = "Completed";
    a.querySelector("small").textContent = (rowsDone(toolRows(t)) ? "✓ Completed · " : "") + (t.single ? "1 lesson" : t.levels.length + " levels · " + lessons + " lessons") + " · " + (certs.length ? certs.length + " certification" + (certs.length > 1 ? "s" : "") : "no official exam");
    var cb = a.querySelector(".tl-certs");
    certs.forEach(function (l) { var s = el("span", "tl-cert", l.cert[0]); s.style.setProperty("--c", l.color); cb.appendChild(s); });
    return a;
  }
  function render() {
    var grid = $("tl-grid"), n = 0; grid.innerHTML = "";
    TOOL_GROUPS.forEach(function (g) {
      if (cat && cat !== g.id) return;
      var list = TOOLS.filter(function (t) {
        if (t.group !== g.id) return false;
        if (!q) return true;
        var hay = [t.name, t.desc].concat(t.tags).concat(t.levels.map(function (l) { return (l.cert ? l.cert.join(" ") : "") + " " + l.title; })).join(" ").toLowerCase();
        return hay.indexOf(q) >= 0;
      });
      if (!list.length) return;
      var h = el("h2", "tl-group", g.emoji + " " + g.name); grid.appendChild(h);
      var box = el("div", "tl-grid"); list.forEach(function (t) { n++; box.appendChild(card(t)); }); grid.appendChild(box);
    });
    $("tl-count").textContent = n ? n + " tool" + (n === 1 ? "" : "s") : "No tool found. Try another name or clear the filter.";
  }
  render();
  var y = $("year"); if (y) y.textContent = new Date().getFullYear();
})();
