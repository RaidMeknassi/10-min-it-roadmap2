/* ------------------------------------------------------------
   COURSES & TOOLS DATA  -  edit this file to change the ITIL 4 course
   and the tool pages (levels, certifications, lessons).

   Lesson keys are made automatically:  "itil.2.3"  = ITIL, level 2, lesson 3
                                        "servicenow.1.4" = ServiceNow, level 1, lesson 4
   To add a video to one of these lessons, add its key to VIDEOS in roadmap.js.
   ------------------------------------------------------------ */

/* ITIL Foundation course (opens from the ITIL node under Level 5) */
const ITIL_COURSE = {
  id: "itil", name: "ITIL Foundation", vendor: "PeopleCert", badge: "ITIL", color: "#4ade80",
  desc: "The world's most used framework for IT service management. Learn it level by level, then pass the ITIL Foundation exam.",
  note: "ITIL (Version 5) launched in January 2026 and runs alongside ITIL 4. An ITIL 4 Foundation certificate stays valid and counts as the starting point for every higher ITIL level.",
  /* ITIL (Version 5) certification roadmap. Every box is a module with lessons; "foundation" opens the course above. */
  modules: {
    foundation: { code: "Foundation", title: "ITIL Foundation", color: "#38bdf8", desc: "For beginners and IT professionals learning IT Service Management.", foundation: true },
    transformation: { code: "Transformation", title: "ITIL Transformation", color: "#a78bfa", exam: true, desc: "For professionals leading organizational change and digital transformation. Shared requirement for all three designations: complete it once.",
      lessons: ["What ITIL Transformation Covers", "Leading Organisational Change", "Digital Transformation Basics", "Building a Transformation Roadmap", "Measuring Transformation Success"] },
    msf: { code: "MSF", title: "Monitor, Support and Fulfil", color: "#34d399", exam: true, desc: "For service desk, support and incident management professionals.",
      lessons: ["Monitor, Support and Fulfil Overview", "Monitoring and Event Management", "Incident Management in Practice", "Service Desk Operations", "Service Request Fulfilment"] },
    pic: { code: "PIC", title: "Plan, Implement and Control", color: "#34d399", exam: true, desc: "For change, deployment, release and asset management professionals.",
      lessons: ["Plan, Implement and Control Overview", "Change Enablement", "Release and Deployment", "IT Asset and Configuration Management", "Planning and Control in Practice"] },
    cai: { code: "CAI", title: "Collaborate, Assure and Improve", color: "#34d399", exam: true, desc: "For supplier, relationship and continual improvement professionals.",
      lessons: ["Collaborate, Assure and Improve Overview", "Supplier Management", "Relationship Management", "Service Assurance", "Continual Improvement in Practice"] },
    product: { code: "Product", title: "ITIL Product", color: "#38bdf8", exam: true, desc: "For digital product managers.",
      lessons: ["What ITIL Product Covers", "The Digital Product Lifecycle", "Product Ownership and Roadmaps", "Measuring Product Value"] },
    service: { code: "Service", title: "ITIL Service", color: "#38bdf8", exam: true, desc: "For IT service managers.",
      lessons: ["What ITIL Service Covers", "Designing and Running Services", "Service Levels and Performance", "Service Value Streams"] },
    experience: { code: "Experience", title: "ITIL Experience", color: "#38bdf8", exam: true, desc: "For customer and user experience professionals.",
      lessons: ["What ITIL Experience Covers", "Customer and User Journeys", "Designing Great Experiences", "Measuring Experience"] },
    strategy: { code: "Strategy", title: "ITIL Strategy", color: "#f472b6", exam: true, desc: "For professionals responsible for digital strategy and business alignment.",
      lessons: ["What ITIL Strategy Covers", "Digital Strategy and Business Alignment", "Portfolio and Investment Decisions", "Governance and Risk", "Communicating Strategy"] },
    master: { code: "Master", title: "ITIL Master", color: "#fbbf24", desc: "For experienced professionals who achieve all three designations. No separate exam.",
      lessons: ["What ITIL Master Means", "Holding PM, MP and SL Together", "Planning Your Route to Master"] },
    aigov: { code: "AI Gov", title: "ITIL AI Governance", color: "#94a3b8", exam: true, desc: "Optional extension for professionals responsible for AI governance, risk and responsible AI adoption.",
      lessons: ["What ITIL AI Governance Covers", "AI Risk and Responsible AI", "Policies and Controls for AI", "AI Governance in Practice"] }
  },
  /* the three designations (each needs Foundation + Transformation + its modules) */
  designations: [
    { id: "pm", name: "Practice Manager", color: "#34d399", desc: "For IT operations managers and practice owners.", rule: "Choose ONE", modules: ["msf", "pic", "cai"] },
    { id: "mp", name: "Managing Professional", color: "#38bdf8", desc: "For professionals managing digital products and services.", rule: "ALL THREE required", modules: ["product", "service", "experience"] },
    { id: "sl", name: "Strategic Leader", color: "#f472b6", desc: "For IT directors and senior decision-makers.", rule: "ONE required", modules: ["strategy"] }
  ],
  levels: [
    { title: "Introduction to IT Service Management", lessons: ["What Is IT Service Management?", "What Is ITIL?", "Why Companies Use ITIL", "ITIL History and Evolution"] },
    { title: "ITIL Key Concepts", lessons: ["Services and Service Management", "Value and Value Co-creation", "Customers, Users and Sponsors", "Outcomes, Outputs and Costs", "Utility and Warranty", "Service Relationships"] },
    { title: "The Seven Guiding Principles", lessons: ["Focus on Value", "Start Where You Are", "Progress Iteratively with Feedback", "Collaborate and Promote Visibility", "Think and Work Holistically", "Keep It Simple and Practical", "Optimize and Automate"] },
    { title: "Four Dimensions of Service Management", lessons: ["Organizations and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"] },
    { title: "The Service Value System", lessons: ["The ITIL Service Value System", "Opportunity, Demand and Value", "Governance", "The Continual Improvement Model"] },
    { title: "The Service Value Chain", lessons: ["What Is the Service Value Chain?", "Plan and Improve", "Engage", "Design and Transition", "Obtain/Build", "Deliver and Support", "Value Streams in Action"] },
    { title: "Key ITIL Practices", lessons: ["Incident Management", "Problem Management", "Service Request Management", "Service Desk", "Change Enablement", "Service Level Management", "Continual Improvement", "Relationship Management", "IT Asset Management", "Monitoring and Event Management", "Release Management", "Service Configuration Management", "Deployment Management", "Information Security Management", "Supplier Management"] },
    { title: "Exam Preparation", exam: true, lessons: ["How the ITIL Foundation Exam Works", "Exam Objectives Checklist", "Key Terms to Remember", "Practice Questions", "Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"] }
  ]
};

/* Tools. Each tool has levels from 0 (basics) up to expert.
   cert: [code, full name, vendor]  (leave out when the level has no official exam)
   role: what you can do / are at this level (shown on the right of the pyramid)  */
const TOOL_GROUPS = [
  { id: "jobs", name: "Job-Search Platforms", emoji: "🧰" },
  { id: "ticketing", name: "Ticketing Systems", emoji: "🎫" },
  { id: "collab", name: "IT Communication, Collaboration & Remote Access", emoji: "🖥️" }
];

