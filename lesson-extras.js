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
/* ServiceNow CAD exam preparation quizzes */
QUIZZES["servicenow.2.x3"] = {"type": "mcq", "color": "#62d84e", "title": "ServiceNow CAD · Practice Questions · 20 questions across the 6 exam domains", "items": [{"t": "Application user interface", "q": "Which client script type runs when a form opens?", "o": ["onLoad", "onCellEdit", "onChange", "onSubmit"], "a": 0, "e": "onLoad runs once when the form loads. onChange runs when a field value changes."}, {"t": "Application user interface", "q": "Which g_form method makes a field mandatory on the form?", "o": ["g_form.addInfoMessage('field')", "g_form.setMandatory('field', true)", "g_form.setValue('field', true)", "g_form.setDisplay('field', true)"], "a": 1, "e": "setMandatory(field, true) makes the field required. setDisplay shows or hides it."}, {"t": "Application user interface", "q": "Which g_user property gives the sys_id of the logged-in user in a client script?", "o": ["g_user.firstName", "g_user.hasRole()", "g_user.userID", "g_user.userName"], "a": 2, "e": "userID is the sys_id. userName is the login name."}, {"t": "Application user interface", "q": "An onSubmit client script returns false. What happens?", "o": ["The user is logged out", "The record is saved anyway", "The form reloads", "The form submission is cancelled"], "a": 3, "e": "Returning false from onSubmit stops the save, for example when a check fails."}, {"t": "Application automation", "q": "You want to change a field on the current record before it is saved, without an extra database update. Which business rule should you use?", "o": ["before", "async", "after", "display"], "a": 0, "e": "A before business rule changes current before it is written, so no extra update() is needed."}, {"t": "Application automation", "q": "What is a display business rule mainly used for?", "o": ["Deleting old records", "Filling g_scratchpad with server data for client scripts", "Running a scheduled job", "Sending email"], "a": 1, "e": "Display rules run when a form loads and pass server data to the client through g_scratchpad."}, {"t": "Application automation", "q": "In a GlideRecord script, which method runs the query you built with addQuery()?", "o": ["get()", "insert()", "query()", "next()"], "a": 2, "e": "query() runs it; next() then moves through the results one record at a time."}, {"t": "Designing and creating an application", "q": "Which server-side logging method can you use in a scoped application?", "o": ["console.log()", "alert()", "gs.log()", "gs.info()"], "a": 3, "e": "Scoped apps use gs.info(), gs.warn(), gs.error() and gs.debug(). gs.log() works only in the global scope."}, {"t": "Application automation", "q": "A client script must call a Script Include on the server. What does the Script Include need?", "o": ["To be client callable and extend AbstractAjaxProcessor, called with GlideAjax", "To run as a scheduled job", "To be a business rule", "Nothing special"], "a": 0, "e": "GlideAjax calls a client-callable Script Include that extends AbstractAjaxProcessor."}, {"t": "Security and restricting access", "q": "To read a field, which access controls must the user pass?", "o": ["Only the field-level ACL", "Both the table-level and the field-level ACL", "No ACL, roles are enough", "Only the table-level ACL"], "a": 1, "e": "ServiceNow checks the table ACL first, then the field ACL. The user must pass both."}, {"t": "Security and restricting access", "q": "Which ACL operation decides if a user can make new records in a table?", "o": ["write", "delete", "create", "read"], "a": 2, "e": "The create operation controls new records; write controls changes to existing ones."}, {"t": "Application user interface", "q": "What does a record producer do?", "o": ["Deletes old records", "Imports Excel files", "Sends email", "Creates a record in a chosen table from a Service Catalog form"], "a": 3, "e": "A record producer is a catalog item that creates a record, such as an incident, on a target table."}, {"t": "Application user interface", "q": "Which tool makes fields mandatory, visible or read-only on a form without writing code?", "o": ["UI Policy", "Scheduled job", "Script Include", "Business rule"], "a": 0, "e": "UI policies change field behaviour on the form with conditions and actions, no script needed."}, {"t": "Security and restricting access", "q": "A field must stay mandatory even when records arrive through imports and web services. What should you use?", "o": ["Client script", "Data policy", "UI action", "UI Policy"], "a": 1, "e": "Data policies are enforced on the server, so they also apply to imports and integrations."}, {"t": "Application automation", "q": "How do you fire a custom event from a server script?", "o": ["g_form.fire()", "gs.sendEvent()", "gs.eventQueue()", "current.event()"], "a": 2, "e": "Register the event in the Event Registry, then fire it with gs.eventQueue(name, record, parm1, parm2)."}, {"t": "Working with external data", "q": "In an import, what controls how staging data is copied into the target table?", "o": ["An ACL", "A UI policy", "An update set", "A transform map"], "a": 3, "e": "Data lands in an import set table, then a transform map maps the fields into the target table."}, {"t": "Working with external data", "q": "What does a coalesce field do in a transform map?", "o": ["Updates a matching record instead of creating a new one", "Deletes duplicates after import", "Encrypts the field", "Hides the field"], "a": 0, "e": "If an existing record matches on the coalesce field, it is updated; otherwise a new record is created."}, {"t": "Working with external data", "q": "You need to call an external REST API from a server script. What do you use?", "o": ["GlideAjax", "RESTMessageV2 (Outbound REST Message)", "g_form", "A UI policy"], "a": 1, "e": "sn_ws.RESTMessageV2 sends outbound REST calls; Scripted REST APIs are for incoming calls."}, {"t": "Security and restricting access", "q": "What protects a scoped application's tables and scripts from other applications?", "o": ["Business rules", "Client scripts", "Application scope and cross-scope access rules", "Update sets"], "a": 2, "e": "Application scope isolates the app. Other scopes need permission through cross-scope access settings."}, {"t": "Managing applications", "q": "Which feature lets you test an application automatically, step by step?", "o": ["Delegated development", "Update sets", "Import sets", "Automated Test Framework (ATF)"], "a": 3, "e": "ATF runs recorded test steps, for example open a form, set values, submit and check the result."}]};
QUIZZES["servicenow.2.x4"] = {"type": "mcq", "color": "#62d84e", "title": "ServiceNow CAD · Full Mock Exam · 40 questions · aim for 70% (the real exam has 60 questions in 90 minutes)", "pass": 28, "items": [{"t": "Designing and creating an application", "q": "What happens when you create a new table that extends the Task table?", "o": ["It inherits Task fields such as Number, State and Assigned to", "It replaces the Task table", "It starts empty with no fields", "It can only hold 100 records"], "a": 0, "e": "A child table inherits all fields of its parent table."}, {"t": "Designing and creating an application", "q": "What does a reference field store?", "o": ["A file attachment", "The sys_id of a record in another table", "A copy of the whole other record", "A list of users"], "a": 1, "e": "A reference field stores the sys_id and shows the display value of the referenced record."}, {"t": "Designing and creating an application", "q": "What is dot-walking?", "o": ["Sorting a list", "Moving records between tables", "Reaching fields of a referenced record, for example caller_id.department", "Copying an application"], "a": 2, "e": "Dot-walking follows reference fields to reach fields on related records."}, {"t": "Designing and creating an application", "q": "What is an application menu module?", "o": ["A database table", "An email template", "A server script", "A link in the application navigator that opens a list, form or page"], "a": 3, "e": "Modules are the links under an application menu in the navigator."}, {"t": "Designing and creating an application", "q": "Which statement about application scope is correct?", "o": ["Each scoped app has its own namespace prefix such as x_company_app", "All apps share the same namespace", "Scope removes the need for ACLs", "Scope only applies to client scripts"], "a": 0, "e": "Scoped apps get a unique namespace prefix for their tables and scripts."}, {"t": "Designing and creating an application", "q": "Which roles can see a module in the application menu?", "o": ["Everyone, always", "The roles set on the application menu or module", "Only admins", "Only users who created it"], "a": 1, "e": "Roles on the menu and module control who can see them."}, {"t": "Designing and creating an application", "q": "What is delegated development?", "o": ["Paying another company to build the app", "A type of business rule", "Giving non-admin developers rights to work on a specific application", "Deleting an application"], "a": 2, "e": "Delegated development lets admins grant development permissions for one app to non-admin users."}, {"t": "Application user interface", "q": "Which client script parameters are passed to an onChange script?", "o": ["request and response", "gr and table", "current and previous", "control, oldValue, newValue, isLoading, isTemplate"], "a": 3, "e": "onChange receives control, oldValue, newValue, isLoading and isTemplate."}, {"t": "Application user interface", "q": "Why do many onChange scripts start with 'if (isLoading) return;'?", "o": ["So the script does not run while the form is still loading", "To make it faster on the server", "To stop the form from loading", "To log the user out"], "a": 0, "e": "onChange also fires during form load; this line skips that first run."}, {"t": "Application user interface", "q": "What is a UI action?", "o": ["An email notification", "A button, link or context menu item on a form or list", "A database index", "A scheduled script"], "a": 1, "e": "UI actions add buttons, links and menu items that run client or server code."}, {"t": "Application user interface", "q": "A UI policy has 'Reverse if false' selected. What does it do?", "o": ["Deletes the record", "Runs only on the server", "Undoes its actions when the condition is no longer true", "Runs only once"], "a": 2, "e": "When the condition becomes false, the UI policy reverses its actions."}, {"t": "Application user interface", "q": "Which object passes data from a display business rule to a client script?", "o": ["g_list", "gs", "current", "g_scratchpad"], "a": 3, "e": "The display rule writes to g_scratchpad; client scripts read it."}, {"t": "Application user interface", "q": "How does GlideAjax return its answer to the client without freezing the page?", "o": ["With an asynchronous callback such as getXMLAnswer()", "It writes to a cookie", "It always waits synchronously", "It reloads the page"], "a": 0, "e": "Use asynchronous calls like getXMLAnswer(callback) so the browser does not freeze."}, {"t": "Application user interface", "q": "Which g_form method hides a field and removes the empty space?", "o": ["clearValue", "setDisplay", "setReadOnly", "setVisible"], "a": 1, "e": "setDisplay(field, false) hides it and removes the space; setVisible leaves a gap."}, {"t": "Security and restricting access", "q": "An ACL can check three things. Which list is correct?", "o": ["Users, groups and email", "Table, form and list", "Roles, condition and script", "Color, size and font"], "a": 2, "e": "An ACL can require roles, a condition and a script; all configured parts must pass."}, {"t": "Security and restricting access", "q": "What does an ACL rule named incident.* control?", "o": ["Nothing", "Only the table rows", "Only the Number field", "All fields of the Incident table that have no more specific field ACL"], "a": 3, "e": "table.* is the wildcard field ACL for fields without their own ACL."}, {"t": "Security and restricting access", "q": "Which server method checks if the current user has a role?", "o": ["gs.hasRole('itil')", "gs.isRole('itil')", "g_form.hasRole('itil')", "current.role('itil')"], "a": 0, "e": "gs.hasRole() returns true when the user has that role (admins pass most checks)."}, {"t": "Security and restricting access", "q": "Where do you allow another scoped app to read your app's table?", "o": ["In a client script", "In the table's Application Access settings, such as 'Can read' and 'Accessible from'", "In a UI policy", "In the email log"], "a": 1, "e": "Application Access settings on the table control access from other scopes."}, {"t": "Security and restricting access", "q": "Why is a data policy safer than a UI policy for important rules?", "o": ["It is faster on the form", "It changes colors", "It is enforced on the server for every way data arrives", "It only runs for admins"], "a": 2, "e": "UI policies run only in the browser; data policies also apply to imports and APIs."}, {"t": "Security and restricting access", "q": "A user can see a list of records but every field is empty. What is the most likely cause?", "o": ["The table is deleted", "The application is not installed", "The browser is offline", "Field-level read ACLs fail for that user"], "a": 3, "e": "Passing the table ACL but failing field ACLs shows rows without values."}, {"t": "Security and restricting access", "q": "Which ACL operation controls whether a user can change existing records?", "o": ["write", "read", "create", "report"], "a": 0, "e": "write controls updates to existing records."}, {"t": "Security and restricting access", "q": "In a business rule, which object holds the record values before the update?", "o": ["current", "previous", "g_form", "gs"], "a": 1, "e": "previous holds the old values; current holds the new ones."}, {"t": "Application automation", "q": "Which business rule type runs in the background after the record is saved?", "o": ["after", "display", "async", "before"], "a": 2, "e": "Async rules are queued and run later, so the user does not wait."}, {"t": "Application automation", "q": "Which GlideRecord method stops business rules and workflows from running on an update?", "o": ["setLimit(1)", "orderBy()", "autoSysFields(true)", "setWorkflow(false)"], "a": 3, "e": "setWorkflow(false) skips business rules and other engines for that operation."}, {"t": "Application automation", "q": "Which Flow Designer trigger starts a flow at a fixed time every day?", "o": ["Scheduled trigger", "Inbound email trigger", "Record trigger", "Service Catalog trigger"], "a": 0, "e": "Scheduled triggers run the flow daily, weekly or at a set time."}, {"t": "Application automation", "q": "What is a subflow in Flow Designer?", "o": ["A client script", "A reusable sequence of actions that other flows can call", "An ACL", "An email template"], "a": 1, "e": "Subflows package steps you can reuse from several flows."}, {"t": "Application automation", "q": "What is a spoke in Flow Designer?", "o": ["A type of ACL", "A UI policy", "A scoped set of actions for an app or integration, for example Slack or Jira", "A table"], "a": 2, "e": "Spokes (IntegrationHub) group ready-made actions for a system."}, {"t": "Application automation", "q": "Where are application properties stored and how do you read them?", "o": ["sys_user, with g_user", "sys_email, with gs.eventQueue()", "incident, with current", "sys_properties, with gs.getProperty()"], "a": 3, "e": "Properties live in sys_properties and are read with gs.getProperty('name', default)."}, {"t": "Application automation", "q": "What is a Script Include mainly used for?", "o": ["Reusable server-side code such as classes and functions", "Styling forms", "Importing CSV files", "Sending SMS only"], "a": 0, "e": "Script Includes hold reusable server code that other scripts call."}, {"t": "Application automation", "q": "Which record runs a script automatically on a schedule, for example every night?", "o": ["Client script", "Scheduled Script Execution (scheduled job)", "Record producer", "UI policy"], "a": 1, "e": "Scheduled jobs run server scripts at the chosen time and interval."}, {"t": "Application automation", "q": "A notification should be sent when a custom event fires. What do you set on the notification?", "o": ["A client script", "A UI policy", "When to send: Event is fired, with the event name", "A transform map"], "a": 2, "e": "Notifications can trigger on record changes or when a registered event fires."}, {"t": "Working with external data", "q": "Which record processes incoming emails, for example to update a ticket from a reply?", "o": ["UI action", "Outbound REST message", "ACL", "Inbound email action"], "a": 3, "e": "Inbound email actions read incoming mail and create or update records."}, {"t": "Working with external data", "q": "You want external systems to call a custom endpoint in your app. What do you build?", "o": ["Scripted REST API", "UI policy", "Outbound REST Message", "Client script"], "a": 0, "e": "Scripted REST APIs create inbound endpoints with your own logic."}, {"t": "Working with external data", "q": "Which transform map script runs before each row is transformed?", "o": ["onSubmit", "onBefore", "onLoad", "onComplete"], "a": 1, "e": "onBefore runs for each row before it is written; onComplete runs once at the end."}, {"t": "Working with external data", "q": "How can ServiceNow reach systems inside a private company network?", "o": ["Through g_scratchpad", "It cannot", "Through a MID Server", "Through a UI policy"], "a": 2, "e": "A MID Server runs inside the network and handles integrations and discovery."}, {"t": "Managing applications", "q": "Which is a way to move a scoped application to another instance?", "o": ["Copy the browser cache", "Export the CSS", "Email the tables", "Publish it to the application repository or Store, or use source control"], "a": 3, "e": "Scoped apps are delivered through the app repository, the Store, update sets or source control."}, {"t": "Managing applications", "q": "Why link an application to a Git repository?", "o": ["To track versions and work in branches with source control", "To create ACLs automatically", "To speed up the form", "To delete old records"], "a": 0, "e": "Source control integration keeps app versions and supports team development."}, {"t": "Managing applications", "q": "What are application files?", "o": ["User passwords", "The records that make up an app, such as tables, scripts and forms", "Excel imports", "Email attachments"], "a": 1, "e": "Every configuration record of the app is an application file tracked in its scope."}, {"t": "Managing applications", "q": "What should you do before you publish a new app version?", "o": ["Delete all ACLs", "Remove the scope", "Run your ATF tests and review the app", "Turn off all business rules"], "a": 2, "e": "Test with ATF and review changes before publishing a version."}, {"t": "Managing applications", "q": "In ATF, what is a test suite?", "o": ["A role", "A business rule", "A single form field", "A group of tests that run together"], "a": 3, "e": "Test suites group tests so you can run them in one go, for example after an upgrade."}]};

