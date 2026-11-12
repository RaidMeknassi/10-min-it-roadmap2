/* ------------------------------------------------------------
   ROADMAP DATA  -  edit this file to change lessons.

   Each lesson is written as:   ["number", "Title", lab]
     number : shown inside the circle on the map
     Title  : the lesson name
     lab    : 1 = this lesson has a hands-on lab (shows a lock), 0 = no lab

   To add a YouTube video to a lesson, add its video ID in the VIDEOS
   list at the bottom:   "15": "AbCdEf12345"
   (the ID is the part after v= in the YouTube link)
   ------------------------------------------------------------ */

const LEVELS = [
  { id: "l0", desc: "Start here: what IT is, the careers it offers and how to learn.", name: "Level 0", title: "Introduction to IT", color: "#2dd4bf", lessons: [
    ["0.1", "Welcome to the IT Roadmap", 0],
    ["0.2", "What Is Information Technology?", 0],
    ["0.3", "Different Careers in IT", 0],
    ["0.4", "How to Learn IT and Practise", 0]
  ]},

  { id: "l1", desc: "Understand how a computer is built, runs and stores information.", name: "Level 1", title: "Computer Fundamentals", color: "#a78bfa", lessons: [
    ["1", "What Is a Computer?", 1],
    ["2", "What Is Hardware?", 1],
    ["3", "What Is Software?", 1],
    ["4", "How Does a Computer Work?", 1],
    ["5", "How Computers Represent Information", 1]
  ]},

  { id: "l2", desc: "Learn how Windows, Linux and mobile systems work.", name: "Level 2", title: "Operating Systems", color: "#fb923c", lessons: [
    ["6", "Understanding Operating Systems", 0],
    ["57", "The Kernel", 0],
    ["10", "Windows", 1],
    ["11", "Linux", 1],
    ["13", "Mobile and Other Operating Systems", 0]
  ]},

  { id: "l3", desc: "Learn how devices talk: the OSI model, devices, IP and MAC addresses.", name: "Level 3", title: "Networking Fundamentals", color: "#60a5fa", lessons: [
    ["15", "What Is a Network?", 0],
    ["51", "The OSI Model", 0],
    ["16", "Network Devices and Their Functions", 0],
    ["17", "IP Addressing", 1],
    ["19", "MAC Addresses", 1]
  ]},

  { id: "l4", desc: "Threats, attacks, passwords and the basics of staying safe.", name: "Level 4", title: "Cybersecurity Fundamentals", color: "#f472b6", lessons: [
    ["27", "What Is Cybersecurity?", 0],
    ["28", "Common Cyber Threats and Attacks", 0],
    ["31", "Password Security and MFA", 1],
    ["52", "Cybersecurity Best Practices", 0]
  ]},

  { id: "l5", desc: "Corporate IT, ticketing and getting your first IT job.", name: "Level 5", title: "IT Workplace and Career Preparation", color: "#4ade80", jobReady: "Ready to start applying for L1 Help Desk / IT Support", lessons: [
    ["53", "Understanding the IT Workplace", 0],
    ["54", "IT Operations Basics", 0],
    ["55", "Job Hunting and Applications", 0],
    ["56", "Interviews and Starting Your Career", 1]
  ]}
];

/* Display labels: Level 0 keeps 0.1 ... ; other levels show level.position (1.1, 2.3 ...). Keys stay the same so progress is kept. */
const LBL = {};
LEVELS.forEach(function (lv, li) { lv.lessons.forEach(function (r, k) { LBL[r[0]] = li === 0 ? r[0] : li + "." + (k + 1); }); });
// Level 1 custom labels
LBL["1"] = "1"; LBL["2"] = "2"; LBL["3"] = "3"; LBL["4"] = "4"; LBL["5"] = "5";
// Level 2 custom labels
LBL["6"] = "6"; LBL["57"] = "6.5"; LBL["10"] = "7"; LBL["11"] = "8"; LBL["13"] = "9";