const TOOLS = [
  { id: "linkedin", name: "LinkedIn", group: "jobs", color: "#0a66c2", tags: ["Jobs", "Networking", "Profile"],
    desc: "The biggest professional network. Recruiters search it every day for IT support people.",
    note: "There is no official exam. Your profile and your network are your certificate.",
    single: true,
    levels: [
      { title: "LinkedIn for IT Jobs", role: "One lesson", color: "#0a66c2", lessons: ["LinkedIn for IT Jobs: Build Your Profile & Find Entry-Level IT Work"] }
    ]},
  { id: "glassdoor", name: "Glassdoor", group: "jobs", color: "#0caa41", tags: ["Jobs", "Salaries", "Reviews"],
    desc: "Job listings plus company reviews, salaries and real interview questions.",
    note: "There is no official exam. Use it to research companies before you apply.",
    single: true,
    levels: [
      { title: "Glassdoor for Beginners", role: "One lesson", color: "#0caa41", lessons: ["Glassdoor for Beginners: Research Companies Before You Apply"] }
    ]},
  { id: "indeed", name: "Indeed", group: "jobs", color: "#2557a7", tags: ["Jobs", "CV", "Applications"],
    desc: "One of the largest job boards. Great for entry-level help desk and IT support roles.",
    note: "There is no official exam. Indeed offers optional skill tests you can show on your profile.",
    single: true,
    levels: [
      { title: "Indeed for IT Jobs", role: "One lesson", color: "#2557a7", lessons: ["How to Use Indeed to Find Your First IT Job (Search, Filter & Apply)"] }
    ]},

  { id: "servicenow", name: "ServiceNow", group: "ticketing", color: "#62d84e", tags: ["ITSM", "Tickets", "ITIL"],
    desc: "The leading enterprise IT service management platform. Most big companies run their service desk on it.",
    note: "ServiceNow certifications build on each other like a pyramid: CSA first, then CAD, then CIS, Suite and finally the expert architect exams.",
    levels: [
      { title: "ServiceNow Basics for the Service Desk", role: "Fulfiller / Agent", color: "#60a5fa", lessons: ["What Is ServiceNow? Beginner Introduction for IT Support", "ServiceNow for Beginners: Incidents vs Service Requests (Create, Update, Resolve)", "ServiceNow Knowledge Base + Free Developer Instance (PDI) Lab"] },
      { title: "Certified System Administrator", role: "Systems Administrator", color: "#34d399", cert: ["CSA", "ServiceNow Certified System Administrator", "ServiceNow"],
        groups: [["Domain 1: Platform Overview and Navigation — 7%", 1], ["Domain 2: Instance Configuration — 10%", 2], ["Domain 3: Configuring Applications for Collaboration — 20%", 5], ["Domain 4: Self-Service and Automation — 20%", 3], ["Domain 5: Database Management and Platform Security — 30%", 4], ["Domain 6: Data Migration and Integration — 13%", 2]],
        lessons: ["ServiceNow Platform Overview and Capabilities", "Applications, Plugins and Instance Configuration", "Personalization, Customization and User Interfaces", "Lists, Filters, Tags and Forms", "Form Configuration, Templates and Advanced Configuration", "Task Management and Visual Task Boards", "Reports, Dashboards and Platform Analytics", "Notifications", "Knowledge Management", "Service Catalog and Catalog Items", "Workflow Studio and Virtual Agent", "Tables, Fields and Data Schema", "Users, Groups, Roles and Access Control", "Importing Data, CMDB and CSDM", "Security Center and Shared Responsibility Model", "UI Policies and Business Rules", "Update Sets and Scripting Fundamentals"],
        exam: ["Understanding the CSA Exam", "Complete CSA Exam Objectives Checklist", "CSA Practice Questions", "Full CSA Mock Exam and Review"] },
      { title: "Certified Application Developer", role: "Application Developer", color: "#22d3ee", cert: ["CAD", "ServiceNow Certified Application Developer", "ServiceNow"],
        lessons: ["Scoped Applications", "Building Tables and Forms", "Client-Side Scripting", "Server-Side Scripting", "Flow Designer", "Security and Access Control", "Integrations and REST APIs", "Testing and Publishing Apps", "CAD Exam Preparation"] },
      { title: "Certified Implementation Specialist (ITSM)", role: "Implementation Specialist", color: "#a78bfa", cert: ["CIS-ITSM", "Certified Implementation Specialist – IT Service Management", "ServiceNow"],
        lessons: ["Incident Management Setup", "Problem Management Setup", "Change Management Setup", "Service Catalog and Request Fulfillment", "Knowledge Management", "CMDB and CSDM Basics", "SLAs and Workflows", "CIS-ITSM Exam Preparation"] },
      { title: "Suite Certification", role: "Application Specialist", color: "#fb7185", cert: ["SUITE", "ServiceNow Suite Certification (e.g. ITSM Professional)", "ServiceNow"],
        lessons: ["What Suite Certifications Are", "Choosing Your Suite (ITSM, CSM, HR...)", "Micro-certifications and Accreditations", "Advanced ITSM Features", "Suite Exam Preparation"] },
      { title: "Expert Programs", role: "Technical / Master Architect", color: "#fbbf24", cert: ["CTA / CMA", "Certified Technical Architect / Certified Master Architect", "ServiceNow"],
        lessons: ["The Expert Path: ArchX, CTA and CMA", "Platform Architecture and Governance", "Designing Large Implementations", "Performance and Upgrades", "Preparing for the Expert Board"] }
    ]},
  { id: "jira", name: "Jira Service Management", group: "ticketing", color: "#1868db", tags: ["Helpdesk", "Tickets", "Atlassian"],
    desc: "Atlassian's service desk tool, used by many tech companies and start-ups.",
    note: "Atlassian certifications go from Associate (agent level) to Professional (admin level).",
    levels: [
      { title: "Jira Service Management Basics", role: "Getting started", color: "#8aa4c8", lessons: ["What Is Jira Service Management?", "Service Projects, Queues and Requests", "Getting a Free Jira Cloud Site", "Handling Your First Request"] },
      { title: "JSM Agent Essentials", role: "Service Desk Agent", color: "#4c9aff", cert: ["ACA-925", "Jira Service Management Agent Essentials", "Atlassian"],
        lessons: ["Working Requests in Queues", "Comments, Internal Notes and Customers", "SLAs for Agents", "Linking Knowledge Articles", "ACA-925 Exam Preparation"] },
      { title: "JSM with AI Fundamentals", role: "ITSM Practitioner", color: "#2684ff", cert: ["ACH-815", "Jira Service Management with AI Fundamentals (replaces ACA-910)", "Atlassian"],
        lessons: ["ITSM Practices in JSM", "Incident, Problem and Change in JSM", "Assets and the CMDB", "AI Features in JSM", "ACH-815 Exam Preparation"] },
      { title: "Managing Jira Service Projects", role: "Project Admin", color: "#1868db", cert: ["ACP-420", "Managing Jira Service Projects for Cloud", "Atlassian"],
        lessons: ["Request Types and Portal", "Workflows and Automation", "SLA Configuration", "Permissions and Customer Access", "Reports", "ACP-420 Exam Preparation"] },
      { title: "Jira Administration", role: "Jira Administrator", color: "#0c3b8a", cert: ["ACP-120", "Jira Administration for Cloud", "Atlassian"],
        lessons: ["Global Settings and Schemes", "Users, Groups and Product Access", "Custom Fields and Screens", "Advanced Automation", "ACP-120 Exam Preparation"] }
    ]},

  { id: "microsoft365", name: "Microsoft 365", group: "collab", color: "#d83b01", tags: ["Outlook", "Teams", "OneDrive", "SharePoint", "Copilot"],
    desc: "Outlook, Teams, OneDrive, SharePoint and more: the productivity ecosystem most offices use every day.",
    note: "Microsoft changes its exams often. MS-900 retired on 31 March 2026 (replaced by AB-900). MS-102 is retiring and is replaced by AB-650. Always check Microsoft Learn before you book.",
    levels: [
      { title: "Microsoft 365 for IT Support", role: "Beginner", desc: "Outlook, Teams, OneDrive, SharePoint, accounts, licensing basics and troubleshooting.", color: "#f2a07b", lessons: ["What Is Microsoft 365?", "Outlook: Mail, Calendar and Common Problems", "Teams: Chat, Meetings and Calls", "OneDrive: Sync and Sharing", "SharePoint: Sites and Libraries", "Fixing the Top 10 User Issues"] },
      { title: "Microsoft 365 Fundamentals", role: "Fundamentals", color: "#ff8c4c", cert: ["AB-900", "Microsoft 365 Fundamentals", "Microsoft"],
        desc: "Microsoft 365 ecosystem, cloud concepts, productivity, security and AI fundamentals.",
        lessons: ["Microsoft 365 Services Overview", "Microsoft 365 Admin Center", "Licences and Subscriptions", "Copilot and Agents Basics", "Security and Compliance Basics"] },
      { title: "Endpoint Administrator Associate", role: "Endpoint specialization", color: "#f59e0b", cert: ["MD-102", "Endpoint Administrator Associate", "Microsoft"],
        desc: "Intune, Windows deployment, device management, compliance and endpoint security.",
        lessons: ["Deploying Windows with Autopilot", "Managing Devices with Intune", "Compliance and Configuration Policies", "Managing Apps", "Protecting Devices"] },
      { title: "Teams Administrator Associate", role: "Collaboration specialization", color: "#8b5cf6", cert: ["MS-700", "Teams Administrator Associate", "Microsoft"],
        desc: "Teams administration, meetings, calling, policies and collaboration.",
        lessons: ["Planning Teams Deployment", "Teams Policies", "Meetings, Calling and Rooms", "Governance and Lifecycle"] },
      { title: "Microsoft 365 and AI Services Administrator Associate", role: "Advanced administration", color: "#e11d48", cert: ["AB-650", "Microsoft 365 and AI Services Administrator Associate", "Microsoft"],
        desc: "Tenant administration, Entra ID, Defender, Purview, Copilot, AI agents and governance.",
        lessons: ["Microsoft 365 Tenant Administration", "Identity and Access with Entra ID", "Security with Microsoft Defender", "Compliance and Data Protection with Purview", "Managing Microsoft 365 Copilot", "Administering AI Agents", "Governance and Best Practices"] }
    ]},
  { id: "googleworkspace", name: "Google Workspace", group: "collab", color: "#4285f4", tags: ["Gmail", "Drive", "Meet", "Admin"],
    desc: "Google Workspace covers Gmail, Drive, Meet, Docs, Sheets, Calendar and the Admin Console. Learn to support users, administer organizations and manage advanced enterprise environments.",
    note: "L0 Beginner: no certification · L1 Intermediate: Associate certification · L2 Advanced: professional training, no current equivalent certification.",
    levels: [
      { title: "Google Workspace for Everyday Support", role: "1st Line Support", color: "#9cbcf7",
        lessons: ["Introduction to Google Workspace", "Gmail Support", "Google Drive Support", "Google Meet & Chat", "Docs, Sheets & Slides", "Account & Password Support", "Common Problems & Fixes", "Real Support Scenarios"] },
      { title: "Google Workspace Administration", role: "Workspace Administrator", color: "#4285f4", cert: ["Associate", "Associate Google Workspace Administrator", "Google"],
        lessons: ["Understanding the Google Admin Console", "Managing Users, Groups and Organizational Units", "Licences, Subscriptions and Billing", "Gmail Administration", "Drive and Sharing Administration", "Calendar, Meet and Chat Administration", "Security Settings and 2-Step Verification", "Managing Devices and Endpoints", "Reports, Audit Logs and Monitoring", "Troubleshooting Google Workspace Services"],
        exam: ["Understanding the Associate Exam", "Associate Exam Objectives Checklist", "Associate Practice Questions", "Associate Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"] },
      { title: "Advanced Google Workspace Administration", role: "Senior Workspace Administrator", color: "#1a56c4",
        lessons: ["Advanced Identity, SSO and Directory Synchronization", "Advanced Security and Data Protection", "Gmail Routing, Email Security and Compliance", "Google Vault, Retention and eDiscovery", "Data Loss Prevention (DLP)", "Context-Aware Access and Advanced Access Control", "Advanced Endpoint and Device Management", "Google Workspace APIs and Admin SDK", "Google Apps Script and Administration Automation", "Enterprise Migrations and Advanced Troubleshooting"],
        assess: ["Enterprise Administration Scenario", "Advanced Security Configuration Lab", "Workspace Migration Practical Lab", "Troubleshooting and Incident Response Lab", "Final Enterprise Administration Project"] }
    ]},
  { id: "slack", name: "Slack", group: "collab", color: "#611f69", tags: ["Chat", "Channels", "Salesforce"], paths: true,
    desc: "Team chat organised in channels, popular in tech companies. Owned by Salesforce.",
    note: "Slack certifications are run by Salesforce on Trailhead. Administrator, Consultant and Developer are three separate career paths: you do not need one before another.",
    levels: [
      { title: "Slack Fundamentals", role: "Beginner", color: "#36c5f0", lessons: ["What Is Slack? Understanding the Digital Workplace", "Workspaces, Organizations and Channels", "Public Channels, Private Channels and Threads", "Direct Messages, Group Messages and Mentions", "Slack Huddles, Calls and Screen Sharing", "Sharing Files, Links and Documents", "Search, Bookmarks and Saved Items", "Notifications, Preferences and Productivity Tips"] },
      { title: "Slack Administration", role: "Administrator", color: "#2eb67d", cert: ["Admin", "Salesforce Certified Slack Administrator", "Salesforce"],
        examNote: "Exam domains: Fundamentals 18% · User Lifecycle Management 13% · Workspace and Org Management 17% · Apps, AI and Automations 20% · Governance, Security and Compliance 22% · Analytics and Adoption 10%.",
        lessons: ["Slack Administration: Roles and Responsibilities", "Workspace and Organization Settings", "Managing Users, Guests and User Groups", "User Provisioning and Deactivation", "Authentication, SSO and SCIM", "Channel Administration and Governance", "Slack Connect Administration", "Apps, Integrations and Permissions", "Workflow Builder and Automation", "Slack AI Administration", "Security, Compliance and Data Governance", "Enterprise Grid Administration", "Analytics, Reporting and User Adoption", "Troubleshooting and Administration Scenarios"],
        exam: ["Understanding the Slack Administrator Exam", "Exam Objectives Checklist", "Fundamentals and User Lifecycle Management", "Workspace and Organization Management", "App, AI and Automation Administration", "Governance, Security and Compliance", "Analytics and Adoption", "Practice Questions", "Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"] },
      { title: "Slack Consulting", role: "Consultant", color: "#ecb22e", cert: ["Consultant", "Salesforce Certified Slack Consultant", "Salesforce"],
        examNote: "Check Salesforce's latest Slack Consultant exam guide before you study: the published guide may refer to an older release.",
        lessons: ["Understanding Slack Consulting and Implementation", "Client Discovery and Business Requirements", "Designing a Slack Workspace Architecture", "Planning Workspace and Enterprise Grid Deployment", "Slack Migration Planning and Execution", "Security, Governance and Policy Design", "Change Management and User Adoption", "Training, Enablement and Communication Plans", "Measuring Success and ROI", "Managing Client Projects and Deliverables", "Real-World Slack Implementation Case Study"] },
      { title: "Slack Development", role: "Developer", color: "#e01e5a", cert: ["Developer", "Salesforce Certified Slack Developer", "Salesforce"],
        lessons: ["Slack Platform and App Development Overview", "Creating Slack Apps and App Manifests", "Understanding OAuth, Scopes and Permissions", "Slack API Fundamentals", "Designing Interfaces with Block Kit", "Events API and Event Subscriptions", "Socket Mode and HTTP Endpoints", "Building Apps with Bolt Framework", "Slack Commands, Interactivity and Modals", "Workflow Builder and Custom Functions", "Bots, AI Agents and Automation", "App Security and Request Verification", "Testing, Deployment and Hosting", "Publishing and Managing Slack Apps"] }
    ]},
  { id: "zoom", name: "Zoom", group: "collab", color: "#0b5cff", tags: ["Meetings", "Webinars", "Rooms"],
    desc: "Video meetings and webinars. IT support often troubleshoots meetings, microphones, cameras, connectivity and conference rooms.",
    note: "Zoom has no general professional certification for IT staff. This path is skills-based: from everyday user, to supporting users, to administrator.",
    levels: [
      { title: "Zoom Fundamentals", role: "Everyday user", color: "#7dd3fc", lessons: ["What Is Zoom? Meetings, Webinars and Zoom Workplace", "Installing and Updating Zoom Workplace", "Joining and Scheduling Meetings", "Hosting and Managing Meetings", "Microphone, Speaker and Camera Settings", "Screen Sharing, Chat and Meeting Controls", "Zoom Calendar and Outlook Integration", "Meeting Recording and Cloud Storage Basics"] },
      { title: "Supporting Zoom Users", role: "1st Line Support", color: "#3b82f6", lessons: ["Zoom Troubleshooting Methodology", "Microphone and Speaker Problems", "Camera and Video Problems", "Network Connectivity and Meeting Quality", "Screen Sharing and Recording Issues", "Zoom Installation, Updates and Application Errors", "Login, Authentication and Account Problems", "Meeting Access, Waiting Rooms and Passcodes", "Zoom on Phones and Tablets", "Webinars and Large Meetings", "Supporting Zoom Rooms and Conference Rooms"],
        assess: ["Lab: Diagnose a Microphone That Isn't Detected", "Lab: Troubleshoot Poor Meeting Quality", "Lab: Fix a Camera That Shows a Black Screen", "Lab: Resolve a User Who Cannot Join a Meeting"], assessTitle: "Practical Labs · Troubleshooting", assessText: "Hands-on support scenarios: find the cause, fix it and explain it to the user." },
      { title: "Zoom Administration", role: "Zoom Administrator", color: "#818cf8", lessons: ["Zoom Admin Portal Overview", "Account Management and Licensing", "User Management, Groups and Roles", "Meeting Policies and Account Settings", "Security, Passcodes and Waiting Rooms", "Single Sign-On (SSO) and Authentication", "User Provisioning and SCIM", "Zoom Rooms Administration", "Webinar Administration", "Reports, Dashboards and Usage Analytics", "Integrations, APIs and Third-Party Applications", "Monitoring, Troubleshooting and Administration Best Practices"] }
    ]},
  { id: "rdp", name: "Microsoft Remote Desktop (RDP)", group: "collab", color: "#0078d4", tags: ["Windows", "Built-in", "Protocol"],
    desc: "Remote Desktop Protocol: Windows' built-in way to connect to and fix PCs and servers from far away.",
    note: "There is no exam just for RDP. At expert level, AZ-140 covers Azure Virtual Desktop, built on the same ideas.",
    levels: [
      { title: "Remote Desktop Basics", role: "1st Line Support", color: "#80bbe9", lessons: ["What Is RDP?", "Turning On Remote Desktop", "Connecting with the Remote Desktop App", "Common RDP Errors and Fixes"] },
      { title: "RDP in a Company Network", role: "2nd Line Support", color: "#3a98e0", lessons: ["Network Level Authentication", "RDP Through VPN and Gateways", "Securing RDP", "Remote Desktop Services on Windows Server"] },
      { title: "Azure Virtual Desktop", role: "Virtual Desktop Specialist", color: "#0078d4", cert: ["AZ-140", "Microsoft Certified: Azure Virtual Desktop Specialty", "Microsoft"],
        lessons: ["What Is Azure Virtual Desktop?", "Host Pools and Session Hosts", "User Profiles with FSLogix", "Monitoring and Scaling", "AZ-140 Exam Preparation"] }
    ]},
  { id: "teamviewer", name: "TeamViewer", group: "collab", color: "#0e8ee9", tags: ["Remote Support", "Cross-platform"],
    desc: "Cross-platform remote access and support for Windows, Mac, Linux, iOS and Android.",
    note: "TeamViewer has free product training but no widely used exam for IT support staff.",
    levels: [
      { title: "TeamViewer Basics", role: "1st Line Support", color: "#86c6f4", lessons: ["What Is TeamViewer?", "Starting a Remote Session", "Chat, File Transfer and Reboot"] },
      { title: "TeamViewer for IT Teams", role: "Support Team", color: "#0e8ee9", lessons: ["Unattended Access", "Groups and Device Management", "Security Best Practices", "Session Reports"] }
    ]},
  { id: "anydesk", name: "AnyDesk", group: "collab", color: "#ef443b", tags: ["Remote Support", "Lightweight"],
    desc: "A light and fast remote desktop tool, common in smaller companies.",
    note: "AnyDesk has no official certification. Learn it through the levels below.",
    levels: [
      { title: "AnyDesk Basics", role: "1st Line Support", color: "#f5938e", lessons: ["What Is AnyDesk?", "Connecting to a User's Computer", "Permissions and Session Controls"] },
      { title: "AnyDesk for IT Teams", role: "Support Team", color: "#ef443b", lessons: ["Unattended Access and Address Book", "Spotting Remote Support Scams", "Security Settings"] }
    ]}
];

