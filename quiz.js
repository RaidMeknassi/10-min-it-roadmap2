/* Quiz renderer: each lesson's quiz has its own look. */
(function () {
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function result(box, score, total, again) {
    box.innerHTML = "";
    var r = el("div", "q-result");
    r.appendChild(el("div", "q-score", score + " / " + total));
    r.appendChild(el("p", "", score === total ? "Perfect! Well done." : score >= total / 2 ? "Good job. Try again for a perfect score." : "Keep going. Watch the lesson again and retry."));
    var b = el("button", "btn", "Try again"); b.type = "button"; b.onclick = again; r.appendChild(b);
    box.appendChild(r);
  }

  // 1) multiple choice: one big question at a time
  function mcq(box, q, done) {
    var i = 0, score = 0;
    (function show() {
      if (i >= q.items.length) return done(score, q.items.length);
      var it = q.items[i]; box.innerHTML = "";
      box.appendChild(el("div", "q-step", "Question " + (i + 1) + " of " + q.items.length));
      box.appendChild(el("h4", "q-q", it.q));
      var locked = false;
      it.o.forEach(function (t, k) {
        var b = el("button", "q-opt", t); b.type = "button";
        b.onclick = function () {
          if (locked) return; locked = true;
          if (k === it.a) { score++; b.classList.add("good"); } else { b.classList.add("bad"); box.querySelectorAll(".q-opt")[it.a].classList.add("good"); }
          setTimeout(function () { i++; show(); }, 900);
        };
        box.appendChild(b);
      });
    })();
  }

  // 2) true / false: all statements in a list
  function tf(box, q, done) {
    box.innerHTML = ""; var answered = 0, score = 0;
    q.items.forEach(function (it, n) {
      var row = el("div", "tf-row"); row.appendChild(el("span", "tf-q", (n + 1) + ". " + it.q));
      var btns = el("span", "tf-btns");
      [true, false].forEach(function (v) {
        var b = el("button", "tf-btn", v ? "True" : "False"); b.type = "button";
        b.onclick = function () {
          if (row.dataset.done) return; row.dataset.done = 1;
          var ok = (v === it.a); if (ok) score++;
          row.classList.add(ok ? "good" : "bad");
          row.appendChild(el("span", "tf-fb", ok ? "Correct" : "Answer: " + (it.a ? "True" : "False")));
          if (++answered === q.items.length) setTimeout(function () { done(score, q.items.length); }, 1100);
        };
        btns.appendChild(b);
      });
      row.insertBefore(btns, null); box.appendChild(row);
    });
  }

  // 3) match: tap one on the left, then its partner on the right
  function match(box, q, done) {
    box.innerHTML = ""; var left = shuffle(q.pairs.map(function (p) { return p[0]; })), right = shuffle(q.pairs.map(function (p) { return p[1]; }));
    var map = {}; q.pairs.forEach(function (p) { map[p[0]] = p[1]; });
    var wrap = el("div", "m-wrap"), L = el("div", "m-col"), R = el("div", "m-col"), sel = null, matched = 0, tries = 0;
    box.appendChild(el("div", "q-step", "Tap an item, then tap what it matches"));
    function mk(t, side) { var b = el("button", "m-item", t); b.type = "button"; b.dataset.side = side; return b; }
    left.forEach(function (t) { var b = mk(t, "l"); b.onclick = function () { if (b.classList.contains("ok")) return; if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); }; L.appendChild(b); });
    right.forEach(function (t) {
      var b = mk(t, "r");
      b.onclick = function () {
        if (!sel || b.classList.contains("ok")) return; tries++;
        if (map[sel.textContent] === t) { sel.classList.remove("sel"); sel.classList.add("ok"); b.classList.add("ok"); sel = null; if (++matched === q.pairs.length) setTimeout(function () { done(Math.max(0, q.pairs.length - Math.max(0, tries - q.pairs.length)), q.pairs.length); }, 700); }
        else { b.classList.add("no"); setTimeout(function () { b.classList.remove("no"); }, 400); }
      };
      R.appendChild(b);
    });
    wrap.appendChild(L); wrap.appendChild(R); box.appendChild(wrap);
  }

  // 4) order: move steps up/down, then check
  function order(box, q, done) {
    box.innerHTML = ""; var list = shuffle(q.steps); if (list.join() === q.steps.join()) list.reverse();
    box.appendChild(el("div", "q-step", "Use the arrows to put the steps in order, then press Check"));
    var ol = el("div", "o-list"); box.appendChild(ol);
    function draw() {
      ol.innerHTML = "";
      list.forEach(function (t, i) {
        var r = el("div", "o-row"); r.appendChild(el("b", "", String(i + 1))); r.appendChild(el("span", "", t));
        var u = el("button", "o-mv", "▲"), d = el("button", "o-mv", "▼"); u.type = d.type = "button";
        u.disabled = i === 0; d.disabled = i === list.length - 1;
        u.onclick = function () { var x = list[i]; list[i] = list[i - 1]; list[i - 1] = x; draw(); };
        d.onclick = function () { var x = list[i]; list[i] = list[i + 1]; list[i + 1] = x; draw(); };
        r.appendChild(u); r.appendChild(d); ol.appendChild(r);
      });
    }
    draw();
    var c = el("button", "btn", "Check order"); c.type = "button";
    c.onclick = function () {
      var score = 0; list.forEach(function (t, i) { if (t === q.steps[i]) score++; });
      ol.querySelectorAll(".o-row").forEach(function (r, i) { r.classList.add(list[i] === q.steps[i] ? "good" : "bad"); r.querySelectorAll("button").forEach(function (b) { b.disabled = true; }); });
      c.disabled = true; setTimeout(function () { done(score, q.steps.length); }, 1400);
    };
    box.appendChild(c);
  }

  // 5) fill in: type the answers
  function fill(box, q, done) {
    box.innerHTML = ""; var inputs = [];
    q.items.forEach(function (it, n) {
      var row = el("div", "f-row"); row.appendChild(el("label", "", (n + 1) + ". " + it.q));
      var inp = el("input", "f-in"); inp.type = "text"; inp.autocomplete = "off"; inp.placeholder = "Type here"; row.appendChild(inp);
      inputs.push(inp); box.appendChild(row);
    });
    var c = el("button", "btn", "Check answers"); c.type = "button";
    c.onclick = function () {
      var score = 0;
      inputs.forEach(function (inp, n) {
        var v = inp.value.trim().toLowerCase(), ok = q.items[n].a.indexOf(v) > -1;
        if (ok) score++; inp.classList.add(ok ? "good" : "bad"); inp.disabled = true;
        if (!ok) { var fb = el("span", "f-fb", "Answer: " + q.items[n].a[0]); inp.parentNode.appendChild(fb); }
      });
      c.disabled = true; setTimeout(function () { done(score, q.items.length); }, 1800);
    };
    box.appendChild(c);
  }

  var TYPES = { mcq: mcq, tf: tf, match: match, order: order, fill: fill };

  window.renderQuiz = function (n, box, onScore) {
    var q = QUIZZES[n]; if (!q) return false;
    function start() {
      box.className = "quiz quiz-" + q.type; box.style.setProperty("--qc", q.color);
      var wrap = el("div", "q-inner"); box.innerHTML = ""; box.appendChild(el("h4", "q-title", q.title)); box.appendChild(wrap);
      TYPES[q.type](wrap, q, function (s, t) { onScore(s, t); result(wrap, s, t, start); });
    }
    start(); return true;
  };
})();
