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
  d.innerHTML = '<span class="soon-ico">🚧</span><h2>Coming soon</h2><p>This part is still being recorded. It will open here as soon as it is ready.</p><a class="soon-back"></a>';
  var a = d.querySelector("a"); a.href = backHref; a.textContent = backText; return d;
}

/* ---- Content-based "Coming soon": courses, certifications, tools, languages and specialization paths
   are greyed out automatically while none of their lessons has a video, quiz or lab yet.
   They open by themselves as soon as the first lesson gets content. ---- */
function lessonReady(k) {
  return !!((typeof VIDEOS !== "undefined" && VIDEOS[k]) || (typeof LESSON_PAGES !== "undefined" && LESSON_PAGES[k]) ||
    (typeof QUIZZES !== "undefined" && QUIZZES[k]) || (typeof realLab === "function" && realLab(k)));
}
function rowsReady(rows) { return (rows || []).some(function (r) { return lessonReady(r[0]); }); }
function toolLevelReady(t, i) { var l = t.levels[i]; return !!l && rowsReady(l.lessons.concat(l.exam || [])); }
function toolReady(t) { return t.levels.some(function (l, i) { return toolLevelReady(t, i); }); }
function langReady(L) { return !!L && L.lv.some(rowsReady); }
function specPathReady(name) { var S = typeof SPEC_LESSONS !== "undefined" && SPEC_LESSONS[name]; return !!S && rowsReady(S.lessons); }
/* a link that is not ready yet: greyed, not clickable */
function markSoon(a) { a.removeAttribute("href"); a.classList.add("is-soon"); a.setAttribute("aria-disabled", "true"); a.title = (a.title ? a.title + " · " : "") + "Coming soon"; a.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); }, true); return a; }
/* note shown instead of an empty lesson list */
function soonNote(text) { var d = document.createElement("div"); d.className = "soon-box soon-note"; d.innerHTML = '<span class="soon-ico">🚧</span><h2>Lessons coming soon</h2><p></p>'; d.querySelector("p").textContent = text || "The lessons for this part are being recorded. They will appear here as soon as they are ready."; return d; }

/* certifications: only the ones with lessons on this site can be opened (ITIL Foundation for now) */
function certLinkReady(href) { return /^course\.html\?c=itil(#|$)/.test(href || ""); }
function lockCertLinks(node) {
  if (!node) return node;
  var list = [].slice.call(node.querySelectorAll ? node.querySelectorAll("a") : []); if (node.tagName === "A") list.unshift(node);
  list.forEach(function (a) { if (!certLinkReady(a.getAttribute("href"))) markSoon(a); });
  return node;
}
