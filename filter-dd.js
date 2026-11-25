/* © 10-Minute IT Roadmap. All rights reserved. */
/* Turns each filter row (label + chips) into a small dropdown: click it, a short scrolling list with tick boxes opens. */
(function () {
  var all = [].slice.call(document.querySelectorAll(".cx-filter"));
  if (!all.length) return;
  function closeAll(except) { all.forEach(function (f) { if (f !== except) f.classList.remove("open"); }); }
  var bar = null;
  all.forEach(function (f) {
    var label = f.querySelector(":scope > span"), panel = f.querySelector(".cx-chips"); if (!label || !panel) return;
    if (!bar || f.previousElementSibling !== bar) { bar = document.createElement("div"); bar.className = "dd-bar"; f.parentNode.insertBefore(bar, f); }
    bar.appendChild(f);   // filters that follow each other sit side by side
    f.classList.add("dd"); panel.classList.add("dd-panel");
    var btn = document.createElement("button"); btn.type = "button"; btn.className = "dd-btn"; btn.setAttribute("aria-haspopup", "listbox");
    btn.innerHTML = '<small></small><b></b>'; btn.querySelector("small").textContent = label.textContent; label.remove(); f.insertBefore(btn, panel);
    var name = btn.querySelector("small").textContent.toLowerCase();
    function sync() {
      var on = panel.querySelector(".cx-chip.on"), t = on ? on.textContent : "All";
      btn.querySelector("b").textContent = (t === "All" ? "All " + (name === "category" ? "categories" : name + "s") : t);
      btn.classList.toggle("set", t !== "All");
    }
    btn.addEventListener("click", function (e) { e.stopPropagation(); var o = !f.classList.contains("open"); closeAll(); f.classList.toggle("open", o); });
    panel.addEventListener("click", function (e) { if (e.target.closest(".cx-chip")) { sync(); f.classList.remove("open"); } e.stopPropagation(); });
    sync();
  });
  document.addEventListener("click", function () { closeAll(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
})();
