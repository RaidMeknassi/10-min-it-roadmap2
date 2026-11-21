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
    ["5", "How Computers Represent Information", 1],
    ["58", "Binary Calculation", 0]
  ]},

  { id: "l2", desc: "Learn how Windows, Linux and mobile systems work.", name: "Level 2", title: "Operating Systems", color: "#fb923c", lessons: [
    ["6", "Understanding Operating Systems", 0],
    ["10", "Windows", 1],
    ["11", "Linux", 1],
    ["13", "Mobile and Other Operating Systems", 0]
  ]},

  { id: "l3", desc: "Learn how devices talk: the OSI model, devices, IP and MAC addresses.", name: "Level 3", title: "Networking Fundamentals", color: "#60a5fa", lessons: [
    ["15", "What Is a Network?", 0],
    ["16", "Network Devices and Their Functions", 0],
    ["51", "The OSI Model", 0],
    ["17", "IP Addresses and MAC Addresses", 1]
  ]},

  { id: "l4", desc: "Threats, attacks, passwords and the basics of staying safe.", name: "Level 4", title: "Cybersecurity Fundamentals", color: "#f472b6", lessons: [
    ["27", "What Is Cybersecurity?", 0],
    ["28", "Common Cyber Threats and Attacks", 0],
    ["31", "Password Security and MFA", 1],
    ["52", "Cybersecurity Best Practices", 0]
  ]},

  { id: "l5", desc: "Corporate IT, ticketing and getting your first IT job.", name: "Level 5", title: "IT Workplace and Career Preparation", color: "#4ade80", jobReady: "Ready to start applying for L1 Help Desk / IT Support", lessons: [
    ["54", "Finding Your First IT Job", 0],
    ["55", "A Day Working in an IT Company", 0],
    ["57", "Understanding ITSM and ITIL", 0]
  ]}
];

/* Level 5.5 - IT Support Fundamentals (shown on the map after the ITIL Foundation box) */
const LEVEL55 = { id: "l55", desc: "How real IT support works: the role, troubleshooting, remote tools and professional habits.", name: "Level 5.1", title: "IT Support Fundamentals", color: "#f59e0b",
  lessons: [
  ["5.5.1", "The Role of an IT Support Technician", 0],
  ["5.5.2", "Basic Troubleshooting Methodology", 1],
  ["5.5.3", "Remote Support Tools", 0],
  ["5.5.4", "Professional IT Support Practices", 1]
]};

/* Display labels: Level 0 keeps 0.1 ... ; other levels show level.position (1.1, 2.3 ...). Keys stay the same so progress is kept. */
const LBL = {};
LEVELS.forEach(function (lv, li) { lv.lessons.forEach(function (r, k) { LBL[r[0]] = li === 0 ? r[0] : li + "." + (k + 1); }); });
LEVEL55.lessons.forEach(function (r, k) { LBL[r[0]] = "5.1." + (k + 1); });
// Level 1 custom labels
LBL["1"] = "1"; LBL["2"] = "2"; LBL["3"] = "3"; LBL["4"] = "4"; LBL["5"] = "5"; LBL["58"] = "5.1";
// Level 2 custom labels (6, 7, 8, 9)
LBL["6"] = "6"; LBL["10"] = "7"; LBL["11"] = "8"; LBL["13"] = "9";
// Level 3 custom labels (3.1–3.4)
LBL["15"] = "3.1"; LBL["16"] = "3.2"; LBL["51"] = "3.3"; LBL["17"] = "3.4";

