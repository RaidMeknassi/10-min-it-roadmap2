/* Achievement: a short fanfare (made with the Web Audio API, no sound file) + fireworks and confetti. */
(function () {
  var ctx = null;
  function audio() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      ctx = ctx || new AC(); if (ctx.state === "suspended") ctx.resume();
      var t0 = ctx.currentTime + 0.02, out = ctx.createGain(); out.gain.value = 0.5; out.connect(ctx.destination);
      function tone(f, t, d, type, v) {
        var o = ctx.createOscillator(), g = ctx.createGain(); o.type = type || "triangle"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + t); g.gain.exponentialRampToValueAtTime(v || 0.35, t0 + t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + t + d);
        o.connect(g); g.connect(out); o.start(t0 + t); o.stop(t0 + t + d + 0.05);
      }
      // rising fanfare: C E G C, then a bright final chord
      [[523.25, 0], [659.25, 0.12], [783.99, 0.24], [1046.5, 0.36]].forEach(function (n) { tone(n[0], n[1], 0.28, "triangle", 0.35); });
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f) { tone(f, 0.55, 0.9, "triangle", 0.22); tone(f * 2, 0.55, 0.5, "sine", 0.08); });
      // sparkles
      [1568, 1976, 2349, 2637, 3136].forEach(function (f, i) { tone(f, 0.7 + i * 0.1, 0.18, "sine", 0.1); });
      // firework pops
      [0.05, 0.4, 0.8, 1.15].forEach(function (t) {
        var len = ctx.sampleRate * 0.18, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
        for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
        var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        s.buffer = buf; f.type = "lowpass"; f.frequency.value = 1400; g.gain.value = 0.25; s.connect(f); f.connect(g); g.connect(out); s.start(t0 + t);
      });
    } catch (e) {}
  }

  var COLORS = ["#a78bfa", "#f472b6", "#2dd4bf", "#fbbf24", "#60a5fa", "#4ade80", "#fb923c", "#ffffff"];
  function visuals(msg) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var badge = document.createElement("div");
    badge.textContent = msg || "🎉 Lesson complete!";
    badge.style.cssText = "position:fixed;left:50%;top:40%;transform:translate(-50%,-20px) scale(.8);opacity:0;z-index:10000;pointer-events:none;padding:14px 26px;border-radius:999px;font:800 clamp(18px,3.6vw,28px) system-ui,sans-serif;color:#07070d;background:linear-gradient(90deg,#fbbf24,#f472b6);box-shadow:0 10px 40px rgba(244,114,182,.5);transition:all .45s cubic-bezier(.2,1.5,.4,1)";
    document.body.appendChild(badge);
    requestAnimationFrame(function () { badge.style.opacity = "1"; badge.style.transform = "translate(-50%,0) scale(1)"; });
    setTimeout(function () { badge.style.opacity = "0"; badge.style.transform = "translate(-50%,-10px) scale(.95)"; }, 2300);
    setTimeout(function () { badge.remove(); }, 2900);
    if (reduce) return;

    var cv = document.createElement("canvas"), dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999";
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; document.body.appendChild(cv);
    var g = cv.getContext("2d"); g.scale(dpr, dpr);
    var W = innerWidth, H = innerHeight, parts = [], conf = [], start = performance.now(), fired = 0;
    var shots = [0, 350, 700, 1050, 1400, 1750];
    function burst(x, y) {
      var col = COLORS[Math.floor(Math.random() * 7)], n = 70;
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2, sp = 1.5 + Math.random() * 4.6;
        parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, dec: 0.012 + Math.random() * 0.012, c: Math.random() < 0.25 ? "#ffffff" : col });
      }
    }
    for (var k = 0; k < 130; k++) conf.push({ x: Math.random() * W, y: -20 - Math.random() * H * 0.6, vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random() * 3.2, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, w: 6 + Math.random() * 6, h: 3 + Math.random() * 5, c: COLORS[Math.floor(Math.random() * 7)] });
    (function frame(now) {
      var el = now - start;
      while (fired < shots.length && el >= shots[fired]) { burst(W * (0.15 + Math.random() * 0.7), H * (0.12 + Math.random() * 0.4)); fired++; }
      g.clearRect(0, 0, W, H);
      parts.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.vx *= 0.99; p.life -= p.dec; if (p.life > 0) { g.globalAlpha = Math.max(p.life, 0); g.fillStyle = p.c; g.beginPath(); g.arc(p.x, p.y, 2.4, 0, 6.3); g.fill(); } });
      conf.forEach(function (c) { c.x += c.vx; c.y += c.vy; c.r += c.vr; g.globalAlpha = el > 3200 ? Math.max(0, 1 - (el - 3200) / 600) : 1; g.save(); g.translate(c.x, c.y); g.rotate(c.r); g.fillStyle = c.c; g.fillRect(-c.w / 2, -c.h / 2, c.w, c.h); g.restore(); });
      if (el < 3800) requestAnimationFrame(frame); else cv.remove();
    })(start);
  }
  window.celebrate = function (msg) { audio(); visuals(msg); };
})();