/* Level 6 - Intermediate (a path tree on its own page) */
const INTERMEDIATE = { id: "l6m", desc: "Learn how to work with IT technologies.", name: "Level 6", title: "Intermediate", color: "#38bdf8", items: [
  ["Windows Administration", "Manage Windows systems, users and settings."],
  ["Linux Administration", "Manage Linux servers, users, services and permissions."],
  ["Intermediate Networking", "Configure and troubleshoot real networks.", ["Subnetting", "DNS", "DHCP", "TCP and UDP"]],
  ["Active Directory Fundamentals", "Domains, users, groups and policies."],
  ["Scripting and Programming Basics", "PowerShell, Bash and Python."],
  ["Database Fundamentals", "SQL, databases and data management."],
  ["Web Fundamentals", "HTML, CSS, JavaScript, HTTP and APIs."],
  ["Cybersecurity Practices", "Security tools, vulnerability assessment and monitoring."],
  ["Cloud Computing Fundamentals", "Azure, AWS and cloud services."],
  ["Virtualization and Containers", "Virtual machines and Docker basics."]
]};

/* Level 7 (id l6) - choose a specialization path */
const PATHS = [
  { name: "Cybersecurity", color: "#f472b6", items: ["SOC Analyst", "Blue Team", "Penetration Testing", "Digital Forensics", "Threat Hunting", "Incident Response"] },
  { name: "Network Engineering", color: "#60a5fa", items: ["Network Engineering", "Network Security", "Wireless Networking", "Advanced Routing and Switching"] },
  { name: "Systems Engineering", color: "#fb923c", items: ["Windows Server", "Linux Server", "Active Directory", "Virtualization", "Enterprise Infrastructure"] },
  { name: "Cloud Computing", color: "#22d3ee", items: ["Microsoft Azure", "Amazon AWS", "Google Cloud", "Cloud Security", "Cloud Administration"] },
  { name: "DevOps and Automation", color: "#a78bfa", items: ["Git and GitHub", "CI/CD", "Docker and Containers", "Kubernetes", "Infrastructure as Code"] },
  { name: "Software Development", color: "#4ade80", items: ["Programming", "Web Development", "Backend Development", "APIs", "Application Development"] },
  { name: "Data and Artificial Intelligence", color: "#fbbf24", items: ["Databases and SQL", "Data Analysis", "Data Engineering", "Machine Learning", "Artificial Intelligence"] },
  { name: "IT Support Engineering", color: "#2dd4bf", items: ["Help Desk", "Desktop Support", "Hardware Troubleshooting", "Technical Support"] }
];

/* Certifications to aim for (edit freely). Shown in the Certifications section. */
const CERTS = [
  { stage: "Levels 0-2", title: "Foundations", color: "#a78bfa",
    items: ["CompTIA IT Fundamentals (ITF+)", "CompTIA A+", "Google IT Support Professional Certificate"] },
  { stage: "Level 3", title: "Networking", color: "#60a5fa",
    items: ["CompTIA Network+", "Cisco CCNA"] },
  { stage: "Level 4", title: "Cybersecurity", color: "#f472b6",
    items: ["CompTIA Security+", "ISC2 Certified in Cybersecurity (CC)", "Microsoft SC-900"] },
  { stage: "Level 5", title: "IT Workplace", color: "#4ade80",
    items: ["ITIL 4 Foundation", "CompTIA A+"] }
];

/* Level 6: certifications for each specialization path */
const PATH_CERTS = [
  ["Cybersecurity", "#f472b6", ["Microsoft SC-200", "CompTIA CySA+", "CompTIA PenTest+", "OffSec OSCP"]],
  ["Network Engineering", "#60a5fa", ["Cisco CCNP Enterprise", "Cisco CCNP Security"]],
  ["Cloud Computing", "#22d3ee", ["Microsoft AZ-900 / AZ-104", "AWS Cloud Practitioner / Solutions Architect Associate", "Google Associate Cloud Engineer"]],
  ["DevOps and Automation", "#a78bfa", ["Certified Kubernetes Administrator (CKA)", "HashiCorp Terraform Associate", "GitHub Foundations"]],
  ["Systems Engineering", "#fb923c", ["Microsoft Windows Server Hybrid Administrator (AZ-800)", "Red Hat RHCSA", "VMware VCP"]],
  ["Software Development", "#4ade80", ["Python Institute PCEP / PCAP", "Microsoft Azure Developer (AZ-204)"]],
  ["Data and Artificial Intelligence", "#fbbf24", ["Microsoft DP-900 / AI-900", "Google Data Analytics Certificate"]],
  ["IT Support Engineering", "#2dd4bf", ["CompTIA A+", "ITIL 4 Foundation", "Microsoft Endpoint Administrator (MD-102)"]]
];

