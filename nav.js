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