/* ---- build lesson keys, labels and "pseudo-levels" so lesson.html can open every lesson ---- */
const COURSE_LEVELS = [];
(function () {
  ITIL_COURSE.levels.forEach(function (lv, i) {
    lv.lessons = lv.lessons.map(function (t, k) { return Array.isArray(t) ? t : ["itil." + i + "." + (k + 1), t]; });
    lv.lessons.forEach(function (r, k) { LBL[r[0]] = i + "." + (k + 1); });
    COURSE_LEVELS.push({ id: "itil-" + i, name: "ITIL Level " + i, title: lv.title, color: ITIL_COURSE.color, lessons: lv.lessons,
      href: "course.html?c=itil#lv" + i, group: "itil", crumbs: [["Road map", "index.html#map"], ["ITIL Foundation", "course.html?c=itil"]] });
  });
  /* every level with a certification gets an Exam Preparation section (lessons x1, x2 ...) */
  function examPrep(code) {
    return ["How the " + code + " Exam Works", code + " Exam Objectives Checklist", code + " Practice Questions", code + " Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"];
  }
  Object.keys(ITIL_COURSE.modules).forEach(function (id) {
    var t = ITIL_COURSE.modules[id], tag = t.code.replace(/\s+/g, "");
    if (t.foundation) return;
    t.lessons = t.lessons.map(function (x, k) { return Array.isArray(x) ? x : ["itilp." + id + "." + (k + 1), x]; });
    t.lessons.forEach(function (r, k) { LBL[r[0]] = tag + "." + (k + 1); });
    t.examLessons = !t.exam ? [] : ["How the " + t.title + " Exam Works", "Exam Objectives Checklist", "Practice Questions", "Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"]
      .map(function (x, k) { return ["itilp." + id + ".x" + (k + 1), x]; });
    t.examLessons.forEach(function (r, k) { LBL[r[0]] = tag + ".E" + (k + 1); });
    COURSE_LEVELS.push({ id: "itilp-" + id, name: "ITIL", title: t.title, color: t.color, lessons: t.lessons.concat(t.examLessons),
      href: "course.html?c=itil&m=" + id, group: "itilp", crumbs: [["Road map", "index.html#map"], ["ITIL", "course.html?c=itil"]] });
  });
  TOOLS.forEach(function (tool) {
    tool.levels.forEach(function (lv, i) {
      lv.lessons = lv.lessons.filter(function (t) { return Array.isArray(t) || !/Exam Preparation$/.test(t); })
        .map(function (t, k) { return Array.isArray(t) ? t : [tool.id + "." + i + "." + (k + 1), t]; });
      lv.lessons.forEach(function (r, k) { LBL[r[0]] = tool.single ? String(k + 1) : i + "." + (k + 1); });
      lv.exam = !lv.cert ? [] : (lv.exam || examPrep(lv.cert[0].split(" ")[0])).map(function (t, k) { return Array.isArray(t) ? t : [tool.id + "." + i + ".x" + (k + 1), t]; });
      lv.exam.forEach(function (r, k) { LBL[r[0]] = i + ".E" + (k + 1); });
      if (!lv.cert && lv.assess) { lv.exam = lv.assess.map(function (t, k) { return [tool.id + "." + i + ".p" + (k + 1), t]; }); lv.exam.forEach(function (r, k) { LBL[r[0]] = i + ".P" + (k + 1); }); }
      COURSE_LEVELS.push({ id: tool.id + "-" + i, name: tool.single ? tool.name : tool.name + " · Level " + i, title: lv.cert ? lv.cert[0] + " · " + lv.title : lv.title, color: lv.color, lessons: lv.lessons.concat(lv.exam),
        href: "tool.html?t=" + tool.id + "&l=" + i, group: "tool-" + tool.id, crumbs: [["Tools", "tools.html"], [tool.name, "tool.html?t=" + tool.id]] });
    });
  });
})();

