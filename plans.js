/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Plans: Free + "Buy me a Starbucks coffee". Built into #plans-root (main page section and plans.html). */
(function () {
  var root = document.getElementById("plans-root"); if (!root) return;
  var page = document.body.getAttribute("data-page") === "plans";
  function li(t) { return "<li>" + t + "</li>"; }
  root.innerHTML =
    
    '<div class="pl-head"><h2>Learn for free, or buy us a coffee</h2><p>Everything on this site is free. If it helps you, a coffee helps us keep it that way.</p></div>' +
    '<div class="pl-grid">' +
      '<article class="pl-card pl-free">' +
        '<h3>FREE</h3><div class="pl-line"></div>' +
        '<div class="pl-price"><b>100% FREE</b></div>' +
        '<p class="pl-title">Learn Everything for Free!</p>' +
        '<ul>' + li("All courses and video lessons") + li("Beginner and advanced roadmaps") + li("All learning resources") + '</ul>' +
        '<p class="pl-msg">Just good luck! Stay strong, keep going, and never give up. Every expert was once a beginner. You got this! 💪</p>' +
        '<a class="pl-btn pl-btn-soft" href="index.html#map">START LEARNING</a>' +
      '</article>' +
      '<article class="pl-card pl-pro pl-donate">' +
        '<span class="pl-ribbon">SUPPORT THE PROJECT</span>' +
        '<h3>BUY US A COFFEE ☕</h3><div class="pl-line"></div>' +
        '<p class="pl-title">Did our lessons help you?</p>' +
        '<p class="pl-msg">If you learned something here, or we were part of the reason you got your first IT job, please consider a small donation.</p>' +
        '<p class="pl-msg">We are a small team working on a personal budget. Our only income is YouTube, and your support helps us keep every lesson free for everyone.</p>' +
        '<p class="pl-msg"><b>Any amount helps. Thank you! 🙏</b></p>' +
        '<a class="pl-btn pl-btn-main" href="#" id="subscribe-btn">☕ DONATE</a>' +
        '<p class="pl-soon" id="donate-soon" hidden>The donation link is coming soon. Thank you for wanting to help!</p>' +
      '</article>' +
    '</div>';
  var DONATE_URL = "";   // put your donation link here (Buy Me a Coffee, Ko-fi, PayPal...)
  var b = document.getElementById("subscribe-btn");
  if (b) { if (DONATE_URL) { b.href = DONATE_URL; b.target = "_blank"; b.rel = "noopener"; } else b.addEventListener("click", function (e) { e.preventDefault(); var n = document.getElementById("donate-soon"); if (n) n.hidden = false; }); }
})();
