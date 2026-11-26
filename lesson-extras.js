/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Lesson summaries (Summary tab) and quizzes for lessons that already have a video.
   SUMMARIES[lesson] = { s: "short summary", k: ["key point", ...] }
   Written from the lesson titles: correct them freely to match each video. */
const SUMMARIES = {
 "0.2": {
  "s": "Information Technology (IT) is the use of computers, networks and software to store, process and share information. Almost every company depends on IT, from email and websites to payments and hospitals.",
  "k": [
   "IT = computers + networks + software + data",
   "IT people build, run, fix and protect these systems",
   "Every industry needs IT support"
  ]
 },
 "0.3": {
  "s": "IT has many career paths: help desk and IT support, networking, systems administration, cloud, cybersecurity, development, data and more. Most people start in support and then specialise.",
  "k": [
   "Help desk is the most common entry point",
   "Specialisations: network, systems, cloud, security, dev, data",
   "Skills and certifications open the next step"
  ]
 },
 "6": {
  "s": "An operating system (OS) is the main software that manages the hardware and lets you run apps. It handles files, memory, the processor, devices and users. Windows, macOS, Linux, Android and iOS are operating systems.",
  "k": [
   "OS sits between hardware and apps",
   "Manages files, memory, CPU, devices and users",
   "Examples: Windows, macOS, Linux, Android, iOS"
  ]
 },
 "10": {
  "s": "Windows is the most used desktop operating system in companies. In this lesson you meet its main parts: the desktop, Start menu, File Explorer, Settings, Control Panel and Task Manager, and the tools IT support uses every day.",
  "k": [
   "Most company PCs run Windows",
   "Key tools: File Explorer, Settings, Task Manager",
   "Windows Update keeps the system patched"
  ]
 },
 "11": {
  "s": "Linux is a free, open-source operating system that runs most servers, the cloud, routers and Android phones. It comes in distributions like Ubuntu, Debian and Red Hat, and is often managed from the command line.",
  "k": [
   "Open source and free",
   "Runs most servers and the cloud",
   "Distros: Ubuntu, Debian, Red Hat, Fedora",
   "Managed mostly with the terminal"
  ]
 },
 "13": {
  "s": "Phones, tablets and many devices have their own operating systems: Android and iOS on phones, macOS on Apple computers, ChromeOS on Chromebooks, and small embedded systems in routers, TVs and smart devices.",
  "k": [
   "Android (Google) and iOS (Apple) rule phones",
   "macOS on Macs, ChromeOS on Chromebooks",
   "Embedded OS inside routers, TVs and IoT"
  ]
 },
 "15": {
  "s": "A network is two or more devices connected to share data and resources. Networks can be small (LAN at home or office) or huge (WAN and the internet). They use cables or Wi-Fi to connect.",
  "k": [
   "Network = connected devices sharing data",
   "LAN: local; WAN: wide area; the internet: global",
   "Wired (Ethernet) or wireless (Wi-Fi)"
  ]
 },
 "16": {
  "s": "Networks are built from devices that each have a job: routers connect networks, switches connect devices inside a network, access points provide Wi-Fi, modems connect to the internet provider and firewalls protect traffic.",
  "k": [
   "Router: connects different networks",
   "Switch: connects devices in one network",
   "Access point: Wi-Fi",
   "Firewall: allows or blocks traffic"
  ]
 },
 "17": {
  "s": "Every device on a network has two addresses: a MAC address (a fixed hardware ID on the network card) and an IP address (a logical address that can change, used to route data). Both are needed for devices to talk.",
  "k": [
   "MAC = physical, burned into the network card",
   "IP = logical, given by the network (often by DHCP)",
   "IPv4 looks like 192.168.1.10"
  ]
 },
 "27": {
  "s": "Cybersecurity protects systems, networks and data from attacks, damage and unauthorised access. Its goal is often described with the CIA triad: Confidentiality, Integrity and Availability.",
  "k": [
   "Protect systems, networks and data",
   "CIA: Confidentiality, Integrity, Availability",
   "Everyone plays a part, not only IT"
  ]
 },
 "28": {
  "s": "Common attacks include phishing (fake messages that steal info), malware like viruses and ransomware, password attacks, social engineering and denial-of-service. Knowing the signs is the first defence.",
  "k": [
   "Phishing: fake emails or links",
   "Ransomware: locks files and asks for money",
   "Social engineering: tricking people",
   "DoS: overloading a service"
  ]
 },
 "31": {
  "s": "Strong passwords are long, unique for every account and stored in a password manager. Multi-factor authentication (MFA) adds a second proof, like an app code or key, so a stolen password alone is not enough.",
  "k": [
   "Long and unique beats short and complex",
   "Use a password manager",
   "MFA = something you know + have + are",
   "Never share codes or passwords"
  ]
 },
 "51": {
  "s": "The OSI model splits network communication into 7 layers, from Physical (cables and signals) up to Application (the apps you use). It helps you understand and troubleshoot networks one layer at a time.",
  "k": [
   "7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application",
   "Troubleshoot bottom-up",
   "IP works at layer 3, TCP/UDP at layer 4"
  ]
 },
 "52": {
  "s": "Good security habits protect you and your company: keep systems updated, use strong unique passwords with MFA, think before clicking links, lock your screen, back up data and report anything suspicious quickly.",
  "k": [
   "Update, back up, use MFA",
   "Think before you click",
   "Lock your screen",
   "Report incidents fast"
  ]
 },
 "58": {
  "s": "Computers count in binary (base 2), using only 0 and 1. Each position is worth double the one to its right: 1, 2, 4, 8, 16… To convert, add the values of the positions that have a 1.",
  "k": [
   "Binary uses only 0 and 1",
   "Place values: 128 64 32 16 8 4 2 1",
   "1010 = 8 + 2 = 10"
  ]
 },
 "54": {
  "s": "Finding your first IT job means building a simple CV focused on skills and labs, getting a starter certification, practising interviews and applying regularly to help desk and IT support roles.",
  "k": [
   "Target help desk / IT support roles",
   "Show labs, projects and certifications",
   "Practise common interview questions",
   "Apply consistently and follow up"
  ]
 },
 "55": {
  "s": "A typical day in IT support: checking the ticket queue, helping users by phone, chat or remotely, documenting work, escalating hard issues, joining a team meeting and learning something new.",
  "k": [
   "Work comes in as tickets",
   "Talk to users, fix, document",
   "Escalate what you cannot solve",
   "Keep learning on the job"
  ]
 },
 "57": {
  "s": "IT Service Management (ITSM) is how IT delivers services to users in an organised way. ITIL is the most used ITSM framework: it describes practices like incident, problem, change and service request management.",
  "k": [
   "ITSM = managing IT as a service",
   "ITIL is the best-known framework",
   "Key practices: incident, problem, change, request"
  ]
 },
 "5.5.1": {
  "s": "An IT support technician is the first contact for users with IT problems. They log tickets, troubleshoot hardware, software and accounts, help remotely or at the desk, and escalate what they cannot fix.",
  "k": [
   "First point of contact for users",
   "Tickets, troubleshooting, communication",
   "Knows when to escalate"
  ]
 },
 "5.5.2": {
  "s": "Troubleshooting follows clear steps: identify the problem, form a theory, test it, make a plan, fix it, verify the system works, and document what you did. Working step by step saves time and avoids new problems.",
  "k": [
   "Identify → theory → test → plan → fix → verify → document",
   "Change one thing at a time",
   "Always confirm with the user"
  ]
 },
 "5.5.3": {
  "s": "Remote support tools let you see and control a user's computer from anywhere: Windows Remote Desktop (RDP), Quick Assist, TeamViewer and AnyDesk. Always ask permission and end the session when finished.",
  "k": [
   "RDP, Quick Assist, TeamViewer, AnyDesk",
   "Ask permission before connecting",
   "Close the session and never leave access open"
  ]
 },
 "5.5.4": {
  "s": "Professional support is about clear, calm communication, writing good ticket notes, keeping users updated, escalating with full details and following company rules and security policies.",
  "k": [
   "Be polite, clear and patient",
   "Write notes someone else can follow",
   "Escalate with all details",
   "Follow policies and protect data"
  ]
 },
 "servicenow.0.1": {
  "s": "ServiceNow is a cloud platform companies use to manage IT services. Users raise incidents and requests, and IT teams handle them through tickets, workflows, a knowledge base and a service catalog.",
  "k": [
   "Cloud ITSM platform",
   "Incidents, requests, knowledge, catalog",
   "Used by large companies worldwide"
  ]
 },
 "servicenow.0.2": {
  "s": "An incident means something is broken and needs fixing (restore service). A service request is a normal ask, like new software or access. In ServiceNow you create, update and resolve both, with the right category, priority and notes.",
  "k": [
   "Incident = something broke",
   "Request = asking for something standard",
   "Fill category, priority and notes",
   "Resolve and close with a clear resolution"
  ]
 },
 "servicenow.0.3": {
  "s": "The knowledge base stores solutions so problems get fixed faster. A free Personal Developer Instance (PDI) from the ServiceNow Developer site lets you practise in your own ServiceNow for free.",
  "k": [
   "Search knowledge before solving from scratch",
   "Write articles for repeat issues",
   "Get a free PDI at developer.servicenow.com"
  ]
 },
 "jira.0.1": {
  "s": "Jira Service Management (JSM) is Atlassian's service desk tool. Customers raise requests through a portal or email, and agents work them in queues with SLAs, automation and a knowledge base.",
  "k": [
   "Atlassian's service desk tool",
   "Portal and email for customers",
   "Queues, SLAs, automation for agents"
  ]
 },
 "jira.0.2": {
  "s": "A service project holds request types, queues and the customer portal. Queues sort incoming requests (for example 'Unassigned' or 'Waiting for support') so agents always know what to work on next.",
  "k": [
   "Service project = your help desk space",
   "Request types shape the portal form",
   "Queues organise the work"
  ]
 },
 "jira.0.3": {
  "s": "Atlassian offers a free Jira Cloud plan. You sign up with an email, create a site name, add Jira Service Management and get a practice help desk where you can create projects, requests and queues.",
  "k": [
   "Free plan for small teams",
   "Pick a site name: yourname.atlassian.net",
   "Add JSM and create a service project"
  ]
 },
 "jira.0.4": {
  "s": "To handle a request: pick it from the queue, assign it to yourself, read the details, reply to the customer, add internal notes for your team, move the status forward and resolve it with a clear answer.",
  "k": [
   "Assign it to yourself",
   "Public reply vs internal note",
   "Move the status and resolve"
  ]
 },
 "slack.0.1": {
  "s": "Slack is a team chat app built on channels. You use public and private channels, threads to keep replies tidy, direct messages and huddles for quick calls. IT support fixes notifications, sign-in and app issues.",
  "k": [
   "Channels, threads, DMs, huddles",
   "Threads keep conversations clean",
   "Common issues: notifications, login, apps"
  ]
 },
 "zoom.0.1": {
  "s": "Zoom is used for meetings and webinars. Support helps users join meetings, fix microphone, speaker and camera problems, share their screen and solve connection or update issues.",
  "k": [
   "Join with a link or meeting ID",
   "Check mic, speaker and camera settings",
   "Screen share needs OS permission on Mac"
  ]
 },
 "rdp.0.1": {
  "s": "Remote Desktop (RDP) lets you control a Windows PC from another computer. You enable it in Settings, allow the user, connect with the PC name or IP, and secure it with strong passwords, NLA and never exposing it directly to the internet.",
  "k": [
   "Enable Remote Desktop in Settings",
   "Connect with mstsc and the PC name or IP",
   "Default port 3389 – never expose to the internet"
  ]
 },
 "teamviewer.0.1": {
  "s": "TeamViewer gives remote control using an ID and password, can transfer files and reboot, and supports unattended access for company devices. Safety matters: only connect when the user asks, and watch for scammers using it.",
  "k": [
   "Connect with ID and password",
   "Unattended access for managed devices",
   "Scammers misuse remote tools – be careful"
  ]
 },
 "anydesk.0.1": {
  "s": "AnyDesk connects using an AnyDesk address. The user accepts the session and chooses permissions (screen, keyboard, files). Unattended access needs a password. Never accept a session from someone you do not know.",
  "k": [
   "Connect with the AnyDesk address",
   "User accepts and sets permissions",
   "Unattended access uses a password"
  ]
 },
 "microsoft365.0.1": {
  "s": "Microsoft 365 is Microsoft's cloud suite: Outlook, Teams, OneDrive, SharePoint, Word, Excel and more, managed by admins in the Microsoft 365 admin center where users, licences and settings live.",
  "k": [
   "Cloud apps: Outlook, Teams, OneDrive, SharePoint, Office",
   "Admin center manages users and licences",
   "Accounts are in Microsoft Entra ID"
  ]
 },
 "microsoft365.0.2": {
  "s": "Outlook handles email and calendar. Common support issues: missing emails (filters, Focused inbox, junk), full mailboxes, calendar sharing, profile problems and sync issues. Repairing the profile or using Outlook on the web often helps.",
  "k": [
   "Check junk, Focused/Other and rules",
   "Mailbox full? Archive or clean up",
   "Test in Outlook on the web to isolate"
  ]
 },
 "microsoft365.0.3": {
  "s": "Microsoft Teams is for chat, meetings, calls and team channels. Support fixes sign-in issues, audio/camera devices, notifications, cache problems and meeting permissions.",
  "k": [
   "Chat, channels, meetings, calls",
   "Check devices in Teams settings",
   "Clearing the Teams cache fixes many issues"
  ]
 },
 "microsoft365.0.4": {
  "s": "OneDrive stores a user's files in the cloud and syncs them to the PC. Support handles sync errors, Files On-Demand, sharing links and restoring deleted files from the recycle bin.",
  "k": [
   "Sync icons show file status",
   "Files On-Demand saves disk space",
   "Restore deleted files from the recycle bin"
  ]
 },
 "microsoft365.0.5": {
  "s": "SharePoint hosts team sites and document libraries. Access comes from site permissions (Owners, Members, Visitors). Support helps with access requests, sharing and finding files.",
  "k": [
   "Team sites with document libraries",
   "Owners, Members, Visitors",
   "Grant access with the right group"
  ]
 },
 "microsoft365.0.6": {
  "s": "The top Microsoft 365 issues: sign-in and MFA problems, Outlook not syncing, Teams audio, OneDrive sync errors, licence missing, password resets, shared mailbox access and more – and the quick fixes for each.",
  "k": [
   "Check licence and sign-in first",
   "Test on the web version",
   "Clear caches and repair profiles"
  ]
 },
 "linkedin.0.1": {
  "s": "LinkedIn helps you get found by recruiters. Use a clear photo and headline, list skills, labs and certifications, turn on Open to Work and connect with people in IT.",
  "k": [
   "Strong headline with your target role",
   "List skills, labs and certifications",
   "Use Open to Work and job alerts"
  ]
 },
 "glassdoor.0.1": {
  "s": "Glassdoor lets you research companies before applying: read employee reviews, check salaries for your role and see real interview questions.",
  "k": [
   "Read reviews (look for patterns)",
   "Compare salaries for the role",
   "Prepare with real interview questions"
  ]
 },
 "indeed.0.1": {
  "s": "Indeed is a big job board. Search for roles like 'IT support' or 'help desk', filter by location and experience, upload your CV, set alerts and track your applications.",
  "k": [
   "Search with the right keywords",
   "Filter by location, level, remote",
   "Upload a CV and track applications"
  ]
 },
 "servicenow.1.1": {
  "s": "ServiceNow is a single cloud platform with many applications (ITSM, HR, CSM…). Users reach it through the browser, navigate with the application navigator and work in lists and forms.",
  "k": [
   "One platform, many applications",
   "Navigate with All menu, favourites, history",
   "Work happens in lists and forms"
  ]
 },
 "servicenow.1.2": {
  "s": "Applications group modules for one purpose. Plugins switch on extra features. Instance configuration covers system properties, branding and basic settings.",
  "k": [
   "Applications contain modules",
   "Plugins add features",
   "System properties change platform behaviour"
  ]
 },
 "servicenow.1.3": {
  "s": "Personalization is what a user changes for themselves (list columns, theme). Customization is what admins change for everyone. ServiceNow has several UIs: Core UI, Next Experience and Service Portal.",
  "k": [
   "Personalize = for me; customize = for everyone",
   "Next Experience is the modern UI",
   "Service Portal for end users"
  ]
 },
 "servicenow.1.4": {
  "s": "Lists show many records; filters narrow them with conditions; tags label records; forms show one record with fields, sections and related lists.",
  "k": [
   "Filters use field + operator + value",
   "Tags help you find records",
   "Forms show one record"
  ]
 },
 "servicenow.1.5": {
  "s": "Admins configure forms with Form Designer and Form Layout, use templates to pre-fill fields and save time, and apply views for different audiences.",
  "k": [
   "Form Designer / Form Layout",
   "Templates pre-fill fields",
   "Views show different layouts"
  ]
 },
 "servicenow.1.6": {
  "s": "Most work items extend the Task table (incident, problem, change). Visual Task Boards show tasks as cards in lanes, like Kanban.",
  "k": [
   "Task table is the parent of many work tables",
   "Assignment group vs assigned to",
   "Visual Task Boards = Kanban view"
  ]
 },
 "servicenow.1.7": {
  "s": "Reports visualise data (bar, pie, list); dashboards collect reports in one place; Platform Analytics tracks indicators over time.",
  "k": [
   "Reports answer one question",
   "Dashboards combine reports",
   "Analytics shows trends over time"
  ]
 },
 "servicenow.1.8": {
  "s": "Notifications send emails or messages when something happens. Each has When to send, Who will receive and What it will contain.",
  "k": [
   "When: the trigger",
   "Who: recipients",
   "What: the message"
  ]
 },
 "servicenow.1.9": {
  "s": "Knowledge bases hold articles that help users and agents. Articles have a lifecycle (draft, review, published, retired) and permissions control who can read them.",
  "k": [
   "Article lifecycle: draft → published → retired",
   "User criteria control access",
   "Reduces repeat tickets"
  ]
 },
 "servicenow.1.10": {
  "s": "The Service Catalog is the shop window of IT services. Catalog items use variables to ask questions and trigger fulfilment and approvals.",
  "k": [
   "Catalog items = things users can order",
   "Variables collect information",
   "Requests create fulfilment tasks"
  ]
 },
 "servicenow.1.11": {
  "s": "Workflow Studio (Flow Designer) builds automation with triggers and actions, no code needed. Virtual Agent is a chatbot that handles common requests.",
  "k": [
   "Flow = trigger + actions",
   "Subflows and actions are reusable",
   "Virtual Agent answers users in chat"
  ]
 },
 "servicenow.1.12": {
  "s": "All data lives in tables with fields. Tables can extend other tables and inherit their fields. Reference fields link records between tables.",
  "k": [
   "Records are rows, fields are columns",
   "Extended tables inherit fields",
   "Reference fields link tables"
  ]
 },
 "servicenow.1.13": {
  "s": "Users belong to groups; roles grant permissions; Access Control Lists (ACLs) decide who can read, write, create or delete records.",
  "k": [
   "Give roles to groups, not users",
   "ACLs secure data",
   "Least privilege"
  ]
 },
 "servicenow.1.14": {
  "s": "Import sets stage data and transform maps load it into tables. The CMDB stores configuration items and their relationships, organised by the CSDM model.",
  "k": [
   "Import set → transform map → target table",
   "Coalesce avoids duplicates",
   "CMDB + CSDM model services"
  ]
 },
 "servicenow.1.15": {
  "s": "Security Center helps admins check and harden the instance. In the shared responsibility model ServiceNow secures the platform and the customer secures its configuration, users and data.",
  "k": [
   "Security Center checks hardening",
   "ServiceNow secures the platform",
   "Customer secures config, users and data"
  ]
 },
 "servicenow.1.16": {
  "s": "UI Policies change form fields in the browser (mandatory, visible, read-only). Business Rules run on the server when records are queried, inserted, updated or deleted.",
  "k": [
   "UI Policy = client side, form behaviour",
   "Business Rule = server side, record logic",
   "Prefer UI Policies over client scripts when possible"
  ]
 },
 "servicenow.1.17": {
  "s": "Update sets capture configuration changes so you can move them from development to production. Scripts (JavaScript) run on the client or server for advanced logic.",
  "k": [
   "Update sets move configuration between instances",
   "Data records are not captured",
   "ServiceNow scripting uses JavaScript"
  ]
 },
 "servicenow.1.x1": {
  "s": "The CSA exam checks platform administration skills across six domains, with Database Management and Platform Security weighted highest. Know the format, timing and objectives before you book.",
  "k": [
   "Six domains with different weights",
   "Database Management and Security is the largest",
   "Practise in a PDI"
  ]
 },
 "servicenow.1.x2": {
  "s": "A domain-by-domain checklist of everything the CSA exam expects you to know, so you can see your gaps before exam day.",
  "k": [
   "Go through every domain",
   "Mark weak areas",
   "Practise each one hands-on"
  ]
 },
 "im2.1": {
  "s": "A Windows admin keeps company PCs and servers running: creating users, setting permissions, managing services, reading logs, installing updates and automating tasks with PowerShell. Daily tools include Computer Management, Event Viewer, Task Manager and Settings.",
  "k": [
   "Users, permissions, updates, logs",
   "Tools: Computer Management, Event Viewer, Task Manager",
   "Automate repetitive work with PowerShell"
  ]
 },
 "im2.2": {
  "s": "Windows uses local users and groups to control who can sign in and what they can do. Give permissions to groups (like Administrators or Users), not to single users, and keep admin rights to a minimum.",
  "k": [
   "Local Users and Groups: lusrmgr.msc",
   "Assign rights to groups, not individuals",
   "Administrators vs standard Users",
   "Least privilege"
  ]
 },
 "im2.3": {
  "s": "NTFS permissions (Read, Write, Modify, Full Control…) protect files and folders on disk. Share permissions control access over the network. When both apply, the most restrictive one wins. Permissions inherit from parent folders.",
  "k": [
   "NTFS = local file permissions",
   "Share permissions = network access",
   "Most restrictive wins when combined",
   "Inheritance from parent folders"
  ]
 },
 "im2.4": {
  "s": "Processes are running programs; services are background programs that start with Windows. Use Task Manager to see CPU and memory use and end tasks, and services.msc to start, stop or change a service's startup type.",
  "k": [
   "Task Manager (Ctrl+Shift+Esc)",
   "services.msc: start, stop, startup type",
   "Startup types: Automatic, Manual, Disabled"
  ]
 },
 "im2.13": {
  "s": "The Windows Registry is a big database of settings for Windows and apps, organised in keys and values (like folders and files). Wrong edits can break Windows, so always back up before changing it.",
  "k": [
   "Keys = folders, values = settings",
   "Main hives: HKEY_LOCAL_MACHINE, HKEY_CURRENT_USER",
   "Back up before editing"
  ]
 },
 "im2.5": {
  "s": "Admins change system settings with tools like regedit (registry), msconfig (boot and startup options) and sysdm.cpl (computer name, domain, performance and remote settings).",
  "k": [
   "regedit: edit the registry",
   "msconfig: boot and startup",
   "sysdm.cpl: system properties"
  ]
 },
 "im2.6": {
  "s": "Event Viewer records what happens in Windows. The main logs are Application, Security and System. Each event has a level (Information, Warning, Error, Critical), a source and an Event ID that you can search online.",
  "k": [
   "Open with eventvwr.msc",
   "Logs: Application, Security, System",
   "Use Event ID + source to research",
   "Filter by level and time"
  ]
 },
 "im2.7": {
  "s": "Windows Update installs security and quality patches. When updates fail: restart, run the Windows Update troubleshooter, free disk space, check the error code, and as a last step reset the update components.",
  "k": [
   "Restart and retry first",
   "Run the troubleshooter",
   "Check disk space and error code",
   "Reset update components if needed"
  ]
 },
 "im2.14": {
  "s": "CMD is the classic command prompt that works with text. PowerShell is the modern shell that works with objects, has powerful cmdlets and is built for automation. Many old CMD commands still work in PowerShell.",
  "k": [
   "CMD = text, simple commands",
   "PowerShell = objects, cmdlets, automation",
   "Prefer PowerShell for admin work"
  ]
 },
 "im2.8": {
  "s": "CMD basics: dir lists files, cd changes folder, mkdir creates a folder, copy copies files and del deletes them. Add /? after any command to see its help.",
  "k": [
   "dir, cd, mkdir, copy, del",
   "cd .. goes up one folder",
   "command /? shows help"
  ]
 },
 "im2.10": {
  "s": "PowerShell commands are cmdlets named Verb-Noun (Get-Process, Stop-Service). They return objects you can pass through the pipeline (|) to sort, filter and format. Get-Help and Get-Command help you discover more.",
  "k": [
   "Verb-Noun cmdlets",
   "Objects through the pipeline |",
   "Get-Help, Get-Command, Get-Member"
  ]
 },
 "im4.12": {
  "s": "A deeper look at the 7 OSI layers: what each layer does, which protocols and devices work there (switches at layer 2, routers at layer 3) and how data is wrapped and unwrapped (encapsulation) on its way.",
  "k": [
   "Layer 2: MAC addresses and switches",
   "Layer 3: IP and routers",
   "Layer 4: TCP/UDP and ports",
   "Encapsulation adds headers going down"
  ]
 },
 "im4.13": {
  "s": "An IPv4 address has 4 numbers (0–255) split into a network part and a host part, decided by the subnet mask. Private ranges (10.x, 172.16–31.x, 192.168.x) are used inside companies and homes.",
  "k": [
   "4 octets, each 0–255",
   "Subnet mask splits network and host",
   "Private ranges: 10/8, 172.16/12, 192.168/16"
  ]
 },
 "im4.14": {
  "s": "A MAC address is a 48-bit hardware address written in hex (like 00:1A:2B:3C:4D:5E). Switches use MAC addresses to deliver frames inside a LAN, and ARP finds the MAC address that belongs to an IP.",
  "k": [
   "48 bits, written in hexadecimal",
   "Used inside the local network",
   "ARP maps IP → MAC",
   "Switches learn MACs on their ports"
  ]
 },
 "im1.1": {
  "s": "The kernel is the core of the operating system. It controls the CPU, memory, devices and processes, and sits between hardware and programs. Programs ask the kernel for help through system calls.",
  "k": [
   "Core of the OS",
   "Manages CPU, memory, devices, processes",
   "Programs talk to it via system calls"
  ]
 },
 "1": {
  "s": "A computer is an electronic machine that takes input, processes it, stores it and gives output. Phones, laptops, servers and even smart TVs are all computers.",
  "k": [
   "Input → Process → Output",
   "It also stores data",
   "Many devices around you are computers"
  ]
 },
 "2": {
  "s": "Hardware is every physical part of a computer you can touch: CPU, RAM, storage, motherboard, power supply and devices like keyboard, mouse and monitor.",
  "k": [
   "CPU = the brain",
   "RAM = short-term memory",
   "Storage keeps files (HDD/SSD)",
   "Peripherals: keyboard, mouse, monitor"
  ]
 },
 "3": {
  "s": "Software is the set of instructions that tells hardware what to do. System software (like Windows or Linux) runs the computer; application software (like a browser or Word) helps you do tasks.",
  "k": [
   "System software: operating systems, drivers",
   "Application software: browsers, office apps",
   "Hardware needs software to be useful"
  ]
 },
 "4": {
  "s": "A computer works in a cycle: you give input, the CPU processes it using data in RAM, results are saved to storage and shown as output on screen, speakers or printer.",
  "k": [
   "Input devices send data in",
   "CPU processes, RAM holds working data",
   "Storage saves, output shows results"
  ]
 },
 "5": {
  "s": "Computers store everything as bits, 0s and 1s. Eight bits make a byte. Text, pictures, sound and video are all turned into numbers that the computer can store and process.",
  "k": [
   "Bit = 0 or 1",
   "8 bits = 1 byte",
   "KB, MB, GB, TB",
   "Everything becomes numbers"
  ]
 },
 "im3.14": {
  "s": "Linux is a free, open-source operating system that runs most of the world's servers, cloud systems, phones (Android) and many devices. Distributions such as Ubuntu, Debian and Fedora package the Linux kernel with tools and software.",
  "k": [
   "Linux = a kernel plus tools, packaged as distributions",
   "Open source: free to use, study and change",
   "Runs servers, the cloud, Android and embedded devices",
   "Popular distributions: Ubuntu, Debian, Fedora, Red Hat"
  ]
 },
 "im3.13": {
  "s": "The terminal lets you control Linux by typing commands. Bash is the program (the shell) that reads your commands and runs them. Learning a few basic commands is the first step to working on any Linux server.",
  "k": [
   "Terminal = the window, Bash = the shell that runs commands",
   "A command is a program name plus options and arguments",
   "The prompt shows your user, computer and current folder",
   "You can do almost everything on a server from the terminal"
  ]
 },
 "im3.9": {
  "s": "Bash commands follow the pattern command, options, arguments. You can get help with man and --help, save typing with the Tab key and history, and store values in variables such as NAME=Linux that you read with $NAME.",
  "k": [
   "Pattern: command [options] [arguments]",
   "man <command> and <command> --help show help",
   "Tab completes names; press it twice to see choices",
   "Variables: NAME=value, read with $NAME"
  ]
 },
 "im3.1": {
  "s": "Linux has one single tree that starts at the root, written /. Everything, including disks and devices, hangs somewhere below it. pwd shows where you are, ls lists what is in a folder and cd moves you to another folder.",
  "k": [
   "One tree starting at / (root)",
   "pwd = print working directory",
   "ls = list files and folders",
   "cd = change directory (cd .. goes up)"
  ]
 },
 "im3.12": {
  "s": "Linux folders are organised by purpose: /home holds user files, /etc holds configuration, /var holds logs and changing data, /bin and /usr hold programs. Unlike Windows there are no drive letters such as C:, only one tree.",
  "k": [
   "/home = user files, /etc = settings, /var = logs",
   "/bin and /usr = programs",
   "No drive letters: disks are mounted into the tree",
   "Paths use / and names are case-sensitive"
  ]
 },
 "im3.2": {
  "s": "Every Linux account is a user, and users can belong to groups. useradd creates a user, passwd sets a password, and sudo lets an allowed user run a command as the administrator (root).",
  "k": [
   "useradd creates a user",
   "passwd sets or changes a password",
   "Groups give permissions to many users at once",
   "sudo runs one command with admin rights"
  ]
 },
 "im3.3": {
  "s": "Linux permissions say who can read (r), write (w) or execute (x) a file. They are set for three classes: the owner, the group and everyone else. chmod changes permissions and chown changes the owner.",
  "k": [
   "r = read (4), w = write (2), x = execute (1)",
   "Three classes: owner, group, others",
   "chmod changes permissions, chown changes owner",
   "Example: chmod 755 script.sh"
  ]
 },
 "im3.5": {
  "s": "Package managers install, update and remove software from trusted repositories. Debian and Ubuntu use apt, Fedora and Red Hat use dnf, and snap is a universal format that works across distributions.",
  "k": [
   "apt = Debian/Ubuntu, dnf = Fedora/Red Hat",
   "snap works on many distributions",
   "Typical steps: update the list, install, remove",
   "Packages come from trusted repositories"
  ]
 },
 "im3.4": {
  "s": "A process is a running program. ps lists processes and top shows them live, kill stops one by its ID, and systemctl starts, stops and checks services (background programs managed by systemd).",
  "k": [
   "ps lists processes, top shows them live",
   "kill <PID> stops a process",
   "systemctl start/stop/status manages services",
   "A service is a process that runs in the background"
  ]
 }
};
(function () { var Q = {
 "0.2": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: what is IT?",
  "items": [
   {
    "q": "IT only means building computers.",
    "a": false
   },
   {
    "q": "IT is about storing, processing and sharing information.",
    "a": true
   },
   {
    "q": "Hospitals, banks and shops all depend on IT.",
    "a": true
   },
   {
    "q": "Email and websites are examples of IT services.",
    "a": true
   },
   {
    "q": "IT jobs only exist in tech companies.",
    "a": false
   }
  ]
 },
 "0.3": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the job with what it does",
  "pairs": [
   [
    "Help desk technician",
    "Helps users fix everyday IT problems"
   ],
   [
    "Network engineer",
    "Builds and maintains networks"
   ],
   [
    "SOC analyst",
    "Watches for and responds to security alerts"
   ],
   [
    "Cloud engineer",
    "Runs services on Azure, AWS or Google Cloud"
   ],
   [
    "Developer",
    "Writes software and applications"
   ]
  ]
 },
 "6": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Operating systems",
  "items": [
   {
    "q": "What is the main job of an operating system?",
    "o": [
     "Play videos",
     "Manage hardware and run apps",
     "Browse the internet",
     "Store passwords only"
    ],
    "a": 1,
    "e": "The OS controls the hardware and gives apps a place to run."
   },
   {
    "q": "Which of these is NOT an operating system?",
    "o": [
     "Linux",
     "Windows",
     "Microsoft Word",
     "Android"
    ],
    "a": 2,
    "e": "Word is an application that runs on an OS."
   },
   {
    "q": "Which part of the OS decides which program uses the CPU?",
    "o": [
     "The scheduler",
     "The wallpaper",
     "The browser",
     "The printer"
    ],
    "a": 0
   },
   {
    "q": "Which OS is most common on company desktops?",
    "o": [
     "Windows",
     "iOS",
     "Android",
     "ChromeOS"
    ],
    "a": 0
   }
  ]
 },
 "10": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the Windows tool with its use",
  "pairs": [
   [
    "File Explorer",
    "Browse files and folders"
   ],
   [
    "Task Manager",
    "See and close running apps"
   ],
   [
    "Settings",
    "Change system options"
   ],
   [
    "Windows Update",
    "Install patches and fixes"
   ],
   [
    "Control Panel",
    "Older place for system settings"
   ]
  ]
 },
 "11": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: Linux",
  "items": [
   {
    "q": "Linux is open source.",
    "a": true
   },
   {
    "q": "Ubuntu and Red Hat are Linux distributions.",
    "a": true
   },
   {
    "q": "Most web servers run Linux.",
    "a": true
   },
   {
    "q": "Linux can only be used with a mouse.",
    "a": false
   },
   {
    "q": "Android is based on Linux.",
    "a": true
   }
  ]
 },
 "13": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the OS with its device",
  "pairs": [
   [
    "iOS",
    "iPhone"
   ],
   [
    "Android",
    "Most non-Apple phones"
   ],
   [
    "macOS",
    "MacBook"
   ],
   [
    "ChromeOS",
    "Chromebook"
   ],
   [
    "Embedded OS",
    "Smart TV or router"
   ]
  ]
 },
 "15": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "What is a network?",
  "items": [
   {
    "q": "What is a network?",
    "o": [
     "A single computer",
     "Devices connected to share data",
     "A type of cable only",
     "A password"
    ],
    "a": 1
   },
   {
    "q": "Your home or office network is a…",
    "o": [
     "LAN",
     "WAN",
     "MAN",
     "VPN"
    ],
    "a": 0,
    "e": "LAN = Local Area Network."
   },
   {
    "q": "The internet is the biggest example of a…",
    "o": [
     "LAN",
     "WAN",
     "PAN",
     "USB"
    ],
    "a": 1
   },
   {
    "q": "Wi-Fi is a…",
    "o": [
     "Wired connection",
     "Wireless connection",
     "Printer",
     "Operating system"
    ],
    "a": 1
   }
  ]
 },
 "16": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the device with its function",
  "pairs": [
   [
    "Router",
    "Connects different networks"
   ],
   [
    "Switch",
    "Connects devices inside a LAN"
   ],
   [
    "Access point",
    "Gives Wi-Fi to devices"
   ],
   [
    "Modem",
    "Connects to the internet provider"
   ],
   [
    "Firewall",
    "Allows or blocks traffic"
   ]
  ]
 },
 "17": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Type the answer",
  "items": [
   {
    "q": "Which address is burned into the network card: IP or MAC?",
    "a": [
     "mac"
    ]
   },
   {
    "q": "Which address can change when you join a new network: IP or MAC?",
    "a": [
     "ip"
    ]
   },
   {
    "q": "What version of IP looks like 192.168.1.10? (IPv…)",
    "a": [
     "ipv4",
     "4"
    ]
   },
   {
    "q": "Which service usually gives devices their IP automatically?",
    "a": [
     "dhcp"
    ]
   }
  ]
 },
 "27": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match each CIA part with its meaning",
  "pairs": [
   [
    "Confidentiality",
    "Only the right people can see the data"
   ],
   [
    "Integrity",
    "Data is not changed without permission"
   ],
   [
    "Availability",
    "Systems and data are there when needed"
   ]
  ]
 },
 "28": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Spot the attack",
  "items": [
   {
    "q": "An email says your bank account is locked and asks you to log in via a link. This is…",
    "o": [
     "Phishing",
     "A firewall",
     "Encryption",
     "A backup"
    ],
    "a": 0,
    "e": "Fake messages that steal logins are phishing."
   },
   {
    "q": "Malware that encrypts your files and demands payment is…",
    "o": [
     "Spyware",
     "Ransomware",
     "Adware",
     "A worm"
    ],
    "a": 1
   },
   {
    "q": "Someone calls pretending to be IT and asks for your password. This is…",
    "o": [
     "Social engineering",
     "DDoS",
     "Patch management",
     "MFA"
    ],
    "a": 0
   },
   {
    "q": "Flooding a website with traffic so it stops working is…",
    "o": [
     "Phishing",
     "Denial of service (DoS)",
     "Hashing",
     "VPN"
    ],
    "a": 1
   }
  ]
 },
 "31": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: passwords and MFA",
  "items": [
   {
    "q": "Using the same password everywhere is safe if it is strong.",
    "a": false
   },
   {
    "q": "A long passphrase is usually stronger than a short complex password.",
    "a": true
   },
   {
    "q": "MFA means a stolen password alone is not enough to log in.",
    "a": true
   },
   {
    "q": "IT staff will ask for your MFA code by phone.",
    "a": false
   },
   {
    "q": "A password manager helps you use unique passwords.",
    "a": true
   }
  ]
 },
 "51": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Put the OSI layers in order (layer 1 first)",
  "steps": [
   "Physical",
   "Data Link",
   "Network",
   "Transport",
   "Session",
   "Presentation",
   "Application"
  ]
 },
 "52": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "Good habit or not?",
  "items": [
   {
    "q": "Locking your screen when you leave your desk.",
    "a": true
   },
   {
    "q": "Postponing security updates for months.",
    "a": false
   },
   {
    "q": "Reporting a suspicious email to IT.",
    "a": true
   },
   {
    "q": "Using public Wi-Fi without any protection for company work.",
    "a": false
   },
   {
    "q": "Keeping regular backups of important data.",
    "a": true
   }
  ]
 },
 "58": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Convert the numbers",
  "items": [
   {
    "q": "Binary 1010 in decimal?",
    "a": [
     "10",
     "ten"
    ]
   },
   {
    "q": "Binary 1111 in decimal?",
    "a": [
     "15",
     "fifteen"
    ]
   },
   {
    "q": "Decimal 8 in binary?",
    "a": [
     "1000"
    ]
   },
   {
    "q": "Binary 11001000 in decimal?",
    "a": [
     "200"
    ]
   },
   {
    "q": "How many values can 8 bits represent?",
    "a": [
     "256"
    ]
   }
  ]
 },
 "54": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Put the job-search steps in order",
  "steps": [
   "Choose your target role (e.g. help desk)",
   "Learn the basics and do hands-on labs",
   "Write a skills-focused CV and LinkedIn",
   "Apply to jobs and track applications",
   "Prepare and attend interviews"
  ]
 },
 "55": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order a typical support ticket",
  "steps": [
   "A user reports a problem",
   "A ticket is created and assigned",
   "The technician contacts the user",
   "The issue is fixed or escalated",
   "The ticket is documented and closed"
  ]
 },
 "57": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the ITIL practice",
  "pairs": [
   [
    "Incident",
    "Something broke and must be fixed fast"
   ],
   [
    "Service request",
    "A user asks for something standard"
   ],
   [
    "Problem",
    "Finding the root cause of repeat incidents"
   ],
   [
    "Change",
    "Safely changing systems"
   ]
  ]
 },
 "5.5.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: the IT support role",
  "items": [
   {
    "q": "Support technicians often work from a ticket queue.",
    "a": true
   },
   {
    "q": "Escalating a hard issue is a sign of failure.",
    "a": false
   },
   {
    "q": "Good communication is as important as technical skill.",
    "a": true
   },
   {
    "q": "Support only fixes hardware.",
    "a": false
   },
   {
    "q": "Documenting what you did helps the next person.",
    "a": true
   }
  ]
 },
 "5.5.2": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Put the troubleshooting steps in order",
  "steps": [
   "Identify the problem",
   "Establish a theory of the cause",
   "Test the theory",
   "Make a plan and fix it",
   "Verify everything works",
   "Document the solution"
  ]
 },
 "5.5.3": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the remote tool",
  "pairs": [
   [
    "RDP",
    "Microsoft's built-in remote desktop protocol"
   ],
   [
    "Quick Assist",
    "Windows app to help a user who shares a code"
   ],
   [
    "TeamViewer",
    "Popular third-party remote support tool"
   ],
   [
    "AnyDesk",
    "Lightweight remote tool using an address number"
   ]
  ]
 },
 "5.5.4": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Professional practices",
  "items": [
   {
    "q": "A user is upset. What should you do first?",
    "o": [
     "Argue",
     "Listen and stay calm",
     "Close the ticket",
     "Transfer the call"
    ],
    "a": 1
   },
   {
    "q": "Good ticket notes should…",
    "o": [
     "Be short and vague",
     "Let another tech continue the work",
     "Only be in your head",
     "Contain the user's password"
    ],
    "a": 1
   },
   {
    "q": "When you escalate, you should…",
    "o": [
     "Give all details and what you tried",
     "Just say 'not working'",
     "Wait a week",
     "Ask the user to call someone else"
    ],
    "a": 0
   },
   {
    "q": "A user asks you to bypass a security rule. You…",
    "o": [
     "Do it to be nice",
     "Explain the policy and offer the correct way",
     "Ignore them",
     "Share your admin password"
    ],
    "a": 1
   }
  ]
 },
 "servicenow.0.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: ServiceNow",
  "items": [
   {
    "q": "ServiceNow is a cloud platform.",
    "a": true
   },
   {
    "q": "It is only used for HR.",
    "a": false
   },
   {
    "q": "Users can raise incidents and requests in it.",
    "a": true
   },
   {
    "q": "ServiceNow can hold a knowledge base of articles.",
    "a": true
   }
  ]
 },
 "servicenow.0.2": {
  "type": "match",
  "color": "#fb923c",
  "title": "Incident or request?",
  "pairs": [
   [
    "Outlook will not open",
    "Incident"
   ],
   [
    "New laptop for a new hire",
    "Service request"
   ],
   [
    "Printer shows an error and prints nothing",
    "Incident"
   ],
   [
    "Access to a shared folder",
    "Service request"
   ]
  ]
 },
 "servicenow.0.3": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Knowledge and PDI",
  "items": [
   {
    "q": "Why use a knowledge base?",
    "o": [
     "To fix known issues faster",
     "To store passwords",
     "To delete tickets",
     "To slow users down"
    ],
    "a": 0
   },
   {
    "q": "What is a PDI?",
    "o": [
     "A paid course",
     "A free personal ServiceNow instance for practice",
     "A ticket type",
     "A report"
    ],
    "a": 1
   },
   {
    "q": "Where do you request a PDI?",
    "o": [
     "ServiceNow Developer site",
     "Microsoft Store",
     "Google Play",
     "Your company HR"
    ],
    "a": 0
   }
  ]
 },
 "jira.0.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: Jira Service Management",
  "items": [
   {
    "q": "JSM is made by Atlassian.",
    "a": true
   },
   {
    "q": "Customers can raise requests through a portal.",
    "a": true
   },
   {
    "q": "Agents work requests in queues.",
    "a": true
   },
   {
    "q": "JSM has no way to track SLAs.",
    "a": false
   }
  ]
 },
 "jira.0.2": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the JSM term",
  "pairs": [
   [
    "Service project",
    "The space for one help desk team"
   ],
   [
    "Request type",
    "A form option like 'Get IT help'"
   ],
   [
    "Queue",
    "A filtered list of requests for agents"
   ],
   [
    "Customer portal",
    "Where users raise requests"
   ]
  ]
 },
 "jira.0.3": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the steps to get a free Jira site",
  "steps": [
   "Go to Atlassian and choose the free plan",
   "Sign up with your email",
   "Choose your site name",
   "Add Jira Service Management",
   "Create your first service project"
  ]
 },
 "jira.0.4": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the steps to handle a request",
  "steps": [
   "Open the request from the queue",
   "Assign it to yourself",
   "Reply to the customer",
   "Fix the issue",
   "Resolve the request with a summary"
  ]
 },
 "slack.0.1": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the Slack feature",
  "pairs": [
   [
    "Channel",
    "A shared space for a team or topic"
   ],
   [
    "Thread",
    "Replies to one message, kept together"
   ],
   [
    "Huddle",
    "A quick audio or video call"
   ],
   [
    "Direct message",
    "Private chat with one or a few people"
   ]
  ]
 },
 "zoom.0.1": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Zoom troubleshooting",
  "items": [
   {
    "q": "Others cannot hear a user. First check…",
    "o": [
     "The selected microphone and mute button",
     "The printer",
     "The wallpaper",
     "Their email"
    ],
    "a": 0
   },
   {
    "q": "A user's camera shows black. A common cause is…",
    "o": [
     "Another app is using the camera",
     "Slow keyboard",
     "Full mailbox",
     "Wrong time zone"
    ],
    "a": 0
   },
   {
    "q": "To join a meeting you need…",
    "o": [
     "A link or meeting ID",
     "A Zoom certificate",
     "Admin rights",
     "A VPN always"
    ],
    "a": 0
   }
  ]
 },
 "rdp.0.1": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Type the answer",
  "items": [
   {
    "q": "What is the default RDP port number?",
    "a": [
     "3389"
    ]
   },
   {
    "q": "Which Windows command opens the Remote Desktop client?",
    "a": [
     "mstsc",
     "mstsc.exe"
    ]
   },
   {
    "q": "RDP stands for Remote Desktop …",
    "a": [
     "protocol"
    ]
   }
  ]
 },
 "teamviewer.0.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: TeamViewer",
  "items": [
   {
    "q": "You connect using the partner's ID and password.",
    "a": true
   },
   {
    "q": "Unattended access lets you connect without the user present.",
    "a": true
   },
   {
    "q": "It is safe to give access to anyone who calls you.",
    "a": false
   },
   {
    "q": "TeamViewer can transfer files.",
    "a": true
   }
  ]
 },
 "anydesk.0.1": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "AnyDesk basics",
  "items": [
   {
    "q": "What do you use to connect to a user?",
    "o": [
     "Their AnyDesk address",
     "Their email password",
     "Their MAC address",
     "Their phone PIN"
    ],
    "a": 0
   },
   {
    "q": "Who accepts a normal support session?",
    "o": [
     "The user on the remote PC",
     "Nobody",
     "Microsoft",
     "Your manager"
    ],
    "a": 0
   },
   {
    "q": "Unattended access needs…",
    "o": [
     "A password set on the device",
     "No security",
     "A USB key",
     "A printer"
    ],
    "a": 0
   }
  ]
 },
 "microsoft365.0.1": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the Microsoft 365 app",
  "pairs": [
   [
    "Outlook",
    "Email and calendar"
   ],
   [
    "Teams",
    "Chat, meetings and calls"
   ],
   [
    "OneDrive",
    "Personal cloud files"
   ],
   [
    "SharePoint",
    "Team sites and shared libraries"
   ],
   [
    "Admin center",
    "Manage users and licences"
   ]
  ]
 },
 "microsoft365.0.2": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Outlook problems",
  "items": [
   {
    "q": "A user cannot find an email. First check…",
    "o": [
     "Junk and Other folders",
     "The printer",
     "Their monitor",
     "Windows Update"
    ],
    "a": 0
   },
   {
    "q": "To check if the problem is the Outlook app or the account, use…",
    "o": [
     "Outlook on the web",
     "Paint",
     "Task Scheduler",
     "BIOS"
    ],
    "a": 0
   },
   {
    "q": "A full mailbox can be fixed by…",
    "o": [
     "Archiving or deleting old mail",
     "Restarting the router",
     "Changing the wallpaper",
     "Buying a new PC"
    ],
    "a": 0
   }
  ]
 },
 "microsoft365.0.3": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: Teams",
  "items": [
   {
    "q": "Teams channels live inside a team.",
    "a": true
   },
   {
    "q": "You can pick your microphone and camera in Teams settings.",
    "a": true
   },
   {
    "q": "Clearing the cache can fix strange Teams behaviour.",
    "a": true
   },
   {
    "q": "Teams cannot make calls.",
    "a": false
   }
  ]
 },
 "microsoft365.0.4": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the OneDrive sync icon",
  "pairs": [
   [
    "Blue cloud",
    "Online only, not on this PC"
   ],
   [
    "Green tick",
    "Available on this device"
   ],
   [
    "Red cross",
    "Sync error"
   ],
   [
    "Two blue arrows",
    "Syncing now"
   ]
  ]
 },
 "microsoft365.0.5": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the SharePoint group",
  "pairs": [
   [
    "Owners",
    "Full control of the site"
   ],
   [
    "Members",
    "Can edit content"
   ],
   [
    "Visitors",
    "Can only read"
   ]
  ]
 },
 "microsoft365.0.6": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Quick fixes",
  "items": [
   {
    "q": "A user's apps say 'unlicensed'. Check…",
    "o": [
     "The licence in the admin center",
     "Their mouse",
     "The Wi-Fi password",
     "The printer queue"
    ],
    "a": 0
   },
   {
    "q": "Teams audio is not working. First check…",
    "o": [
     "The selected devices in Teams",
     "Their email signature",
     "Their Excel version",
     "The time zone"
    ],
    "a": 0
   },
   {
    "q": "OneDrive shows a red cross. It means…",
    "o": [
     "Sync error",
     "File is shared",
     "File is online only",
     "Normal"
    ],
    "a": 0
   }
  ]
 },
 "linkedin.0.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: LinkedIn for IT jobs",
  "items": [
   {
    "q": "A headline like 'Aspiring IT Support Technician | CompTIA A+' helps recruiters find you.",
    "a": true
   },
   {
    "q": "Adding certifications to your profile is useless.",
    "a": false
   },
   {
    "q": "You can set job alerts for help desk roles.",
    "a": true
   },
   {
    "q": "Connecting with IT people can lead to opportunities.",
    "a": true
   }
  ]
 },
 "glassdoor.0.1": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Using Glassdoor",
  "items": [
   {
    "q": "What can you check on Glassdoor?",
    "o": [
     "Company reviews and salaries",
     "Your exam results",
     "Free certifications",
     "Your IP address"
    ],
    "a": 0
   },
   {
    "q": "When reading reviews you should…",
    "o": [
     "Look for repeated patterns",
     "Trust only one review",
     "Ignore all of them",
     "Only read 5-star ones"
    ],
    "a": 0
   }
  ]
 },
 "indeed.0.1": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the steps to apply on Indeed",
  "steps": [
   "Create an account and upload your CV",
   "Search for 'IT support' jobs",
   "Filter by location and experience",
   "Apply to suitable jobs",
   "Track your applications"
  ]
 },
 "servicenow.1.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: the platform",
  "items": [
   {
    "q": "ServiceNow runs many applications on one platform.",
    "a": true
   },
   {
    "q": "You reach ServiceNow mainly through a web browser.",
    "a": true
   },
   {
    "q": "A form shows many records at once.",
    "a": false
   },
   {
    "q": "You can add modules to your favourites.",
    "a": true
   }
  ]
 },
 "servicenow.1.2": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the term",
  "pairs": [
   [
    "Application",
    "A group of related modules"
   ],
   [
    "Module",
    "A link that opens a list, form or page"
   ],
   [
    "Plugin",
    "Switches on extra platform features"
   ],
   [
    "System property",
    "A setting that changes platform behaviour"
   ]
  ]
 },
 "servicenow.1.3": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Personalize or customize?",
  "items": [
   {
    "q": "A user hides two columns in their list. This is…",
    "o": [
     "Personalization",
     "Customization",
     "Scripting",
     "An update set"
    ],
    "a": 0
   },
   {
    "q": "An admin adds a new field to the Incident form for everyone. This is…",
    "o": [
     "Personalization",
     "Customization",
     "A report",
     "A tag"
    ],
    "a": 1
   },
   {
    "q": "The modern ServiceNow interface is called…",
    "o": [
     "Next Experience",
     "Classic Mode",
     "Service Desk 1",
     "Web 1.0"
    ],
    "a": 0
   }
  ]
 },
 "servicenow.1.4": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Build a filter: put the parts in order",
  "steps": [
   "Choose the field",
   "Choose the operator",
   "Enter the value",
   "Run the filter"
  ]
 },
 "servicenow.1.5": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Forms and templates",
  "items": [
   {
    "q": "Which tool lets admins drag fields onto a form visually?",
    "o": [
     "Form Designer",
     "Update Set",
     "Report Builder",
     "ACL"
    ],
    "a": 0
   },
   {
    "q": "A template is used to…",
    "o": [
     "Pre-fill fields on a form",
     "Delete records",
     "Import data",
     "Send emails"
    ],
    "a": 0
   },
   {
    "q": "Different layouts of the same form for different users are called…",
    "o": [
     "Views",
     "Tags",
     "Plugins",
     "Roles"
    ],
    "a": 0
   }
  ]
 },
 "servicenow.1.6": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the task concept",
  "pairs": [
   [
    "Task table",
    "Parent table for incident, problem and change"
   ],
   [
    "Assignment group",
    "The team responsible"
   ],
   [
    "Assigned to",
    "The person working on it"
   ],
   [
    "Visual Task Board",
    "Kanban-style board of cards"
   ]
  ]
 },
 "servicenow.1.7": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the reporting tool",
  "pairs": [
   [
    "Report",
    "A chart or list answering one question"
   ],
   [
    "Dashboard",
    "A page combining several reports"
   ],
   [
    "Platform Analytics",
    "Tracks indicators and trends over time"
   ]
  ]
 },
 "servicenow.1.8": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the notification part",
  "pairs": [
   [
    "When to send",
    "The event or condition that triggers it"
   ],
   [
    "Who will receive",
    "The users or groups notified"
   ],
   [
    "What it will contain",
    "The subject and message"
   ]
  ]
 },
 "servicenow.1.9": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the knowledge article lifecycle",
  "steps": [
   "Draft",
   "Review",
   "Published",
   "Retired"
  ]
 },
 "servicenow.1.10": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: Service Catalog",
  "items": [
   {
    "q": "Catalog items let users order standard things.",
    "a": true
   },
   {
    "q": "Variables collect information from the user.",
    "a": true
   },
   {
    "q": "A catalog item can trigger an approval.",
    "a": true
   },
   {
    "q": "The catalog is only for incidents.",
    "a": false
   }
  ]
 },
 "servicenow.1.11": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Automation",
  "items": [
   {
    "q": "Every flow starts with a…",
    "o": [
     "Trigger",
     "Report",
     "Tag",
     "Theme"
    ],
    "a": 0
   },
   {
    "q": "Workflow Studio is mainly for…",
    "o": [
     "Building automation without code",
     "Writing emails",
     "Designing logos",
     "Backups"
    ],
    "a": 0
   },
   {
    "q": "Virtual Agent is…",
    "o": [
     "A chatbot for users",
     "A remote tool",
     "A table",
     "An ACL"
    ],
    "a": 0
   }
  ]
 },
 "servicenow.1.12": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Type the answer",
  "items": [
   {
    "q": "A field that links to a record in another table is a … field",
    "a": [
     "reference"
    ]
   },
   {
    "q": "A child table that gets the fields of its parent is said to …",
    "a": [
     "extend",
     "extends",
     "inherit"
    ]
   },
   {
    "q": "Rows in a table are called …",
    "a": [
     "records",
     "record"
    ]
   }
  ]
 },
 "servicenow.1.13": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the access concept",
  "pairs": [
   [
    "User",
    "A person who logs in"
   ],
   [
    "Group",
    "A set of users, e.g. Service Desk"
   ],
   [
    "Role",
    "A collection of permissions"
   ],
   [
    "ACL",
    "Rule deciding read/write/create/delete access"
   ]
  ]
 },
 "servicenow.1.14": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the import steps",
  "steps": [
   "Load data into an import set",
   "Create a transform map",
   "Map source fields to target fields",
   "Run the transform",
   "Check the target table"
  ]
 },
 "servicenow.1.15": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: shared responsibility",
  "items": [
   {
    "q": "ServiceNow secures the underlying platform.",
    "a": true
   },
   {
    "q": "The customer is responsible for its users and configuration.",
    "a": true
   },
   {
    "q": "Security Center helps check instance hardening.",
    "a": true
   },
   {
    "q": "Customers never need to think about security.",
    "a": false
   }
  ]
 },
 "servicenow.1.16": {
  "type": "match",
  "color": "#fb923c",
  "title": "UI Policy or Business Rule?",
  "pairs": [
   [
    "Make a field mandatory on the form",
    "UI Policy"
   ],
   [
    "Update another record when an incident closes",
    "Business Rule"
   ],
   [
    "Hide a field when State is New",
    "UI Policy"
   ],
   [
    "Run logic on the server before saving",
    "Business Rule"
   ]
  ]
 },
 "servicenow.1.17": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: update sets",
  "items": [
   {
    "q": "Update sets capture configuration changes.",
    "a": true
   },
   {
    "q": "Update sets automatically move all data records.",
    "a": false
   },
   {
    "q": "You move update sets from dev to production.",
    "a": true
   },
   {
    "q": "ServiceNow scripting uses JavaScript.",
    "a": true
   }
  ]
 },
 "servicenow.1.x1": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "The CSA exam",
  "items": [
   {
    "q": "Which domain has the highest weight?",
    "o": [
     "Database Management and Platform Security",
     "Platform Overview",
     "Instance Configuration",
     "Data Migration"
    ],
    "a": 0,
    "e": "It is about 30% of the exam."
   },
   {
    "q": "Best way to prepare for practical questions?",
    "o": [
     "Practise in a PDI",
     "Only read slides",
     "Skip it",
     "Memorise answers"
    ],
    "a": 0
   }
  ]
 },
 "servicenow.1.x2": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: exam checklist",
  "items": [
   {
    "q": "A checklist helps find your weak domains.",
    "a": true
   },
   {
    "q": "You only need to study one domain.",
    "a": false
   },
   {
    "q": "Hands-on practice helps you remember.",
    "a": true
   }
  ]
 },
 "im2.1": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the admin task with the tool",
  "pairs": [
   [
    "Create a local user",
    "Computer Management"
   ],
   [
    "Find why an app crashed",
    "Event Viewer"
   ],
   [
    "Close a frozen program",
    "Task Manager"
   ],
   [
    "Automate a daily job",
    "PowerShell"
   ],
   [
    "Install patches",
    "Windows Update"
   ]
  ]
 },
 "im2.2": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Users and groups",
  "items": [
   {
    "q": "Which console manages local users and groups?",
    "o": [
     "lusrmgr.msc",
     "regedit",
     "msconfig",
     "eventvwr"
    ],
    "a": 0
   },
   {
    "q": "Best practice is to give permissions to…",
    "o": [
     "Groups",
     "Each user one by one",
     "Everyone",
     "Guests"
    ],
    "a": 0,
    "e": "Groups make access easier to manage."
   },
   {
    "q": "A normal employee account should be in…",
    "o": [
     "Users",
     "Administrators",
     "Backup Operators",
     "Domain Admins"
    ],
    "a": 0,
    "e": "Least privilege: no admin rights for daily work."
   }
  ]
 },
 "im2.3": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: NTFS and sharing",
  "items": [
   {
    "q": "When NTFS and share permissions combine, the most restrictive applies.",
    "a": true
   },
   {
    "q": "Folders can inherit permissions from their parent.",
    "a": true
   },
   {
    "q": "Full Control is less powerful than Read.",
    "a": false
   },
   {
    "q": "Share permissions only apply over the network.",
    "a": true
   },
   {
    "q": "Deny is usually stronger than Allow.",
    "a": true
   }
  ]
 },
 "im2.4": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Type the answer",
  "items": [
   {
    "q": "Keyboard shortcut to open Task Manager? (Ctrl+Shift+…)",
    "a": [
     "esc",
     "escape"
    ]
   },
   {
    "q": "Console to manage Windows services? (….msc)",
    "a": [
     "services.msc",
     "services"
    ]
   },
   {
    "q": "Startup type that stops a service from ever starting?",
    "a": [
     "disabled"
    ]
   }
  ]
 },
 "im2.13": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the registry part",
  "pairs": [
   [
    "HKEY_LOCAL_MACHINE",
    "Settings for the whole computer"
   ],
   [
    "HKEY_CURRENT_USER",
    "Settings for the signed-in user"
   ],
   [
    "Key",
    "Works like a folder"
   ],
   [
    "Value",
    "Stores one setting"
   ]
  ]
 },
 "im2.5": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the command with what it opens",
  "pairs": [
   [
    "regedit",
    "Registry Editor"
   ],
   [
    "msconfig",
    "System Configuration (boot options)"
   ],
   [
    "sysdm.cpl",
    "System Properties"
   ],
   [
    "appwiz.cpl",
    "Programs and Features"
   ]
  ]
 },
 "im2.6": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Event logs",
  "items": [
   {
    "q": "Failed logins are recorded in which log?",
    "o": [
     "Security",
     "Application",
     "Setup",
     "Forwarded"
    ],
    "a": 0,
    "e": "Event ID 4625 = failed logon."
   },
   {
    "q": "An app keeps crashing. Which log first?",
    "o": [
     "Application",
     "Security",
     "Hardware",
     "DNS"
    ],
    "a": 0
   },
   {
    "q": "Command to open Event Viewer?",
    "o": [
     "eventvwr.msc",
     "taskmgr",
     "ncpa.cpl",
     "cmd"
    ],
    "a": 0
   },
   {
    "q": "What helps you research an event online?",
    "o": [
     "The Event ID and source",
     "The colour",
     "The wallpaper",
     "The user's age"
    ],
    "a": 0
   }
  ]
 },
 "im2.7": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Order the update fix steps (try simple things first)",
  "steps": [
   "Restart the PC and try again",
   "Run the Windows Update troubleshooter",
   "Free up disk space",
   "Look up the error code",
   "Reset Windows Update components"
  ]
 },
 "im2.14": {
  "type": "match",
  "color": "#fb923c",
  "title": "CMD or PowerShell?",
  "pairs": [
   [
    "Works with objects",
    "PowerShell"
   ],
   [
    "Classic prompt shown as C:\\>",
    "CMD"
   ],
   [
    "Uses cmdlets like Get-Process",
    "PowerShell"
   ],
   [
    "Runs .bat batch files",
    "CMD"
   ]
  ]
 },
 "im2.8": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Type the command",
  "items": [
   {
    "q": "List files in the current folder",
    "a": [
     "dir"
    ]
   },
   {
    "q": "Create a new folder",
    "a": [
     "mkdir",
     "md"
    ]
   },
   {
    "q": "Go up one folder level",
    "a": [
     "cd ..",
     "cd.."
    ]
   },
   {
    "q": "Delete a file",
    "a": [
     "del",
     "erase"
    ]
   },
   {
    "q": "Show help for a command (add …)",
    "a": [
     "/?"
    ]
   }
  ]
 },
 "im2.10": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "PowerShell fundamentals",
  "items": [
   {
    "q": "Which cmdlet lists running processes?",
    "o": [
     "Get-Process",
     "Show-Task",
     "List-App",
     "Find-Run"
    ],
    "a": 0
   },
   {
    "q": "What does the | (pipe) do?",
    "o": [
     "Passes objects to the next command",
     "Deletes files",
     "Comments a line",
     "Opens help"
    ],
    "a": 0
   },
   {
    "q": "Which cmdlet shows help for a command?",
    "o": [
     "Get-Help",
     "Show-Me",
     "Help-Now",
     "Get-Info"
    ],
    "a": 0
   },
   {
    "q": "PowerShell cmdlets follow which naming pattern?",
    "o": [
     "Verb-Noun",
     "Noun-Verb",
     "Any word",
     "Numbers only"
    ],
    "a": 0
   }
  ]
 },
 "im4.12": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the protocol or device with its layer",
  "pairs": [
   [
    "Switch",
    "Layer 2 – Data Link"
   ],
   [
    "Router / IP",
    "Layer 3 – Network"
   ],
   [
    "TCP / UDP",
    "Layer 4 – Transport"
   ],
   [
    "HTTP / DNS",
    "Layer 7 – Application"
   ],
   [
    "Cable / signals",
    "Layer 1 – Physical"
   ]
  ]
 },
 "im4.13": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: IP addressing",
  "items": [
   {
    "q": "192.168.1.10 is a private IP address.",
    "a": true
   },
   {
    "q": "An IPv4 octet can be 300.",
    "a": false
   },
   {
    "q": "The subnet mask shows which part is the network.",
    "a": true
   },
   {
    "q": "8.8.8.8 is a private address.",
    "a": false
   }
  ]
 },
 "im4.14": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "MAC addresses",
  "items": [
   {
    "q": "How many bits is a MAC address?",
    "o": [
     "48",
     "32",
     "128",
     "8"
    ],
    "a": 0
   },
   {
    "q": "Which protocol finds the MAC for an IP address?",
    "o": [
     "ARP",
     "DNS",
     "DHCP",
     "FTP"
    ],
    "a": 0
   },
   {
    "q": "Which device forwards frames using MAC addresses?",
    "o": [
     "Switch",
     "Router",
     "Modem",
     "Firewall"
    ],
    "a": 0
   },
   {
    "q": "MAC addresses are written in…",
    "o": [
     "Hexadecimal",
     "Roman numerals",
     "Binary words",
     "Letters only"
    ],
    "a": 0
   }
  ]
 },
 "im1.1": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: the kernel",
  "items": [
   {
    "q": "The kernel is the core of the operating system.",
    "a": true
   },
   {
    "q": "Programs talk to the kernel through system calls.",
    "a": true
   },
   {
    "q": "The kernel is the same as the desktop wallpaper.",
    "a": false
   },
   {
    "q": "The kernel manages memory and the CPU.",
    "a": true
   }
  ]
 },
 "im3.14": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: Linux basics",
  "items": [
   {
    "q": "Linux is an operating system.",
    "a": true
   },
   {
    "q": "Linux is only for programmers.",
    "a": false
   },
   {
    "q": "Ubuntu and Fedora are Linux distributions.",
    "a": true
   },
   {
    "q": "Most web servers and cloud systems run Linux.",
    "a": true
   },
   {
    "q": "You must pay a licence fee to use Linux.",
    "a": false
   }
  ]
 },
 "im3.13": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Your first steps in Linux",
  "items": [
   {
    "q": "What is Bash?",
    "o": [
     "A text editor",
     "A shell that runs your commands",
     "A web browser",
     "A file system"
    ],
    "a": 1,
    "e": "Bash is the shell: it reads what you type and runs it."
   },
   {
    "q": "What is the terminal?",
    "o": [
     "The window where you type commands",
     "The Linux kernel",
     "A hard disk",
     "A package manager"
    ],
    "a": 0
   },
   {
    "q": "Why do admins use the terminal?",
    "o": [
     "It is faster and works on remote servers",
     "Linux has no other way",
     "It looks nicer",
     "Mouse is forbidden"
    ],
    "a": 0
   },
   {
    "q": "What does the prompt usually show?",
    "o": [
     "The weather",
     "Your user, computer and current folder",
     "Your password",
     "Installed packages"
    ],
    "a": 1
   }
  ]
 },
 "im3.9": {
  "type": "fill",
  "color": "#4ade80",
  "title": "Complete the Bash fundamentals",
  "items": [
   {
    "q": "The key that completes a command or file name is ___.",
    "a": [
     "tab"
    ]
   },
   {
    "q": "To read a variable called NAME you write $___.",
    "a": [
     "name"
    ]
   },
   {
    "q": "The command ___ shows the manual page of a command.",
    "a": [
     "man"
    ]
   },
   {
    "q": "Most commands print short help with the option --___.",
    "a": [
     "help"
    ]
   }
  ]
 },
 "im3.1": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the command with its job",
  "pairs": [
   [
    "pwd",
    "Shows the folder you are in"
   ],
   [
    "ls",
    "Lists files and folders"
   ],
   [
    "cd",
    "Moves to another folder"
   ],
   [
    "cd ..",
    "Goes up one folder"
   ],
   [
    "/",
    "The root of the file system"
   ]
  ]
 },
 "im3.12": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Linux folders",
  "items": [
   {
    "q": "Where do user files live?",
    "o": [
     "/home",
     "/etc",
     "/var",
     "/bin"
    ],
    "a": 0
   },
   {
    "q": "Where are most configuration files?",
    "o": [
     "/etc",
     "/home",
     "/tmp",
     "/media"
    ],
    "a": 0
   },
   {
    "q": "Where do system logs usually live?",
    "o": [
     "/var/log",
     "/home/log",
     "/etc/log",
     "/bin"
    ],
    "a": 0
   },
   {
    "q": "How is Linux different from Windows here?",
    "o": [
     "It has one tree and no drive letters",
     "It uses C: and D:",
     "It has no folders",
     "It stores everything in the registry"
    ],
    "a": 0
   }
  ]
 },
 "im3.2": {
  "type": "order",
  "color": "#60a5fa",
  "title": "Put the steps in order to add a new admin user",
  "steps": [
   "Create the user with useradd",
   "Set a password with passwd",
   "Add the user to the sudo group",
   "Log in as the new user and test sudo"
  ]
 },
 "im3.3": {
  "type": "mcq",
  "color": "#a78bfa",
  "title": "Permissions and ownership",
  "items": [
   {
    "q": "What does chmod do?",
    "o": [
     "Changes permissions",
     "Changes the owner",
     "Creates a user",
     "Deletes a file"
    ],
    "a": 0
   },
   {
    "q": "What does chown do?",
    "o": [
     "Changes the owner",
     "Changes permissions",
     "Shows files",
     "Moves a file"
    ],
    "a": 0
   },
   {
    "q": "What does x mean on a file?",
    "o": [
     "Execute",
     "Extra",
     "Exit",
     "Export"
    ],
    "a": 0
   },
   {
    "q": "rwx for the owner, r-x for the group and others is written as:",
    "o": [
     "755",
     "644",
     "777",
     "600"
    ],
    "a": 0,
    "e": "4+2+1 = 7 for the owner, 4+1 = 5 for the others."
   }
  ]
 },
 "im3.5": {
  "type": "match",
  "color": "#fb923c",
  "title": "Match the package tool with its family",
  "pairs": [
   [
    "apt",
    "Debian and Ubuntu"
   ],
   [
    "dnf",
    "Fedora and Red Hat"
   ],
   [
    "snap",
    "Works across many distributions"
   ],
   [
    "sudo apt update",
    "Refreshes the package list"
   ],
   [
    "sudo apt install",
    "Installs a package"
   ]
  ]
 },
 "im3.4": {
  "type": "tf",
  "color": "#2dd4bf",
  "title": "True or false: processes and services",
  "items": [
   {
    "q": "ps shows running processes.",
    "a": true
   },
   {
    "q": "kill is used to start a service.",
    "a": false
   },
   {
    "q": "systemctl status shows if a service is running.",
    "a": true
   },
   {
    "q": "top shows CPU and memory use live.",
    "a": true
   },
   {
    "q": "Every process has a unique ID (PID).",
    "a": true
   }
  ]
 }
}; Object.keys(Q).forEach(function (k) { if (!QUIZZES[k]) QUIZZES[k] = Q[k]; }); })();
/* ITIL Foundation full mock exam (40 questions, pass mark 26/40) */
QUIZZES["itil.e.7"] = {
"type": "mcq",
"color": "#a78bfa",
"title": "ITIL Foundation (Version 5) · Full Mock Exam · 40 questions · 60 minutes · pass mark 26/40",
"pass": 26,
"items": [
{
"q": "What is a service?",
"o": [
"A means of enabling value co-creation by facilitating outcomes that customers want, without the customer managing specific costs and risks",
"A configuration of an organization's resources designed to offer value for a consumer",
"A tangible or intangible deliverable of an activity",
"A possible event that could cause harm or loss"
],
"a": 0,
"e": "B is a product, C is an output, D is a risk.",
"t": "Key terms"
},
{
"q": "Which term means a tangible or intangible deliverable of an activity?",
"o": [
"Outcome",
"Output",
"Value",
"Utility"
],
"a": 1,
"e": "An outcome is a result for a stakeholder; an output is what an activity delivers.",
"t": "Key terms"
},
{
"q": "Which role defines the requirements for a service and is responsible for its outcomes?",
"o": [
"User",
"Sponsor",
"Customer",
"Supplier"
],
"a": 2,
"e": "The user uses the service; the sponsor authorizes the budget.",
"t": "Key terms"
},
{
"q": "Which role authorizes the budget for service consumption?",
"o": [
"Customer",
"User",
"Service provider",
"Sponsor"
],
"a": 3,
"e": "The sponsor authorizes budget; the customer defines requirements.",
"t": "Key terms"
},
{
"q": "Fill the gap: ______ is the functionality offered by a product or service to meet a particular need.",
"o": [
"Warranty",
"Utility",
"Value",
"Output"
],
"a": 1,
"e": "Utility is fit for purpose: what the service does.",
"t": "Key terms"
},
{
"q": "Which statement describes warranty?",
"o": [
"Assurance that a product or service will meet agreed requirements",
"The functionality a service offers",
"The perceived benefits of something",
"A result for a stakeholder"
],
"a": 0,
"e": "Warranty is fit for use: how well it performs.",
"t": "Key terms"
},
{
"q": "Which two are examples of warranty? 1. Availability 2. Capacity 3. The features a service offers 4. The price of a service",
"o": [
"1 and 2",
"2 and 3",
"3 and 4",
"1 and 4"
],
"a": 0,
"e": "Availability and capacity describe how well a service performs.",
"t": "Key terms"
},
{
"q": "Which of these is NOT part of a service offering?",
"o": [
"Goods",
"Access to resources",
"Service actions",
"Service consumers"
],
"a": 3,
"e": "A service offering includes goods, access to resources and service actions.",
"t": "Key terms"
},
{
"q": "What is a service relationship?",
"o": [
"A contract that removes all risks",
"A cooperation between a service provider and a service consumer",
"A list of services in a catalogue",
"A meeting between two suppliers"
],
"a": 1,
"e": "It includes service provision, service consumption and relationship management.",
"t": "Key terms"
},
{
"q": "How is value created in ITIL?",
"o": [
"By the service provider alone",
"By the consumer alone",
"Through collaboration between providers and consumers",
"By suppliers only"
],
"a": 2,
"e": "Value is co-created by providers and consumers working together.",
"t": "Key terms"
},
{
"q": "A company moves to a cloud payroll service and no longer needs its own payroll servers. What is this for the company?",
"o": [
"A cost imposed",
"A risk imposed",
"An output",
"A cost removed"
],
"a": 3,
"e": "The servers are a cost the consumer no longer has.",
"t": "Key terms"
},
{
"q": "Which of these is an example of an outcome?",
"o": [
"A report is delivered",
"Staff can work securely from home",
"A new account is created",
"A server is installed"
],
"a": 1,
"e": "The others are outputs; the outcome is the result the consumer wants.",
"t": "Key terms"
},
{
"q": "Which dimension covers contracts and relationships with other organizations?",
"o": [
"Organizations and people",
"Information and technology",
"Partners and suppliers",
"Value streams and processes"
],
"a": 2,
"e": "Partners and suppliers covers external providers and contracts.",
"t": "Four dimensions"
},
{
"q": "Which dimension includes data, applications and infrastructure?",
"o": [
"Information and technology",
"Organizations and people",
"Partners and suppliers",
"Value streams and processes"
],
"a": 0,
"e": "Information and technology covers data, applications and infrastructure.",
"t": "Four dimensions"
},
{
"q": "Which of these is NOT one of the four dimensions?",
"o": [
"Organizations and people",
"Information and technology",
"Partners and suppliers",
"Governance and compliance"
],
"a": 3,
"e": "The fourth dimension is value streams and processes.",
"t": "Four dimensions"
},
{
"q": "Which model helps to analyse the external factors that affect the four dimensions?",
"o": [
"RACI",
"PESTLE",
"The continual improvement model",
"A service level agreement"
],
"a": 1,
"e": "PESTLE: political, economic, social, technological, legal and environmental.",
"t": "Four dimensions"
},
{
"q": "Which lifecycle activity identifies opportunities, needs and requirements?",
"o": [
"Design",
"Build",
"Support",
"Discover"
],
"a": 3,
"e": "Discover finds what consumers need.",
"t": "Product and service lifecycle"
},
{
"q": "Which lifecycle activity obtains resources, such as buying components or services from suppliers?",
"o": [
"Acquire",
"Deliver",
"Transition",
"Operate"
],
"a": 0,
"e": "Acquire obtains the resources that are needed.",
"t": "Product and service lifecycle"
},
{
"q": "Which lifecycle activity helps users when they have issues or questions?",
"o": [
"Design",
"Support",
"Discover",
"Build"
],
"a": 1,
"e": "Support helps users with issues and questions.",
"t": "Product and service lifecycle"
},
{
"q": "Which lifecycle activity creates and tests the components of a product or service?",
"o": [
"Discover",
"Operate",
"Build",
"Deliver"
],
"a": 2,
"e": "Build develops and tests the components.",
"t": "Product and service lifecycle"
},
{
"q": "What is the purpose of the service value system?",
"o": [
"To list all IT services",
"To replace management practices",
"To manage supplier contracts",
"To show how all components and activities work together to create value"
],
"a": 3,
"e": "The value system turns opportunity and demand into value.",
"t": "Value system"
},
{
"q": "What are the inputs to the service value system?",
"o": [
"Opportunity and demand",
"Value and outcomes",
"Practices and governance",
"Products and services"
],
"a": 0,
"e": "Opportunity and demand go in; value comes out.",
"t": "Value system"
},
{
"q": "Which guiding principle says to use existing services, processes and tools before building something new?",
"o": [
"Focus on value",
"Optimize and automate",
"Start where you are",
"Keep it simple and practical"
],
"a": 2,
"e": "Start where you are: assess what already exists.",
"t": "Value system"
},
{
"q": "Which guiding principle recommends working in small steps and checking results after each one?",
"o": [
"Progress iteratively with feedback",
"Think and work holistically",
"Collaborate and promote visibility",
"Focus on value"
],
"a": 0,
"e": "Small steps with feedback reduce risk.",
"t": "Value system"
},
{
"q": "Which guiding principle encourages teams to share information and work together?",
"o": [
"Keep it simple and practical",
"Collaborate and promote visibility",
"Start where you are",
"Optimize and automate"
],
"a": 1,
"e": "Collaboration and visibility build trust and better decisions.",
"t": "Value system"
},
{
"q": "Which guiding principle says to understand how the whole system works, not just one part?",
"o": [
"Focus on value",
"Progress iteratively with feedback",
"Optimize and automate",
"Think and work holistically"
],
"a": 3,
"e": "No part of a service works on its own.",
"t": "Value system"
},
{
"q": "Which guiding principle says to remove steps that do not add value?",
"o": [
"Keep it simple and practical",
"Start where you are",
"Think and work holistically",
"Collaborate and promote visibility"
],
"a": 0,
"e": "If a step adds no value, remove it.",
"t": "Value system"
},
{
"q": "Which guiding principle says to improve a process before you automate it?",
"o": [
"Focus on value",
"Start where you are",
"Optimize and automate",
"Progress iteratively with feedback"
],
"a": 2,
"e": "Optimize first, then automate.",
"t": "Value system"
},
{
"q": "Which guiding principle says that everything an organization does should link back to value for stakeholders?",
"o": [
"Keep it simple and practical",
"Focus on value",
"Think and work holistically",
"Optimize and automate"
],
"a": 1,
"e": "Focus on value is the first guiding principle.",
"t": "Value system"
},
{
"q": "How many guiding principles does ITIL have?",
"o": [
"Four",
"Five",
"Eight",
"Seven"
],
"a": 3,
"e": "There are seven guiding principles.",
"t": "Value system"
},
{
"q": "Which are activities of governance? 1. Evaluate 2. Direct 3. Monitor 4. Acquire",
"o": [
"1, 2 and 3",
"1, 2 and 4",
"2, 3 and 4",
"1, 3 and 4"
],
"a": 0,
"e": "Governance evaluates, directs and monitors. Acquire is a lifecycle activity.",
"t": "Value system"
},
{
"q": "In ITIL Version 5, what makes up the value chain?",
"o": [
"The four dimensions",
"The seven guiding principles",
"The eight activities of the product and service lifecycle",
"The governance activities"
],
"a": 2,
"e": "Discover, design, acquire, build, transition, operate, deliver and support.",
"t": "Value system"
},
{
"q": "What is a practice?",
"o": [
"A set of organizational resources designed for performing work or accomplishing an objective",
"A one-time project",
"A rule set by a regulator",
"A type of service level agreement"
],
"a": 0,
"e": "Practices are toolkits the value chain activities use.",
"t": "Value system"
},
{
"q": "Which is the first step of the continual improvement model?",
"o": [
"Where are we now?",
"Take action",
"What is the vision?",
"Did we get there?"
],
"a": 2,
"e": "The model starts with the vision.",
"t": "Value system"
},
{
"q": "In the continual improvement model, which step comes right after take action?",
"o": [
"Where do we want to be?",
"Did we get there?",
"How do we get there?",
"What is the vision?"
],
"a": 1,
"e": "After acting, check the results.",
"t": "Value system"
},
{
"q": "Which statement about continual improvement is NOT correct?",
"o": [
"It happens at every level of the organization",
"It applies to the whole value system",
"It is only done once a year",
"It uses a seven-step model"
],
"a": 2,
"e": "Continual improvement happens all the time.",
"t": "Value system"
},
{
"q": "What is a value stream?",
"o": [
"A list of all IT assets",
"A series of steps an organization takes to create and deliver products and services to consumers",
"A team's reporting lines",
"A budget for a project"
],
"a": 1,
"e": "A value stream is a path through the activities for one type of demand.",
"t": "Value stream mapping"
},
{
"q": "In a value stream map, a long wait between two steps is an example of what?",
"o": [
"Value",
"Utility",
"Waste",
"Warranty"
],
"a": 2,
"e": "Delays are waste that value stream mapping helps to remove.",
"t": "Value stream mapping"
},
{
"q": "Which of these is NOT a good practice for responsible AI?",
"o": [
"Human oversight of important decisions",
"Being transparent about how AI is used",
"Protecting personal data",
"Letting AI make all decisions without review"
],
"a": 3,
"e": "People must stay accountable for important decisions.",
"t": "ITIL and AI"
},
{
"q": "How do DevOps and ITIL work together?",
"o": [
"DevOps replaces ITIL",
"DevOps speeds up delivery, while ITIL practices such as change enablement keep it controlled",
"ITIL replaces DevOps",
"They cannot be used together"
],
"a": 1,
"e": "The two frameworks complement each other.",
"t": "Other frameworks"
}
]
};