/* YouTube video IDs, by lesson number. Leave empty until the video is ready. */
const VIDEOS = {
  "10": "6qBUwYLLe_U", // Windows
};

/* Web-version lessons (HTML pages inside the "lessons" folder), by lesson number.
   To add a lesson: put its folder in lessons/ and add a line here. */
const LESSON_PAGES = {
  "0.2": "lessons/whatisit/index.html",
  "0.3": "lessons/itcareers/index.html",
  "0.4": "lessons/howtolearn/index.html",
  "1": "lessons/whatisacomputer/index.html",
  "2": "lessons/whatishardware/index.html",
  "3": "lessons/whatissoftware/index.html",
  "4": "lessons/howcomputerworks/index.html",
  "5": "lessons/howrepresent/index.html"
};

/* QUIZZES - one per lesson, each with its own style (type):
   mcq (multiple choice) | tf (true/false) | match (pairs) | order (arrange steps) | fill (type the answer)
   To add a quiz for another lesson, add an entry here. */
const QUIZZES = {
  "1": { type: "mcq", color: "#a78bfa", title: "Pick the right answer", items: [
    { q: "What does a computer do?", o: ["Takes input, processes it, gives output", "Only plays videos", "Only stores paper files", "Only connects to the internet"], a: 0 },
    { q: "Which one is an INPUT device?", o: ["Monitor", "Speaker", "Keyboard", "Printer"], a: 2 },
    { q: "Which of these is NOT a computer?", o: ["Smartphone", "Laptop", "Paper notebook", "Smartwatch"], a: 2 },
    { q: "What is the correct order of how a computer handles data?", o: ["Output, Process, Input", "Input, Process, Output", "Process, Output, Input", "Input, Output, Process"], a: 1 }
  ]},
  "2": { type: "tf", color: "#2dd4bf", title: "True or false?", items: [
    { q: "The CPU is often called the brain of the computer.", a: true },
    { q: "RAM keeps your files after you turn the computer off.", a: false },
    { q: "An SSD is usually faster than an HDD.", a: true },
    { q: "A monitor is an input device.", a: false },
    { q: "The motherboard connects all the main parts together.", a: true },
    { q: "Hardware means the parts you can physically touch.", a: true }
  ]},
  "3": { type: "match", color: "#fb923c", title: "Match each item with what it is", pairs: [
    ["Windows", "Operating system"],
    ["Google Chrome", "Application"],
    ["Antivirus", "Security software"],
    ["Driver", "Lets the OS talk to hardware"],
    ["Firmware", "Software stored on a hardware chip"]
  ]},
  "4": { type: "order", color: "#60a5fa", title: "Put the steps in the right order", steps: [
    "You double-click an app",
    "The program is copied from storage into RAM",
    "The CPU fetches instructions from RAM",
    "The CPU executes the instructions",
    "The result appears on the screen"
  ]},
  "5": { type: "fill", color: "#4ade80", title: "Type the answer", items: [
    { q: "A single 0 or 1 is called a ...", a: ["bit"] },
    { q: "How many bits are in one byte?", a: ["8", "eight"] },
    { q: "The binary number 101 equals what in decimal?", a: ["5", "five"] },
    { q: "The decimal number 10 equals what in binary?", a: ["1010"] },
    { q: "Name a standard that gives every letter a number (A = 65).", a: ["ascii", "unicode"] }
  ]}
};

