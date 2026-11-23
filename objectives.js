/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Objectives: LEVEL_OBJECTIVES[levelId] = list of goals for the whole level (shown above its lessons),
   LESSON_OBJECTIVES[lessonKey] = one goal for that lesson (shown above the lesson).
   Written from lesson titles: edit freely. A lesson without an entry gets a general goal from its title. */
const LEVEL_OBJECTIVES = {
 "l0": [
  "Explain what IT is and how it touches everyday life",
  "Name the main IT careers and what each person does",
  "Decide which direction you want to explore first"
 ],
 "l1": [
  "Name the main parts of a computer and what each one does",
  "Tell hardware and software apart",
  "Explain how a computer turns input into output",
  "Understand how computers store information as 0s and 1s"
 ],
 "l2": [
  "Explain what an operating system does",
  "Recognise Windows, Linux and mobile operating systems",
  "Choose the right operating system for a job"
 ],
 "l3": [
  "Explain what a network is and which devices build it",
  "Tell IP addresses and MAC addresses apart",
  "Describe how data travels using the OSI model"
 ],
 "l4": [
  "Explain what cybersecurity protects and why it matters",
  "Recognise common cyber threats and attacks",
  "Build strong passwords and turn on multi-factor authentication",
  "Follow basic security best practices every day"
 ],
 "l5": [
  "Prepare for your first IT job search",
  "Use LinkedIn, Glassdoor and Indeed to find and research jobs",
  "Understand what a normal day in an IT company looks like",
  "Be ready to apply for Help Desk / IT Support roles"
 ],
 "l55": [
  "Describe the role of an IT support technician",
  "Troubleshoot problems with a clear step-by-step method",
  "Explain ITSM and ITIL and why ticketing matters",
  "Handle tickets in ServiceNow and Jira Service Management",
  "Work in a professional way with users"
 ],
 "l54": [
  "Use chat and meeting tools like Slack and Zoom for support work",
  "Connect to a user's computer with remote tools",
  "Pick the right remote tool (RDP, TeamViewer, AnyDesk) for each situation"
 ],
 "l52": [
  "Explain what Microsoft 365 includes",
  "Support users with Outlook, Teams, OneDrive and SharePoint",
  "Fix the most common Microsoft 365 problems"
 ],
 "l53": [
  "Support users with Gmail, Drive, Meet and Docs",
  "Help with account and password problems",
  "Fix common Google Workspace problems in real support scenarios"
 ],
 "im4": [
  "Understand how data moves across networks layer by layer",
  "Plan IP addresses, subnets and routing",
  "Explain how DNS, DHCP, TCP/UDP and ports work",
  "Find and fix common network problems"
 ],
 "im2": [
  "Manage users, groups, permissions and file sharing in Windows",
  "Control services, processes, the registry and updates",
  "Read event logs to find problems",
  "Work confidently in CMD and PowerShell"
 ],
 "im3": [
  "Take your first steps in the Linux terminal and Bash",
  "Understand the Linux file system, users and permissions",
  "Manage processes, services and software packages"
 ],
 "im5": [
  "Explain what Active Directory is and how a domain is built",
  "Manage users, groups, OUs and Group Policy",
  "Understand how Kerberos and LDAP sign people in"
 ],
 "im8": [
  "Explain how the web works from browser to server",
  "Read basic HTML, CSS and JavaScript",
  "Understand HTTPS, web servers and APIs"
 ],
 "im10": [
  "Explain virtualization and why companies use it",
  "Run virtual machines and virtual networks",
  "Understand containers and how Docker works"
 ],
 "im7": [
  "Explain what a database is and how data is organised in tables",
  "Write basic SQL queries",
  "Understand keys, relationships and backups"
 ],
 "im11": [
  "Explain the main cloud ideas and service models (IaaS, PaaS, SaaS)",
  "Understand cloud networking and storage",
  "Know the basics of Azure, AWS and Google Cloud and how cloud security is shared"
 ],
 "im9": [
  "Explain the CIA triad and basic security principles",
  "Understand authentication, access control, encryption and firewalls",
  "Find vulnerabilities and watch systems with logs and monitoring"
 ]
};
const LESSON_OBJECTIVES = {
 "1": "Explain what a computer is and name what it does with data.",
 "2": "Name the main hardware parts (CPU, RAM, storage) and what each one does.",
 "3": "Tell system software from application software and explain why a computer needs both.",
 "4": "Follow the input, process, storage and output cycle of a computer.",
 "5": "Explain bits and bytes and how text, pictures and sound become numbers.",
 "6": "Explain what an operating system does and name the common ones.",
 "10": "Describe what Windows is and where it is used.",
 "11": "Describe what Linux is and why servers use it.",
 "13": "Recognise mobile operating systems (Android, iOS) and other systems.",
 "15": "Explain what a network is and why we build one.",
 "16": "Name the main network devices (router, switch, access point) and what each one does.",
 "17": "Tell IP addresses from MAC addresses and say what each is used for.",
 "27": "Explain what cybersecurity is and what it protects.",
 "28": "Recognise common threats such as phishing, malware and ransomware.",
 "31": "Create a strong password and explain how multi-factor authentication protects you.",
 "51": "Name the 7 OSI layers and describe what happens at each one.",
 "52": "Apply simple security habits at work and at home.",
 "54": "Find entry-level IT jobs and prepare your first application.",
 "55": "Describe what a normal workday in an IT company looks like.",
 "57": "Explain what ITSM and ITIL are and why companies use them.",
 "58": "Convert between binary and decimal numbers.",
 "0.2": "Explain what information technology is and where you see it every day.",
 "0.3": "Name the main IT careers and what each one does.",
 "5.5.1": "Describe what an IT support technician does and what skills the job needs.",
 "5.5.2": "Troubleshoot a problem using clear steps: identify, test, fix and confirm.",
 "5.5.3": "Explain what remote support tools are and when to use them.",
 "5.5.4": "Work with users in a professional way: communicate, document and escalate.",
 "servicenow.0.1": "Explain what ServiceNow is and how a support agent uses it.",
 "servicenow.0.2": "Tell an incident from a service request, and create, update and resolve each.",
 "servicenow.0.3": "Set up your free Personal Developer Instance (PDI) and find answers in the Knowledge Base.",
 "jira.0.1": "Explain what Jira Service Management is and who uses it.",
 "jira.0.2": "Explain service projects, queues and requests and how they connect.",
 "jira.0.3": "Create your own free Jira Cloud site to practise in.",
 "jira.0.4": "Open, work on and close your first request in Jira Service Management.",
 "slack.0.1": "Use Slack channels, messages and notifications for support work.",
 "zoom.0.1": "Host and join Zoom meetings and help users with common Zoom problems.",
 "rdp.0.1": "Connect to another Windows computer with Remote Desktop (RDP).",
 "teamviewer.0.1": "Connect to a user's computer with TeamViewer to help them.",
 "anydesk.0.1": "Connect to a user's computer with AnyDesk to help them.",
 "microsoft365.0.1": "Explain what Microsoft 365 includes and what the admin center is for.",
 "microsoft365.0.2": "Help users with Outlook mail and calendar problems.",
 "microsoft365.0.3": "Support users with Teams chat, meetings and calls.",
 "microsoft365.0.4": "Fix OneDrive sync problems and explain file sharing.",
 "microsoft365.0.5": "Explain SharePoint sites, libraries and permissions.",
 "microsoft365.0.6": "Fix the ten most common Microsoft 365 issues users report.",
 "linkedin.0.1": "Build a strong LinkedIn profile and search for entry-level IT jobs.",
 "glassdoor.0.1": "Research companies, salaries and reviews on Glassdoor before you apply.",
 "indeed.0.1": "Search, filter and apply for IT jobs on Indeed.",
 "servicenow.1.1": "Describe the ServiceNow platform and its main capabilities.",
 "servicenow.1.2": "Explain applications, plugins and basic instance configuration.",
 "servicenow.1.3": "Tell personalization from customization and use the different interfaces.",
 "servicenow.1.4": "Use lists, filters, tags and forms to find and edit records.",
 "servicenow.1.5": "Configure forms and use templates.",
 "servicenow.1.6": "Manage tasks and use visual task boards.",
 "servicenow.1.7": "Build simple reports and dashboards.",
 "servicenow.1.8": "Set up notifications so the right people are told at the right time.",
 "servicenow.1.9": "Explain how knowledge articles are created, approved and used.",
 "servicenow.1.10": "Describe the service catalog and how catalog items work.",
 "servicenow.1.11": "Explain what Workflow Studio and Virtual Agent do.",
 "servicenow.1.12": "Explain tables, fields and the data schema.",
 "servicenow.1.13": "Manage users, groups and roles and explain access control.",
 "servicenow.1.14": "Explain data import, the CMDB and CSDM.",
 "servicenow.1.15": "Explain Security Center and the shared responsibility model.",
 "servicenow.1.16": "Tell UI policies from business rules and know when to use each.",
 "servicenow.1.17": "Explain update sets and the basics of ServiceNow scripting.",
 "servicenow.1.x1": "Understand how the CSA exam is built and how to prepare for it.",
 "servicenow.1.x2": "Check yourself against every CSA exam objective.",
 "im2.1": "Describe what a Windows administrator does and which tools they use.",
 "im2.2": "Create and manage local users and groups using least privilege.",
 "im2.3": "Set NTFS and share permissions and predict the result.",
 "im2.4": "Manage Windows services and processes with Task Manager and services.msc.",
 "im2.13": "Explain what the registry is and how keys and values are organised.",
 "im2.5": "Use regedit, msconfig and system properties to change system settings.",
 "im2.6": "Open Event Viewer and find the cause of a problem in the logs.",
 "im2.7": "Fix common Windows Update problems step by step.",
 "im2.14": "Explain the difference between CMD and PowerShell and when to use each.",
 "im2.8": "Move around the file system and manage files with CMD commands.",
 "im2.10": "Use PowerShell cmdlets and the pipeline to find and manage things.",
 "im4.12": "Describe what each OSI layer does and which protocols and devices belong to it.",
 "im4.13": "Read an IPv4 address and subnet mask and tell private ranges from public ones.",
 "im4.14": "Explain what a MAC address is and how switches and ARP use it.",
 "im1.1": "Explain what the kernel is and how programs use it through system calls."
};