/* ---- ITIL recommendation boxes shown at the end of the Intermediate and Advanced trees ---- */
const ITIL_RECS = {
  itilpath: { badge: "foundation", title: "ITIL & IT Service Management Pathway", sub: "Recommended certifications · Foundation to ITIL Master", color: "#a78bfa", href: "course.html?c=itil", groups: [] },
  agile: { title: "Agile & Project Management Pathway", sub: "Recommended certifications · PSM, PSPO, PRINCE2, PMP and more", color: "#f59e0b", href: "path.html?p=agile", groups: [], agile: true },
  advanced: { badge: "mp", title: "ITIL Managing Professional & Strategic Leader", sub: "Recommended certifications", color: "#38bdf8", groups: [
    { name: "ITIL Managing Professional", items: ["product", "service", "experience", "transformation"], note: "Transformation is the shared requirement" },
    { name: "ITIL Strategic Leader", items: ["strategy", "transformation"], note: "Transformation is the shared requirement" }
  ]},
  further: { badge: "master", title: "Further achievements and specialization", sub: "Optional", color: "#fbbf24", groups: [
    { name: "ITIL Master", items: ["master"], note: "requires all three designations" },
    { name: "ITIL AI Governance", items: ["aigov"], note: "optional extension certification" }
  ]}
};
function itilRecCard(key) {
  var r = ITIL_RECS[key], M = ITIL_COURSE.modules;
  var card = document.createElement("div"); card.className = "itil-rec-card"; card.style.setProperty("--c", r.color);
  var h = '<a class="itil-rec-head" href="' + (r.href || "course.html?c=itil") + '">' + (r.agile ? '<div class="cx-badge" style="--vc:' + r.color + '"><small>Agile</small><b>PM</b></div>' : r.badge ? itilBadgeImg(r.badge, 72) : '<div class="cx-badge" style="--vc:' + r.color + '"><small>PeopleCert</small><b>ITIL</b></div>') + '<div><b class="irc-t"></b><span class="irc-s"></span></div></a><div class="itil-rec-groups"></div>';
  card.innerHTML = h;
  card.querySelector(".irc-t").textContent = r.title;
  card.querySelector(".irc-s").textContent = r.sub + (r.groups.length ? " · click a module" : "");
  var box = card.querySelector(".itil-rec-groups");
  if (!r.groups.length) box.remove();
  r.groups.forEach(function (g) {
    var d = document.createElement("div"); d.className = "itil-rec-group";
    d.innerHTML = '<div class="itil-rec-gt"></div><div class="itil-rec-chips"></div>';
    d.querySelector(".itil-rec-gt").textContent = g.name + (g.note ? "  (" + g.note + ")" : "");
    g.items.forEach(function (id) {
      var t = M[id], a = document.createElement("a"); a.className = "itil-chip"; a.href = "course.html?c=itil&m=" + id; a.style.setProperty("--mc", t.color);
      a.innerHTML = itilBadgeImg(id, 22, "itil-chip-ico") + "<span></span>";
      a.querySelector("span").textContent = t.title + (["msf", "pic", "cai"].indexOf(id) >= 0 ? " (" + t.code + ")" : ""); d.querySelector(".itil-rec-chips").appendChild(a);
    });
    box.appendChild(d);
  });
  return card;
}

/* official-style ITIL badge images (assets/itil-badges/<id>.png) */
const ITIL_BADGES = ["foundation", "transformation", "pm", "mp", "sl", "master", "msf", "pic", "cai", "product", "service", "experience", "strategy", "aigov"];
function itilBadgeImg(id, size, cls) {
  if (ITIL_BADGES.indexOf(id) < 0) return "";
  return '<img class="itil-badge ' + (cls || "") + '" src="assets/itil-badges/' + id + '.png" alt="" width="' + size + '" height="' + size + '">';
}

/* ---- Agile & Project Management pathway (page: path.html?p=agile) ----
   tracks = columns on the page; certs inside a track go from entry to expert. */
