/* Fake-3D lesson icons, drawn as vector shapes (no image files).
   iconSVG("5", "#a78bfa") returns an <svg> string: a glossy tile with a 3D object on it. */
(function () {
  var PAL = {
    blue: ["#8dbcff", "#2f6df6", "#1a3fa8"], sky: ["#9fe6ff", "#2eb4ff", "#1070b8"], green: ["#8be8a2", "#22b04f", "#127a33"],
    red: ["#ffa595", "#ef4136", "#a3221a"], orange: ["#ffcb94", "#ff8a1f", "#b85a0a"], yellow: ["#fff3a8", "#ffc61f", "#b88a0a"],
    gold: ["#ffe596", "#f0a800", "#a06a00"], purple: ["#cdb0ff", "#8b52f0", "#5628a8"], pink: ["#ffb0d6", "#ee4f9a", "#a02560"],
    teal: ["#98f2e4", "#1fc2ad", "#0c7f70"], gray: ["#f4f6fa", "#aeb6c6", "#6c7589"], dark: ["#656c84", "#2a2f42", "#12141f"],
    white: ["#ffffff", "#eef1f7", "#b9c0d0"], brown: ["#ecb882", "#c07a3a", "#7a4515"]
  };
  var uid = 0;
  function defs() {
    if (document.getElementById("ig-defs")) return;
    var g = "";
    Object.keys(PAL).forEach(function (k) {
      g += '<linearGradient id="ig-' + k + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + PAL[k][0] + '"/><stop offset=".55" stop-color="' + PAL[k][1] + '"/><stop offset="1" stop-color="' + PAL[k][2] + '"/></linearGradient>';
    });
    g += '<linearGradient id="ig-tile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe4f0"/></linearGradient>';
    var s = document.createElement("div");
    s.id = "ig-defs"; s.setAttribute("aria-hidden", "true");
    s.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
    s.innerHTML = '<svg width="0" height="0"><defs>' + g + "</defs></svg>";
    document.body.insertBefore(s, document.body.firstChild);
  }
  function F(c) { return "url(#ig-" + c + ")"; }
  function D(c) { return PAL[c][2]; }
  function B(c) { return PAL[c][1]; }
  // primitives (each has a darker copy underneath for depth, and a soft gloss on top)
  function rr(x, y, w, h, r, c, nogloss) {
    return '<rect x="' + x + '" y="' + (y + 3) + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + D(c) + '"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + F(c) + '"/>' +
      (nogloss ? "" : '<rect x="' + (x + 2) + '" y="' + (y + 1.5) + '" width="' + (w - 4) + '" height="' + (h * 0.38) + '" rx="' + Math.max(r - 1, 1) + '" fill="#fff" opacity=".26"/>');
  }
  function ci(x, y, r, c) {
    return '<circle cx="' + x + '" cy="' + (y + 3) + '" r="' + r + '" fill="' + D(c) + '"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + F(c) + '"/>' +
      '<ellipse cx="' + (x - r * 0.22) + '" cy="' + (y - r * 0.45) + '" rx="' + r * 0.52 + '" ry="' + r * 0.26 + '" fill="#fff" opacity=".3"/>';
  }
  function pg(pts, c) {
    return '<polygon points="' + pts + '" fill="' + D(c) + '" transform="translate(0 3)" stroke="' + D(c) + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<polygon points="' + pts + '" fill="' + F(c) + '" stroke="' + B(c) + '" stroke-width="3" stroke-linejoin="round"/>';
  }
  function ln(x1, y1, x2, y2, w, c) {
    return '<line x1="' + x1 + '" y1="' + (y1 + 2) + '" x2="' + x2 + '" y2="' + (y2 + 2) + '" stroke="' + D(c) + '" stroke-width="' + w + '" stroke-linecap="round"/>' +
      '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + B(c) + '" stroke-width="' + w + '" stroke-linecap="round"/>';
  }
  function pa(d, c, w, fill) {
    return '<path d="' + d + '" fill="' + (fill || "none") + '" stroke="' + D(c) + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 2.5)"/>' +
      '<path d="' + d + '" fill="' + (fill || "none") + '" stroke="' + (c === "white" ? "#fff" : B(c)) + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function tx(x, y, s, size, col, dark) {
    return '<text x="' + x + '" y="' + (y + 2) + '" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="' + size + '" text-anchor="middle" fill="' + (dark || "#000") + '" opacity=".35">' + s + '</text>' +
      '<text x="' + x + '" y="' + y + '" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="' + size + '" text-anchor="middle" fill="' + col + '">' + s + '</text>';
  }
  function rot(a, cx, cy, inner) { return '<g transform="rotate(' + a + ' ' + cx + ' ' + cy + ')">' + inner + "</g>"; }
  // reusable objects
  function monitor(sc, extra) {
    return rr(16, 18, 68, 48, 8, "dark") + rr(21, 23, 58, 36, 4, sc, true) + (extra || "") + rr(43, 66, 14, 9, 2, "gray") + rr(30, 74, 40, 7, 3.5, "gray");
  }
  function window_(c, lines) {
    var s = rr(14, 22, 72, 58, 9, "white") + rr(14, 22, 72, 17, 9, c) + ci(24, 30.5, 3, "red") + ci(33, 30.5, 3, "yellow") + ci(42, 30.5, 3, "green");
    if (lines) s += rr(22, 47, 40, 5, 2.5, "gray", true) + rr(22, 57, 54, 5, 2.5, "gray", true) + rr(22, 67, 30, 5, 2.5, "gray", true);
    return s;
  }
  function cube(top, left, right, cx, cy, s) {
    var a = s, h = s * 0.58;
    return pg((cx) + "," + (cy - a) + " " + (cx + a) + "," + (cy - a + h) + " " + cx + "," + (cy - a + 2 * h) + " " + (cx - a) + "," + (cy - a + h), top) +
      pg((cx - a) + "," + (cy - a + h) + " " + cx + "," + (cy - a + 2 * h) + " " + cx + "," + (cy + a + h * 0.2) + " " + (cx - a) + "," + (cy + h * 0.2 + 2), left) +
      pg(cx + "," + (cy - a + 2 * h) + " " + (cx + a) + "," + (cy - a + h) + " " + (cx + a) + "," + (cy + h * 0.2 + 2) + " " + cx + "," + (cy + a + h * 0.2), right);
  }
  function terminal(color, text, sz) { return rr(14, 24, 72, 54, 9, "dark") + rr(14, 24, 72, 12, 9, "gray", true) + ci(23, 30, 2.6, "red") + ci(31, 30, 2.6, "yellow") + ci(39, 30, 2.6, "green") + tx(50, 66, text, sz || 26, color); }
  function folder(c) { return rr(14, 28, 30, 14, 5, c) + rr(14, 36, 72, 42, 8, c); }
  function person(x, y, s, c) { return ci(x, y, 9 * s, c) + rr(x - 13 * s, y + 12 * s, 26 * s, 22 * s, 10 * s, c); }
  function gear(cx, cy, r, c, teeth) {
    var t = ""; for (var i = 0; i < teeth; i++) t += rot(i * 360 / teeth, cx, cy, rr(cx - 5, cy - r - 4, 10, 12, 3, c, true));
    return t + ci(cx, cy, r, c) + ci(cx, cy, r * 0.42, "dark");
  }

  var G = {
    "0.1": function () { return ln(30, 22, 30, 82, 6, "gray") + pg("34,24 78,34 34,50", "green") + ci(30, 20, 5, "gold"); },
    "0.2": function () { return rr(26, 26, 48, 48, 9, "blue") + [34, 46, 58, 70].map(function (v) { return ln(v, 18, v, 26, 4, "gray") + ln(v, 74, v, 82, 4, "gray") + ln(18, v, 26, v, 4, "gray") + ln(74, v, 82, v, 4, "gray"); }).join("") + tx(50, 61, "IT", 26, "#fff"); },
    "0.3": function () { return rr(38, 22, 24, 16, 6, "gray") + rr(16, 34, 68, 44, 9, "orange") + rr(16, 52, 68, 6, 2, "brown", true) + rr(44, 49, 12, 12, 3, "gold"); },
    "0.4": function () { return ci(50, 52, 34, "red") + ci(50, 52, 24, "white") + ci(50, 52, 14, "red") + ci(50, 52, 5, "white") + ln(50, 52, 84, 18, 4, "dark") + pg("84,10 92,22 80,22", "gold"); },
    "1": function () { return monitor("blue", rr(30, 34, 24, 4, 2, "white", true) + rr(30, 44, 36, 4, 2, "sky", true)); },
    "2": function () { return rr(24, 24, 52, 52, 9, "gray") + [34, 46, 58, 70].map(function (v) { return ln(v, 14, v, 24, 4, "gold") + ln(v, 76, v, 86, 4, "gold") + ln(14, v, 24, v, 4, "gold") + ln(76, v, 86, v, 4, "gold"); }).join("") + rr(36, 36, 28, 28, 6, "dark") + ci(50, 50, 6, "teal"); },
    "3": function () { return window_("blue", true); },
    "4": function () { return gear(40, 46, 20, "gray", 8) + gear(68, 68, 11, "orange", 6) + gear(66, 28, 9, "teal", 6); },
    "5": function () { return rr(14, 20, 72, 60, 10, "dark") + tx(34, 50, "01", 22, "#4ade80") + tx(66, 50, "10", 22, "#4ade80") + tx(34, 72, "11", 18, "#2dd4bf") + tx(66, 72, "00", 18, "#2dd4bf"); },
    "6": function () { return monitor("sky", rr(27, 29, 12, 12, 3, "red", true) + rr(43, 29, 12, 12, 3, "yellow", true) + rr(59, 29, 12, 12, 3, "green", true) + rr(21, 51, 58, 8, 2, "dark", true)); },
    "7": function () { return rr(10, 16, 48, 36, 7, "teal") + rr(26, 34, 48, 36, 7, "purple") + rr(42, 52, 48, 34, 7, "orange"); },
    "8": function () { return ln(50, 50, 22, 24, 4, "gray") + ln(50, 50, 78, 24, 4, "gray") + ln(50, 50, 22, 76, 4, "gray") + ln(50, 50, 78, 76, 4, "gray") + ci(50, 50, 15, "blue") + ci(22, 24, 9, "green") + ci(78, 24, 9, "orange") + ci(22, 76, 9, "pink") + ci(78, 76, 9, "teal"); },
    "9": function () { return ci(50, 50, 34, "green") + pa("M36 36 A19 19 0 1 0 64 36", "white", 7) + ln(50, 26, 50, 50, 7, "white"); },
    "10": function () { return window_("sky", false) + rr(22, 48, 38, 5, 2.5, "gray", true) + ci(60, 50.5, 6, "blue") + rr(22, 62, 38, 5, 2.5, "gray", true) + ci(40, 64.5, 6, "blue"); },
    "11": function () { return terminal("#4ade80", "$_", 28); },
    "12": function () { return rr(20, 20, 60, 42, 6, "dark") + rr(24, 24, 52, 34, 3, "purple", true) + pg("10,66 90,66 84,78 16,78", "gray") + rr(40, 66, 20, 4, 2, "dark", true); },
    "13": function () { return rr(32, 12, 36, 76, 10, "dark") + rr(36, 20, 28, 56, 4, "blue", true) + rr(44, 15, 12, 3, 1.5, "gray", true) + ci(50, 82, 2.5, "gray") + rr(40, 28, 8, 8, 2, "orange", true) + rr(52, 28, 8, 8, 2, "pink", true) + rr(40, 40, 8, 8, 2, "green", true) + rr(52, 40, 8, 8, 2, "yellow", true); },
    "14": function () { return ln(50, 26, 50, 78, 5, "gray") + rr(32, 76, 36, 8, 4, "gray") + ln(20, 32, 80, 32, 5, "gray") + ln(20, 32, 14, 56, 2.5, "gray") + ln(20, 32, 26, 56, 2.5, "gray") + ln(80, 32, 74, 56, 2.5, "gray") + ln(80, 32, 86, 56, 2.5, "gray") + rr(10, 56, 20, 7, 3.5, "blue") + rr(70, 56, 20, 7, 3.5, "orange") + ci(50, 24, 6, "gold"); },
    "15": function () { return ci(50, 50, 34, "sky") + '<ellipse cx="50" cy="50" rx="15" ry="34" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/><line x1="16" y1="50" x2="84" y2="50" stroke="#fff" stroke-width="3" opacity=".8"/><path d="M22 32 Q50 40 78 32 M22 68 Q50 60 78 68" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>'; },
    "16": function () { return ln(30, 48, 24, 24, 4, "gray") + ln(70, 48, 76, 24, 4, "gray") + rr(12, 48, 76, 26, 9, "dark") + ci(28, 61, 3.5, "green") + ci(40, 61, 3.5, "green") + ci(52, 61, 3.5, "yellow") + rr(66, 57, 14, 7, 3, "gray", true); },
    "17": function () { return pa("M50 86 C30 60 24 50 24 38 A26 26 0 0 1 76 38 C76 50 70 60 50 86 Z", "red", 4, F("red")) + ci(50, 38, 12, "white") + tx(50, 44, "IP", 14, "#ef4136"); },
    "18": function () { return rr(14, 14, 34, 34, 7, "blue") + rr(52, 14, 34, 34, 7, "green") + rr(14, 52, 34, 34, 7, "orange") + rr(52, 52, 34, 34, 7, "purple"); },
    "19": function () { return rr(12, 30, 76, 42, 9, "teal") + rr(12, 30, 76, 10, 9, "dark", true) + tx(50, 62, "MAC", 20, "#fff"); },
    "20": function () { return rr(22, 14, 56, 72, 6, "purple") + rr(22, 14, 10, 72, 4, "dark", true) + rr(38, 28, 32, 28, 4, "white", true) + tx(54, 48, "DNS", 13, "#5628a8") + rr(38, 62, 32, 5, 2.5, "white", true); },
    "21": function () { return rr(12, 32, 76, 38, 8, "orange") + ci(12, 51, 7, "white") + ci(88, 51, 7, "white") + ln(34, 36, 34, 66, 2, "white") + tx(60, 62, "#", 30, "#fff"); },
    "22": function () { return cube("brown", "brown", "orange", 50, 54, 34) + ln(50, 28, 50, 46, 5, "gold"); },
    "23": function () { return rr(16, 32, 68, 42, 8, "dark") + rr(26, 40, 48, 26, 4, "gray") + [34, 42, 50, 58, 66].map(function (v) { return rr(v - 2, 48, 4, 12, 1, "gold", true); }).join("") + rr(42, 18, 16, 14, 3, "gray") + ln(50, 14, 50, 6, 4, "dark"); },
    "24": function () { return rr(10, 36, 80, 30, 8, "blue") + [20, 32, 44, 56, 68].map(function (v) { return rr(v, 46, 8, 10, 2, "dark", true) + ci(v + 4, 61, 1.8, "green"); }).join("") + rr(76, 46, 8, 10, 2, "dark", true); },
    "25": function () { return pa("M16 42 A48 48 0 0 1 84 42", "blue", 8) + pa("M27 55 A32 32 0 0 1 73 55", "sky", 8) + pa("M38 67 A16 16 0 0 1 62 67", "teal", 8) + ci(50, 78, 6, "green"); },
    "26": function () { return ln(30, 70, 66, 34, 11, "gray") + ci(70, 30, 16, "gray") + rot(-45, 76, 24, rr(70, 6, 12, 18, 2, "white", true)) + ci(26, 74, 8, "gray") + ci(70, 30, 7, "dark"); },
    "27": function () { return pa("M50 12 L82 24 V50 C82 68 68 80 50 88 C32 80 18 68 18 50 V24 Z", "blue", 6, F("blue")) + pa("M36 50 L46 60 L66 38", "white", 8); },
    "28": function () { return ci(50, 42, 27, "white") + rr(37, 58, 26, 18, 5, "white") + ci(40, 42, 7, "dark") + ci(60, 42, 7, "dark") + pg("50,50 46,58 54,58", "dark") + ln(44, 70, 44, 76, 2.5, "dark") + ln(50, 70, 50, 76, 2.5, "dark") + ln(56, 70, 56, 76, 2.5, "dark"); },
    "29": function () { return [[24, 40, 12, 40], [24, 58, 12, 60], [76, 40, 88, 40], [76, 58, 88, 60]].map(function (v) { return ln(v[0], v[1], v[2], v[3], 4, "dark"); }).join("") + ln(40, 28, 32, 16, 3, "dark") + ln(60, 28, 68, 16, 3, "dark") + ci(50, 56, 24, "red") + ci(50, 30, 12, "dark") + ln(50, 40, 50, 76, 3, "dark") + ci(41, 28, 3, "white") + ci(59, 28, 3, "white"); },
    "30": function () { return rr(14, 50, 52, 34, 7, "white") + pa("M14 54 L40 72 L66 54", "gray", 4) + pa("M72 12 V46 A14 14 0 0 1 44 46", "gray", 6) + pg("72,12 66,22 78,22", "gray") + pg("44,46 38,38 50,38", "gold"); },
    "31": function () { return ci(32, 50, 18, "gold") + ci(32, 50, 7, "dark") + rr(46, 45, 40, 11, 4, "gold") + rr(66, 56, 7, 12, 2, "gold") + rr(78, 56, 7, 9, 2, "gold"); },
    "32": function () { return rr(10, 26, 80, 52, 9, "white") + rr(10, 26, 80, 12, 9, "blue", true) + ci(34, 54, 8, "gray") + rr(24, 63, 20, 10, 5, "gray") + rr(54, 48, 26, 5, 2.5, "gray", true) + rr(54, 59, 20, 5, 2.5, "gray", true); },
    "33": function () { return pg("50,14 88,82 12,82", "purple") + tx(50, 70, "CIA", 20, "#fff") + ci(50, 14, 5, "gold") + ci(88, 82, 5, "gold") + ci(12, 82, 5, "gold"); },
    "34": function () { return rr(10, 40, 24, 14, 3, "red") + rr(37, 40, 26, 14, 3, "red") + rr(66, 40, 24, 14, 3, "red") + rr(10, 58, 38, 14, 3, "red") + rr(52, 58, 38, 14, 3, "red") + rr(10, 76, 24, 12, 3, "red") + rr(37, 76, 26, 12, 3, "red") + rr(66, 76, 24, 12, 3, "red") + pa("M50 8 C66 22 70 30 62 38 C60 32 56 30 54 28 C56 38 46 40 44 32 C40 36 38 40 40 44 C32 40 34 26 50 8 Z", "orange", 3, F("orange")); },
    "35": function () { return pa("M32 46 V32 A18 18 0 0 1 68 32 V46", "gray", 8) + rr(22, 44, 56, 40, 9, "gold") + ci(50, 60, 6, "dark") + rr(47, 62, 6, 14, 3, "dark", true); },
    "36": function () { return pg("50,14 90,82 10,82", "yellow") + ln(50, 38, 50, 60, 8, "dark") + ci(50, 72, 4.5, "dark"); },
    "37": function () { return rr(22, 68, 56, 14, 5, "dark") + pa("M30 68 V50 A20 20 0 0 1 70 50 V68 Z", "red", 4, F("red")) + rr(44, 36, 6, 14, 3, "white", true) + ln(50, 14, 50, 22, 4, "gold") + ln(22, 24, 28, 30, 4, "gold") + ln(78, 24, 72, 30, 4, "gold"); },
    "38": function () { return rr(26, 14, 48, 70, 5, "gray") + [24, 38, 52].map(function (y) { return rr(34, y, 10, 9, 2, "blue", true) + rr(56, y, 10, 9, 2, "blue", true); }).join("") + rr(42, 66, 16, 18, 3, "dark"); },
    "39": function () { return person(34, 34, 0.85, "teal") + person(66, 34, 0.85, "orange") + person(50, 46, 1.1, "blue"); },
    "40": function () { return folder("yellow") + ci(70, 66, 14, "dark") + rr(60, 64, 20, 16, 4, "gold") + pa("M65 64 V60 A5 5 0 0 1 75 60 V64", "gray", 3); },
    "41": function () { return ln(50, 36, 24, 62, 3, "gray") + ln(50, 36, 76, 62, 3, "gray") + ln(50, 36, 50, 62, 3, "gray") + rr(32, 12, 36, 24, 7, "blue") + rr(10, 60, 28, 24, 7, "green") + rr(36, 60, 28, 24, 7, "orange") + rr(62, 60, 28, 24, 7, "purple"); },
    "42": function () { return pa("M38 34 V26 A6 6 0 0 1 44 20 H56 A6 6 0 0 1 62 26 V34", "gray", 6) + rr(12, 32, 76, 48, 9, "red") + rr(12, 50, 76, 5, 2, "dark", true) + rr(42, 46, 16, 14, 3, "gold"); },
    "43": function () { return terminal("#fb923c", "#_", 28); },
    "44": function () { return pg("24,12 62,12 78,28 78,88 24,88", "white") + pg("62,12 78,28 62,28", "gray") + [38, 50, 62, 74].map(function (y, i) { return rr(32, y, i % 2 ? 30 : 38, 5, 2.5, i === 0 ? "red" : "gray", true); }).join(""); },
    "45": function () { return rr(14, 66, 72, 18, 7, "gray") + pg("38,14 62,14 62,40 76,40 50,66 24,40 38,40", "green"); },
    "46": function () { return rr(12, 22, 76, 56, 9, "dark") + rr(12, 22, 76, 12, 9, "sky", true) + tx(38, 64, "&gt;", 32, "#2eb4ff") + rr(52, 56, 20, 6, 2, "white", true); },
    "47": function () { return ln(50, 20, 50, 8, 3, "gray") + ci(50, 8, 4, "red") + rr(20, 20, 60, 50, 13, "gray") + ci(36, 42, 9, "dark") + ci(64, 42, 9, "dark") + ci(36, 42, 4, "sky") + ci(64, 42, 4, "sky") + rr(36, 58, 28, 5, 2.5, "dark", true) + rr(12, 36, 8, 16, 3, "blue") + rr(80, 36, 8, 16, 3, "blue") + rr(34, 72, 32, 12, 4, "blue"); },
    "48": function () { return rr(12, 16, 76, 66, 9, "dark") + rr(22, 54, 10, 20, 2, "green", true) + rr(38, 42, 10, 32, 2, "teal", true) + rr(54, 32, 10, 42, 2, "blue", true) + rr(70, 24, 10, 50, 2, "purple", true) + pa("M22 46 L40 34 L56 40 L78 20", "yellow", 3.5); },
    "49": function () { return rr(22, 20, 56, 14, 7, "gray") + rr(22, 38, 56, 14, 7, "gray") + rr(22, 56, 56, 14, 7, "gray") + ci(32, 27, 2.5, "green") + ci(32, 45, 2.5, "green") + ci(32, 63, 2.5, "green") + pa("M64 82 A18 18 0 1 0 50 76", "teal", 6) + pg("42,70 56,72 50,84", "teal"); },
    "50": function () { return cube("sky", "blue", "teal", 50, 52, 38) + cube("white", "gray", "white", 50, 52, 17); },
    "51": function () {
      var cols = ["blue","sky","teal","green","yellow","orange","red"], y = 16, h = 10, gap = 2, body = "";
      cols.forEach(function(c,i){ body += rr(10, y + i*(h+gap), 80, h, 3, c, true); });
      return body;
    },
    "58": function () { return rr(10, 14, 80, 72, 10, "dark") + tx(50, 44, "1011", 22, "#4ade80") + ln(14, 50, 86, 50, 2, "gray") + tx(14, 65, "+", 18, "#fb923c") + tx(50, 68, "0101", 22, "#60a5fa") + ln(14, 72, 86, 72, 2, "gray") + tx(50, 85, "=", 15, "#a78bfa"); }
  };

  var FILES = {};
  ["0.1","0.2","0.3","0.4"].concat(Array.from({ length: 50 }, function (_, i) { return String(i + 1); })).forEach(function (k) { FILES[k] = 1; });
  window.iconSVG = function (n, color) {
    if (FILES[n]) return '<img src="assets/icons/' + n + '.png" alt="" loading="lazy" decoding="async" width="256" height="256">';
    defs();
    var g = G[n]; var body = g ? g() : ci(50, 50, 28, "gold");
    var id = "t" + (++uid);
    var rim = color || "#a78bfa";
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs><filter id="' + id + '" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#10132a" flood-opacity=".28"/></filter></defs>' +
      '<rect x="3" y="3" width="94" height="94" rx="24" fill="' + F("tile").replace("ig-tile", "ig-tile") + '" filter="url(#' + id + ')"/>' +
      '<rect x="3" y="3" width="94" height="94" rx="24" fill="none" stroke="' + rim + '" stroke-width="2.5" opacity=".55"/>' +
      '<rect x="6" y="5" width="88" height="40" rx="20" fill="#fff" opacity=".55"/>' +
      '<g transform="translate(14 13) scale(.72)">' + body + "</g></svg>";
  };
})();
