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
  { id: "l0", name: "Level 0", title: "Introduction to IT", color: "#2dd4bf", lessons: [
    ["0.1", "Welcome to the IT Roadmap", 0],
    ["0.2", "What Is Information Technology?", 0],
    ["0.3", "Different Careers in IT", 0],
    ["0.4", "How to Learn IT and Practise", 0]
  ]},

  { id: "l1", name: "Level 1", title: "Computer Fundamentals", color: "#a78bfa", lessons: [
    ["1", "What Is a Computer?", 1],
    ["2", "What Is Hardware?", 1],
    ["3", "What Is Software?", 1],
    ["4", "How Does a Computer Work?", 1],
    ["5", "How Computers Represent Information", 1]
  ]},

  { id: "l2", name: "Level 2", title: "Operating Systems", color: "#fb923c", lessons: [
    ["6", "Understanding Operating Systems", 0],
    ["7", "Types of Operating Systems", 0],
    ["8", "How an Operating System Works", 0],
    ["9", "How Computers Start: BIOS, UEFI and Boot Process", 0],
    ["10", "Windows: Understanding the Operating System", 1],
    ["11", "Linux: Understanding the Operating System", 1],
    ["12", "macOS: Understanding Apple's Operating System", 0],
    ["13", "Android and iOS: Mobile Operating Systems", 0],
    ["14", "Comparing Operating Systems", 0]
  ]},

  { id: "l3", name: "Level 3", title: "Networking Fundamentals", color: "#60a5fa", lessons: [
    ["15", "What Is a Network?", 0],
    ["16", "Network Devices and Components", 0],
    ["17", "IP Addressing", 1],
    ["18", "Subnetting Basics", 1],
    ["19", "MAC Addresses", 1],
    ["20", "DNS", 1],
    ["21", "DHCP", 1],
    ["22", "TCP and UDP", 1],
    ["23", "Common Network Ports and Protocols", 1],
    ["24", "Routers, Switches and Access Points", 1],
    ["25", "Wireless Networks and Wi-Fi", 0],
    ["26", "Network Troubleshooting", 1]
  ]},

  { id: "l4", name: "Level 4", title: "Cybersecurity Fundamentals", color: "#f472b6", lessons: [
    ["27", "What Is Cybersecurity?", 0],
    ["28", "Common Cyber Threats and Attacks", 0],
    ["29", "Malware and Ransomware", 0],
    ["30", "Phishing and Social Engineering", 1],
    ["31", "Password Security and MFA", 1],
    ["32", "Authentication and Authorization", 0],
    ["33", "Security Principles: CIA Triad", 0],
    ["34", "Firewalls and Network Security", 1],
    ["35", "Encryption Basics", 1],
    ["36", "Vulnerabilities and Risk Management", 0],
    ["37", "Security Monitoring and Incident Response", 1]
  ]},

  { id: "l5", name: "Level 5", title: "IT Administration and Operations", color: "#4ade80", lessons: [
    ["38", "Introduction to IT Administration", 0],
    ["39", "Managing Users and Groups", 1],
    ["40", "Permissions and Access Control", 1],
    ["41", "Active Directory Fundamentals", 1],
    ["42", "Managing Windows Systems", 1],
    ["43", "Linux System Administration", 1],
    ["44", "Services, Processes and Logs", 1],
    ["45", "Software Installation and Updates", 1],
    ["46", "Command Line Fundamentals", 1],
    ["47", "Scripting and Automation Basics", 1],
    ["48", "System Monitoring and Performance", 1],
    ["49", "Backup and Recovery", 1],
    ["50", "Virtualization Fundamentals", 1]
  ]}
];

/* Level 6 - choose a specialization path */
const PATHS = [
  { name: "Cybersecurity", color: "#f472b6", items: ["SOC Analyst", "Blue Team", "Penetration Testing", "Digital Forensics", "Threat Hunting", "Incident Response"] },
  { name: "Networking", color: "#60a5fa", items: ["Network Engineering", "Network Security", "Wireless Networking", "Advanced Routing and Switching"] },
  { name: "Cloud Computing", color: "#22d3ee", items: ["Microsoft Azure", "Amazon AWS", "Google Cloud", "Cloud Security", "Cloud Administration"] },
  { name: "DevOps and Automation", color: "#a78bfa", items: ["Git and GitHub", "CI/CD", "Docker and Containers", "Kubernetes", "Infrastructure as Code"] },
  { name: "System Engineering", color: "#fb923c", items: ["Windows Server", "Linux Server", "Active Directory", "Virtualization", "Enterprise Infrastructure"] },
  { name: "Software Development", color: "#4ade80", items: ["Programming", "Web Development", "Backend Development", "APIs", "Application Development"] },
  { name: "Data and AI", color: "#fbbf24", items: ["Databases and SQL", "Data Analysis", "Data Engineering", "Machine Learning", "Artificial Intelligence"] },
  { name: "IT Support", color: "#2dd4bf", items: ["Help Desk", "Desktop Support", "Hardware Troubleshooting", "Technical Support"] }
];

/* Certifications to aim for (edit freely). Shown in the Certifications section. */
const CERTS = [
  { stage: "Levels 0-2", title: "Foundations", color: "#a78bfa",
    items: ["CompTIA IT Fundamentals (ITF+)", "CompTIA A+", "Google IT Support Professional Certificate"] },
  { stage: "Level 3", title: "Networking", color: "#60a5fa",
    items: ["CompTIA Network+", "Cisco CCNA"] },
  { stage: "Level 4", title: "Cybersecurity", color: "#f472b6",
    items: ["CompTIA Security+", "ISC2 Certified in Cybersecurity (CC)", "Microsoft SC-900"] },
  { stage: "Level 5", title: "IT Administration", color: "#4ade80",
    items: ["CompTIA Linux+", "Red Hat RHCSA", "Microsoft Endpoint Administrator (MD-102)"] }
];

/* Level 6: certifications for each specialization path */
const PATH_CERTS = [
  ["Cybersecurity", "#f472b6", ["Microsoft SC-200", "CompTIA CySA+", "CompTIA PenTest+", "OffSec OSCP"]],
  ["Networking", "#60a5fa", ["Cisco CCNP Enterprise", "Cisco CCNP Security"]],
  ["Cloud Computing", "#22d3ee", ["Microsoft AZ-900 / AZ-104", "AWS Cloud Practitioner / Solutions Architect Associate", "Google Associate Cloud Engineer"]],
  ["DevOps and Automation", "#a78bfa", ["Certified Kubernetes Administrator (CKA)", "HashiCorp Terraform Associate", "GitHub Foundations"]],
  ["System Engineering", "#fb923c", ["Microsoft Windows Server Hybrid Administrator (AZ-800)", "Red Hat RHCSA", "VMware VCP"]],
  ["Software Development", "#4ade80", ["Python Institute PCEP / PCAP", "Microsoft Azure Developer (AZ-204)"]],
  ["Data and AI", "#fbbf24", ["Microsoft DP-900 / AI-900", "Google Data Analytics Certificate"]],
  ["IT Support", "#2dd4bf", ["CompTIA A+", "ITIL 4 Foundation", "Microsoft Endpoint Administrator (MD-102)"]]
];

/* YouTube video IDs, by lesson number. Leave empty until the video is ready. */
const VIDEOS = {
  // "3": "AbCdEf12345",
};

/* Web-version lessons (HTML pages inside the "lessons" folder), by lesson number.
   To add a lesson: put its folder in lessons/ and add a line here. */
const LESSON_PAGES = {
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