const AGILE_PATH = {
  id: "agile", name: "Agile & Project Management Pathway", color: "#f59e0b",
  desc: "Run projects and agile teams: Scrum Master and Product Owner certifications, plus PRINCE2 and PMP for project management.",
  note: "Exams change over time: the PMP exam was updated on 9 July 2026 and PRINCE2 is now version 7. Check the official site before you book.",
  tracks: [
    { name: "Scrum Master (Scrum.org)", color: "#38bdf8", certs: [
      { id: "psm1", code: "PSM I", title: "Professional Scrum Master I", vendor: "Scrum.org", desc: "The Scrum Guide, Scrum roles, events and artifacts. No course required.",
        lessons: ["What Scrum Is and Why Teams Use It", "The Scrum Team: Scrum Master, Product Owner, Developers", "Scrum Events: Sprint, Planning, Daily, Review, Retrospective", "Scrum Artifacts and Commitments", "The Scrum Master as Servant Leader"] },
      { id: "psm2", code: "PSM II", title: "Professional Scrum Master II", vendor: "Scrum.org", desc: "Advanced Scrum Master skills: coaching, facilitation and removing impediments.",
        lessons: ["Coaching and Facilitation", "Helping the Product Owner", "Dealing with Impediments", "Scaling Scrum to More Teams", "Real Scrum Master Scenarios"] },
      { id: "psm3", code: "PSM III", title: "Professional Scrum Master III", vendor: "Scrum.org", desc: "Expert level: written essay answers on complex real situations.",
        lessons: ["Scrum in Complex Organisations", "Changing Organisational Culture", "Leading Agile Transformation", "Writing Strong Essay Answers"] }
    ]},
    { name: "Product Owner (Scrum.org)", color: "#a78bfa", certs: [
      { id: "pspo1", code: "PSPO I", title: "Professional Scrum Product Owner I", vendor: "Scrum.org", desc: "Product value, the Product Backlog and the Product Owner role.",
        lessons: ["What a Product Owner Does", "Product Vision and Product Goal", "Managing the Product Backlog", "Maximising Value", "Working with Stakeholders"] },
      { id: "pspo2", code: "PSPO II", title: "Professional Scrum Product Owner II", vendor: "Scrum.org", desc: "Advanced product ownership: strategy, value metrics and stakeholders.",
        lessons: ["Product Strategy", "Measuring Value with Evidence", "Release Planning and Forecasting", "Product Owner Scenarios"] },
      { id: "pspo3", code: "PSPO III", title: "Professional Scrum Product Owner III", vendor: "Scrum.org", desc: "Expert product ownership in complex organisations.",
        lessons: ["Product Ownership at Scale", "Business Agility", "Leading Product Decisions", "Writing Strong Essay Answers"] }
    ]},
    { name: "Scrum Master (Scrum Alliance & SAFe)", color: "#fb923c", certs: [
      { id: "csm", code: "CSM", title: "Certified ScrumMaster", vendor: "Scrum Alliance", desc: "Two-day course with a certified trainer, then a short online exam.",
        lessons: ["Scrum Basics for the CSM", "Running Scrum Events", "Supporting the Team", "What to Expect in the CSM Course"] },
      { id: "acsm", code: "A-CSM", title: "Advanced Certified ScrumMaster", vendor: "Scrum Alliance", desc: "For Scrum Masters with at least one year of experience.",
        lessons: ["Facilitation Techniques", "Coaching Teams", "Handling Conflict", "Working with Several Teams"] },
      { id: "cspsm", code: "CSP-SM", title: "Certified Scrum Professional – ScrumMaster", vendor: "Scrum Alliance", desc: "Top Scrum Alliance Scrum Master level, needs A-CSM and experience.",
        lessons: ["Systems Thinking", "Organisational Coaching", "Agile Leadership", "Building Your CSP Portfolio"] },
      { id: "ssm", alt: true, code: "SSM", title: "SAFe Scrum Master", vendor: "Scaled Agile", desc: "Scrum Master role inside the Scaled Agile Framework (SAFe) for big companies.",
        lessons: ["What SAFe Is", "Agile Release Trains", "PI Planning", "The SAFe Scrum Master Role"] }
    ]},
    { name: "Project Management", color: "#f472b6", certs: [
      { id: "capm", code: "CAPM", title: "Certified Associate in Project Management", vendor: "PMI", desc: "Entry-level PMI certificate, a good first step before PMP.",
        lessons: ["Project Management Basics", "Predictive vs Agile Projects", "Business Analysis Basics", "The Project Lifecycle"] },
      { id: "prince2f", code: "PRINCE2 F", title: "PRINCE2 7 Foundation", vendor: "PeopleCert", desc: "The PRINCE2 method: principles, practices and processes.",
        lessons: ["What PRINCE2 Is", "The 7 Principles", "The 7 Practices", "The 7 Processes", "People and Project Context"] },
      { id: "prince2p", code: "PRINCE2 P", title: "PRINCE2 7 Practitioner", vendor: "PeopleCert", desc: "Apply PRINCE2 to real project scenarios. Needs Foundation (or another accepted cert).",
        lessons: ["Tailoring PRINCE2 to a Project", "Business Case and Plans", "Risk, Issues and Change", "Scenario Practice"] },
      { id: "pmiacp", code: "PMI-ACP", title: "PMI Agile Certified Practitioner", vendor: "PMI", desc: "Agile methods across Scrum, Kanban, Lean and more.",
        lessons: ["Agile Mindset and Principles", "Scrum, Kanban and Lean", "Agile Planning and Estimation", "Team Performance"] },
      { id: "pmp", code: "PMP", title: "Project Management Professional", vendor: "PMI", desc: "The best-known project management certification. Needs project experience.",
        lessons: ["PMP Eligibility and Application", "People Domain", "Process Domain", "Business Environment Domain", "Agile and Hybrid Projects"] }
    ]}
  ]
};
(function () {
  AGILE_PATH.tracks.forEach(function (tr) {
    tr.certs.forEach(function (c) {
      c.color = tr.color;
      c.lessons = c.lessons.map(function (x, k) { return Array.isArray(x) ? x : ["agile." + c.id + "." + (k + 1), x]; });
      var tag = c.code.replace(/\s+/g, "");
      c.lessons.forEach(function (r, k) { LBL[r[0]] = tag + "." + (k + 1); });
      c.examLessons = ["How the " + c.code + " Exam Works", "Exam Objectives Checklist", "Practice Questions", "Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"]
        .map(function (x, k) { return ["agile." + c.id + ".x" + (k + 1), x]; });
      c.examLessons.forEach(function (r, k) { LBL[r[0]] = tag + ".E" + (k + 1); });
      COURSE_LEVELS.push({ id: "agile-" + c.id, name: c.code, title: c.title, color: c.color, lessons: c.lessons.concat(c.examLessons),
        href: "path.html?p=agile&c=" + c.id, group: "agile", crumbs: [["Intermediate", "intermediate.html"], ["Agile & Project Management", "path.html?p=agile"]] });
    });
  });
})();

/* ---- "About this certification": what it is, who it is for, what jobs it helps with ----
   keys: ITIL module ids, Agile cert ids, and "<toolId>-<level>" for tool certifications */
const CERT_INFO = {
  /* ITIL */
  foundation: ["The basics of ITIL: how IT teams deliver services and keep users happy.", "Beginners, service desk staff and anyone working in an IT team.", "Service desk agent, IT support, junior ITSM analyst."],
  transformation: ["How to lead change when a company modernises its IT and ways of working.", "People who already know ITIL Foundation and help their company change.", "Team lead, change lead, transformation or improvement manager."],
  msf: ["Running day-to-day IT operations: monitoring, incidents, service desk and requests.", "Service desk and support people who want to lead or own a practice.", "Service desk lead, incident manager, support team manager."],
  pic: ["Planning and controlling change: releases, deployments, assets and configuration.", "People who handle changes, releases or IT assets.", "Change manager, release manager, IT asset or CMDB manager."],
  cai: ["Working with suppliers and customers, and making services better over time.", "People who manage vendors, relationships or improvement work.", "Supplier manager, relationship manager, continual improvement lead."],
  product: ["Managing digital products from idea to retirement.", "People who own or shape digital products.", "Product manager, product owner, digital product lead."],
  service: ["Designing, running and measuring IT services.", "IT service managers and people responsible for a service.", "IT service manager, service owner, service delivery manager."],
  experience: ["Designing great experiences for customers and users of IT services.", "People working on user journeys, customer experience or UX.", "CX/UX lead, customer experience manager, service designer."],
  strategy: ["Setting digital strategy and making sure IT supports business goals.", "Senior people who make big decisions about IT.", "IT director, head of IT, CIO, digital strategy lead."],
  master: ["The top ITIL level: you prove you can use ITIL in real work at a high level.", "Very experienced ITIL professionals who already hold all three designations.", "Senior IT leader, ITSM consultant, CIO."],
  aigov: ["How to use AI safely: rules, risks and responsible adoption in IT.", "Anyone responsible for AI use, risk or compliance in a company.", "AI governance lead, risk and compliance manager, IT manager."],
  /* Agile & Project Management */
  psm1: ["Proves you understand Scrum: the roles, events and rules from the Scrum Guide.", "Beginners in agile, new Scrum Masters, developers and team members.", "Scrum Master, agile team member, junior project coordinator."],
  psm2: ["Shows you can really act as a Scrum Master: coaching, facilitation and fixing team problems.", "Scrum Masters with some real experience.", "Scrum Master, agile coach (junior), delivery lead."],
  psm3: ["The expert Scrum Master level, with essay-style answers on hard real situations.", "Senior Scrum Masters and agile coaches.", "Senior Scrum Master, agile coach, agile transformation lead."],
  pspo1: ["Proves you understand the Product Owner role: value, backlog and stakeholders.", "New Product Owners, business analysts and product people.", "Product Owner, business analyst, junior product manager."],
  pspo2: ["Advanced product ownership: strategy, measuring value and planning releases.", "Product Owners with real experience.", "Product Owner, product manager."],
  pspo3: ["Expert product ownership in big, complex organisations.", "Senior Product Owners and product leaders.", "Senior product manager, head of product, product coach."],
  csm: ["A beginner Scrum Master certificate: a 2-day course with a trainer, then a short exam.", "People who like learning in a live class.", "Scrum Master, agile team member."],
  acsm: ["The next step after CSM: better facilitation, coaching and handling conflict.", "Scrum Masters with about a year of experience.", "Scrum Master, team coach."],
  cspsm: ["Scrum Alliance's top Scrum Master level: leading change across teams.", "Experienced Scrum Masters who hold A-CSM.", "Senior Scrum Master, agile coach."],
  ssm: ["The Scrum Master role inside SAFe, the framework big companies use to scale agile.", "Scrum Masters in large companies that use SAFe.", "SAFe Scrum Master, team coach in large organisations."],
  capm: ["An entry-level project management certificate from PMI, the people behind PMP.", "Beginners with little or no project experience.", "Project coordinator, project assistant, junior PM."],
  prince2f: ["The basics of PRINCE2, a structured project method used a lot in Europe and the UK.", "Anyone working on or around projects.", "Project coordinator, project support officer, junior PM."],
  prince2p: ["Using PRINCE2 on real projects: tailoring the method, plans, risks and changes.", "People who manage projects or want to.", "Project manager, PMO analyst."],
  pmiacp: ["Agile methods across the board: Scrum, Kanban, Lean and more.", "People working on agile projects who want a broad agile certificate.", "Agile project manager, Scrum Master, delivery lead."],
  pmp: ["The best-known project management certificate in the world. Needs real project experience.", "Project managers with a few years of experience.", "Project manager, senior PM, program manager, PMO lead."],
  /* Tool certifications */
  "servicenow-1": ["Proves you can set up and look after a ServiceNow system: users, forms, lists and reports.", "Beginners in ServiceNow and admins of the platform.", "ServiceNow administrator, ITSM analyst."],
  "servicenow-2": ["Proves you can build your own apps on ServiceNow with scripts and flows.", "ServiceNow admins who want to code.", "ServiceNow developer."],
  "servicenow-3": ["Proves you can set up ServiceNow ITSM for a company: incidents, problems, changes and requests.", "ServiceNow admins and consultants working on ITSM.", "ServiceNow consultant, implementation specialist."],
  "servicenow-4": ["A bundle certificate for one ServiceNow area, like ITSM, with extra micro-certificates.", "Experienced ServiceNow consultants.", "Senior ServiceNow consultant, application specialist."],
  "servicenow-5": ["The top ServiceNow level: designing and leading big ServiceNow platforms.", "Very experienced ServiceNow architects.", "ServiceNow technical architect, master architect."],
  "jira-1": ["Proves you can work requests as an agent in Jira Service Management.", "Service desk agents using Jira.", "Service desk agent, IT support."],
  "jira-2": ["Proves you understand ITSM practices and AI features inside Jira Service Management.", "Agents and team leads using JSM for ITSM.", "ITSM analyst, service desk lead."],
  "jira-3": ["Proves you can set up and manage service projects: request types, workflows, SLAs.", "People who configure JSM for their team.", "JSM project admin, ITSM tools specialist."],
  "jira-4": ["Proves you can administer a whole Jira Cloud site.", "Jira administrators.", "Jira administrator, Atlassian admin."],
  "microsoft365-1": ["The basics of Microsoft 365: cloud, productivity, security and AI (replaced MS-900).", "Beginners and anyone supporting Microsoft 365 users.", "IT support, M365 support technician."],
  "microsoft365-2": ["Proves you can manage company devices with Intune and Windows Autopilot.", "Desktop support and endpoint admins.", "Endpoint administrator, desktop engineer, 2nd line support."],
  "microsoft365-3": ["Proves you can set up and manage Microsoft Teams for a company.", "People who run Teams, meetings and calling.", "Teams administrator, collaboration engineer."],
  "microsoft365-4": ["Proves you can run a Microsoft 365 tenant with its AI services: Entra ID, Defender, Purview, Copilot and agents (replaces MS-102).", "Experienced Microsoft 365 admins.", "Microsoft 365 administrator, M365 and AI services engineer."],
  "googleworkspace-1": ["Proves you can manage Google Workspace: users, groups and basic settings.", "IT support staff in companies or schools using Google.", "Workspace admin, IT support."],
  "slack-1": ["Proves you can manage a Slack workspace: users, channels, apps and security.", "People who run Slack for their company.", "Slack administrator, collaboration admin."],
  "slack-2": ["Proves you can plan and roll out Slack for a whole organisation.", "Consultants and project leads.", "Slack consultant, collaboration consultant."],
  "slack-3": ["Proves you can build Slack apps, bots and automations.", "Developers.", "Slack developer, integration developer."],
  "rdp-2": ["Proves you can build and run virtual desktops in Azure (Azure Virtual Desktop).", "Admins who manage remote desktops at scale.", "Virtual desktop engineer, cloud desktop admin."]
};
function certAbout(key) {
  var i = CERT_INFO[key]; if (!i) return null;
  var d = document.createElement("div"); d.className = "cert-about";
  [["📘", "What it is"], ["👤", "Who it's for"], ["💼", "Jobs it helps with"]].forEach(function (h, k) {
    var b = document.createElement("div"); b.className = "ca-item";
    b.innerHTML = '<span class="ca-ico"></span><div><b></b><p></p></div>';
    b.querySelector(".ca-ico").textContent = h[0]; b.querySelector("b").textContent = h[1]; b.querySelector("p").textContent = i[k];
    d.appendChild(b);
  });
  return d;
}

