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
    ["1", "What Is a Computer?", 0],
    ["2", "What Is Hardware?", 0],
    ["3", "What Is Software?", 0],
    ["4", "How Does a Computer Work?", 0],
    ["5", "How Computers Represent Information", 0]
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

/* YouTube video IDs, by lesson number. Leave empty until the video is ready. */
const VIDEOS = {
  // "3": "AbCdEf12345",
};
