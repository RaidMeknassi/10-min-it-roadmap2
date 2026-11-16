/* highlight the current section in the top menu */
(function () {
  var q = new URLSearchParams(location.search), p = location.pathname, k = "b", n = q.get("n") || "";
  if (/intermediate\.html$/.test(p)) k = "i";
  else if (/spec\.html$/.test(p) && q.get("m") === "1") k = "i";
  else if (/level\.html$/.test(p) && /^im\d+$/.test(q.get("l") || "")) k = "i";
  else if (/lesson\.html$/.test(p) && /^im\d+\./.test(n)) k = "i";
  else if (/spec\.html$/.test(p) || (/level\.html$/.test(p) && q.get("l") === "l6") || (/lesson\.html$/.test(p) && (q.get("p") || q.get("t")))) k = "s";
  if (/lesson\.html$/.test(p) && typeof TOOLS !== "undefined" && TOOLS.some(function (t) { return n.indexOf(t.id + ".") === 0; })) k = "t";
  if (/tools?\.html$/.test(p)) k = "t";
  if (/certs\.html$/.test(p)) k = "c";
  if (/plans\.html$/.test(p)) k = "p";
  var a = document.querySelector('.top-nav a[data-nav="' + k + '"]'); if (a) a.classList.add("on");
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