/* Intermediate Modules — full lesson data for the intermediate roadmap tree */
const INTERMEDIATE_LEVELS = [
  { id: "im1", name: "Module 1", title: "Operating Systems — Deep Dive", color: "#60a5fa",
    desc: "Understand how operating systems work internally.",
    lessons: [
      ["im1.2","Understanding Processes"],["im1.6","File Systems and Storage Management"]
    ]},
  { id: "im2", name: "Module 2", title: "Windows Administration", color: "#38bdf8",
    desc: "Manage, configure and automate Windows systems.",
    lessons: [
      ["im2.1","Windows System Administration"],["im2.2","Managing Users and Groups"],
      ["im2.3","NTFS Permissions and File Sharing"],["im2.4","Windows Services and Processes"],
      ["im2.5","Windows Registry and System Configuration"],["im2.6","Windows Event Logs"],
      ["im2.7","Windows Updates and Troubleshooting"],["im2.8","Command Prompt (CMD) Fundamentals"],
      ["im2.9","CMD Commands and Batch Scripting"],["im2.10","PowerShell Fundamentals"],
      ["im2.11","PowerShell Commands and Cmdlets"],["im2.12","PowerShell Scripting and Automation"]
    ]},
  { id: "im3", name: "Module 3", title: "Linux Administration", color: "#34d399",
    desc: "Manage Linux systems, servers, users and services.",
    lessons: [
      ["im3.1","Linux File System Structure"],["im3.2","Linux Users and Groups"],
      ["im3.3","Linux Permissions and Ownership"],["im3.4","Linux Processes and Services"],
      ["im3.5","Package Management"],["im3.6","Linux Networking Configuration"],
      ["im3.7","Linux Logs and Troubleshooting"],["im3.8","Remote Administration with SSH"],
      ["im3.9","Bash Fundamentals"],["im3.10","Bash Commands and Shell Scripting"],
      ["im3.11","Bash Automation and Practical Scripts"]
    ]},
  { id: "im4", name: "Module 4", title: "Intermediate Networking", color: "#a78bfa",
    desc: "Configure and troubleshoot real networks.",
    lessons: [
      ["im4.1","IPv4 Address Structure"],["im4.2","Subnet Masks and CIDR"],
      ["im4.3","Subnetting"],["im4.4","ARP and Default Gateway"],
      ["im4.5","DNS and DNS Resolution"],["im4.6","DHCP and the DORA Process"],
      ["im4.7","TCP and UDP"],["im4.8","Ports and Network Services"],
      ["im4.9","Routing Fundamentals"],["im4.10","NAT and VLAN Fundamentals"],
      ["im4.11","Network Troubleshooting"],
      ["im4.12","The OSI Model — A Deeper Look at the 7 Layers"],["im4.13","IP Addressing"],["im4.14","MAC Addresses — How Devices Find Each Other"]
    ]},
  { id: "im5", name: "Module 5", title: "Active Directory Fundamentals", color: "#818cf8",
    desc: "Understand centralized identity and Windows domain management.",
    lessons: [
      ["im5.1","Understanding Active Directory"],["im5.2","Domains, Forests and Domain Controllers"],
      ["im5.3","Users, Groups and Organizational Units"],["im5.4","Group Policy Objects (GPO)"],
      ["im5.5","Authentication and Kerberos"],["im5.6","LDAP and Directory Services"],
      ["im5.7","Active Directory Administration"]
    ]},
  { id: "im6", name: "Module 6", title: "Programming Fundamentals — Python", color: "#fbbf24",
    desc: "Learn general-purpose programming and automation.",
    lessons: [
      ["im6.1","Introduction to Programming"],["im6.2","Variables, Data Types and Operators"],
      ["im6.3","Conditions and Loops"],["im6.4","Functions and Modules"],
      ["im6.5","Lists, Dictionaries and Data Structures"],["im6.6","Working with Files"],
      ["im6.7","Python Fundamentals"],["im6.8","Error Handling"],
      ["im6.9","Python Automation and Practical Scripts"]
    ]},
  { id: "im7", name: "Module 7", title: "Database Fundamentals", color: "#fb923c",
    desc: "Understand how applications store and manage data.",
    lessons: [
      ["im7.1","Understanding Databases"],["im7.2","Relational vs Non-Relational Databases"],
      ["im7.3","Tables, Rows and Columns"],["im7.4","SQL Fundamentals"],
      ["im7.5","SQL Queries and Filtering"],["im7.6","Primary Keys and Foreign Keys"],
      ["im7.7","Database Relationships"],["im7.8","Database Backup and Recovery"]
    ]},
  { id: "im8", name: "Module 8", title: "Web Fundamentals", color: "#f472b6",
    desc: "Understand how websites and web applications work.",
    lessons: [
      ["im8.1","How the Web Works"],["im8.2","HTML Fundamentals"],
      ["im8.3","CSS Fundamentals"],["im8.4","JavaScript Fundamentals"],
      ["im8.5","HTTP and HTTPS"],["im8.6","Understanding Web Servers"],
      ["im8.7","APIs and REST Fundamentals"],["im8.8","How Web Applications Communicate with Databases"]
    ]},
  { id: "im9", name: "Module 9", title: "Cybersecurity Practices", color: "#f87171",
    desc: "Apply security concepts and understand defensive tools.",
    lessons: [
      ["im9.1","Security Principles and CIA Triad"],["im9.2","Authentication and Access Control"],
      ["im9.3","Encryption and Hashing"],["im9.4","Firewalls and Endpoint Security"],
      ["im9.5","Vulnerabilities and Vulnerability Assessment"],["im9.6","Security Monitoring and Logging"],
      ["im9.7","Introduction to SIEM Tools"],["im9.8","Incident Detection and Response Fundamentals"]
    ]},
  { id: "im10", name: "Module 10", title: "Virtualization and Containers", color: "#4ade80",
    desc: "Create and manage virtual environments.",
    lessons: [
      ["im10.1","Understanding Virtualization"],["im10.2","Virtual Machines and Hypervisors"],
      ["im10.3","VirtualBox, VMware and Hyper-V"],["im10.4","Virtual Networks and Virtual Storage"],
      ["im10.5","Understanding Containers"],["im10.6","Docker Fundamentals"],
      ["im10.7","Containers vs Virtual Machines"]
    ]},
  { id: "im11", name: "Module 11", title: "Cloud Computing Fundamentals", color: "#22d3ee",
    desc: "Understand cloud infrastructure and services.",
    lessons: [
      ["im11.1","Understanding Cloud Computing"],["im11.2","IaaS, PaaS and SaaS"],
      ["im11.3","Public, Private and Hybrid Cloud"],["im11.4","Cloud Infrastructure and Virtual Networks"],
      ["im11.5","Cloud Storage and Compute"],["im11.6","Microsoft Azure Fundamentals"],
      ["im11.7","AWS Fundamentals"],
      ["im11.9","Google Cloud Platform (GCP) Fundamentals"],["im11.8","Cloud Security and Identity Basics"]
    ]}
];
/* Build lesson labels for intermediate modules: M1.1, M1.2, … */
INTERMEDIATE_LEVELS.forEach(function(lv, mi) {
  lv.lessons.forEach(function(r, k) { LBL[r[0]] = "M" + (mi + 1) + "." + (k + 1); });
});

