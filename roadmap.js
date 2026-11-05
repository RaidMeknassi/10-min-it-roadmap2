/* ------------------------------------------------------------
   ROADMAP DATA  -  edit this file to add or change lessons.
   Each lesson is one node on the map.

   id      : unique short name (no spaces)
   title   : text shown on the map
   row     : which level of the tree (0 = top)
   col     : 0 = left, 1 = middle, 2 = right
   from    : list of ids this lesson connects FROM (the line above it)
   track   : "core", "net", "sys", "sec" (controls the colour)
   video   : YouTube video ID (the part after v=). Leave "" until ready.
   lab     : true if this lesson has a paid lab (shows a lock)
   about   : one or two sentences about the lesson
   ------------------------------------------------------------ */
const LESSONS = [
  { id: "start",   title: "What is IT?",            row: 0, col: 1, from: [],                         track: "core", video: "", lab: false, about: "A friendly 10-minute tour of what IT people actually do, and where you fit in." },
  { id: "hw",      title: "Computer Hardware",      row: 1, col: 1, from: ["start"],                  track: "core", video: "", lab: false, about: "CPU, RAM, storage and motherboard explained with simple examples." },
  { id: "os",      title: "Operating Systems",      row: 2, col: 1, from: ["hw"],                     track: "core", video: "", lab: true,  about: "What an operating system does, and how Windows and Linux differ." },

  { id: "net1",    title: "Networking Basics",      row: 3, col: 0, from: ["os"],                     track: "net",  video: "", lab: false, about: "How computers talk to each other: cables, Wi-Fi, switches and routers." },
  { id: "lin1",    title: "Linux Basics",           row: 3, col: 1, from: ["os"],                     track: "sys",  video: "", lab: true,  about: "Your first steps in Linux: files, folders and the terminal." },
  { id: "sec1",    title: "Security Basics",        row: 3, col: 2, from: ["os"],                     track: "sec",  video: "", lab: false, about: "The CIA triad and why security matters in every IT job." },

  { id: "net2",    title: "IP Addresses",           row: 4, col: 0, from: ["net1"],                   track: "net",  video: "", lab: true,  about: "IPv4, private vs public addresses, and a gentle intro to subnets." },
  { id: "lin2",    title: "Linux Commands",         row: 4, col: 1, from: ["lin1"],                   track: "sys",  video: "", lab: true,  about: "The 15 commands you will use every day." },
  { id: "sec2",    title: "Threats & Attacks",      row: 4, col: 2, from: ["sec1"],                   track: "sec",  video: "", lab: false, about: "Phishing, malware and common attacks, explained simply." },

  { id: "net3",    title: "DNS & DHCP",             row: 5, col: 0, from: ["net2"],                   track: "net",  video: "", lab: true,  about: "How names become addresses, and how devices get their IP." },
  { id: "lin3",    title: "Users & Permissions",    row: 5, col: 1, from: ["lin2"],                   track: "sys",  video: "", lab: true,  about: "Who can do what on a system, and how to control it." },
  { id: "sec3",    title: "Passwords & MFA",        row: 5, col: 2, from: ["sec2"],                   track: "sec",  video: "", lab: false, about: "Strong passwords, password managers and multi-factor authentication." },

  { id: "net4",    title: "Firewalls & Ports",      row: 6, col: 0, from: ["net3"],                   track: "net",  video: "", lab: true,  about: "What ports are and how firewalls allow or block traffic." },
  { id: "lin4",    title: "Services & Logs",        row: 6, col: 1, from: ["lin3"],                   track: "sys",  video: "", lab: true,  about: "Start, stop and read what your system is doing." },
  { id: "sec4",    title: "Logs & SIEM Intro",      row: 6, col: 2, from: ["sec3"],                   track: "sec",  video: "", lab: true,  about: "How security teams collect and read logs to spot problems." },

  { id: "cloud",   title: "Cloud Basics",           row: 7, col: 1, from: ["net4", "lin4", "sec4"],   track: "core", video: "", lab: true,  about: "What the cloud is, and how it brings networking, systems and security together." },
  { id: "career",  title: "Certs & First Job",      row: 8, col: 1, from: ["cloud"],                  track: "core", video: "", lab: false, about: "Which certifications to aim for, and how to land your first IT role." }
];

const TRACKS = {
  core: { name: "Core",       color: "#a78bfa" },
  net:  { name: "Networking", color: "#60a5fa" },
  sys:  { name: "Systems",    color: "#fb923c" },
  sec:  { name: "Security",   color: "#f472b6" }
};
