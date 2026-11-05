(function () {
  var grid = document.getElementById("grid");
  var svg = document.getElementById("lines");
  var mapArea = document.getElementById("map-area");
  var overlay = document.getElementById("overlay");
  var current = null;

  // ----- saved progress (stays in this browser only) -----
  var done = {};
  try { done = JSON.parse(localStorage.getItem("itroadmap-done") || "{}"); } catch (e) { done = {}; }
  function save() { try { localStorage.setItem("itroadmap-done", JSON.stringify(done)); } catch (e) {} }

  // ----- legend -----
  var legend = document.getElementById("legend");
  Object.keys(TRACKS).forEach(function (k) {
    var s = document.createElement("span");
    s.innerHTML = '<i style="background:' + TRACKS[k].color + '"></i>' + TRACKS[k].name;
    legend.appendChild(s);
  });
  var lockLegend = document.createElement("span");
  lockLegend.textContent = "🔒 = has a lab";
  legend.appendChild(lockLegend);

  // ----- nodes -----
  var els = {};
  LESSONS.forEach(function (l, i) {
    var b = document.createElement("button");
    b.className = "node";
    b.type = "button";
    b.style.setProperty("--c", TRACKS[l.track].color);
    b.style.gridRow = l.row + 1;
    b.style.gridColumn = l.col + 1;
    b.innerHTML =
      '<span class="orb">' + (i + 1) + (l.lab ? '<span class="lock" title="Has a lab">🔒</span>' : "") + "</span>" +
      '<span class="n-title"></span><span class="n-meta">10 min</span>';
    b.querySelector(".n-title").textContent = l.title;
    b.addEventListener("click", function () { openPanel(l); });
    grid.appendChild(b);
    els[l.id] = b;
  });

  // ----- connecting lines -----
  function drawLines() {
    var base = mapArea.getBoundingClientRect();
    svg.setAttribute("viewBox", "0 0 " + base.width + " " + base.height);
    var out = "";
    LESSONS.forEach(function (l) {
      l.from.forEach(function (pid) {
        var p = els[pid].getBoundingClientRect();
        var c = els[l.id].querySelector(".orb").getBoundingClientRect();
        var x1 = p.left + p.width / 2 - base.left, y1 = p.bottom - base.top + 2;
        var x2 = c.left + c.width / 2 - base.left, y2 = c.top - base.top;
        var my = (y1 + y2) / 2;
        var cls = done[pid] && done[l.id] ? "done" : "";
        out += '<path class="' + cls + '" stroke="' + TRACKS[l.track].color + '" d="M' + x1 + " " + y1 +
               " C" + x1 + " " + my + "," + x2 + " " + my + "," + x2 + " " + y2 + '"/>';
      });
    });
    svg.innerHTML = out;
  }

  // ----- progress -----
  function refresh() {
    var n = 0;
    LESSONS.forEach(function (l) {
      var d = !!done[l.id];
      if (d) n++;
      els[l.id].classList.toggle("done", d);
    });
    document.getElementById("progress-text").textContent = n + " / " + LESSONS.length + " lessons";
    document.getElementById("bar-fill").style.width = (n / LESSONS.length * 100) + "%";
    drawLines();
  }

  // ----- lesson panel -----
  function openPanel(l) {
    current = l;
    var t = TRACKS[l.track];
    var tr = document.getElementById("p-track");
    tr.textContent = t.name + " · 10 min";
    tr.style.color = t.color;
    document.getElementById("p-title").textContent = l.title;
    document.getElementById("p-about").textContent = l.about;

    var v = document.getElementById("p-video");
    v.innerHTML = "";
    if (l.video) {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(l.video);
      f.title = l.title;
      f.loading = "lazy";
      f.allow = "accelerometer; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      v.appendChild(f);
    } else {
      v.innerHTML = '<div class="soon">Video coming soon</div>';
    }

    document.getElementById("p-lab").innerHTML = l.lab
      ? "🔒 <b>Lab available.</b> Practice this lesson hands-on. Labs are for subscribers (coming soon)."
      : "This lesson has no lab. Just watch and learn.";

    document.getElementById("p-done").textContent = done[l.id] ? "Mark as not done" : "Mark as done";
    overlay.hidden = false;
  }
  function closePanel() { overlay.hidden = true; var v = document.getElementById("p-video"); v.innerHTML = ""; }

  document.getElementById("p-close").addEventListener("click", closePanel);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closePanel(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
  document.getElementById("p-done").addEventListener("click", function () {
    if (!current) return;
    if (done[current.id]) delete done[current.id]; else done[current.id] = true;
    save(); refresh(); closePanel();
  });

  document.getElementById("subscribe-btn").addEventListener("click", function (e) { e.preventDefault(); });
  document.getElementById("year").textContent = new Date().getFullYear();

  window.addEventListener("resize", drawLines);
  window.addEventListener("load", drawLines);
  refresh();
})();