/* Level 6 - Intermediate (a path tree on its own page) */
const INTERMEDIATE = { id: "l6m", desc: "Learn how to work with IT technologies.", name: "Level 6", title: "Intermediate", color: "#38bdf8", items: [
  ["Operating Systems", "Deep dive into how operating systems work.", ["The Kernel", "Understanding Processes", "CPU Scheduling"]],
  ["Windows Administration", "Manage Windows systems, users and settings."],
  ["Linux Administration", "Manage Linux servers, users, services and permissions."],
  ["Intermediate Networking", "Configure and troubleshoot real networks.", ["Subnetting", "DNS", "DHCP", "TCP and UDP"]],
  ["Active Directory Fundamentals", "Domains, users, groups and policies."],
  ["Scripting and Programming Basics", "PowerShell, Bash and Python."],
  ["Database Fundamentals", "SQL, databases and data management."],
  ["Web Fundamentals", "HTML, CSS, JavaScript, HTTP and APIs."],
  ["Cybersecurity Practices", "Security tools, vulnerability assessment and monitoring."],
  ["Cloud Computing Fundamentals", "Azure, AWS, Google Cloud and cloud services."],
  ["Virtualization and Containers", "Virtual machines and Docker basics."]
]};

/* Level 7 (id l6) - choose a specialization path */
const PATHS = [
  { name: "Cybersecurity", color: "#f472b6", items: ["SOC Analyst", "Blue Team", "Penetration Testing", "Digital Forensics", "Threat Hunting", "Incident Response"] },
  { name: "Network Engineering", color: "#60a5fa", items: ["Network Engineering", "Network Security", "Wireless Networking", "Advanced Routing and Switching"] },
  { name: "Systems Engineering", color: "#fb923c", items: ["Operating System Internals", "Windows Server", "Linux Server", "Active Directory", "Virtualization", "Enterprise Infrastructure"] },
  { name: "Cloud Computing", color: "#22d3ee", items: ["Microsoft Azure", "Amazon AWS", "Google Cloud", "Cloud Security", "Cloud Administration"] },
  { name: "DevOps and Automation", color: "#a78bfa", items: ["Git and GitHub", "CI/CD", "Docker and Containers", "Kubernetes", "Infrastructure as Code"] },
  { name: "Software Development", color: "#4ade80", items: ["Programming", "Web Development", "Backend Development", "APIs", "Application Development"] },
  { name: "Data and Artificial Intelligence", color: "#fbbf24", items: ["Databases and SQL", "Data Analysis", "Data Engineering", "Machine Learning", "Artificial Intelligence"] },
  { name: "IT Support Engineering", color: "#2dd4bf", items: ["Help Desk", "Desktop Support", "Hardware Troubleshooting", "Technical Support"] }
];

