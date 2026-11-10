/* Plans: Free + "Buy me a Starbucks coffee". Built into #plans-root (main page section and plans.html). */
(function () {
  var root = document.getElementById("plans-root"); if (!root) return;
  var page = document.body.getAttribute("data-page") === "plans";
  function li(t) { return "<li>" + t + "</li>"; }
  root.innerHTML =
    (page ? '<a class="back" href="index.html#map">← Back to the road map</a>' : "") +
    '<div class="pl-head"><h2>Learn for free, or buy me a coffee</h2><p>Everything you need to learn IT is free. A coffee unlocks the extra practice.</p></div>' +
    '<div class="pl-grid">' +
      '<article class="pl-card pl-free">' +
        '<h3>FREE</h3><div class="pl-line"></div>' +
        '<div class="pl-price"><b>100% FREE</b></div>' +
        '<p class="pl-title">Learn Everything for Free!</p>' +
        '<ul>' + li("All courses and video lessons") + li("Beginner and advanced roadmaps") + li("All learning resources") + '</ul>' +
        '<p class="pl-msg">Just good luck! Stay strong, keep going, and never give up. Every expert was once a beginner. You got this! 💪</p>' +
        '<a class="pl-btn pl-btn-soft" href="index.html#map">START LEARNING</a>' +
      '</article>' +
      '<article class="pl-card pl-pro">' +
        '<span class="pl-ribbon">SUPPORT THE PROJECT</span>' +
        '<h3>STARBUCKS COFFEE ☕</h3><div class="pl-line"></div>' +
        '<div class="pl-price"><b>$9.99</b><span> / Year</span></div>' +
        '<p class="pl-title">Buy me a Starbucks coffee</p>' +
        '<p class="pl-sub">Your support unlocks:</p>' +
        '<ul>' + li("Hands-on labs") + li("Interactive quizzes") + li("Practical challenges") + li("Certification preparation") + '</ul>' +
        '<p class="pl-msg">You’re helping me keep IT education free for everyone. Thank you!</p>' +
        '<a class="pl-btn pl-btn-main" href="#" id="subscribe-btn">COMING SOON</a>' +
      '</article>' +
    '</div>';
  var b = document.getElementById("subscribe-btn"); if (b) b.addEventListener("click", function (e) { e.preventDefault(); });
})();
