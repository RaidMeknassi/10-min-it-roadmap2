/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* highlight the current section in the top menu */
(function () {
  var q = new URLSearchParams(location.search), p = location.pathname, k = "b", n = q.get("n") || "";
  if (/intermediate\.html$/.test(p)) k = "i";
  if (/advanced\.html$/.test(p)) k = "a";
  else if (/spec\.html$/.test(p) && q.get("m") === "1") k = "i";
  else if (/level\.html$/.test(p) && /^im\d+$/.test(q.get("l") || "")) k = "i";
  else if (/lesson\.html$/.test(p) && /^im\d+\./.test(n)) k = "i";
  else if (/spec\.html$/.test(p) || (/level\.html$/.test(p) && q.get("l") === "l6") || (/lesson\.html$/.test(p) && (q.get("p") || q.get("t")))) k = "s";
  if (/lesson\.html$/.test(p) && typeof SPEC_LESSON_KEYS !== "undefined" && SPEC_LESSON_KEYS.indexOf(n) >= 0) k = "s";
  if (/lesson\.html$/.test(p) && typeof TOOLS !== "undefined" && TOOLS.some(function (t) { return n.indexOf(t.id + ".") === 0; })) k = "t";
  if (/path\.html$/.test(p) || (/lesson\.html$/.test(p) && /^agile\./.test(n))) k = "i";
  if (/tools?\.html$/.test(p)) k = "t";
  if (/languages?\.html$/.test(p) || (/lesson\.html$/.test(p) && (/^lang\./.test(n) || (typeof LANGS !== "undefined" && LANGS.some(function (L) { return L.lv.some(function (rows) { return rows.some(function (r) { return r[0] === n; }); }); }))))) k = "g";
  if (/(certs|comptia)\.html$/.test(p)) k = "c";
  if (/plans\.html$/.test(p)) k = "p";
  if ((/level\.html$/.test(p) && /^adv-/.test(q.get("l") || "")) || (/lesson\.html$/.test(p) && /^adv-/.test(q.get("from") || ""))) k = "a";
  var a = document.querySelector('.top-nav a[data-nav="' + k + '"]'); if (a) a.classList.add("on");
  /* on narrow phones the menu scrolls sideways: bring the current section into view so you can see where you are */
  function showOn() { var on = document.querySelector(".top-nav a.on"), nav = on && on.parentNode; if (!nav || nav.scrollWidth <= nav.clientWidth) return; nav.scrollLeft = on.offsetLeft - (nav.clientWidth - on.offsetWidth) / 2; }
  showOn(); window.addEventListener("load", showOn); window.addEventListener("resize", showOn); setTimeout(showOn, 300);
})();

/* keep progress in sync: when you come back to a page (Back button, another tab),
   reload it if lessons were marked done or not done in the meantime */
(function () {
  var KEY = "itroadmap-v2-done", seen;
  function get() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
  seen = get();
  function check() { var now = get(); if (now !== seen) { seen = now; location.reload(); } }
  window.__progressSaved = function () { seen = get(); };   // a page that just saved its own change
  window.addEventListener("pageshow", function (e) { if (e.persisted) check(); });
  window.addEventListener("storage", function (e) { if (e.key === KEY) check(); });
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") check(); });
})();


/* installable phone app: register the service worker */
if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });

/* "Get app" button: installs the website as an app (phone home screen / desktop). */
(function () {
  var btn = document.getElementById("get-app"); if (!btn) return;
  var deferred = null;
  var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  if (standalone) { btn.style.display = "none"; return; }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; });
  window.addEventListener("appinstalled", function () { deferred = null; btn.style.display = "none"; });
  function help() {
    var ua = navigator.userAgent || "", ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1), android = /Android/i.test(ua);
    var steps = ios
      ? ["Open this site in <b>Safari</b>.", "Tap the <b>Share</b> button (square with an arrow).", "Tap <b>Add to Home Screen</b>, then <b>Add</b>."]
      : android
      ? ["Open this site in <b>Chrome</b> (or Samsung Internet).", "Tap the menu <b>⋮</b> at the top right.", "Tap <b>Install app</b> or <b>Add to Home screen</b>, then <b>Install</b>."]
      : ["Open this site in <b>Chrome</b> or <b>Edge</b>.", "Click the <b>install icon</b> at the right end of the address bar (or menu ⋮ → <b>Install</b>).", "Click <b>Install</b>."];
    var bg = document.createElement("div"); bg.className = "app-modal";
    bg.innerHTML = '<div class="app-box" role="dialog" aria-modal="true" aria-label="Install the app"><button type="button" class="app-x" aria-label="Close">×</button>' +
      '<img src="assets/app/icon-192.png" alt="" width="64" height="64" onerror="this.remove()"><h3>Install 10-Minute IT Roadmap</h3>' +
      '<p>Get the app on your home screen. It always opens the live site, so every update appears automatically.</p><ol></ol></div>';
    var ol = bg.querySelector("ol"); steps.forEach(function (s) { var li = document.createElement("li"); li.innerHTML = s; ol.appendChild(li); });
    function close() { bg.remove(); }
    bg.addEventListener("click", function (e) { if (e.target === bg) close(); });
    bg.querySelector(".app-x").addEventListener("click", close);
    document.body.appendChild(bg);
  }
  btn.addEventListener("click", function () {
    if (deferred) { var d = deferred; deferred = null; d.prompt(); if (d.userChoice) d.userChoice.then(function (r) { if (r && r.outcome === "accepted") btn.style.display = "none"; }); }
    else help();
  });
})();