/* LABS - hands-on lab description per lesson (labs are for subscribers later) */
const LABS = {
  "56": { title: "Real-World IT Scenarios", text: "Practical support cases and workplace situations: handle tickets, talk to users and decide priorities like a real IT team." },
  "1": { title: "Input, Process, Output", text: "Type any number into the input box, watch the processor work, and see which emoji comes out. Then find the secret rule." },
  "2": { title: "3D hardware teardown", text: "Click a part (CPU, RAM, CPU cooler) and see it float in 3D. Turn it around and learn what it does." },
  "3": { title: "Build the software stack", text: "Drag the layers into place: hardware, BIOS/UEFI, drivers, operating system, applications. Then press Power On and watch the layers work together." },
  "4": { title: "Build your PC", text: "Drag the CPU, fan, RAM, SSD and graphics card onto the motherboard, then mount the board and power supply in the case and power on." },
  "5": { title: "Binary name tag", text: "Use an ASCII table to turn your name into binary, then decode a friend's message back into letters." }
};

/* Interactive labs (web pages inside the "labs" folder), by lesson number.
   Lessons without a page here show only the lab description for now. */
const LAB_PAGES = {
  "1": "labs/lab1/index.html",
  "2": "labs/lab2/index.html",
  "3": "labs/lab3/index.html",
  "4": "labs/lab4/index.html"
};

/* Small 3D-style icon for each lesson (an emoji on a glossy tile in the level colour).
   Change any icon by editing the emoji here. */
const ICONS = {
  "0.1":"👋","0.2":"💡","0.3":"🧑‍💼","0.4":"🎯",
  "1":"💻","2":"🔩","3":"🪟","4":"⚙️","5":"🔢",
  "6":"🖥️","7":"🗂️","8":"🧠","9":"🚀","10":"🟦","11":"🐧","12":"🍎","13":"📱","14":"⚖️",
  "15":"🌐","16":"📡","17":"📍","18":"✂️","19":"🏷️","20":"📖","21":"🎫","22":"📦","23":"🚪","24":"🔀","25":"📶","26":"🛠️",
  "27":"🛡️","28":"☠️","29":"🦠","30":"🎣","31":"🔑","32":"🪪","33":"🔺","34":"🧱","35":"🔐","36":"⚠️","37":"🚨",
  "38":"🏢","39":"👥","40":"🔒","41":"🗃️","42":"🧰","43":"🧑‍💻","44":"📜","45":"⬇️","46":"⌨️","47":"🤖","48":"📈","49":"💾","50":"🧊"
};

/* ---------- Cybersecurity track: Level 7 (career skills) and Level 8 (real attack practice) ----------
   Choose Cybersecurity in Level 6, then continue here. Edit names and topics freely. */
const LEVEL7 = { id: "l7", desc: "Career skills for Analyst, Pentester and Security Engineer.", name: "Level 7", title: "Cybersecurity Career Skills", color: "#fb7185" };
const LEVEL8 = { id: "l8", desc: "Practise real attack chains safely in guided labs.", name: "Level 8", title: "Real Attack Practice", color: "#ef4444" };

