/* highlight the current section in the top menu */
(function () {
  var q = new URLSearchParams(location.search), p = location.pathname, k = "b";
  if (/spec\.html$/.test(p) || (/level\.html$/.test(p) && q.get("l") === "l6") || (/lesson\.html$/.test(p) && (q.get("p") || q.get("t")))) k = "s";
  if (location.hash === "#certs") k = "c";
  var a = document.querySelector('.top-nav a[data-nav="' + k + '"]'); if (a) a.classList.add("on");
  window.addEventListener("hashchange", function () {
    var n = location.hash === "#certs" ? "c" : "b";
    document.querySelectorAll(".top-nav a").forEach(function (x) { x.classList.toggle("on", x.getAttribute("data-nav") === n); });
  });
})();
