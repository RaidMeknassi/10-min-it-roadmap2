/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* RELEASE SWITCH: decides which modules visitors can open.
   "live"  = open, with its lessons, videos and quizzes.
   "soon"  = shown on the road map but greyed out with "Coming soon"; its pages cannot be opened.
   To release a module, change its word from "soon" to "live". Anything not listed here is live. */
var RELEASE = {
  /* Intermediate modules */
  "im4":  "soon",   // Networking
  "im2":  "live",   // Windows Administration
  "im3":  "live",   // Linux Administration
  "im5":  "soon",   // Active Directory
  "im8":  "live",   // Web Fundamentals
  "im10": "soon",   // Virtualization and Containers
  "im7":  "soon",   // Database Fundamentals
  "im11": "soon",   // Cloud Computing
  "im9":  "soon",   // Cybersecurity Practices
  /* Advanced modules */
  "adv-im4":  "soon",   // Networking
  "adv-im2":  "soon",   // Windows
  "adv-im3":  "soon",   // Linux
  "adv-im5":  "soon",   // Active Directory
  "adv-im8":  "soon",   // Web
  "adv-im10": "soon",   // Virtualization and Containers
  "adv-im7":  "soon",   // Databases
  "adv-im11": "soon",   // Cloud
  "adv-im9":  "soon"    // Cybersecurity
};
function isLive(id) { return RELEASE[id] !== "soon"; }
/* a small "Coming soon" message that replaces a page which is not released yet */
function comingSoonBox(backHref, backText) {
  var d = document.createElement("div"); d.className = "soon-box";
  d.innerHTML = '<span class="soon-ico">🚧</span><h2>Coming soon</h2><p>This module is still being recorded. It will open here as soon as it is ready.</p><a class="soon-back"></a>';
  var a = d.querySelector("a"); a.href = backHref; a.textContent = backText; return d;
}