/* Lessons inside specialization paths (moved from Intermediate). Keys stay the same, so progress is kept. */
const SPEC_LESSONS = {
  "Operating System Internals": { path: "Systems Engineering", tag: "OS", lessons: [
    ["im1.1", "Understanding the Kernel"], ["im1.3", "Understanding Threads"], ["im1.4", "Memory Management"],
    ["im1.5", "CPU Scheduling"], ["im1.7", "System Calls"], ["im1.8", "User Mode vs Kernel Mode"]
  ]}
};
const SPEC_LESSON_KEYS = [];
Object.keys(SPEC_LESSONS).forEach(function (name) { var s = SPEC_LESSONS[name]; s.lessons.forEach(function (r, k) { SPEC_LESSON_KEYS.push(r[0]); LBL[r[0]] = s.tag + "." + (k + 1); }); });   // labels OS.1, OS.2 ...

/* Certifications to aim for (edit freely). Shown in the Certifications section. */
const CERTS = [
  { stage: "Levels 0-2", title: "Foundations", color: "#a78bfa",
    items: ["CompTIA IT Fundamentals (ITF+)", "CompTIA A+", "Google IT Support Professional Certificate"] },
  { stage: "Level 3", title: "Networking", color: "#60a5fa",
    items: ["CompTIA Network+", "Cisco CCNA"] },
  { stage: "Level 4", title: "Cybersecurity", color: "#f472b6",
    items: ["CompTIA Security+", "ISC2 Certified in Cybersecurity (CC)", "Microsoft SC-900"] },
  { stage: "Level 5", title: "IT Workplace", color: "#4ade80",
    items: ["ITIL Foundation", "CompTIA A+"] }
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
  ["IT Support Engineering", "#2dd4bf", ["CompTIA A+", "ITIL Foundation", "Microsoft Endpoint Administrator (MD-102)"]]
];

