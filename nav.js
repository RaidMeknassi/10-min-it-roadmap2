/* highlight the current section in the top menu */
(function () {
  var q = new URLSearchParams(location.search), p = location.pathname, k = "b";
  if (/spec\.html$/.test(p) && q.get("m") === "1") k = "i";
  else if (/spec\.html$/.test(p) || (/level\.html$/.test(p) && q.get("l") === "l6") || (/lesson\.html$/.test(p) && (q.get("p") || q.get("t")))) k = "s";
  if (/certs\.html$/.test(p)) k = "c";
  if (/plans\.html$/.test(p)) k = "p";
  var a = document.querySelector('.top-nav a[data-nav="' + k + '"]'); if (a) a.classList.add("on");
})();
