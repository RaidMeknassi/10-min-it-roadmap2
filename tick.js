/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Mark a lesson as done straight from a lesson list: the small circle in the top-right corner of each lesson card. */
(function () {
  var KEY = "itroadmap-v2-done";
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} if (window.__progressSaved) try { window.__progressSaved(); } catch (e) {} }
  function keyOf(card) { var h = card.getAttribute("href") || ""; var m = /[?&]n=([^&#]+)/.exec(h); return m ? decodeURIComponent(m[1]) : null; }
  /* refresh "x / y done" and the bar for the list the card belongs to */
  function recount(card) {
    var box = card.closest(".tp-panel") || card.closest(".sp-has-lessons") || card.closest("main") || document.body;
    var cards = box.querySelectorAll("a.lc[href*='n=']"), n = cards.length, c = 0;
    cards.forEach(function (x) { if (x.classList.contains("done")) c++; });
    var metas = box.querySelectorAll(".lv-meta, #lv-meta, .tp-cert, .sp-state");
    if (box.tagName === "MAIN") { var m0 = document.getElementById("lv-meta"); if (m0) metas = [m0]; }
    metas.forEach(function (m) { if (/\d+ \/ \d+ done/.test(m.textContent)) m.textContent = m.textContent.replace(/\d+ \/ (\d+) done/, function (s, t) { return (+t === n ? c : Math.max(0, +s.split(" ")[0] + (card.classList.contains("done") ? 1 : -1))) + " / " + t + " done"; }); });
    var bar = box.tagName === "MAIN" ? document.querySelector("#lv-bar i") : box.querySelector(".sp-bar i");
    if (bar && n) bar.style.width = (c / n * 100) + "%";
  }
  function decorate(root) {
    (root || document).querySelectorAll("a.lc .lc-check").forEach(function (b) {
      if (b.dataset.tick) return; b.dataset.tick = "1";
      b.setAttribute("role", "checkbox"); b.setAttribute("tabindex", "0");
      var card = b.closest("a.lc"); var on = card.classList.contains("done");
      b.setAttribute("aria-checked", on ? "true" : "false"); b.title = on ? "Completed · click to undo" : "Mark as done";
    });
  }
  function toggle(b, e) {
    e.preventDefault(); e.stopPropagation();
    var card = b.closest("a.lc"), k = keyOf(card); if (!k) return;
    var d = load(), on = !d[k];
    if (on) d[k] = true; else delete d[k];
    save(d);
    card.classList.toggle("done", on); b.setAttribute("aria-checked", on ? "true" : "false"); b.title = on ? "Completed · click to undo" : "Mark as done";
    b.classList.remove("pop"); void b.offsetWidth; if (on) b.classList.add("pop");
    recount(card);
  }
  document.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest("a.lc .lc-check"); if (b) toggle(b, e); }, true);
  document.addEventListener("keydown", function (e) { var b = e.target.closest && e.target.closest("a.lc .lc-check"); if (b && (e.key === " " || e.key === "Enter")) toggle(b, e); }, true);
  new MutationObserver(function () { decorate(); }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener("DOMContentLoaded", function () { decorate(); });
})();