const TRACKS = {
  l7: [
    { name: "Security Analyst", color: "#60a5fa", blurb: "Detect, investigate and respond to attacks as a SOC analyst.", paths: [
      { name: "SOC Level 1", topics: ["Alerts and triage", "Phishing analysis", "SIEM basics and log searching", "Endpoint and network monitoring", "Writing an incident report"] },
      { name: "SOC Level 2", topics: ["Threat hunting", "Detection engineering and rules", "Malware triage", "Threat intelligence", "Escalation and response playbooks"] },
      { name: "Advanced Endpoint Investigations", topics: ["Windows and Linux artifacts", "Process and persistence analysis", "EDR investigations", "Timeline building", "Memory basics"] },
      { name: "Windows Incident Response and Forensics", topics: ["Event logs and registry", "Disk and memory acquisition", "Lateral movement evidence", "Containment and recovery", "Forensic reporting"] },
      { name: "Defending Azure", topics: ["Microsoft Entra ID security", "Defender and Sentinel basics", "Azure logging", "Detecting cloud attacks", "Hardening Azure resources"] }
    ]},
    { name: "Penetration Tester", color: "#f472b6", blurb: "Think like an attacker to find weaknesses before real attackers do.", paths: [
      { name: "Junior Penetration Tester", topics: ["Penetration testing process and rules", "Recon and enumeration", "Scanning and vulnerability assessment", "Exploitation basics", "Privilege escalation", "Reporting findings"] },
      { name: "Web Application Pentesting", topics: ["How web apps work", "Injection and XSS", "Authentication and session flaws", "Access control bugs", "APIs", "Writing a web test report"] },
      { name: "Web Application Red Teaming", topics: ["Advanced web exploitation", "Chaining vulnerabilities", "Business logic abuse", "Bypassing defenses", "Reporting at professional level"] },
      { name: "Red Teaming", topics: ["Adversary emulation", "Initial access", "Active Directory attacks", "Command and control basics", "Evading detection", "Full operation planning"] }
    ]},
    { name: "Security Engineer", color: "#4ade80", blurb: "Build and automate security into systems, pipelines and the cloud.", paths: [
      { name: "Security Engineer", topics: ["Secure architecture", "Hardening systems and networks", "Identity and access management", "Security tooling and automation", "Vulnerability management"] },
      { name: "DevSecOps", topics: ["Secure CI/CD pipelines", "Code and dependency scanning", "Container and Kubernetes security", "Secrets management", "Infrastructure as code security"] },
      { name: "Defending AWS", topics: ["AWS IAM security", "Logging with CloudTrail and GuardDuty", "Network and storage security", "Detecting cloud attacks", "Incident response in AWS"] }
    ]},
    { name: "AI Security", color: "#a78bfa", blurb: "Secure AI systems and understand how they get attacked.", paths: [
      { name: "AI Security", topics: ["How AI and LLM systems work", "Prompt injection", "Data and model risks", "Securing AI applications", "AI in defence"] },
      { name: "Agentic AI Security", topics: ["How AI agents use tools", "Excessive permissions and tool abuse", "Indirect prompt injection", "Guardrails and monitoring", "Safe agent design"] }
    ]}
  ],
  l8: [
    { name: "Attack Chains", color: "#ef4444", blurb: "Follow a real attack from the first click to the final damage, inside a safe lab.", paths: [
      { name: "Phishing to Ransomware", topics: ["A phishing email lands", "Initial foothold on a workstation", "Spreading through the network", "Encryption and the ransom note", "How each step could have been stopped"] },
      { name: "Web Application Breach", topics: ["Finding the weak page", "Exploiting it", "Stealing data", "Reading the logs afterwards", "Fixing the root cause"] },
      { name: "Active Directory Takeover", topics: ["From one user to domain admin", "Credential attacks", "Lateral movement", "Persistence", "Detection and cleanup"] },
      { name: "Cloud Account Compromise", topics: ["Leaked keys", "Abusing cloud permissions", "Data exposure", "Detecting it in cloud logs", "Locking it down"] }
    ]},
    { name: "Red vs Blue", color: "#fb923c", blurb: "Play both sides: attack the lab, then defend it.", paths: [
      { name: "Attack Day", topics: ["Plan the attack", "Break into a practice network", "Move and collect proof", "Document what you did"] },
      { name: "Defense Day", topics: ["Spot the attack in the logs", "Contain the damage", "Remove the attacker", "Harden what was weak"] },
      { name: "Purple Team Exercise", topics: ["Attack and detect together", "Tune detections", "Measure what you missed", "Improve the defence"] },
      { name: "Incident Response War Room", topics: ["A live incident scenario", "Triage under time pressure", "Decisions and communication", "Post-incident review"] }
    ]},
    { name: "Capstone", color: "#fbbf24", blurb: "Prove everything you learned.", paths: [
      { name: "Final Challenge", topics: ["A full attack and defence scenario", "Your report", "Review and feedback"] },
      { name: "Build Your Portfolio", topics: ["Choose your best work", "Write clear case studies", "Prepare for interviews"] }
    ]}
  ]
};
