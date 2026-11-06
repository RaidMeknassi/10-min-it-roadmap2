/* Password gate (client-side). Only the hash is stored here, never the password. */
(function () {
  var H = "7bc41af68054a88ea8ecf7511e32b3448d455e58e14a1f3d87b5d2428a262aa4", KEY = "itroadmap-gate-ok";
  function sha256(s) {
    var K = [], i, j;
    function r(x, n) { return (x >>> n) | (x << (32 - n)); }
    var p = 2, c = 0; while (c < 64) { var pr = true; for (j = 2; j * j <= p; j++) if (p % j === 0) { pr = false; break; } if (pr) { K[c++] = (Math.pow(p, 1 / 3) * 4294967296) | 0; } p++; }
    var h = [], pc = 0; p = 2; while (pc < 8) { var q = true; for (j = 2; j * j <= p; j++) if (p % j === 0) { q = false; break; } if (q) { h[pc++] = (Math.pow(p, 0.5) * 4294967296) | 0; } p++; }
    var b = unescape(encodeURIComponent(s)), l = b.length, w = [];
    for (i = 0; i < l; i++) w[i >> 2] |= b.charCodeAt(i) << (24 - (i % 4) * 8);
    w[l >> 2] |= 0x80 << (24 - (l % 4) * 8); w[(((l + 8) >> 6) << 4) + 15] = l * 8;
    for (var o = 0; o < w.length; o += 16) {
      var a = h.slice(0), t = [];
      for (i = 0; i < 64; i++) {
        if (i < 16) t[i] = w[o + i] | 0; else { var s0 = r(t[i - 15], 7) ^ r(t[i - 15], 18) ^ (t[i - 15] >>> 3), s1 = r(t[i - 2], 17) ^ r(t[i - 2], 19) ^ (t[i - 2] >>> 10); t[i] = (t[i - 16] + s0 + t[i - 7] + s1) | 0; }
        var S1 = r(a[4], 6) ^ r(a[4], 11) ^ r(a[4], 25), ch = (a[4] & a[5]) ^ (~a[4] & a[6]), t1 = (a[7] + S1 + ch + K[i] + t[i]) | 0;
        var S0 = r(a[0], 2) ^ r(a[0], 13) ^ r(a[0], 22), mj = (a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]), t2 = (S0 + mj) | 0;
        a = [(t1 + t2) | 0, a[0], a[1], a[2], (a[3] + t1) | 0, a[4], a[5], a[6]];
      }
      for (i = 0; i < 8; i++) h[i] = (h[i] + a[i]) | 0;
    }
    return h.map(function (x) { return ("00000000" + (x >>> 0).toString(16)).slice(-8); }).join("");
  }
  function hashOf(pw) { return sha256("itroadmap-gate::" + pw); }
  var ok = false; try { ok = localStorage.getItem(KEY) === H; } catch (e) {}
  if (ok) return;

  // lessons and labs live two folders deep: send visitors back to the front page
  if (document.currentScript && document.currentScript.dataset.sub) { location.replace(document.currentScript.dataset.sub); return; }

  var st = document.createElement("style"); st.id = "gate-hide";
  st.textContent = "body>*:not(#gate){display:none!important}";
  document.head.appendChild(st);
  function show() {
    var g = document.createElement("div"); g.id = "gate";
    g.style.cssText = "position:fixed;inset:0;display:grid;place-items:center;background:#07070d;z-index:9999;padding:20px;font-family:system-ui,sans-serif";
    g.innerHTML = '<form style="width:100%;max-width:340px;text-align:center;color:#f1f1f7"><div style="font-size:42px">🔒</div><h1 style="margin:6px 0 4px;font-size:22px">10-Minute IT Roadmap</h1><p style="margin:0 0 16px;color:#9a9ab0;font-size:14px">Enter the password to continue.</p><input type="password" autocomplete="current-password" placeholder="Password" style="width:100%;padding:12px 14px;border-radius:12px;border:2px solid #3b3b55;background:#0d0d1a;color:#fff;font-size:16px;outline:none"><div class="err" style="min-height:20px;margin:8px 0;color:#f87171;font-size:13px"></div><button style="width:100%;padding:12px;border:0;border-radius:999px;font-weight:800;font-size:15px;color:#07070d;background:linear-gradient(90deg,#a78bfa,#f472b6);cursor:pointer">Enter</button></form>';
    document.body.appendChild(g);
    var f = g.querySelector("form"), inp = g.querySelector("input");
    inp.focus();
    f.onsubmit = function (e) {
      e.preventDefault();
      if (hashOf(inp.value) === H) {
        try { localStorage.setItem(KEY, H); } catch (x) {}
        g.remove(); st.remove(); window.dispatchEvent(new Event("resize"));
      } else { g.querySelector(".err").textContent = "Wrong password. Try again."; inp.value = ""; inp.focus(); }
    };
  }
  if (document.body) show(); else document.addEventListener("DOMContentLoaded", show);
})();