/* ---- "done" helpers: a tool / level / certification counts as done when every one of its lessons is marked done ---- */
function rowsDone(rows) {
  var d = {}; try { d = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) { d = {}; }
  return !!rows && rows.length > 0 && rows.every(function (r) { return d[r[0]]; });
}
function toolRows(t) { var a = []; t.levels.forEach(function (l) { a = a.concat(l.lessons, l.exam || []); }); return a; }

/* ---- ServiceNow CSA quizzes (1.E3 practice questions, 1.E4 full mock) ---- */
QUIZZES["servicenow.1.x3"] = { type: "mcq", color: "#62d84e", title: "CSA practice questions", items: [{"q": "A user can open the incident list but cannot see a particular module in the application navigator. What should an administrator check first?", "o": ["The user's monitor resolution.", "The user's roles and access to the application or module.", "The incident number format.", "The browser download folder."], "a": 1, "e": "Navigation visibility can depend on roles, application access, and configuration."}, {"q": "What is the main purpose of a reference field?", "o": ["To store a long paragraph.", "To link to a record in another table.", "To create a chart.", "To encrypt every field in a form."], "a": 1, "e": "A reference field points to a record in another table."}, {"q": "A team wants to show incidents grouped by assignment group. Which feature is most appropriate?", "o": ["A report.", "A user password.", "A plugin dependency.", "A form annotation."], "a": 0, "e": "Reports summarize and visualize records based on selected data and conditions."}, {"q": "What is the main purpose of a catalog item?", "o": ["To record an unplanned service outage.", "To let users request a defined service or item.", "To replace all access controls.", "To store a database backup."], "a": 1, "e": "Catalog items provide structured request experiences."}, {"q": "What is an import set commonly used for?", "o": ["Staging incoming data before transformation.", "Sending a notification to every user.", "Hiding a form field.", "Creating a Visual Task Board."], "a": 0, "e": "Import sets stage source data before it is mapped to target tables."}, {"q": "Which statement about a UI Policy is correct?", "o": ["It is always a server-side security control.", "It can control field behavior on a form.", "It replaces the CMDB.", "It is used only to import records."], "a": 1, "e": "UI Policies can make fields visible, mandatory, or read-only based on conditions."}, {"q": "What is the purpose of an Update Set?", "o": ["To capture supported configuration changes for transfer between instances.", "To export every record in every table as a full backup.", "To assign incidents to users.", "To publish knowledge articles."], "a": 0, "e": "Update Sets capture supported configuration records, not a complete instance backup."}, {"q": "Which domain has the highest weighting in the January 2026 CSA blueprint?", "o": ["Platform Overview and Navigation.", "Instance Configuration.", "Database Management and Platform Security.", "Data Migration and Integration."], "a": 2, "e": "This domain represents 30 percent."}, {"q": "A user can see a field on a form, but should not be allowed to read its value. What should control this?", "o": ["A list sort.", "An appropriate access control.", "A dashboard color.", "A tag."], "a": 1, "e": "Hiding or showing fields in the interface is not a substitute for access control."}, {"q": "What does CSDM provide?", "o": ["A standard framework for organizing service-related data.", "A way to change a user's password.", "A notification template.", "A form color theme."], "a": 0, "e": "CSDM guides consistent service data modeling."}] };
QUIZZES["servicenow.1.x4"] = { type: "mcq", color: "#62d84e", title: "CSA full mock exam (60 questions)", items: [{"q": "What is a ServiceNow instance?", "o": ["To help users access platform applications and functions.", "A table stores records; an application groups related capabilities.", "A customer's environment on the ServiceNow platform.", "Role, application access, licensing, or configuration restrictions."], "a": 2, "e": "Answer: A customer's environment on the ServiceNow platform."}, {"q": "What is a module?", "o": ["A navigation entry that opens a specific function, list, form, or page.", "To test changes safely before they affect live work.", "Role, application access, licensing, or configuration restrictions.", "A customer's environment on the ServiceNow platform."], "a": 0, "e": "Answer: A navigation entry that opens a specific function, list, form, or page."}, {"q": "What is the purpose of unified navigation?", "o": ["A customer's environment on the ServiceNow platform.", "To help users access platform applications and functions.", "A table stores records; an application groups related capabilities.", "To test changes safely before they affect live work."], "a": 1, "e": "Answer: To help users access platform applications and functions."}, {"q": "Why may a module be unavailable to a user?", "o": ["Role, application access, licensing, or configuration restrictions.", "To test changes safely before they affect live work.", "A table stores records; an application groups related capabilities.", "A customer's environment on the ServiceNow platform."], "a": 0, "e": "Answer: Role, application access, licensing, or configuration restrictions."}, {"q": "What is the difference between a table and an application?", "o": ["A customer's environment on the ServiceNow platform.", "To test changes safely before they affect live work.", "A table stores records; an application groups related capabilities.", "A navigation entry that opens a specific function, list, form, or page."], "a": 2, "e": "Answer: A table stores records; an application groups related capabilities."}, {"q": "Why distinguish development and production?", "o": ["A customer's environment on the ServiceNow platform.", "A navigation entry that opens a specific function, list, form, or page.", "To test changes safely before they affect live work.", "To help users access platform applications and functions."], "a": 2, "e": "Answer: To test changes safely before they affect live work."}, {"q": "What does a plugin do?", "o": ["A user-specific change to their experience.", "Enables platform functionality.", "To identify unexpected effects before production.", "The feature may require other components or configuration."], "a": 1, "e": "Answer: Enables platform functionality."}, {"q": "Why review plugin dependencies?", "o": ["Business need, entitlement, dependencies, and impact.", "A change to platform configuration or behavior for an organization.", "The feature may require other components or configuration.", "Enables platform functionality."], "a": 2, "e": "Answer: The feature may require other components or configuration."}, {"q": "What is personalization?", "o": ["A change to platform configuration or behavior for an organization.", "Business need, entitlement, dependencies, and impact.", "To identify unexpected effects before production.", "A user-specific change to their experience."], "a": 3, "e": "Answer: A user-specific change to their experience."}, {"q": "What is customization?", "o": ["A user-specific change to their experience.", "A change to platform configuration or behavior for an organization.", "The feature may require other components or configuration.", "Business need, entitlement, dependencies, and impact."], "a": 1, "e": "Answer: A change to platform configuration or behavior for an organization."}, {"q": "Why test configuration changes?", "o": ["The feature may require other components or configuration.", "Business need, entitlement, dependencies, and impact.", "A change to platform configuration or behavior for an organization.", "To identify unexpected effects before production."], "a": 3, "e": "Answer: To identify unexpected effects before production."}, {"q": "What should be checked before installing an application?", "o": ["Business need, entitlement, dependencies, and impact.", "A change to platform configuration or behavior for an organization.", "Enables platform functionality.", "To identify unexpected effects before production."], "a": 0, "e": "Answer: Business need, entitlement, dependencies, and impact."}, {"q": "What is a list?", "o": ["A view of multiple records from a table.", "Field, operator, and value.", "It may update the underlying record.", "A clear question and the audience's information needs."], "a": 0, "e": "Answer: A view of multiple records from a table."}, {"q": "What is a form?", "o": ["It may update the underlying record.", "A presentation or summary of data from records.", "A visual way to organize task records as cards and columns.", "A view of one record and its fields."], "a": 3, "e": "Answer: A view of one record and its fields."}, {"q": "What are the parts of a filter condition?", "o": ["They create noise and reduce trust.", "All grouped conditions must be true.", "A display of records related to the current record.", "Field, operator, and value."], "a": 3, "e": "Answer: Field, operator, and value."}, {"q": "What does AND mean in a filter?", "o": ["A view of one record and its fields.", "It may update the underlying record.", "A visual way to organize task records as cards and columns.", "All grouped conditions must be true."], "a": 3, "e": "Answer: All grouped conditions must be true."}, {"q": "What does OR mean?", "o": ["A view of multiple records from a table.", "At least one condition in the group must be true.", "A presentation or summary of data from records.", "A record representing work that needs to be managed."], "a": 1, "e": "Answer: At least one condition in the group must be true."}, {"q": "What is a related list?", "o": ["A view of one record and its fields.", "A display of records related to the current record.", "To prevent messages going to the wrong people.", "All grouped conditions must be true."], "a": 1, "e": "Answer: A display of records related to the current record."}, {"q": "What is a form template?", "o": ["They create noise and reduce trust.", "Trigger or condition, recipients, and message content.", "A page that brings together reports and other components.", "A reusable set of predefined field values."], "a": 3, "e": "Answer: A reusable set of predefined field values."}, {"q": "Why review a template before saving?", "o": ["It may populate values that are not correct for the current record.", "A page that brings together reports and other components.", "Trigger or condition, recipients, and message content.", "The team responsible versus the individual handling the task."], "a": 0, "e": "Answer: It may populate values that are not correct for the current record."}, {"q": "What is a task record?", "o": ["A clear question and the audience's information needs.", "A display of records related to the current record.", "The team responsible versus the individual handling the task.", "A record representing work that needs to be managed."], "a": 3, "e": "Answer: A record representing work that needs to be managed."}, {"q": "What is the difference between assignment group and assigned to?", "o": ["The team responsible versus the individual handling the task.", "Field, operator, and value.", "They create noise and reduce trust.", "A display of records related to the current record."], "a": 0, "e": "Answer: The team responsible versus the individual handling the task."}, {"q": "What is a Visual Task Board?", "o": ["A view of multiple records from a table.", "A clear question and the audience's information needs.", "A visual way to organize task records as cards and columns.", "To prevent messages going to the wrong people."], "a": 2, "e": "Answer: A visual way to organize task records as cards and columns."}, {"q": "Why can moving a card matter?", "o": ["A view of multiple records from a table.", "At least one condition in the group must be true.", "It may update the underlying record.", "A reusable set of predefined field values."], "a": 2, "e": "Answer: It may update the underlying record."}, {"q": "What is a report?", "o": ["At least one condition in the group must be true.", "It may populate values that are not correct for the current record.", "A view of one record and its fields.", "A presentation or summary of data from records."], "a": 3, "e": "Answer: A presentation or summary of data from records."}, {"q": "What is a dashboard?", "o": ["All grouped conditions must be true.", "It may populate values that are not correct for the current record.", "A presentation or summary of data from records.", "A page that brings together reports and other components."], "a": 3, "e": "Answer: A page that brings together reports and other components."}, {"q": "What should guide report design?", "o": ["It may populate values that are not correct for the current record.", "A clear question and the audience's information needs.", "Field, operator, and value.", "A reusable set of predefined field values."], "a": 1, "e": "Answer: A clear question and the audience's information needs."}, {"q": "What are the main parts of a notification?", "o": ["Trigger or condition, recipients, and message content.", "A view of one record and its fields.", "A view of multiple records from a table.", "All grouped conditions must be true."], "a": 0, "e": "Answer: Trigger or condition, recipients, and message content."}, {"q": "Why test notification recipients?", "o": ["It may update the underlying record.", "To prevent messages going to the wrong people.", "A view of one record and its fields.", "A view of multiple records from a table."], "a": 1, "e": "Answer: To prevent messages going to the wrong people."}, {"q": "Why avoid duplicate notifications?", "o": ["They create noise and reduce trust.", "At least one condition in the group must be true.", "A record representing work that needs to be managed.", "A display of records related to the current record."], "a": 0, "e": "Answer: They create noise and reduce trust."}, {"q": "What is a knowledge base?", "o": ["A defined service or item that a user can request.", "A conversational interface for supported information and tasks.", "To confirm the process handles alternate outcomes correctly.", "A collection of reusable information articles."], "a": 3, "e": "Answer: A collection of reusable information articles."}, {"q": "How is an article different from a ticket?", "o": ["A defined service or item that a user can request.", "Questions or fields that collect request information.", "An article is reusable guidance; a ticket tracks a specific case.", "Provide a suitable escalation or human-support path."], "a": 2, "e": "Answer: An article is reusable guidance; a ticket tracks a specific case."}, {"q": "What is a catalog item?", "o": ["To confirm the process handles alternate outcomes correctly.", "A defined service or item that a user can request.", "A collection of reusable information articles.", "Questions or fields that collect request information."], "a": 1, "e": "Answer: A defined service or item that a user can request."}, {"q": "What are catalog variables?", "o": ["A conversational interface for supported information and tasks.", "A defined service or item that a user can request.", "Questions or fields that collect request information.", "A collection of reusable information articles."], "a": 2, "e": "Answer: Questions or fields that collect request information."}, {"q": "What is the purpose of an approval?", "o": ["The event or condition that starts a flow.", "The work required to deliver the requested service.", "To obtain an authorized decision before fulfillment.", "A conversational interface for supported information and tasks."], "a": 2, "e": "Answer: To obtain an authorized decision before fulfillment."}, {"q": "What is fulfillment?", "o": ["The work required to deliver the requested service.", "A conversational interface for supported information and tasks.", "The event or condition that starts a flow.", "Provide a suitable escalation or human-support path."], "a": 0, "e": "Answer: The work required to deliver the requested service."}, {"q": "What is a flow trigger?", "o": ["Questions or fields that collect request information.", "The event or condition that starts a flow.", "Provide a suitable escalation or human-support path.", "Create a task, update a record, or send a notification."], "a": 1, "e": "Answer: The event or condition that starts a flow."}, {"q": "Give an example of a flow action.", "o": ["The work required to deliver the requested service.", "Create a task, update a record, or send a notification.", "A collection of reusable information articles.", "A conversational interface for supported information and tasks."], "a": 1, "e": "Answer: Create a task, update a record, or send a notification."}, {"q": "Why test rejected approvals?", "o": ["To confirm the process handles alternate outcomes correctly.", "Questions or fields that collect request information.", "The work required to deliver the requested service.", "Create a task, update a record, or send a notification."], "a": 0, "e": "Answer: To confirm the process handles alternate outcomes correctly."}, {"q": "What is Virtual Agent?", "o": ["Provide a suitable escalation or human-support path.", "An article is reusable guidance; a ticket tracks a specific case.", "Questions or fields that collect request information.", "A conversational interface for supported information and tasks."], "a": 3, "e": "Answer: A conversational interface for supported information and tasks."}, {"q": "What should Virtual Agent do when it cannot help?", "o": ["Questions or fields that collect request information.", "Create a task, update a record, or send a notification.", "A collection of reusable information articles.", "Provide a suitable escalation or human-support path."], "a": 3, "e": "Answer: Provide a suitable escalation or human-support path."}, {"q": "What is a table?", "o": ["A child table inherits fields and behavior from a parent table.", "A structured collection of records.", "A component managed because it supports or contributes to a service.", "A standard model for organizing service-related data."], "a": 1, "e": "Answer: A structured collection of records."}, {"q": "What is a field?", "o": ["A data element in a record.", "A field that points to a record in another table.", "A staging area for incoming data.", "The data may still be accessible through other interfaces or routes."], "a": 0, "e": "Answer: A data element in a record."}, {"q": "What is table extension?", "o": ["The data may still be accessible through other interfaces or routes.", "A child table inherits fields and behavior from a parent table.", "A database of configuration items and their relationships.", "A staging area for incoming data."], "a": 1, "e": "Answer: A child table inherits fields and behavior from a parent table."}, {"q": "What is a reference field?", "o": ["A child table inherits fields and behavior from a parent table.", "A field that points to a record in another table.", "A structured collection of records.", "Provider and customer each have defined security responsibilities."], "a": 1, "e": "Answer: A field that points to a record in another table."}, {"q": "What is the data dictionary?", "o": ["A standard model for organizing service-related data.", "A component managed because it supports or contributes to a service.", "A child table inherits fields and behavior from a parent table.", "Metadata describing tables and fields."], "a": 3, "e": "Answer: Metadata describing tables and fields."}, {"q": "What does an ACL control?", "o": ["Access to data or operations such as read, write, create, and delete.", "A standard model for organizing service-related data.", "A child table inherits fields and behavior from a parent table.", "Maps staged source data to target table fields."], "a": 0, "e": "Answer: Access to data or operations such as read, write, create, and delete."}, {"q": "What is least privilege?", "o": ["A database of configuration items and their relationships.", "Granting only the access needed for a user's responsibilities.", "A component managed because it supports or contributes to a service.", "A standard model for organizing service-related data."], "a": 1, "e": "Answer: Granting only the access needed for a user's responsibilities."}, {"q": "Why is hiding a field not sufficient security?", "o": ["A standard model for organizing service-related data.", "The data may still be accessible through other interfaces or routes.", "A field that points to a record in another table.", "Granting only the access needed for a user's responsibilities."], "a": 1, "e": "Answer: The data may still be accessible through other interfaces or routes."}, {"q": "What is an import set?", "o": ["Metadata describing tables and fields.", "A staging area for incoming data.", "Maps staged source data to target table fields.", "A field that points to a record in another table."], "a": 1, "e": "Answer: A staging area for incoming data."}, {"q": "What does a transform map do?", "o": ["Provider and customer each have defined security responsibilities.", "Maps staged source data to target table fields.", "A child table inherits fields and behavior from a parent table.", "A structured collection of records."], "a": 1, "e": "Answer: Maps staged source data to target table fields."}, {"q": "What does coalesce help determine?", "o": ["Whether an incoming row matches an existing target record.", "Provider and customer each have defined security responsibilities.", "A child table inherits fields and behavior from a parent table.", "A staging area for incoming data."], "a": 0, "e": "Answer: Whether an incoming row matches an existing target record."}, {"q": "What is a configuration item?", "o": ["The data may still be accessible through other interfaces or routes.", "A child table inherits fields and behavior from a parent table.", "A component managed because it supports or contributes to a service.", "Provider and customer each have defined security responsibilities."], "a": 2, "e": "Answer: A component managed because it supports or contributes to a service."}, {"q": "What is the CMDB?", "o": ["The data may still be accessible through other interfaces or routes.", "A database of configuration items and their relationships.", "Maps staged source data to target table fields.", "A child table inherits fields and behavior from a parent table."], "a": 1, "e": "Answer: A database of configuration items and their relationships."}, {"q": "What does CSDM provide?", "o": ["Whether an incoming row matches an existing target record.", "A staging area for incoming data.", "Access to data or operations such as read, write, create, and delete.", "A standard model for organizing service-related data."], "a": 3, "e": "Answer: A standard model for organizing service-related data."}, {"q": "What does shared responsibility mean?", "o": ["Metadata describing tables and fields.", "A standard model for organizing service-related data.", "Provider and customer each have defined security responsibilities.", "A field that points to a record in another table."], "a": 2, "e": "Answer: Provider and customer each have defined security responsibilities."}, {"q": "What does a UI Policy control?", "o": ["Supported configuration changes for transfer between instances.", "JavaScript.", "On the server during record processing, according to its configuration.", "Form behavior such as visibility, mandatory state, and read-only state."], "a": 3, "e": "Answer: Form behavior such as visibility, mandatory state, and read-only state."}, {"q": "Where does a Business Rule run?", "o": ["Supported configuration changes for transfer between instances.", "JavaScript.", "Form behavior such as visibility, mandatory state, and read-only state.", "On the server during record processing, according to its configuration."], "a": 3, "e": "Answer: On the server during record processing, according to its configuration."}, {"q": "What does an Update Set capture?", "o": ["Form behavior such as visibility, mandatory state, and read-only state.", "On the server during record processing, according to its configuration.", "JavaScript.", "Supported configuration changes for transfer between instances."], "a": 3, "e": "Answer: Supported configuration changes for transfer between instances."}, {"q": "Which language is commonly used for ServiceNow scripting?", "o": ["On the server during record processing, according to its configuration.", "JavaScript.", "Form behavior such as visibility, mandatory state, and read-only state.", "Supported configuration changes for transfer between instances."], "a": 1, "e": "Answer: JavaScript."}] };