/* YouTube video IDs, by lesson number. Leave empty until the video is ready. */
const VIDEOS = {
  "0.2": "oOPpmy0bbOg", // What Is IT?
  "0.3": "fwtvIdJAo8w", // Careers in IT
  "1":   "vAC-H0WmxtM", // What Is a Computer?
  "2":   "INuCWyL0C40", // What Is Hardware?
  "3":   "r6trL01su2w", // What Is Software?
  "4":   "_jvHKsBNcRY", // How Does a Computer Work?
  "5":   "lE3M-oPZUTQ", // How Computers Represent Information
  "6":   "OYSLIOZQ1hw", // Understanding Operating Systems
  "10":  "6qBUwYLLe_U", // Windows
  "11":  "xM5UZDypWmA", // Linux
  "13":  "XID0Vgtylt8", // Mobile and Other Operating Systems
  "15":  "CRYJtPPXak0", // What Is a Network?
  "16":  "WETARwhb1RM", // Network Devices and Their Functions
  "17":  "-6vIzRJt2vk", // MAC Address and IP Address Explained
  "27":  "JSanFqS5_nM", // What Is Cybersecurity?
  "28":  "-S4RcR5zM6s", // Common Cyber Threats and Attacks
  "31":  "V0yEzSyIsiQ", // Password Security and MFA Explained
  "51":  "KvRj8-frEHU", // What Is the OSI Model?
  "52":  "0bVW9aI1exE", // Cybersecurity Best Practices
  "54":  "VlwUAFHQPfo", // Finding Your First IT Job
  "55":  "GEFlkUeh0IU", // A Day Working in an IT Company
  "57":  "3NG1EqnIRXs", // Understanding ITSM and ITIL
  "5.5.1": "g_lPiuAqSf8", // The Role of an IT Support Technician
  "5.5.2": "0RQUFHYX2PQ", // Basic Troubleshooting Methodology
  "5.5.3": "w6V56fsX7Qk", // Remote Support Tools
  "5.5.4": "SSTCBHDDtp8", // Professional IT Support Practices
  "servicenow.0.1": "TM3_vAdGZnA", // What Is ServiceNow?
  "servicenow.0.2": "wKNf6ootoZo", // Incidents vs Service Requests
  "servicenow.0.3": "YVxOj4NwIIc", // Knowledge Base + PDI Lab
  "servicenow.1.1": "K-vS398IRXU", // CSA 1.1
  "servicenow.1.2": "1JaGR57fjvE", // CSA 1.2
  "servicenow.1.3": "RBCjQf83c0M", // CSA 1.3
  "servicenow.1.4": "T4tNA8FzERA", // CSA 1.4
  "servicenow.1.5": "wcDHHE1Gx3U", // CSA 1.5
  "servicenow.1.6": "9j4UeO247q0", // CSA 1.6
  "servicenow.1.7": "Mml5s_T60BA", // CSA 1.7
  "servicenow.1.8": "IPYHytHQCxE", // CSA 1.8
  "servicenow.1.9": "Nj5-nMwIjXI", // CSA 1.9
  "servicenow.1.10": "AAVU0MuAnhc", // CSA 1.10
  "servicenow.1.11": "8CCCps5U-lg", // CSA 1.11
  "servicenow.1.12": "2xpTxSJYbLU", // CSA 1.12
  "servicenow.1.13": "vvInCu0-SBQ", // CSA 1.13
  "servicenow.1.14": "Ehz75y72_Bg", // CSA 1.14
  "servicenow.1.15": "TDToy5T2WAM", // CSA 1.15
  "servicenow.1.16": "9YfRoCo0_8w", // CSA 1.16
  "servicenow.1.17": "etPzSpcHtec", // CSA 1.17
  "servicenow.1.x1": "F6T60AyT3tU", // CSA 1.E1 exam explained
  "servicenow.1.x2": "3u2caY3y3io", // CSA 1.E2 objectives checklist
  "linkedin.0.1": "1haDfgG7waE", // LinkedIn for IT Jobs
  "glassdoor.0.1": "MeM2IGOA6yM", // Glassdoor: research companies
  "indeed.0.1": "MI-nP0w4Wh8", // Indeed: search, filter and apply
  "58":  "3kp40W0oT0Q", // How to Calculate in Binary
  "im4.14": "hy5FD9k1Hd8", // MAC Addresses Explained
  "im1.1": "0VVAza-8CUY", // Understanding the Kernel
  "im4.12": "qOhK8otyr2Q", // The OSI Model — A Deeper Look at the 7 Layers
  "im4.13": "HXJjk7_T0qk", // IP Addressing
};

/* Web-version lessons (HTML pages inside the "lessons" folder), by lesson number.
   To add a lesson: put its folder in lessons/ and add a line here. */
const LESSON_PAGES = {
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
  "5.5.2": { title: "Practical troubleshooting scenarios", text: "Real support cases step by step: a user can't print, Wi-Fi drops, Outlook won't open, a PC is slow. Find the cause, fix it and write the ticket." },
  "5.5.4": { title: "Practical troubleshooting scenarios", text: "Work a ticket from start to finish: talk to the user, decide when to escalate, write clear notes and close it the right way." },
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
  "1":"💻","2":"🔩","3":"🪟","4":"⚙️","5":"🔢","58":"🧮",
  "6":"🖥️","7":"🗂️","8":"🧠","9":"🚀","10":"🟦","11":"🐧","12":"🍎","13":"📱","14":"⚖️",
  "15":"🌐","16":"📡","17":"📍","51":"🗂️","18":"✂️","19":"🏷️","20":"📖","21":"🎫","22":"📦","23":"🚪","24":"🔀","25":"📶","26":"🛠️",
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