/* ServiceNow CAD: one 5-question quiz per lesson (from the lesson videos, timestamps point to the video) */
QUIZZES["servicenow.2.1"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.1 · Application Design, Scope & Modules", "items": [{"q": "What should you understand BEFORE opening ServiceNow Studio or App Engine Studio?", "o": ["Which theme and colours the application will use", "How many modules the application will have", "Who has the problem, what they want to achieve, what must be recorded and what happens after submission", "Which JavaScript libraries you will use"], "a": 2, "e": "Every useful application starts with a problem, not with a script. (video 0:04)"}, {"q": "Which kind of application is NOT a natural fit for ServiceNow?", "o": ["A graphics-heavy game", "A process with tasks and notifications", "A process that needs access control and integrations", "An equipment request process with approvals"], "a": 0, "e": "ServiceNow suits processes with records, tasks, approvals, notifications, access control and integrations. A graphics-heavy game is not a natural fit. (video 0:46)"}, {"q": "What does application scope control?", "o": ["What each user is allowed to read and write", "How often scheduled jobs run", "The colour of the application menu", "The boundary around application artifacts and access between applications"], "a": 3, "e": "Scope organizes development, avoids naming conflicts and controls interactions between applications. Roles and ACLs decide what users can do. (video 1:17, 1:44)"}, {"q": "What is a module?", "o": ["A navigation entry that opens a list, form or application function", "The table where records are stored", "A type of Business Rule", "A security rule for a field"], "a": 0, "e": "The module is not where the data is stored. The table stores the records, and the module gives users a way to reach them. (video 2:05)"}, {"q": "What is the recommended approach for the first version of an application?", "o": ["Add every feature users might want later", "Keep it small and build only what is needed to complete the process", "Start with the reports, then add tables", "Copy another application and change the labels"], "a": 1, "e": "Extra features increase complexity and create more things to test and maintain. (video 2:51)"}]};
QUIZZES["servicenow.2.2"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.2 · Data Models, Tables & Relationships", "items": [{"q": "In ServiceNow, what is a record?", "o": ["A list of tables", "A navigation module", "A column in a table", "One individual entry in a table"], "a": 3, "e": "A table defines the type of information, a record is one entry in that table, and fields are the properties that describe the record. (video 0:19)"}, {"q": "Which field type points to a record in another table?", "o": ["Choice", "String", "Reference", "Integer"], "a": 2, "e": "A reference field points to a record in another table. (video 0:52)"}, {"q": "Why is a reference to the User table usually better than typing the employee's name as text?", "o": ["Text fields cannot be shown on forms", "It connects the request to the user record and avoids copying data that can become outdated", "Reference fields are faster to type", "Text fields cannot be reported on"], "a": 1, "e": "If the employee changes their name, old text values become outdated, and copying email, department and manager duplicates data that already exists. (video 1:15)"}, {"q": "One employee can submit many equipment requests. What type of relationship is this?", "o": ["One-to-one", "No relationship", "One-to-many", "Many-to-many"], "a": 2, "e": "One employee to many requests is a one-to-many relationship. (video 1:44)"}, {"q": "What does table extension mean?", "o": ["A table gets more rows", "Two tables are merged into one", "A child table inherits fields and behaviour from a parent table", "A table is copied to another instance"], "a": 2, "e": "A child table inherits fields and behaviour from a parent table. Do not extend a table just because you can. (video 2:08)"}]};
QUIZZES["servicenow.2.3"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.3 · Forms, Lists, UI Actions & Record Producers", "items": [{"q": "What is the main difference between a list and a form?", "o": ["Forms cannot be configured", "Lists are only for administrators", "A list shows multiple records and a form shows one record", "A list shows one record and a form shows many"], "a": 2, "e": "A list displays multiple records from a table. A form displays one record. (video 0:18, 0:37)"}, {"q": "Why is hiding a field on a form NOT a security control?", "o": ["Forms cannot hide fields", "Hidden fields are visible to everyone in reports only", "Hidden fields are deleted from the table", "A user might still reach the data through another interface or API, so ACLs must enforce access"], "a": 3, "e": "Hiding a field is not security. Use ACLs to enforce access. (video 0:52)"}, {"q": "What does a UI Action add?", "o": ["A scheduled job", "A new table", "A button, link or context-menu option", "A new user role"], "a": 2, "e": "A UI Action adds an action such as a button, link or context-menu option. Important rules must still be enforced on the server. (video 1:24)"}, {"q": "What does a Record Producer do?", "o": ["Gives a catalog-style interface that creates a record in a target table", "Exports records to Excel", "Sends email notifications", "Deletes old records"], "a": 0, "e": "A Record Producer lets users submit information without exposing the full table form. (video 1:50)"}, {"q": "What is the most important part when building a Record Producer?", "o": ["Using technical field names in labels", "Adding as many questions as possible", "Mapping each variable to the correct target field", "Choosing a nice icon"], "a": 2, "e": "If a variable is not mapped correctly, the record may be created without the information the team needs. (video 2:17)"}]};
QUIZZES["servicenow.2.4"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.4 · Client Scripts, g_form & g_user", "items": [{"q": "When does an onChange Client Script run?", "o": ["When the value of a particular field changes", "When the form is submitted", "When the form loads", "Every night at midnight"], "a": 0, "e": "onLoad runs when the form loads, onChange when a field value changes, onSubmit when the user submits the form. (video 0:19)"}, {"q": "Which Client Script type can allow or prevent a form submission?", "o": ["onSubmit", "onLoad", "onDisplay", "onChange"], "a": 0, "e": "An onSubmit script runs when the user submits the form and can allow or prevent submission. (video 0:19)"}, {"q": "Which g_form method makes a field required?", "o": ["setVisible", "getValue", "setMandatory", "setValue"], "a": 2, "e": "getValue reads, setValue changes, setMandatory makes required, setReadOnly controls editing, setVisible controls display. (video 1:03)"}, {"q": "In a Client Script, which names should you use for fields?", "o": ["The actual internal field names from the table", "Any name, ServiceNow will find the field", "The labels shown to the user", "The module names"], "a": 0, "e": "The script should use the actual internal field names from your table, not the labels. (video 1:35)"}, {"q": "Why must important validation also happen on the server?", "o": ["Client Scripts cannot read field values", "Data can arrive through an API or another route that skips the form script", "Client Scripts are slower", "Server scripts are easier to write"], "a": 1, "e": "Client-side validation improves usability but does not replace server-side validation. (video 2:18)"}]};
QUIZZES["servicenow.2.5"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.5 · Business Rules & GlideRecord", "items": [{"q": "A new Equipment Request has no state. Which Business Rule can set it to Submitted before it is saved?", "o": ["A before insert rule", "An async rule", "A display rule", "An after insert rule"], "a": 0, "e": "A before Business Rule runs before the database operation, so it can validate or set values before saving. (video 0:38)"}, {"q": "Which Business Rule runs in the background so the user is not blocked?", "o": ["Before", "After", "Display", "Asynchronous (async)"], "a": 3, "e": "An asynchronous Business Rule runs in the background for follow-up work that does not need to block the user. (video 0:57)"}, {"q": "What is GlideRecord?", "o": ["A type of ACL", "A reporting tool", "A server-side API for querying and manipulating records", "A client-side form API"], "a": 2, "e": "You create a GlideRecord for a table, add conditions, run the query and process the returned records. (video 1:22)"}, {"q": "Why should GlideRecord queries always use clear conditions?", "o": ["Queries without conditions are not allowed", "An unfiltered query may return a very large number of records and create unnecessary load", "Conditions are needed to show the form", "Conditions make the script shorter"], "a": 1, "e": "Always use clear conditions; unfiltered queries can create unnecessary load. (video 1:38)"}, {"q": "What risk comes from an after Business Rule that updates the same record?", "o": ["The record is deleted", "Nothing, it is always safe", "It can trigger another update and run again and again", "The form stops loading"], "a": 2, "e": "Updating the same record in an after rule can cause repeated execution if the logic is not designed correctly. (video 2:01)"}]};
QUIZZES["servicenow.2.6"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.6 · Application Security & Access Control Lists (ACLs)", "items": [{"q": "What does the principle of least privilege mean?", "o": ["Give every user admin to avoid problems", "Remove all roles from users", "Give access only to managers", "Give each user only the access needed for their responsibilities"], "a": 3, "e": "Give each user only the access required for their responsibilities. (video 0:17)"}, {"q": "Which are common operations an ACL controls?", "o": ["Login and logout", "Print, copy and paste", "Import and export only", "Create, read, write and delete"], "a": 3, "e": "An ACL controls access to a table, record or field for an operation such as create, read, write or delete. (video 0:40)"}, {"q": "A field contains sensitive information. What protects it?", "o": ["Hiding it on the form", "Renaming the field", "A field-level ACL", "Moving it to the bottom of the form"], "a": 2, "e": "Hiding a field on the form is not enough. The ACL must protect the data itself. (video 1:26)"}, {"q": "Why must you test security with non-admin test accounts?", "o": ["Test accounts are faster", "ACLs only apply on weekends", "Administrators often have broad access and do not see the restrictions ordinary users face", "Admin accounts cannot open forms"], "a": 2, "e": "Do not test security only as an administrator. (video 2:24)"}, {"q": "A user cannot open a record they should see. What is the right fix?", "o": ["Give the user admin", "Hide the record from everyone", "Find the exact missing role or ACL condition", "Delete the ACL"], "a": 2, "e": "Do not fix access by granting everyone admin. Inspect active status, roles, groups, table and field ACLs, conditions and scripts. (video 2:24, 2:41)"}]};
QUIZZES["servicenow.2.7"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.7 · Scope, Cross-Scope Access & GlideSystem", "items": [{"q": "What is cross-scope access?", "o": ["An application using an artifact that belongs to another application scope", "Logging in to two instances", "Copying records between tables", "A user opening two forms at once"], "a": 0, "e": "For example, the Equipment Request app calling a Script Include owned by a separate inventory application. (video 0:21)"}, {"q": "An operation is blocked by scope. What should you do first?", "o": ["Delete the target artifact", "Enable broad access for all applications", "Identify the source application, target artifact and exact operation, then grant only what is needed", "Give all users the admin role"], "a": 2, "e": "Do not immediately enable broad access. Grant only the access that is necessary. (video 0:44)"}, {"q": "How are cross-scope access and ACLs different?", "o": ["ACLs only work in the global scope", "Cross-scope access controls user passwords", "Cross-scope access is application-to-application; ACLs control whether a user can access records or fields", "They are the same thing"], "a": 2, "e": "A user's role does not let an application cross a scope boundary, and app access does not give every user access to the data. (video 1:25)"}, {"q": "How is GlideSystem commonly referenced in server-side scripts?", "o": ["gr", "gs", "g_form", "g_user"], "a": 1, "e": "GlideSystem is commonly accessed through the gs object in server-side scripts. (video 1:56)"}, {"q": "Can a role check in a script replace an ACL?", "o": ["No, use ACLs to enforce access to records and fields", "Only in scoped applications", "Yes, always", "Only for read operations"], "a": 0, "e": "A role check in a script is not a replacement for a properly configured ACL. (video 2:24)"}]};
QUIZZES["servicenow.2.8"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.8 · Flow Designer & Workflow Automation", "items": [{"q": "What does a trigger do in Flow Designer?", "o": ["Determines when a flow starts", "Ends a flow", "Stores the flow's data", "Performs the steps of the flow"], "a": 0, "e": "A trigger determines when a flow starts, for example when a new Equipment Request is created. Actions are the steps. (video 0:19)"}, {"q": "Some requests need approval and others do not. What sends each request down the right path?", "o": ["A condition (branch)", "A UI Action", "A data pill", "A module"], "a": 0, "e": "A condition can send each request through the correct path. (video 0:42)"}, {"q": "What is a data pill?", "o": ["An error message", "A reusable flow", "A way to pass information from the trigger and earlier actions into later steps", "A type of approval"], "a": 2, "e": "A data pill may contain a field value, a reference or another type of data. (video 1:03)"}, {"q": "Why use a subflow?", "o": ["To replace triggers", "To make one flow run faster", "To reuse the same automation steps across several flows", "To hide a flow from users"], "a": 2, "e": "A reusable subflow with defined inputs and outputs makes changes easier to maintain. (video 1:29)"}, {"q": "A flow is active. Does that prove it works?", "o": ["No, flows never work the first time", "No, you must test every path: approved, rejected and no approval needed", "Yes, active means tested", "Yes, if it has a trigger"], "a": 1, "e": "A flow being active does not prove that it works correctly. Test every path. (video 2:13)"}]};
QUIZZES["servicenow.2.9"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.9 · Application Properties, Events & Scheduled Jobs", "items": [{"q": "What problem do Application Properties solve?", "o": ["They store user passwords", "They schedule jobs", "They hold configurable values so admins can change settings without editing scripts", "They replace tables"], "a": 2, "e": "A hard-coded value means editing and testing every script; a property can be changed without changing the script. (video 0:17)"}, {"q": "Where should API tokens and passwords be stored?", "o": ["In an ordinary application property", "In the record's description field", "In approved credential and secret-management mechanisms", "In a Client Script"], "a": 2, "e": "Do not store passwords, API tokens or other secrets in ordinary application properties. (video 0:40)"}, {"q": "What is an Event?", "o": ["A type of table", "A scheduled report", "A signal that something happened, which another part of the platform can respond to", "A form layout"], "a": 2, "e": "For example, when a request is approved, a script may queue an event, and a handler or notification responds. (video 0:56)"}, {"q": "How is a Scheduled Job different from a record-triggered flow?", "o": ["Record-triggered flows run every night", "There is no difference", "Scheduled jobs only run once", "A scheduled job starts at its configured time; a record-triggered flow starts when a record event occurs"], "a": 3, "e": "Choose the feature that matches the requirement. (video 1:33)"}, {"q": "Which practice keeps scheduled jobs safe?", "o": ["Never log anything", "Query the whole table every minute", "Run them as often as possible", "Use filters, limit the work, make them safe to run more than once, and log outcomes"], "a": 3, "e": "A job that runs too often or queries a huge table can affect performance. (video 1:47)"}]};
QUIZZES["servicenow.2.10"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.10 · Script Includes & Reusable Utilities", "items": [{"q": "What does a Script Include provide?", "o": ["A navigation module", "Reusable server-side JavaScript that other server-side scripts can call", "A new form layout", "A client-side validation rule"], "a": 1, "e": "A Script Include can contain functions or classes that other server-side scripts call. (video 0:24)"}, {"q": "Why use a Script Include instead of copying logic into many Business Rules?", "o": ["It avoids duplication, so a change is made in one place", "Copies run faster", "Business Rules cannot run JavaScript", "Script Includes do not need testing"], "a": 0, "e": "Copying logic means you must remember to update every copy when the requirement changes. (video 0:04, 0:46)"}, {"q": "Which is a sign of a good utility function?", "o": ["It updates records whenever it is called", "Hidden side effects such as sending emails", "It ignores missing values", "A clear purpose, meaningful names, defined inputs and predictable outputs"], "a": 3, "e": "A function that sounds like a check should not unexpectedly update records or send emails. (video 1:07)"}, {"q": "Why is client-callable access sensitive?", "o": ["It only works in global scope", "Exposing a server-side function more widely can create a security risk", "Client-callable scripts cannot return values", "It makes the script slower"], "a": 1, "e": "Validate inputs and return only information the caller is allowed to receive. (video 1:27, 1:49)"}, {"q": "A Script Include cannot be called. What should you check?", "o": ["The theme of the instance", "That it is active, the name is correct, the scope is right and the access settings allow the call", "The email server", "Only the form layout"], "a": 1, "e": "If it is client-callable, also confirm it uses the supported client-callable pattern. (video 2:06)"}]};
QUIZZES["servicenow.2.11"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.11 · Sending & Receiving Email", "items": [{"q": "What does an outbound notification define?", "o": ["When a message is sent, who receives it and what it contains", "How inbound emails are filtered", "Which users can log in", "Only the subject line"], "a": 0, "e": "A notification defines when, who and what. (video 0:19)"}, {"q": "A user needs protected details. What should the email do?", "o": ["Direct the user to sign in to ServiceNow", "Attach the full record as a file", "Include all the sensitive details in the body", "Send the details to the whole group"], "a": 0, "e": "Avoid placing sensitive information in the email body. (video 1:03)"}, {"q": "What can inbound email processing do?", "o": ["Only delete emails", "Send outbound notifications only", "Change user passwords automatically", "Use the sender, subject and body to create or update a record"], "a": 3, "e": "A message arrives and ServiceNow may use its sender, subject and body to create or update a record. (video 1:20)"}, {"q": "Why is inbound email treated as untrusted input?", "o": ["Inbound email is encrypted", "Arriving at a company mailbox does not make it safe; sender and content must be validated", "It is always spam", "ServiceNow cannot read email"], "a": 1, "e": "Do not allow an arbitrary email to approve an expensive request or change sensitive information. (video 1:37)"}, {"q": "A notification email did not arrive. What should you check FIRST?", "o": ["Whether the notification condition was met", "The user's password", "The import set", "The form layout"], "a": 0, "e": "Then check the recipient, whether the email record was generated, and whether delivery was blocked or failed. (video 1:56)"}]};
QUIZZES["servicenow.2.12"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.12 · Importing CSV & Excel Data", "items": [{"q": "What is an import set?", "o": ["A type of report", "The final application table", "A staging area where incoming rows are loaded before they reach the target table", "A user group"], "a": 2, "e": "This gives the developer a chance to inspect and transform the data. (video 0:25)"}, {"q": "What does a Transform Map do?", "o": ["Deletes duplicate users", "Creates a new instance", "Defines how staged data moves into the target table", "Sends email"], "a": 2, "e": "Field maps inside it connect source columns to target fields. (video 0:43)"}, {"q": "What does coalesce help determine?", "o": ["Whether an incoming row matches an existing record, so it can update instead of creating a duplicate", "Which users can import", "The colour of the imported records", "How many rows the file has"], "a": 0, "e": "It is only safe when the coalesce field is a reliable, unique identifier. (video 1:04)"}, {"q": "What is true about Auto Map Matching Fields?", "o": ["It only works with Excel", "It deletes unmatched fields", "It guarantees every mapping is correct", "It is a convenience; you must still review every mapping"], "a": 3, "e": "It is a convenience, not a guarantee. (video 1:24)"}, {"q": "Why start with a small sample import?", "o": ["To skip the Transform Map", "Small imports are free", "To verify the result, transform history and errors before importing a larger dataset", "Large files are not supported"], "a": 2, "e": "Import a few fictional records, verify, then consider a larger dataset. (video 1:57)"}]};
QUIZZES["servicenow.2.13"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.13 · REST APIs & External Integrations", "items": [{"q": "Which HTTP method is commonly used to retrieve information?", "o": ["DELETE", "GET", "POST", "PATCH"], "a": 1, "e": "GET retrieves information; POST creates a resource or submits data. (video 0:47)"}, {"q": "Which of these is part of a REST request?", "o": ["Table, record and field", "Endpoint, HTTP method, headers and body", "Trigger, action and data pill", "Form, list and module"], "a": 1, "e": "The endpoint identifies the resource, the method the action, headers the metadata, and the body the data. (video 0:26)"}, {"q": "What does a 4xx response generally indicate?", "o": ["A slow network only", "A server-side problem", "Success", "A problem with the request or authorization"], "a": 3, "e": "2xx is success, 4xx points to the request or authorization, 5xx to a server-side problem. (video 1:18)"}, {"q": "Where should integration passwords, client secrets and tokens be kept?", "o": ["In the request body of every call", "In approved credential storage, using least-privilege integration accounts", "Directly in scripts", "In an email to the developer"], "a": 1, "e": "Never place passwords, client secrets or tokens directly in scripts. (video 1:51)"}, {"q": "Why be careful when retrying a POST that creates records?", "o": ["POST deletes data", "Retries always fail", "If the first request succeeded but the response was lost, a retry may create a duplicate", "POST cannot be retried"], "a": 2, "e": "Use idempotency or duplicate-prevention mechanisms when the API supports them. (video 3:04)"}]};
QUIZZES["servicenow.2.14"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.14 · Testing, Debugging & Troubleshooting", "items": [{"q": "Where should test cases come from?", "o": ["Only the error log", "Random clicks in the instance", "The business requirements, turned into test cases", "The list of modules"], "a": 2, "e": "Start with the business requirements and turn each one into a test case. (video 0:23)"}, {"q": "Which is an edge case you should test?", "o": ["A required field left empty or an approval that is rejected", "Opening the home page", "Only the normal path", "Changing the instance theme"], "a": 0, "e": "Test the normal path and edge cases: empty fields, invalid values, rejection, missing approver, unavailable integration, missing permission. (video 0:48)"}, {"q": "What is regression testing?", "o": ["Testing only new features", "Checking that a change has not broken something that worked before", "Testing with real customer data", "Testing only as an administrator"], "a": 1, "e": "ServiceNow's Automated Test Framework (ATF) can automate repeatable regression tests. (video 2:09)"}, {"q": "A flow fails. What should you inspect?", "o": ["Only the module name", "The user's profile picture", "Its execution details, to find the exact action that failed", "Nothing, recreate the flow"], "a": 2, "e": "For a flow, inspect its execution details and identify the exact action that failed. (video 1:24)"}, {"q": "Which is part of a good debugging process?", "o": ["Skip retesting if the error disappears", "Reproduce the problem, compare expected vs actual, change one thing at a time, retest and document", "Test only as admin", "Change many things at once to save time"], "a": 1, "e": "A good debugging process is structured. (video 2:34)"}]};
QUIZZES["servicenow.2.15"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.15 · Managing, Reviewing & Delivering Applications", "items": [{"q": "What should you review before installing an application?", "o": ["Nothing if it comes from a colleague", "Only the number of tables", "Only its name", "Its source, version, dependencies, compatibility and permissions"], "a": 3, "e": "Do not install unknown applications into a production environment. (video 0:23)"}, {"q": "What does Delegated Development allow?", "o": ["Automatic deployment to production", "Everyone gets unrestricted admin", "Developers can skip code review", "Controlled development responsibilities without giving everyone unrestricted admin access"], "a": 3, "e": "A delegated developer should receive only the access needed for the assigned application and tasks. (video 0:43)"}, {"q": "In Git, what is a branch?", "o": ["A deleted file", "A record of one set of changes", "A conflict between two changes", "A separate line of development"], "a": 3, "e": "A commit records a set of changes, a branch is a separate line of development, a merge conflict happens when changes cannot be combined automatically. (video 1:27)"}, {"q": "What might a code reviewer check in the Equipment Request app?", "o": ["Input validation, filtered GlideRecord queries, ACLs that grant too much, and rejection handling in flows", "The number of modules", "The colour of the buttons", "Only spelling in labels"], "a": 0, "e": "A reviewer examines changes for correctness, security, performance and maintainability. (video 1:03)"}, {"q": "The app worked in development. Is it safe to skip testing after deploying to another instance?", "o": ["Only if it has no flows", "Yes, it already passed", "No, configuration can differ between instances, so verify again", "Yes, if Git was used"], "a": 2, "e": "A successful test in development does not guarantee that deployment will work everywhere. (video 2:27)"}]};
QUIZZES["servicenow.2.x1"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.E1 · Understanding the CAD Exam", "items": [{"q": "How many domains are in the CAD exam blueprint (January 2026)?", "o": ["Five", "Six", "Four", "Eight"], "a": 1, "e": "The exam is divided into six domains. (video 0:51)"}, {"q": "Which domains are each worth 20 percent?", "o": ["Working with External Data and Managing Applications", "Designing and Creating an Application, Application User Interface, Security and Restricting Access, Application Automation", "All six domains are 20 percent", "Only Security and Restricting Access"], "a": 1, "e": "The first four domains are 20 percent each (80 percent together); External Data and Managing Applications are 10 percent each. (video 0:51, 2:25)"}, {"q": "How many questions and how much time does the exam have?", "o": ["50 questions, 60 minutes", "100 questions, 90 minutes", "60 questions, 90 minutes", "75 questions, 120 minutes"], "a": 2, "e": "The January 2026 blueprint states 60 questions and 90 minutes. (video 2:39)"}, {"q": "In a multiple-select question, what happens if you choose only some of the correct answers?", "o": ["No partial credit; you must select all correct responses", "You get half the points", "You get partial credit", "The question is skipped"], "a": 0, "e": "You must select all correct responses; partial credit is not provided. (video 2:39)"}, {"q": "Does ServiceNow publish a fixed passing percentage?", "o": ["Yes, it is 80 percent", "No, your score is compared with a cut score that is not publicly shared", "Yes, it is always 70 percent", "Yes, it is 50 percent"], "a": 1, "e": "Do not assume that 70 percent is always the passing score. (video 3:03)"}]};
QUIZZES["servicenow.2.x2"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.E2 · CAD Exam Objectives Checklist", "items": [{"q": "Which domain includes Record Producers?", "o": ["Designing and Creating an Application", "Application Automation", "Managing Applications", "Application User Interface"], "a": 3, "e": "Domain two, Application User Interface, includes forms, Client Scripts, server-side scripts and Record Producers. (video 0:54)"}, {"q": "Which domain includes ACLs and GlideSystem security methods?", "o": ["Application User Interface", "Application Automation", "Security and Restricting Access", "Working with External Data"], "a": 2, "e": "Domain three, Security and Restricting Access (20 percent). (video 1:20)"}, {"q": "Which domain includes Events and Scheduled Script Executions?", "o": ["Designing and Creating an Application", "Application Automation", "Managing Applications", "Working with External Data"], "a": 1, "e": "Domain four, Application Automation, also includes Flow Designer, Application Properties, Script Includes and email. (video 1:44)"}, {"q": "Which domain includes REST integration and importing CSV/Excel data?", "o": ["Security and Restricting Access", "Working with External Data", "Managing Applications", "Application User Interface"], "a": 1, "e": "Domain five, Working with External Data (10 percent). (video 2:08)"}, {"q": "Which domain includes Delegated Development and Git integration?", "o": ["Application Automation", "Managing Applications", "Working with External Data", "Designing and Creating an Application"], "a": 1, "e": "Domain six, Managing Applications (10 percent), also covers downloading and installing applications. (video 2:30)"}]};
QUIZZES["servicenow.2.x5"] = {"type": "mcq", "color": "#62d84e", "title": "Quiz · Lesson 2.E5 · Booking the Exam & Exam Day Tips", "items": [{"q": "According to the January 2026 blueprint, how long do you have after registration to schedule and complete the exam?", "o": ["60 days", "90 days", "One year", "30 days"], "a": 1, "e": "After registration you have 90 days to schedule and complete the exam, and fees are non-refundable. (video 1:14)"}, {"q": "Which two delivery options does the blueprint describe?", "o": ["Email exam or phone exam", "Only at a ServiceNow office", "Only online, without a proctor", "A Pearson test centre or online proctoring through OnVUE"], "a": 3, "e": "Always follow the current instructions in your ServiceNow University account. (video 1:39)"}, {"q": "With 60 questions in 90 minutes, what is the average time per question?", "o": ["About three minutes", "About 30 seconds", "About five minutes", "About one and a half minutes"], "a": 3, "e": "Scenario-based questions may take longer, so manage your time. (video 2:00)"}, {"q": "A question asks how to respond immediately when a field changes on a form. Which feature should you think of?", "o": ["A scheduled job", "An onChange Client Script", "An inbound email action", "A Transform Map"], "a": 1, "e": "For enforcing access to a record, think about ACLs rather than hiding a field. (video 2:38)"}, {"q": "What do certified developers need to do each year to keep the certification?", "o": ["Pass annual maintenance exams (deltas) and pay the Certification Maintenance Program fee", "Build a new application", "Nothing, it never expires", "Retake the full CAD exam"], "a": 0, "e": "Confirm the latest requirements in ServiceNow University. (video 3:39)"}]};

/* ITIL Foundation (Version 5): one 3-question quiz per lesson */
QUIZZES["itil.0.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 0.1 · What Is IT Service Management", "items": [{"q": "What is a service?", "o": ["A device the customer buys and owns", "A software tool used by the IT department", "A contract between two companies", "A way of helping someone get the results they want without managing the costs and risks themselves"], "a": 3, "e": "A service lets the consumer get outcomes while the provider handles specific costs and risks."}, {"q": "Who receives a service?", "o": ["The service provider", "The governing body", "The service consumer", "The supplier"], "a": 2, "e": "The provider delivers the service, and the consumer receives it."}, {"q": "What does IT service management do?", "o": ["It replaces the IT department", "It designs, delivers, manages and improves services so technology creates value", "It only fixes broken computers", "It only buys new hardware"], "a": 1, "e": "ITSM covers the whole journey of a service, not just repairs."}]};
QUIZZES["itil.0.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 0.2 · What Is ITIL", "items": [{"q": "What is ITIL?", "o": ["A programming language", "A strict legal standard", "Best-practice guidance for managing products and services", "A software product"], "a": 2, "e": "ITIL is guidance, not software and not a strict standard."}, {"q": "How should an organization use ITIL?", "o": ["Use it only for hardware", "Adapt the guidance to its own needs", "Copy every page exactly", "Use it only when there is an outage"], "a": 1, "e": "ITIL is meant to be adapted, not copied word for word."}, {"q": "Which is a benefit of ITIL?", "o": ["Free software licenses", "A common language across teams", "Guaranteed zero incidents", "No need for any people"], "a": 1, "e": "Benefits include a common language, better quality, lower cost, controlled risk and continual improvement."}]};
QUIZZES["itil.0.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 0.3 · Why Companies Use ITIL", "items": [{"q": "Which is one of the four main reasons companies choose ITIL?", "o": ["To remove all processes", "To buy more servers", "Consistency, so the experience is the same every time", "To avoid talking to users"], "a": 2, "e": "The four reasons are service quality, consistency, efficiency and business value."}, {"q": "What does efficiency mean here?", "o": ["Less time and money wasted", "More approvals for every task", "Bigger IT budgets", "More meetings"], "a": 0, "e": "Efficiency means doing the work with less waste."}, {"q": "Why does business value matter?", "o": ["IT should help the business reach its goals", "Only the IT manager should benefit", "It does not matter", "IT should work alone"], "a": 0, "e": "ITIL links IT work to business goals."}]};
QUIZZES["itil.0.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 0.4 · ITIL Evolution", "items": [{"q": "When did ITIL start?", "o": ["In 2026", "In the 1960s", "In 2019", "In the 1980s, as a library of best practices"], "a": 3, "e": "ITIL began in the 1980s as a library of best-practice books."}, {"q": "What did ITIL 4 introduce?", "o": ["The service value system and agile thinking", "Only hardware guidance", "Nothing new", "The first ITIL book"], "a": 0, "e": "ITIL 4 brought the value system and modern ways of working."}, {"q": "Which is new in ITIL Version 5?", "o": ["Products, a new lifecycle, value streams and AI", "Dropping the value system", "Removing all guiding principles", "Only a new logo"], "a": 0, "e": "Version 5 adds products, the product and service lifecycle, value streams and AI."}]};
QUIZZES["itil.1.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.1 · Products and Services", "items": [{"q": "What is a product?", "o": ["A possible event that could cause harm", "A result for a stakeholder", "A contract", "A configuration of an organization's resources designed to offer value for a consumer"], "a": 3, "e": "This is the ITIL definition of a product."}, {"q": "What is a digital product?", "o": ["Any paper document", "A free product", "A product with no users", "A product built and delivered with digital technology"], "a": 3, "e": "Digital products are built and delivered with digital technology."}, {"q": "A service enables value co-creation by facilitating outcomes without the customer managing what?", "o": ["Their own users", "Their requirements", "Specific costs and risks", "Their budget"], "a": 2, "e": "The provider takes on specific costs and risks for the consumer."}]};
QUIZZES["itil.1.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.2 · Service Offerings", "items": [{"q": "What is a service offering?", "o": ["A single incident", "A team of engineers", "A description of one or more services designed for a target consumer group", "A software license only"], "a": 2, "e": "An offering packages services for a target group."}, {"q": "A new laptop given to an employee, who now owns it, is an example of:", "o": ["A service action", "Goods", "Access to resources", "A risk"], "a": 1, "e": "With goods, ownership is transferred to the consumer."}, {"q": "Using cloud storage that you do not own is an example of:", "o": ["Goods", "An output", "Access to resources", "A sponsor"], "a": 2, "e": "With access to resources, ownership is not transferred."}]};
QUIZZES["itil.1.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.3 · Value and Value Co-Creation", "items": [{"q": "What is value in ITIL?", "o": ["The perceived benefits, usefulness and importance of something", "The size of the IT team", "The number of servers", "Only the price of a service"], "a": 0, "e": "Value is about perceived benefit, usefulness and importance."}, {"q": "Why is value called subjective?", "o": ["Only IT decides it", "It never changes", "It is always measured in money", "Different people can see different value in the same thing"], "a": 3, "e": "Value depends on who is looking at it."}, {"q": "How is value created?", "o": ["By the consumer alone", "Through active collaboration between providers, consumers and others", "By the supplier alone", "By the provider alone"], "a": 1, "e": "Value is co-created, and both sides gain."}]};
QUIZZES["itil.1.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.4 · Service Consumers and Stakeholders", "items": [{"q": "Who authorizes budget for service consumption?", "o": ["The customer", "The user", "The sponsor", "The supplier"], "a": 2, "e": "The sponsor approves the money."}, {"q": "Who defines the requirements for a service and is responsible for its outcomes?", "o": ["The sponsor", "The customer", "The user", "The service desk"], "a": 1, "e": "That is the definition of a customer."}, {"q": "Which statement is correct?", "o": ["One person can never hold more than one role", "Sponsors always use the service", "One person can be customer, user and sponsor at the same time", "Users always pay for services"], "a": 2, "e": "One person can hold all three roles."}]};
QUIZZES["itil.1.5"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.5 · Outcomes, Outputs, Costs and Risks", "items": [{"q": "What is an output?", "o": ["A tangible or intangible deliverable of an activity", "A possible harmful event", "Money spent on a resource", "A result for a stakeholder"], "a": 0, "e": "An output is what an activity delivers."}, {"q": "What is an outcome?", "o": ["A risk", "A contract", "A result for a stakeholder, enabled by outputs", "A deliverable of an activity"], "a": 2, "e": "Outcomes are results for stakeholders."}, {"q": "Which statement about services is correct?", "o": ["They can both remove and impose costs and risks", "They never involve risk", "They only add risks", "They only remove costs"], "a": 0, "e": "Services remove some costs and risks and add others."}]};
QUIZZES["itil.1.6"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.6 · Utility and Warranty", "items": [{"q": "What is utility?", "o": ["How well a service works", "The service contract", "The functionality a service offers, making it fit for purpose", "The price of a service"], "a": 2, "e": "Utility is what the service does."}, {"q": "A service is available 99.9% of the time. This is part of:", "o": ["Sponsor", "Utility", "Outcome", "Warranty"], "a": 3, "e": "Availability is part of warranty, which makes a service fit for use."}, {"q": "What does a service need to create value?", "o": ["Neither", "Only utility", "Both utility and warranty", "Only warranty"], "a": 2, "e": "A service needs to be fit for purpose and fit for use."}]};
QUIZZES["itil.1.7"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.7 · Service Relationships", "items": [{"q": "What is a service relationship?", "o": ["A list of suppliers", "A legal dispute", "A single phone call", "A cooperation between a service provider and a service consumer"], "a": 3, "e": "This is the ITIL definition."}, {"q": "Running the platform and answering support tickets are part of:", "o": ["Sponsorship", "Service provision", "Service consumption", "Governance"], "a": 1, "e": "Provision is what the provider does to provide the service."}, {"q": "The joint activities that keep value co-creation going are called:", "o": ["Procurement", "Service consumption", "Service relationship management", "Incident management"], "a": 2, "e": "Service relationship management is the joint work of both sides."}]};
QUIZZES["itil.1.8"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 1.8 · Key ITIL Terminology Review", "items": [{"q": "In a question, the word 'assurance' usually points to:", "o": ["Warranty", "Utility", "Output", "Sponsor"], "a": 0, "e": "Assurance is a clue word for warranty."}, {"q": "The words 'result for a stakeholder' point to:", "o": ["Outcome", "Output", "Cost", "Product"], "a": 0, "e": "An outcome is a result for a stakeholder."}, {"q": "The word 'functionality' usually points to:", "o": ["Risk", "Utility", "Sponsor", "Warranty"], "a": 1, "e": "Functionality is a clue word for utility."}]};
QUIZZES["itil.2.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.1 · Introduction to the Four Dimensions", "items": [{"q": "Which is NOT one of the four dimensions?", "o": ["Partners and suppliers", "Marketing and sales", "Information and technology", "Organizations and people"], "a": 1, "e": "The fourth dimension is value streams and processes."}, {"q": "A bank buys a new telephone system. Which dimension is most directly involved?", "o": ["Organizations and people", "Partners and suppliers", "Information and technology", "Value streams and processes"], "a": 2, "e": "It is a technology change, but the other dimensions are still affected."}, {"q": "Why should all four dimensions be considered together?", "o": ["Because suppliers decide", "Because the exam says so", "Because only one matters", "Because a change in one usually affects the others"], "a": 3, "e": "The dimensions give a balanced, holistic view."}]};
QUIZZES["itil.2.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.2 · Organizations and People", "items": [{"q": "Which belongs to the organizations and people dimension?", "o": ["Culture and skills", "Supplier contracts", "Servers", "Workflow diagrams"], "a": 0, "e": "This dimension covers structure, roles, skills and culture."}, {"q": "This dimension is mainly about:", "o": ["The humans who make the service work", "The data center", "The contracts", "The technology"], "a": 0, "e": "It is about people and how they are organized."}, {"q": "What supports this dimension?", "o": ["Removing training", "Good leadership and communication", "Fewer roles", "More hardware"], "a": 1, "e": "Leadership and communication support culture and roles."}]};
QUIZZES["itil.2.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.3 · Information and Technology", "items": [{"q": "Which belongs to the information and technology dimension?", "o": ["Job roles", "Supplier contracts", "Corporate culture", "Knowledge articles and applications"], "a": 3, "e": "It covers information, knowledge and technology."}, {"q": "How should technology be chosen?", "o": ["By the cheapest price only", "Carefully, and always in support of value", "By one engineer alone", "Always the newest tool"], "a": 1, "e": "Technology should serve value."}, {"q": "Data security and privacy concerns belong mostly to:", "o": ["Organizations and people", "Value streams and processes", "Partners and suppliers", "Information and technology"], "a": 3, "e": "Managing information safely is part of this dimension."}]};
QUIZZES["itil.2.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.4 · Partners and Suppliers", "items": [{"q": "Which belongs to the partners and suppliers dimension?", "o": ["Contracts with vendors", "Knowledge articles", "Team culture", "A workflow diagram"], "a": 0, "e": "This dimension covers relationships with other organizations."}, {"q": "A bank needs extra agents only during busy holiday weeks. Which sourcing factor is the main reason to use a supplier?", "o": ["External constraints", "Strategic focus", "Corporate culture", "Demand patterns"], "a": 3, "e": "Suppliers can give flexible capacity when demand goes up and down."}, {"q": "If a question mentions vendors and contracts, which dimension is it pointing to?", "o": ["Information and technology", "Partners and suppliers", "Value streams and processes", "Organizations and people"], "a": 1, "e": "Vendors and contracts are clue words for partners and suppliers."}]};
QUIZZES["itil.2.5"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.5 · Value Streams and Processes", "items": [{"q": "A team draws every step from a customer reporting a lost card to the new card arriving. What are they mapping?", "o": ["A single process", "A contract", "A sponsor", "A value stream"], "a": 3, "e": "It is the end-to-end journey that creates value."}, {"q": "What is a process?", "o": ["A supplier", "A budget", "A job role", "A set of interrelated activities that turn inputs into outputs"], "a": 3, "e": "Processes transform inputs into outputs."}, {"q": "What does PESTLE describe?", "o": ["External factors that affect the four dimensions", "Internal team roles", "Exam question types", "Lifecycle activities"], "a": 0, "e": "Political, economic, social, technological, legal and environmental factors."}]};
QUIZZES["itil.3.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.1 · Understanding the Product and Service Lifecycle", "items": [{"q": "How many lifecycle activities does ITIL Version 5 describe?", "o": ["Four", "Ten", "Six", "Eight"], "a": 3, "e": "Discover, design, acquire, build, transition, operate, deliver and support."}, {"q": "A team says: we launched the service, so the lifecycle is finished. Is that right?", "o": ["Only for small services", "No, the service must still be operated, delivered, supported and improved", "Yes, it ends at launch", "Yes, unless there is an incident"], "a": 1, "e": "Most of a service's life happens after it goes live."}, {"q": "Which is the first lifecycle activity?", "o": ["Build", "Discover", "Transition", "Design"], "a": 1, "e": "Discover comes first: understand before building."}]};
QUIZZES["itil.3.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.2 · Discover", "items": [{"q": "What is discover mainly about?", "o": ["Understanding needs and opportunities before building", "Fixing incidents", "Writing contracts", "Installing laptops"], "a": 0, "e": "Discover is the listening part of the lifecycle."}, {"q": "A team starts buying laptops before talking to anyone. Which activity are they skipping?", "o": ["Transition", "Support", "Operate", "Discover"], "a": 3, "e": "Without discover, they do not know what people need."}, {"q": "Who should be involved in discover?", "o": ["Only the supplier", "Only the IT manager", "Nobody", "The stakeholders affected by the service"], "a": 3, "e": "Stakeholders explain their needs and how they see the problem."}]};
QUIZZES["itil.3.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.3 · Design", "items": [{"q": "Design covers:", "o": ["Only the contract", "Products, services and experiences", "Only the price", "Only the technology"], "a": 1, "e": "Design also covers how the experience feels."}, {"q": "Two services both deliver a laptop on day one, but in one people feel welcome and in the other confused. What is different?", "o": ["The supplier", "The laptop price", "The number of servers", "The experience"], "a": 3, "e": "Good design includes the experience, not only the output."}, {"q": "Which activity comes right after discover?", "o": ["Acquire", "Design", "Operate", "Support"], "a": 1, "e": "Needs found in discover are turned into a design."}]};
QUIZZES["itil.3.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.4 · Acquire and Build", "items": [{"q": "What does acquire mean?", "o": ["Writing the requirements", "Training users", "Obtaining resources from outside, like laptops and licenses", "Retiring a service"], "a": 2, "e": "Acquire gets what is needed from suppliers."}, {"q": "A cloud platform already offers the workflow you need. What is usually most sensible?", "o": ["Acquire the platform and configure it", "Use email only", "Do nothing", "Build everything from scratch"], "a": 0, "e": "Buying a standard part and configuring it is often faster and cheaper."}, {"q": "What happens in build?", "o": ["The service is retired", "The budget is approved", "The solution is created and configured", "Users are surveyed"], "a": 2, "e": "Build creates and configures the solution."}]};
QUIZZES["itil.3.5"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.5 · Transition", "items": [{"q": "What is the key word in transition?", "o": ["Safely", "Cheaply", "Secretly", "Quickly"], "a": 0, "e": "Transition moves new or changed services into live use safely."}, {"q": "Which helps a safe transition?", "o": ["Going live on a busy Friday with no way back", "Telling nobody", "A pilot, a rollback plan and a trained service desk", "Skipping testing"], "a": 2, "e": "Plan, test, prepare support and keep a way back."}, {"q": "What is a release?", "o": ["A complaint", "A version of a service made available for use", "An incident", "A contract"], "a": 1, "e": "Releases are planned and deployed carefully."}]};
QUIZZES["itil.3.6"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 3.6 · Operate, Deliver and Support", "items": [{"q": "An engineer patches the laptop image every month. Which activity is this?", "o": ["Discover", "Operate", "Support", "Deliver"], "a": 1, "e": "Operate keeps the technology and components running."}, {"q": "New starters receive a working laptop and access on day one. Which activity is this?", "o": ["Design", "Operate", "Support", "Deliver"], "a": 3, "e": "Deliver is users receiving the service and its value."}, {"q": "The service desk helps a user who cannot log in. Which activity is this?", "o": ["Deliver", "Acquire", "Operate", "Support"], "a": 3, "e": "Support helps users with issues and questions."}]};
QUIZZES["itil.4.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.1 · Introduction to the ITIL Value System", "items": [{"q": "What are the inputs to the ITIL value system?", "o": ["Governance", "Opportunity and demand", "Practices", "Value"], "a": 1, "e": "Opportunity and demand go in, value comes out."}, {"q": "What is the output of the value system?", "o": ["Contracts", "Value", "Risk", "Demand"], "a": 1, "e": "The system turns opportunity and demand into value."}, {"q": "Which is NOT one of the five components in the middle?", "o": ["Continual improvement", "The four dimensions", "Governance", "Guiding principles"], "a": 1, "e": "The five are guiding principles, governance, value chain, practices and continual improvement."}]};
QUIZZES["itil.4.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.2 · The Seven Guiding Principles", "items": [{"q": "What are the guiding principles?", "o": ["A software tool", "Recommendations that can guide an organization in all circumstances", "Strict rules that must always be followed", "Contract terms"], "a": 1, "e": "They are recommendations, and they work together."}, {"q": "How many guiding principles are there?", "o": ["Four", "Five", "Eight", "Seven"], "a": 3, "e": "There are seven guiding principles."}, {"q": "Which is a guiding principle?", "o": ["Start where you are", "Automate first", "Work in silos", "Build everything new"], "a": 0, "e": "Start where you are is principle 2."}]};
QUIZZES["itil.4.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.3 · Focus on Value", "items": [{"q": "Who decides whether a service creates value?", "o": ["The service provider", "The supplier", "The service consumer", "The IT manager"], "a": 2, "e": "Value is perceived by the consumer."}, {"q": "Which clue words point to focus on value?", "o": ["Reuse, observe", "Small steps, feedback", "Repetitive, manual", "Perceived, experience, who the service is for"], "a": 3, "e": "These words point to principle 1."}, {"q": "What should everything link back to?", "o": ["The biggest budget", "Value for stakeholders", "The IT org chart", "The newest tool"], "a": 1, "e": "Every activity should link back to value."}]};
QUIZZES["itil.4.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.4 · Start Where You Are", "items": [{"q": "A team wants to improve the incident process. What should they do first?", "o": ["Write a new process from scratch", "Fire the team", "Buy a new tool", "Observe how the current process works"], "a": 3, "e": "Start by seeing the current state directly."}, {"q": "Which words point to start where you are?", "o": ["Silos, shared goal", "Small steps, feedback", "Reuse, current state, observe directly", "Optimize first"], "a": 2, "e": "These are clue words for principle 2."}, {"q": "Why reuse what already works?", "o": ["Old things never work", "It is always cheaper to rebuild", "Reuse is not allowed", "It saves time and keeps what has value"], "a": 3, "e": "Do not throw away what already creates value."}]};
QUIZZES["itil.4.5"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.5 · Progress Iteratively with Feedback", "items": [{"q": "A team plans one 18-month project with no reviews until the end. Which principle does this ignore most?", "o": ["Progress iteratively with feedback", "Start where you are", "Focus on value", "Optimize and automate"], "a": 0, "e": "Work should be split into small steps with feedback."}, {"q": "What should happen after each small step?", "o": ["Collect feedback and adjust", "Stop the project", "Add more steps", "Hide the results"], "a": 0, "e": "Feedback guides the next step."}, {"q": "Which words point to this principle?", "o": ["Fewest steps", "Silos, visibility", "Reuse, observe", "Small steps, feedback loop, change direction"], "a": 3, "e": "These are clue words for principle 3."}]};
QUIZZES["itil.4.6"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.6 · Collaborate and Promote Visibility", "items": [{"q": "Which statement about collaboration is correct?", "o": ["Work should be hidden", "People work together toward a shared goal", "Everyone must agree", "One team owns all decisions"], "a": 1, "e": "Collaboration does not mean everyone agrees."}, {"q": "Why make work visible?", "o": ["To blame people", "So people can see problems and make better decisions", "It is not useful", "To create more reports nobody reads"], "a": 1, "e": "Visibility exposes hidden work and delays."}, {"q": "Which word points to this principle?", "o": ["Automate", "Simple", "Reuse", "Silos"], "a": 3, "e": "Breaking silos is about collaboration."}]};
QUIZZES["itil.4.7"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.7 · Think and Work Holistically", "items": [{"q": "A new tool is installed, but nobody trains the service desk and the supplier contract is not updated. Which principle was missed?", "o": ["Keep it simple and practical", "Start where you are", "Think and work holistically", "Focus on value"], "a": 2, "e": "The change ignored people and suppliers."}, {"q": "Which idea helps you think holistically?", "o": ["Working in silos", "The four dimensions", "Ignoring suppliers", "Changing one part only"], "a": 1, "e": "The four dimensions help you see the whole system."}, {"q": "Which words point to this principle?", "o": ["Repetitive tasks", "End to end, the whole system", "Reuse", "Small steps"], "a": 1, "e": "These are clue words for principle 5."}]};
QUIZZES["itil.4.8"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.8 · Keep It Simple and Practical", "items": [{"q": "A team simplifies a process. Which step should they keep?", "o": ["A second copy of the same form", "A report nobody reads", "A security approval required by law", "An extra signature with no purpose"], "a": 2, "e": "Simple does not mean removing controls that protect value."}, {"q": "What does this principle ask for?", "o": ["As many steps as possible", "The fewest steps needed to reach the goal", "No controls at all", "Only new tools"], "a": 1, "e": "Remove what adds no value."}, {"q": "Which words point to this principle?", "o": ["Shared goal", "Remove steps, no value, fewer steps", "Feedback loop", "Observe directly"], "a": 1, "e": "These are clue words for principle 6."}]};
QUIZZES["itil.4.9"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.9 · Optimize and Automate", "items": [{"q": "A process has many unnecessary steps. What should be done first?", "o": ["Hire more people", "Automate it now", "Optimize it, then automate", "Ignore it"], "a": 2, "e": "Automating a poor process only makes a poor result faster."}, {"q": "What should automation not replace?", "o": ["Manual data entry", "Copying data", "Repetitive tasks", "Human judgment where it is needed"], "a": 3, "e": "Use people where judgment is needed."}, {"q": "Which words point to this principle?", "o": ["Repetitive, manual, optimize first", "Whole system", "Reuse", "Perceived value"], "a": 0, "e": "These are clue words for principle 7."}]};
QUIZZES["itil.4.10"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.10 · Governance", "items": [{"q": "Which three activities does the governing body perform?", "o": ["Buy, install, support", "Plan, build, run", "Design, test, release", "Evaluate, direct, monitor"], "a": 3, "e": "Evaluate, direct and monitor is the core of governance."}, {"q": "What is governance?", "o": ["How an organization is directed and controlled", "Buying laptops", "Writing code", "Fixing incidents"], "a": 0, "e": "Governance directs and controls."}, {"q": "Where does governance sit?", "o": ["Inside the ITIL value system, as one of its components", "Only in the service desk", "Only in suppliers", "Outside ITIL"], "a": 0, "e": "Governance is one of the five SVS components."}]};
QUIZZES["itil.4.11"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.11 · The Service Value Chain", "items": [{"q": "In ITIL Version 5, what makes up the value chain?", "o": ["The governing body", "The four dimensions", "The eight activities of the product and service lifecycle", "The seven guiding principles"], "a": 2, "e": "Discover, design, acquire, build, transition, operate, deliver and support."}, {"q": "Do the value chain activities always run in one fixed order?", "o": ["Only in large companies", "Yes, always", "No, they can run in different orders and more than once", "Only during audits"], "a": 2, "e": "Different combinations form different value streams."}, {"q": "What do the activities use to do their work?", "o": ["Only contracts", "Only budgets", "Practices", "Nothing"], "a": 2, "e": "Practices, like the service desk, support many activities."}]};
QUIZZES["itil.4.12"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 4.12 · Management Practices and Continual Improvement", "items": [{"q": "What is a practice?", "o": ["A single task", "A set of organizational resources designed for performing work or accomplishing an objective", "A contract", "A job title"], "a": 1, "e": "This is the ITIL definition of a practice."}, {"q": "In the continual improvement model, which step comes right after 'where are we now?'", "o": ["What is the vision?", "Take action", "Where do we want to be?", "Did we get there?"], "a": 2, "e": "The order is vision, now, want to be, how, action, did we get there, momentum."}, {"q": "How many steps does the continual improvement model have?", "o": ["Five", "Seven", "Three", "Nine"], "a": 1, "e": "The model has seven steps, then the loop starts again."}]};
QUIZZES["itil.5.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 5.1 · What Is a Value Stream", "items": [{"q": "What is a value stream?", "o": ["A team that manages one service", "A series of steps to create and deliver products and services to users", "A list of practices", "A contract"], "a": 1, "e": "It runs from a trigger to value."}, {"q": "How does a value stream start and end?", "o": ["Starts with demand, ends with value", "Starts with value, ends with demand", "It has no start", "Starts and ends with a contract"], "a": 0, "e": "A value stream always goes from demand to value."}, {"q": "Why do value streams help?", "o": ["They hide delays", "They replace all teams", "They remove users", "They show work end to end, across teams"], "a": 3, "e": "Seeing the whole journey reveals delays between teams."}]};
QUIZZES["itil.5.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 5.2 · Value Stream Mapping", "items": [{"q": "In a value stream map, what is lead time?", "o": ["The time of one meeting", "Only waiting time", "The total time from trigger to value", "Only working time"], "a": 2, "e": "Lead time is process time plus wait time."}, {"q": "What does a value stream map show?", "o": ["Only the org chart", "Only the tools", "Only costs", "Steps, people, information and time"], "a": 3, "e": "A map shows how work really flows."}, {"q": "Where is most delay often found?", "o": ["In the trigger", "Between teams, in waiting and handoffs", "Inside the fastest step", "Nowhere"], "a": 1, "e": "Waiting between steps is a common source of delay."}]};
QUIZZES["itil.5.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 5.3 · Identifying Waste and Bottlenecks", "items": [{"q": "Work keeps piling up in front of one step. What is that step?", "o": ["A bottleneck", "An outcome", "A sponsor", "A value stream"], "a": 0, "e": "A bottleneck limits the flow of the whole stream."}, {"q": "Which is an example of waste?", "o": ["Rework and manual re-entry of data", "Meeting a user need", "A useful approval", "Delivering value"], "a": 0, "e": "Waste uses time or effort without adding value."}, {"q": "What does a bottleneck limit?", "o": ["Only one user", "Nothing", "Only the budget", "The flow of the whole stream"], "a": 3, "e": "The stream can only move as fast as its slowest step."}]};
QUIZZES["itil.5.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 5.4 · Improving Value Streams", "items": [{"q": "A team has mapped its value stream. What should it do next?", "o": ["Stop measuring", "Hire a new team", "Find the waste and bottleneck, then improve in small steps", "Automate every step at once"], "a": 2, "e": "Improve step by step and measure."}, {"q": "Which approach do value stream improvements follow?", "o": ["Continual improvement: map, find problems, improve, measure, repeat", "Only buying tools", "Only adding staff", "One big change with no checks"], "a": 0, "e": "Improvement is a loop."}, {"q": "Why measure after a change?", "o": ["To blame people", "To check whether it really worked", "It is not needed", "To create paperwork"], "a": 1, "e": "Measurement shows whether the target was reached."}]};
QUIZZES["itil.6.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 6.1 · Introduction to AI in IT Service Management", "items": [{"q": "Which type of AI creates new content, like summaries or code?", "o": ["An AI agent", "Generative AI", "A database", "Machine learning"], "a": 1, "e": "Generative AI creates content."}, {"q": "Which AI can take actions by itself, like routing a ticket?", "o": ["An AI agent", "A sponsor", "Generative AI", "A spreadsheet"], "a": 0, "e": "AI agents can act on their own."}, {"q": "What is the right role of AI in ITSM?", "o": ["Work without any rules", "Only make coffee", "Replace all human judgment", "Support people, with human oversight"], "a": 3, "e": "AI supports people, and oversight is always needed."}]};
QUIZZES["itil.6.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 6.2 · AI in the Product and Service Lifecycle", "items": [{"q": "A developer uses an AI assistant to write code. What must still happen?", "o": ["A person reviews and tests the code", "The code goes straight to production", "The code is deleted", "Nothing"], "a": 0, "e": "People review AI work."}, {"q": "In which lifecycle activities can AI help?", "o": ["None", "Only design", "In all eight activities", "Only support"], "a": 2, "e": "AI can assist across the whole lifecycle."}, {"q": "Which is a risk of AI in the lifecycle?", "o": ["Faster work", "Answers that sound right but are wrong", "Fewer repetitive tasks", "Better knowledge search"], "a": 1, "e": "AI can be confidently wrong, so checks are needed."}]};
QUIZZES["itil.6.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 6.3 · AI in the ITIL Value Chain", "items": [{"q": "A team adds AI to its value stream. Which statement is correct?", "o": ["AI should make every decision alone", "AI can only be used in the service desk", "AI replaces governance", "AI supports many activities and practices, while people stay accountable"], "a": 3, "e": "People remain accountable."}, {"q": "Where can AI support value?", "o": ["Across value chain activities and practices", "Only in hardware", "Nowhere", "Only in contracts"], "a": 0, "e": "AI can help across the whole value stream."}, {"q": "Who is accountable for outcomes when AI is used?", "o": ["People in the organization", "Nobody", "The user only", "The AI tool"], "a": 0, "e": "Accountability stays with people."}]};
QUIZZES["itil.6.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 6.4 · AI Governance", "items": [{"q": "An AI tool assigns work and triggers actions across many systems. Which capability is this?", "o": ["Curation", "Clarification", "Creation", "Coordination"], "a": 3, "e": "Coordination means running workflows."}, {"q": "With 'human in the loop', what happens?", "o": ["There is no person", "A person approves each AI action before it happens", "A person only watches", "AI acts alone"], "a": 1, "e": "Human in the loop means approval before action."}, {"q": "Which is part of responsible AI?", "o": ["Ignoring privacy", "Hiding when AI is used", "Fairness and transparency", "No accountability"], "a": 2, "e": "Responsible AI is fair, transparent, private and accountable."}]};
QUIZZES["itil.7.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 7.1 · Understanding DevOps", "items": [{"q": "What is the main purpose of DevOps?", "o": ["Replace all people with automation", "Remove testing", "Deliver value quickly, safely and often through shared ownership", "Keep development and operations separate"], "a": 2, "e": "DevOps is about culture and collaboration."}, {"q": "What does the DevOps infinity loop show?", "o": ["A one-time project", "A contract", "Continuous delivery and feedback", "An org chart"], "a": 2, "e": "The loop never stops: plan, build, release, operate, learn."}, {"q": "DevOps is mainly about:", "o": ["Only documents", "Only hardware", "Only tools", "Culture and collaboration, supported by automation"], "a": 3, "e": "Tools help, but culture comes first."}]};
QUIZZES["itil.7.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 7.2 · ITIL and DevOps Together", "items": [{"q": "How do ITIL and DevOps relate?", "o": ["ITIL forbids DevOps", "DevOps replaces ITIL", "They are competitors", "They complement each other"], "a": 3, "e": "DevOps brings speed and flow, ITIL gives a full view of value."}, {"q": "Automated, low-risk changes are often treated as:", "o": ["Projects", "Major incidents", "Emergency changes", "Standard changes"], "a": 3, "e": "Low-risk, repeatable changes can be pre-approved as standard changes."}, {"q": "What does ITIL add to DevOps?", "o": ["Slower releases on purpose", "More silos", "Nothing", "A full view of value across the lifecycle"], "a": 3, "e": "ITIL looks at value beyond the development pipeline."}]};
QUIZZES["itil.7.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 7.3 · Understanding PRINCE2", "items": [{"q": "What is PRINCE2?", "o": ["A cloud provider", "A service desk tool", "An ITIL practice", "A method for managing projects in a controlled way"], "a": 3, "e": "PRINCE2 manages projects in controlled stages."}, {"q": "Which statement describes a project?", "o": ["It has no goal", "It is temporary, with a clear start and end, to deliver something specific", "It runs forever", "It is the same as a service"], "a": 1, "e": "Projects are temporary and deliver change."}, {"q": "PRINCE2 is built on:", "o": ["Only tools", "Guiding principles of ITIL", "Only budgets", "Principles, themes and processes"], "a": 3, "e": "These are the main parts of PRINCE2."}]};
QUIZZES["itil.7.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 7.4 · ITIL and PRINCE2 Together", "items": [{"q": "How does project management support service management?", "o": ["It delivers changes in a controlled way, then hands them over to be run as services", "It only manages daily support", "It replaces service management after go-live", "It has no link"], "a": 0, "e": "Projects deliver change, then services run it."}, {"q": "What is the key moment between a project and a service?", "o": ["The audit", "The first invoice", "The handover into live use", "The kickoff meeting"], "a": 2, "e": "At handover the project result becomes a live service."}, {"q": "Which manages a service across its whole lifecycle, before and after a project?", "o": ["PRINCE2 only", "The supplier", "A single sponsor", "ITIL"], "a": 3, "e": "ITIL covers the service end to end."}]};
QUIZZES["itil.e.1"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E1 · Understanding the ITIL Exam", "items": [{"q": "How many questions does the ITIL Foundation exam have?", "o": ["40", "20", "30", "60"], "a": 0, "e": "40 multiple-choice questions."}, {"q": "How long do you have?", "o": ["30 minutes", "90 minutes", "45 minutes", "60 minutes"], "a": 3, "e": "60 minutes."}, {"q": "You are unsure and time is almost up. What should you do?", "o": ["Pick nothing", "Leave it blank", "Stop the exam", "Choose your best answer, because there is no negative marking"], "a": 3, "e": "You need 26 correct answers, and wrong answers do not cost marks."}]};
QUIZZES["itil.e.2"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E2 · Official Exam Objectives Checklist", "items": [{"q": "Which exam category carries the most weight?", "o": ["The ITIL value system", "Value stream mapping", "ITIL and AI", "Other frameworks"], "a": 0, "e": "The value system is about 40% of the exam."}, {"q": "About how much of the exam is key terms and definitions?", "o": ["50%", "5%", "10%", "30%"], "a": 3, "e": "Key terms are about 30%."}, {"q": "When should you tick an objective on your checklist?", "o": ["Only on exam day", "Never", "When you can explain it without notes", "When you have read it once"], "a": 2, "e": "Tick it only when you really know it."}]};
QUIZZES["itil.e.3"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E3 · Key Terms and Definitions Revision", "items": [{"q": "Outputs are produced. Outcomes are:", "o": ["Signed", "Achieved", "Deleted", "Bought"], "a": 1, "e": "Outputs are produced, outcomes are achieved."}, {"q": "Fit for use describes:", "o": ["Output", "Warranty", "Sponsor", "Utility"], "a": 1, "e": "Utility is fit for purpose, warranty is fit for use."}, {"q": "Who uses the service?", "o": ["The user", "The supplier", "The sponsor", "The customer"], "a": 0, "e": "Customers define requirements, users use, sponsors pay."}]};
QUIZZES["itil.e.4"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E4 · Understanding ITIL Exam Questions", "items": [{"q": "A question asks which statement is NOT correct. What type of question is this?", "o": ["Negative", "Standard", "List", "Missing word"], "a": 0, "e": "NOT asks you to find the false statement."}, {"q": "What should you read twice before looking at the options?", "o": ["The last line of the question", "The first word", "The exam rules", "The answer key"], "a": 0, "e": "The last line tells you what is really being asked."}, {"q": "A missing word question asks you to:", "o": ["Skip the question", "Choose two answers", "Write an essay", "Fill the gap with the correct term"], "a": 3, "e": "Pick the word that completes the sentence correctly."}]};
QUIZZES["itil.e.5"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E5 · Exam Strategy and Time Management", "items": [{"q": "About how much time do you have per question?", "o": ["About 1.5 minutes", "10 minutes", "5 minutes", "30 seconds"], "a": 0, "e": "60 minutes for 40 questions."}, {"q": "You have spent two minutes on a hard question. What should you do?", "o": ["Restart the exam", "Leave it blank", "Choose your best answer, flag it and move on", "Keep going until sure"], "a": 2, "e": "Keep moving and come back if you have time."}, {"q": "After question 20, about how much time should you have left?", "o": ["10 minutes", "20 minutes", "About 30 minutes", "50 minutes"], "a": 2, "e": "Check the clock at the halfway point."}]};
QUIZZES["itil.e.6"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E6 · Topic-Based Practice Questions", "items": [{"q": "Which topic should you practise most?", "o": ["AI", "The value system, worth about 40%", "Other frameworks", "Value stream mapping"], "a": 1, "e": "Practise where the most marks are."}, {"q": "What should you do for every wrong answer?", "o": ["Ignore it", "Memorize the letter", "Write down why it was wrong", "Skip the topic"], "a": 2, "e": "Understanding mistakes turns them into learning."}, {"q": "Which framework manages projects in controlled stages?", "o": ["Agile", "Lean", "DevOps", "PRINCE2"], "a": 3, "e": "PRINCE2 is the project method."}]};
QUIZZES["itil.e.8"] = {"type": "mcq", "color": "#a855f7", "title": "Quiz · Lesson 2.E8 · Mock Exam Review and Booking", "items": [{"q": "After your mock exam, what should you do first?", "o": ["Retake it without reading explanations", "Book the exam immediately without review", "Review your score and find your weak topics", "Stop studying"], "a": 2, "e": "Use the results to target your revision."}, {"q": "When should you run the online exam system check?", "o": ["One week after the exam", "At least 24 hours before, and again about 2 hours before", "Only on exam day", "Never"], "a": 1, "e": "Check early, then again close to the exam."}, {"q": "Where can you book the ITIL Foundation exam?", "o": ["It cannot be booked", "With any software store", "Only at a bank", "With PeopleCert or a training organization"], "a": 3, "e": "PeopleCert runs the exam, directly or through training partners."}]};