/* tags shown on a lesson card in the lists: video lesson, quiz-only (quiz + locked lab), or coming soon */
function lessonTags(key) {
  if (VIDEOS[key]) return [["Lesson", "t-les"]].concat(QUIZZES[key] ? [["Quiz", "t-quiz"]] : []);
  if (QUIZZES[key]) return [["Quiz", "t-quiz"], ["\uD83D\uDD12 Lab", "t-lock"]];
  return [["Coming soon", "t-soon"]];
}

/* ---- Level 5.2: Microsoft 365 for Everyday Support (the same lessons stay as Level 0 of the Microsoft 365 tool) ---- */
var LEVEL52 = (function () {
  var m = TOOLS.filter(function (t) { return t.id === "microsoft365"; })[0];
  return { id: "l52", name: "Level 5.2", title: "Microsoft 365 for Everyday Support", desc: "1st Line Support: the skills you need on the job.", color: m.color,
    lessons: m.levels[0].lessons.map(function (r) { return [r[0], r[1], 0, 1]; }), lbl: function (k) { return "5.2." + (k + 1); } };
})();
/* tools shown under a level (they also stay in the Tools section) */
var LEVEL_TOOLS = {};
function levelToolsBox(levelId) {
  var ids = LEVEL_TOOLS[levelId]; if (!ids) return null;
  var box = document.createElement("div"); box.className = "node-tools";
  ids.forEach(function (gid) {
    var g = TOOL_GROUPS.filter(function (x) { return x.id === gid; })[0]; if (!g) return;
    var grp = document.createElement("div"); grp.className = "tools-group";
    grp.innerHTML = '<div class="tools-group-title"></div><div class="tools-chips"></div>';
    grp.querySelector(".tools-group-title").textContent = g.emoji + " " + g.name;
    TOOLS.forEach(function (t) {
      if (t.group !== gid) return;
      var a = document.createElement("a"); a.className = "tool-chip"; a.href = "tool.html?t=" + t.id; a.style.setProperty("--tc", t.color);
      a.innerHTML = '<img src="assets/tool-icons/' + t.id + '.png" alt="" width="18" height="18"><span></span>'; a.querySelector("span").textContent = t.name;
      a.addEventListener("click", function (e) { e.stopPropagation(); });
      grp.querySelector(".tools-chips").appendChild(a);
    });
    box.appendChild(grp);
  });
  return box;
}

