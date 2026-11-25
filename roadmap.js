/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
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

  { id: "l3", desc: "Understand what networks are and learn the basic terminology: network types, devices, addressing and the OSI model.", name: "Level 3", title: "Networking Fundamentals", color: "#60a5fa", lessons: [
    ["15", "What Is a Network?", 0],
    ["n3.2", "Types of Networks", 0],
    ["16", "Network Devices and Their Functions", 0],
    ["n3.6", "Network Topologies", 0],
    ["17", "IP Addresses and MAC Addresses", 1],
    ["51", "Introduction to the OSI Model", 0]
  ]},

  { id: "l4", desc: "Threats, attacks, passwords and the basics of staying safe.", name: "Level 4", title: "Cybersecurity Fundamentals", color: "#f472b6", lessons: [
    ["27", "What Is Cybersecurity?", 0],
    ["28", "Common Cyber Threats and Attacks", 0],
    ["31", "Password Security and MFA", 1],
    ["52", "Cybersecurity Best Practices", 0]
  ]},

  { id: "l5", desc: "Corporate IT, ticketing and getting your first IT job.", name: "Level 5", title: "IT Workplace and Career Preparation", color: "#4ade80", jobReady: "Ready to start applying for L1 Help Desk / IT Support", lessons: [
    ["54", "Finding Your First IT Job", 0],
    ["55", "A Day Working in an IT Company", 0]
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
// Level 3 custom labels (3.1–3.5)
LBL["15"] = "3.1"; LBL["n3.2"] = "3.2"; LBL["16"] = "3.3"; LBL["n3.6"] = "3.4"; LBL["17"] = "3.5"; LBL["51"] = "3.6";

/* Intermediate Modules — full lesson data for the intermediate roadmap tree */
const INTERMEDIATE_LEVELS = [
  { id: "im4", name: "Module 4", title: "Intermediate Networking", color: "#a78bfa",
    desc: "Understand how devices communicate, exchange information and access network resources.",
    lessons: [
      ["im4.14","MAC Addresses — How Devices Find Each Other"],["im4.13","IP Addressing"],["im4.20","Public vs Private IP Address"],["im4.19","IPv4 vs IPv6"],
      ["im4.3","Subnetting Fundamentals"],
      ["im4.4","What Is ARP and the Default Gateway?"],
      ["im4.6","DHCP — How Devices Get IP Addresses"],["im4.5","DNS — How Domain Names Are Resolved"],
      ["im4.7","TCP and UDP"],["im4.8","Network Ports"],
      ["im4.15","ICMP — How Devices Test Connectivity"],
      ["im4.10","NAT — Network Address Translation"],
      ["im4.17","VLANs — Dividing a Network"],
      ["im4.12","The OSI Model — A Deeper Look"]
    ]},
  { id: "im2", name: "Module 2", title: "Windows Administration", color: "#38bdf8",
    desc: "Manage, configure and automate Windows systems.",
    lessons: [
      ["im2.1","What a Windows Admin Does"],["im2.2","Managing Users and Groups"],
      ["im2.3","NTFS Permissions and File Sharing"],["im2.4","Windows Services and Processes"],
      ["im2.13","What Is the Windows Registry?"],
      ["im2.5","Windows Registry and System Configuration"],["im2.6","Windows Event Logs"],
      ["im2.7","Windows Updates and Troubleshooting"],
      ["im2.14","CMD vs PowerShell"],
      ["im2.8","CMD Fundamentals"],["im2.10","PowerShell Fundamentals"]
    ]},
  { id: "im3", name: "Module 3", title: "Linux Administration", color: "#34d399",
    desc: "Manage Linux systems, servers, users and services.",
    lessons: [
      ["im3.14","Linux Explained for Beginners"],
      ["im3.13","Your First Steps in Linux"],
      ["im3.9","Bash Fundamentals"],
      ["im3.1","Linux File System Structure"],
      ["im3.12","Linux Folders Made Simple"],
      ["im3.2","Linux Users and Groups"],
      ["im3.3","Linux Permissions and Ownership"],["im3.4","Linux Processes and Services"],
      ["im3.5","Package Management"]
    ]},
  { id: "im5", name: "Module 5", title: "Active Directory Fundamentals", color: "#818cf8",
    desc: "Understand centralized identity and Windows domain management.",
    lessons: [
      ["im5.1","Understanding Active Directory"],["im5.2","Domains, Forests and Domain Controllers"],
      ["im5.3","Users, Groups and Organizational Units"],["im5.4","Group Policy Objects (GPO)"],
      ["im5.5","Authentication and Kerberos"],["im5.6","LDAP and Directory Services"],
      ["im5.7","Active Directory Administration"]
    ]},
  { id: "im8", name: "Module 8", title: "Web Fundamentals", color: "#f472b6",
    desc: "Understand how websites and web applications work.",
    lessons: [
      ["im8.1","How the Web Works"],["im8.2","HTML Fundamentals"],
      ["im8.3","CSS Fundamentals"],["im8.4","JavaScript Fundamentals"],
      ["im8.5","HTTP and HTTPS"],["im8.6","Understanding Web Servers"],
      ["im8.7","APIs and REST Fundamentals"],["im8.8","How Web Applications Communicate with Databases"]
    ]},
  { id: "im10", name: "Module 10", title: "Virtualization and Containers", color: "#4ade80",
    desc: "Create and manage virtual environments.",
    lessons: [
      ["im10.1","Understanding Virtualization"],["im10.2","Virtual Machines and Hypervisors"],
      ["im10.3","VirtualBox, VMware and Hyper-V"],["im10.4","Virtual Networks and Virtual Storage"],
      ["im10.5","Understanding Containers"],["im10.6","Docker Fundamentals"],
      ["im10.7","Containers vs Virtual Machines"]
    ]},
  { id: "im7", name: "Module 7", title: "Database Fundamentals", color: "#fb923c",
    desc: "Understand how applications store and manage data.",
    lessons: [
      ["im7.1","Understanding Databases"],["im7.2","Relational vs Non-Relational Databases"],
      ["im7.3","Tables, Rows and Columns"],["im7.4","SQL Fundamentals"],
      ["im7.6","Primary Keys and Foreign Keys"],
      ["im7.7","Database Relationships"],["im7.8","Database Backup and Recovery"]
    ]},
  { id: "im11", name: "Module 11", title: "Cloud Computing Fundamentals", color: "#22d3ee",
    desc: "Understand cloud infrastructure and services.",
    lessons: [
      ["im11.1","Understanding Cloud Computing"],["im11.2","IaaS, PaaS and SaaS"],
      ["im11.3","Public, Private and Hybrid Cloud"],["im11.4","Cloud Infrastructure and Virtual Networks"],
      ["im11.5","Cloud Storage and Compute"],["im11.6","Microsoft Azure Fundamentals"],
      ["im11.7","AWS Fundamentals"],
      ["im11.9","Google Cloud Platform (GCP) Fundamentals"],["im11.8","Cloud Security and Identity Basics"]
    ]},
  { id: "im9", name: "Module 9", title: "Cybersecurity Practices", color: "#f87171",
    desc: "Apply security concepts and understand defensive tools.",
    lessons: [
      ["im9.1","Security Principles and CIA Triad"],["im9.2","Authentication and Access Control"],
      ["im9.3","Encryption and Hashing"],["im9.4","Firewalls and Endpoint Security"],
      ["im9.5","Vulnerabilities and Vulnerability Assessment"],["im9.6","Security Monitoring and Logging"]
    ]},
];
/* extra lessons that sit between two numbered lessons (shown as M1.4.1, M1.7.1 ...) */
const SUB_LESSONS = ["im2.13", "im2.14"];
/* Build lesson labels for intermediate modules: M1.1, M1.2, … */
INTERMEDIATE_LEVELS.forEach(function(lv, mi) {
  lv.name = "Module " + (mi + 1);   // modules are numbered by their position
  var k = 0, subn = 0;
  lv.lessons.forEach(function(r) {
    if (SUB_LESSONS.indexOf(r[0]) >= 0) { subn++; LBL[r[0]] = "M" + (mi + 1) + "." + k + "." + subn; }
    else { k++; subn = 0; LBL[r[0]] = "M" + (mi + 1) + "." + k; }
  });
});

/* Level 6 - Intermediate (a path tree on its own page) */
const INTERMEDIATE = { id: "l6m", desc: "Learn how to work with IT technologies.", name: "Level 6", title: "Intermediate", color: "#38bdf8", items: [
  ["Intermediate Networking", "Configure and troubleshoot real networks.", ["Subnetting", "DNS", "DHCP", "TCP and UDP"]],
  ["Windows Administration", "Manage Windows systems, users and settings."],
  ["Linux Administration", "Manage Linux servers, users, services and permissions."],
  ["Active Directory Fundamentals", "Domains, users, groups and policies."],
  ["Database Fundamentals", "SQL, databases and data management."],
  ["Web Fundamentals", "HTML, CSS, JavaScript, HTTP and APIs."],
  ["Cybersecurity Practices", "Security tools, vulnerability assessment and monitoring."],
  ["Cloud Computing Fundamentals", "Azure, AWS, Google Cloud and cloud services."],
  ["Virtualization and Containers", "Virtual machines and Docker basics."]
]};

/* Level 7 (id l6) - choose a specialization path */
const PATHS = [
  { name: "Cybersecurity", color: "#f472b6", items: ["SIEM and Incident Response", "SOC Analyst", "Blue Team", "Penetration Testing", "Digital Forensics", "Threat Hunting", "Incident Response"] },
  { name: "Network Engineering", title: "Network Engineering · From Zero to Network Specialist", color: "#60a5fa",
    items: ["Switching Technologies", "Routing Technologies", "Network Security", "Troubleshooting and Monitoring", "High Availability",
            "Advanced Network Security", "Wireless Networking", "Cloud Networking", "Data Center Networking", "Network Automation and Programmability", "Service Provider and Telecom Networking", "Network Architecture and Design"],
    groups: [
      { title: "Advanced Networking", text: "Configure, operate, troubleshoot and secure real-world networks (CCNA is the backbone).", items: ["Switching Technologies", "Routing Technologies", "Network Security", "Troubleshooting and Monitoring", "High Availability"] },
      { title: "Specialized Networking", text: "Choose the professional field you want. You do not need to study every one.", items: ["Advanced Network Security", "Wireless Networking", "Cloud Networking", "Data Center Networking", "Network Automation and Programmability", "Service Provider and Telecom Networking", "Network Architecture and Design"] }
    ] },
  { name: "Systems Engineering", color: "#fb923c", items: ["Operating System Internals", "Windows Server", "Linux Server", "Active Directory", "Virtualization", "Enterprise Infrastructure"] },
  { name: "Cloud Computing", color: "#22d3ee", items: ["Microsoft Azure", "Amazon AWS", "Google Cloud", "Cloud Security", "Cloud Administration"] },
  { name: "DevOps and Automation", color: "#a78bfa", items: ["Git and GitHub", "CI/CD", "Docker and Containers", "Kubernetes", "Infrastructure as Code"] },
  { name: "Software Development", color: "#4ade80", items: ["Programming", "Web Development", "Backend Development", "APIs", "Application Development"] },
  { name: "Data and Artificial Intelligence", color: "#fbbf24", items: ["Databases and SQL", "Data Analysis", "Data Engineering", "Machine Learning", "Artificial Intelligence"] },
  { name: "IT Support Engineering", color: "#2dd4bf", items: ["Help Desk", "Desktop Support", "Hardware Troubleshooting", "Technical Support"] },
  { name: "Enterprise Systems", title: "Enterprise Systems · SAP & Salesforce Learning Roadmap", color: "#1b90ff",
    items: ["SAP Fundamentals", "SAP Functional Consultant", "SAP Technical Administration", "SAP Development", "SAP Security",
            "Salesforce Fundamentals", "Salesforce Administrator", "Salesforce Functional Consultant", "Salesforce Development", "Salesforce Security"],
    groups: [
      { title: "SAP", text: "ERP: the system large companies use to run finance, purchasing, sales and HR.", items: ["SAP Fundamentals", "SAP Functional Consultant", "SAP Technical Administration", "SAP Development", "SAP Security"] },
      { title: "Salesforce", text: "CRM: the platform companies use to manage customers, sales and service.", items: ["Salesforce Fundamentals", "Salesforce Administrator", "Salesforce Functional Consultant", "Salesforce Development", "Salesforce Security"] }
    ] }
];
/* short focus line shown under a specialization path */
const PATH_NOTES = {
  "SAP Fundamentals": "Understand ERP, SAP and S/4HANA",
  "SAP Functional Consultant": "Finance, procurement, sales, HR",
  "SAP Technical Administration": "SAP Basis, HANA, system administration",
  "SAP Development": "ABAP, SAP BTP, Fiori",
  "SAP Security": "Authorizations, roles and access control",
  "Salesforce Fundamentals": "Understand CRM, the Salesforce platform and Trailhead",
  "Salesforce Administrator": "Users, data, reports and automation with Flow",
  "Salesforce Functional Consultant": "Sales Cloud, Service Cloud, business processes",
  "Salesforce Development": "Apex, Lightning Web Components, APIs",
  "Salesforce Security": "Profiles, permission sets, sharing and access control"
};

/* Lessons inside specialization paths (moved from Intermediate). Keys stay the same, so progress is kept. */
const SPEC_LESSONS = {
  "Linux Server": { path: "Systems Engineering", tag: "LX", lessons: [
    ["im3.6", "Linux Networking Configuration"], ["im3.7", "Linux Logs and Troubleshooting"], ["im3.8", "Remote Administration with SSH"]
  ]},
  "SIEM and Incident Response": { path: "Cybersecurity", tag: "SEC", lessons: [
    ["im9.7", "Introduction to SIEM Tools"], ["im9.8", "Incident Detection and Response Fundamentals"]
  ]},
  "Operating System Internals": { path: "Systems Engineering", tag: "OS", lessons: [
    ["im1.1", "Understanding the Kernel"], ["im1.2", "Understanding Processes"], ["im1.3", "Understanding Threads"],
    ["im1.4", "Memory Management"], ["im1.5", "CPU Scheduling"], ["im1.6", "File Systems and Storage Management"],
    ["im1.7", "System Calls"], ["im1.8", "User Mode vs Kernel Mode"]
  ]},
  "Switching Technologies": { path: "Network Engineering", tag: "SW", lessons: [
    ["nw.sw.1", "How Ethernet Switching Works"], ["nw.sw.2", "VLAN Configuration and Management"], ["nw.sw.3", "Trunking and 802.1Q"], ["nw.sw.4", "Spanning Tree Protocol (STP)"], ["nw.sw.5", "Link Aggregation"], ["nw.sw.6", "VLAN Troubleshooting"]
  ]},
  "Routing Technologies": { path: "Network Engineering", tag: "RT", lessons: [
    ["im4.9", "Routing Fundamentals"], ["nw.rt.2", "Static and Default Routing"], ["nw.rt.3", "Dynamic Routing"], ["nw.rt.4", "OSPF — Open Shortest Path First"], ["nw.rt.7", "EIGRP"], ["nw.rt.5", "BGP — Border Gateway Protocol"], ["nw.rt.8", "Route Redistribution"], ["nw.rt.6", "IPv6 Routing"]
  ]},
  "Network Security": { path: "Network Engineering", tag: "NS", lessons: [
    ["nw.ns.5", "Network Security Fundamentals"], ["nw.ns.1", "Network Firewalls"], ["nw.ns.2", "ACLs — Access Control Lists"], ["nw.ns.3", "VPN Fundamentals"], ["nw.ns.4", "Network Segmentation and Security"], ["nw.ns.6", "Secure Network Management"]
  ]},
  "Troubleshooting and Monitoring": { path: "Network Engineering", tag: "TR", lessons: [
    ["im4.11", "Network Troubleshooting Methodology"], ["nw.tr.2", "Network Diagnostic Tools"], ["nw.tr.3", "Packet Analysis with Wireshark"], ["nw.tr.tcp", "TCP and UDP in Action"], ["nw.tr.4", "SNMP and Syslog"], ["nw.tr.5", "Network Performance Monitoring"]
  ]},
  "High Availability": { path: "Network Engineering", tag: "HA", lessons: [
    ["nw.ha.1", "HSRP and VRRP"], ["nw.ha.2", "Redundant Links"], ["nw.ha.3", "Failover and Recovery"]
  ]},
  "Advanced Network Security": { path: "Network Engineering", tag: "ANS", lessons: [
    ["nw.as.1", "Next-Generation Firewalls (NGFW)"], ["nw.as.2", "IDS and IPS"], ["nw.as.3", "Network Access Control (NAC)"], ["nw.as.4", "Zero Trust Network Architecture"], ["nw.as.5", "Network Security Monitoring"], ["nw.as.6", "DDoS Protection"]
  ]},
  "Wireless Networking": { path: "Network Engineering", tag: "WL", lessons: [
    ["nw.wl.1", "Wireless Networking Fundamentals"], ["nw.wl.2", "Wi-Fi Standards"], ["nw.wl.3", "Wireless Security"], ["nw.wl.4", "Enterprise Wireless Architecture"], ["nw.wl.5", "Wireless Network Design"], ["nw.wl.6", "Wireless Troubleshooting"], ["nw.wl.7", "Wireless Controllers and Access Points"]
  ]},
  "Cloud Networking": { path: "Network Engineering", tag: "CN", lessons: [
    ["nw.cn.1", "Cloud Networking Fundamentals"], ["nw.cn.2", "AWS Networking"], ["nw.cn.3", "Microsoft Azure Networking"], ["nw.cn.4", "Hybrid Cloud Networking"], ["nw.cn.5", "Cloud Connectivity"], ["nw.cn.6", "Cloud Network Security"]
  ]},
  "Data Center Networking": { path: "Network Engineering", tag: "DC", lessons: [
    ["nw.dc.1", "Data Center Network Architecture"], ["nw.dc.2", "Spine-Leaf Architecture"], ["nw.dc.3", "VXLAN and Network Overlays"], ["nw.dc.4", "Data Center Redundancy"], ["nw.dc.5", "Load Balancing"]
  ]},
  "Network Automation and Programmability": { path: "Network Engineering", tag: "AU", lessons: [
    ["nw.au.1", "Network Automation Fundamentals"], ["nw.au.2", "Python for Network Engineers"], ["nw.au.3", "Network APIs"], ["nw.au.4", "Ansible for Network Automation"], ["nw.au.5", "Network Monitoring and Telemetry"]
  ]},
  "Service Provider and Telecom Networking": { path: "Network Engineering", tag: "SP", lessons: [
    ["nw.sp.1", "Internet Service Provider Architecture"], ["nw.sp.2", "MPLS Networking"], ["nw.sp.3", "WAN Technologies"], ["nw.sp.4", "SD-WAN"], ["nw.sp.5", "5G and Mobile Networking Fundamentals"], ["nw.sp.6", "BGP for Internet Service Providers"]
  ]},
  "Network Architecture and Design": { path: "Network Engineering", tag: "ARC", lessons: [
    ["nw.ar.1", "Enterprise Network Architecture"], ["nw.ar.2", "Campus Network Design"], ["nw.ar.3", "Capacity Planning"], ["nw.ar.4", "Redundancy and Scalability Design"], ["nw.ar.5", "Network Documentation"]
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
  ["Network Engineering", "#60a5fa", ["CompTIA Network+", "Cisco CCNA", "Cisco CCNP Enterprise", "Cisco CCNP Security", "Cisco DevNet Associate / Professional", "AWS Advanced Networking", "Azure Network Engineer"]],
  ["Cloud Computing", "#22d3ee", ["Microsoft AZ-900 / AZ-104", "AWS Cloud Practitioner / Solutions Architect Associate", "Google Associate Cloud Engineer"]],
  ["DevOps and Automation", "#a78bfa", ["Certified Kubernetes Administrator (CKA)", "HashiCorp Terraform Associate", "GitHub Foundations"]],
  ["Systems Engineering", "#fb923c", ["Microsoft Windows Server Hybrid Administrator (AZ-800)", "Red Hat RHCSA", "VMware VCP"]],
  ["Software Development", "#4ade80", ["Python Institute PCEP / PCAP", "Microsoft Azure Developer (AZ-204)"]],
  ["Data and Artificial Intelligence", "#fbbf24", ["Microsoft DP-900 / AI-900", "Google Data Analytics Certificate"]],
  ["IT Support Engineering", "#2dd4bf", ["CompTIA A+", "ITIL Foundation", "Microsoft Endpoint Administrator (MD-102)"]],
  ["Enterprise Systems", "#1b90ff", ["SAP Financial Accounting on S/4HANA (C_TS4FI)", "SAP Sourcing and Procurement (C_TS452)", "SAP Sales (C_TS462)", "SAP SuccessFactors Employee Central (C_THR81)", "SAP HANA Database Administration (C_DBADM)", "SAP System Security and Authorizations (C_SEC)", "SAP Back-End Developer: ABAP Cloud (C_ABAPD)", "SAP BTP Developer (C_ADBTP)", "Salesforce Certified Associate", "Salesforce Certified Platform Administrator", "Salesforce Certified Platform App Builder", "Salesforce Certified Platform Developer", "Salesforce Certified Sales Cloud Consultant", "Salesforce Certified Service Cloud Consultant"]]
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
  "googleworkspace.0.1": "bL555LNDh3k", // Introduction to Google Workspace
  "googleworkspace.0.2": "t5xWGLne2tM", // Gmail Support
  "googleworkspace.0.3": "BDOq3WNDaV4", // Google Drive Support
  "googleworkspace.0.4": "eLrysLrCj_0", // Google Meet & Chat
  "googleworkspace.0.5": "qejZOv7v82k", // Docs, Sheets & Slides
  "googleworkspace.0.6": "LT14dnWmRi4", // Account & Password Support
  "googleworkspace.0.7": "DbtTFs6Oubs", // Common Problems & Fixes
  "googleworkspace.0.8": "oBM7F-PsZ9w", // Real Support Scenarios
  "zoom.0.1": "JR_r2w0pONY",       // Zoom Meetings for IT Support (Level 5.1)
  "rdp.0.1": "1RHpe7gc_Po",        // Microsoft Remote Desktop (RDP) (Level 5.1)
  "teamviewer.0.1": "aMg-MOJWcoo", // TeamViewer for IT Support (Level 5.1)
  "anydesk.0.1": "pbgu2ydPWXg",    // AnyDesk for IT Support (Level 5.1)
  "microsoft365.0.2": "Bi4pZ9m2sJA", // Outlook for IT Support (Level 5.2)
  "microsoft365.0.4": "r0lm_sZLyMc", // OneDrive for IT Support (Level 5.2)
  "microsoft365.0.5": "nUr8xgQ1MjA", // SharePoint: Sites, Permissions & Access (Level 5.2)
  "microsoft365.0.6": "7FD5XMkWGsc", // Top 10 Microsoft 365 Issues (Level 5.2)
  "slack.0.1": "08tCIiXc8Z8",      // Slack (Level 5.1)
  "microsoft365.0.1": "PLcNq2KzEFA", // What Is Microsoft 365? / Admin Center (Level 5.2)
  "microsoft365.0.3": "5Hg7GuQCYvA", // Microsoft Teams: Chat, Meetings & Devices (Level 5.2)
  "jira.0.4": "8iFVbAuMB8M",         // Jira Service Management: Handling Your First Request (Level 5.1)
  "jira.0.2": "7xUB-mSc-AQ",         // Jira: Service Projects, Queues & Requests (Level 5.1)
  "jira.0.3": "_Ujdr1p9Uu0",         // How to Get a FREE Jira Cloud Site (Level 5.1)
  "jira.0.1": "Cjdh9ZMLVSo",         // What Is Jira Service Management? (Level 5.1)
  "im2.1":  "B5bl2iICzkc", // What a Windows Admin Does
  "im2.2":  "nhuogqgvBgU", // Managing Users and Groups
  "im2.3":  "FioiwHD4WQY", // NTFS Permissions and File Sharing
  "im2.4":  "4Jstj_OvdrM", // Windows Services and Processes
  "im2.13": "p-JWuZHxH3U", // What Is the Windows Registry?
  "im2.5":  "nEusztqABN8", // Windows Registry and System Configuration
  "im2.6":  "m-DRuyJQYgc", // Windows Event Logs
  "im2.7":  "GWsHB4EgjTc", // Windows Updates and Troubleshooting
  "im2.14": "GCOOZXDblYM", // CMD vs PowerShell
  "im2.8":  "5r3unso1fo4", // CMD Fundamentals
  "im2.10": "9aGTvgEiA10", // PowerShell Fundamentals
  "linkedin.0.1": "1haDfgG7waE", // LinkedIn for IT Jobs
  "glassdoor.0.1": "MeM2IGOA6yM", // Glassdoor: research companies
  "indeed.0.1": "MI-nP0w4Wh8", // Indeed: search, filter and apply
  "58":  "3kp40W0oT0Q", // How to Calculate in Binary
  "im4.14": "hy5FD9k1Hd8", // MAC Addresses Explained
  "im1.1": "0VVAza-8CUY", // Understanding the Kernel
  "im4.12": "qOhK8otyr2Q", // The OSI Model — A Deeper Look at the 7 Layers
  "im4.13": "HXJjk7_T0qk", // IP Addressing
  "im3.14": "xM5UZDypWmA", // Linux Explained for Beginners
  "im3.13": "5paBuSF4d7I", // Your First Steps in Linux
  "im3.12": "gfmTXPaEIhI", // Linux Folders Made Simple
  "im3.1": "5FYXR-LvSTg", // Linux File System Structure
  "im3.9": "768ePDvHTFs", // Bash Fundamentals
  "im3.2": "cV5paWUustQ", // Linux Users and Groups
  "im3.3": "uQVB6t2ITxU", // Linux Permissions and Ownership
  "im3.5": "oJ3SoqrAVqg", // Package Management
  "im3.4": "PBNc2-gj4xc", // Linux Processes and Services
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
  "15":"🌐","n3.2":"🧭","n3.6":"🕸️","16":"📡","17":"📍","51":"🗂️","18":"✂️","19":"🏷️","20":"📖","21":"🎫","22":"📦","23":"🚪","24":"🔀","25":"📶","26":"🛠️",
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

/* Advanced level: the same 9 modules as Intermediate. Lessons already published are collected from SPEC_LESSONS; new ones are added below. */
const ADV_NEW = {"im2": {"tag": "AWN", "lessons": [[1, "Windows Server Roles and Features"], [2, "DNS and DHCP on Windows Server"], [3, "Advanced PowerShell Scripting"], [4, "PowerShell Remoting and Automation"], [5, "Windows Performance Monitoring"], [6, "Windows Security Hardening"], [7, "Windows Server Backup and Recovery"], [8, "Troubleshooting Windows Boot and Startup Problems"]]}, "im5": {"tag": "AAD", "lessons": [[1, "Active Directory Sites and Replication"], [2, "FSMO Roles"], [3, "Advanced Group Policy Design and Troubleshooting"], [4, "Kerberos in Depth"], [5, "Active Directory Security and Tiered Administration"], [6, "Hybrid Identity with Microsoft Entra ID Connect"], [7, "Active Directory Backup and Disaster Recovery"]]}, "im8": {"tag": "AWB", "lessons": [[1, "TLS and Certificates in Depth"], [2, "Nginx and Apache Configuration"], [3, "Reverse Proxies and Load Balancers"], [4, "Caching and CDNs"], [5, "Web Application Security and the OWASP Top 10"], [6, "HTTP/2 and HTTP/3"], [7, "Web Performance and Troubleshooting"]]}, "im10": {"tag": "AVC", "lessons": [[1, "VMware vSphere and Hyper-V Administration"], [2, "Live Migration and High Availability for Virtual Machines"], [3, "Docker Images and Dockerfiles"], [4, "Docker Networking and Volumes"], [5, "Docker Compose"], [6, "Kubernetes Fundamentals"], [7, "Container Security"]]}, "im7": {"tag": "ADB", "lessons": [[1, "Advanced SQL: Joins, Subqueries and Window Functions"], [2, "Indexes and Query Optimization"], [3, "Transactions, ACID and Locking"], [4, "Database Replication and High Availability"], [5, "Database Security and Auditing"], [6, "NoSQL Databases in Practice"], [7, "Backup Strategies and Point-in-Time Recovery"]]}, "im11": {"tag": "ACL", "lessons": [[1, "Cloud Identity and Access Management"], [2, "Infrastructure as Code with Terraform"], [3, "Cloud Monitoring and Logging"], [4, "Cloud High Availability and Disaster Recovery"], [5, "Serverless Computing"], [6, "Containers in the Cloud"], [7, "Cloud Cost Management (FinOps)"], [8, "Cloud Security Posture Management"]]}};
const ADV_FROM_SPEC = {
  im4: ["Switching Technologies", "Routing Technologies", "Network Security", "Troubleshooting and Monitoring", "High Availability"],
  im3: ["Linux Server", "Operating System Internals"],
  im9: ["SIEM and Incident Response"]
};
const ADV_SEC_NAME = { "Switching Technologies": "Advanced Switching", "Routing Technologies": "Advanced Routing", "Troubleshooting and Monitoring": "Troubleshooting" };
const ADV_TITLE = { im4: "Advanced Networking" };
/* lessons moved here from the Intermediate level (keys unchanged, so videos, quizzes and progress stay) */
const ADV_EXTRA = { im4: { title: "Subnetting and Addressing", tag: "SN", rows: [["im4.2", "Subnet Masks and CIDR"], ["im4.21", "Subnetting Practice"], ["im4.22", "ARP and Default Gateway"], ["av.im4.dhcp", "DHCP and the DORA Process"], ["av.im4.dns", "DNS Resolution"], ["av.im4.ttl", "DNS TTL and Caching"], ["av.im4.rec", "DNS Records"]] } };
const ADVANCED_LEVELS = INTERMEDIATE_LEVELS.map(function (lv) {
  var rows = [], sections = [];
  if (ADV_EXTRA[lv.id]) { var ex = ADV_EXTRA[lv.id]; sections.push({ title: ex.title, from: 0 }); ex.rows.forEach(function (r, k) { LBL[r[0]] = ex.tag + "." + (k + 1); rows.push(r); }); }
  (ADV_FROM_SPEC[lv.id] || []).forEach(function (n) { if (SPEC_LESSONS[n]) { sections.push({ title: ADV_SEC_NAME[n] || n, from: rows.length }); SPEC_LESSONS[n].lessons.forEach(function (r) { rows.push(r); }); } });
  if (ADV_NEW[lv.id]) ADV_NEW[lv.id].lessons.forEach(function (r) { var key = "av." + lv.id + "." + r[0]; LBL[key] = ADV_NEW[lv.id].tag + "." + r[0]; rows.push([key, r[1]]); });
  var t = ADV_TITLE[lv.id] || lv.title.replace(/^Intermediate /, "");
  return { id: "adv-" + lv.id, name: "Advanced Module " + (INTERMEDIATE_LEVELS.indexOf(lv) + 1), title: t, color: lv.color, desc: "Go deeper in " + t + ".", lessons: rows, sections: sections.length > 1 ? sections : [] };
});