/* ---- tool lessons shown as lessons inside the beginner levels (they also stay in the Tools section) ----
   Level 5:   Job-Search Platforms  (LinkedIn, Glassdoor, Indeed)
   Level 5.1: Ticketing Systems     (ServiceNow, Jira Service Management: their beginner lessons)
   A row's 4th value (1) means "tool lesson": it gets a number tile instead of a picture. */
(function () {
  function level0(id) { var t = TOOLS.filter(function (x) { return x.id === id; })[0]; return t.levels[0].lessons.map(function (r) { return [r[0], r[1], 0, 1]; }); }
  ["linkedin", "glassdoor", "indeed"].forEach(function (id) { level0(id).forEach(function (r) { LEVELS[5].lessons.push(r); }); });
  LEVELS[5].lbl = function (k) { return "5." + (k + 1); };
  ["servicenow", "jira"].forEach(function (id) { level0(id).forEach(function (r) { LEVEL55.lessons.push(r); }); });
  /* communication and remote-support tools: each tool's first lesson, with a short title in Level 5.1 */
  [["slack", "Slack"], ["zoom", "Zoom Meetings"], ["rdp", "Microsoft Remote Desktop (RDP)"], ["teamviewer", "TeamViewer"], ["anydesk", "AnyDesk"]].forEach(function (x) {
    var r = level0(x[0])[0]; LEVEL55.lessons.push([r[0], x[1], 0, 1]);
  });
  LEVEL55.lbl = function (k) { return "5.1." + (k + 1); };
})();

/* ---- Level 5.3: Google Workspace for Everyday Support (same lessons as Level 0 of the Google Workspace tool) ---- */
var LEVEL53 = (function () {
  var g = TOOLS.filter(function (t) { return t.id === "googleworkspace"; })[0];
  return { id: "l53", name: "Level 5.3", title: "Google Workspace for Everyday Support", desc: "1st Line Support: help users with Gmail, Drive, Meet and their Google account.", color: g.color,
    lessons: g.levels[0].lessons.map(function (r) { return [r[0], r[1], 0, 1]; }), lbl: function (k) { return "5.3." + (k + 1); } };
})();

/* ---- certification badge pictures for tool levels (assets/cert-badges/<tool>-<level>.png) ---- */
var TOOL_BADGES = { microsoft365: [0, 1, 2, 3, 4], servicenow: [0, 1, 2, 3, 4, 5] };
function toolBadgeSrc(toolId, i) { var l = TOOL_BADGES[toolId]; return l && l.indexOf(i) >= 0 ? "assets/cert-badges/" + toolId + "-" + i + ".png?v=2" : null; }
