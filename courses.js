/* ------------------------------------------------------------
   COURSES & TOOLS DATA  -  edit this file to change the ITIL 4 course
   and the tool pages (levels, certifications, lessons).

   Lesson keys are made automatically:  "itil.2.3"  = ITIL, level 2, lesson 3
                                        "servicenow.1.4" = ServiceNow, level 1, lesson 4
   To add a video to one of these lessons, add its key to VIDEOS in roadmap.js.
   ------------------------------------------------------------ */

/* ITIL 4 Foundation course (opens from the ITIL 4 node under Level 5) */
const ITIL_COURSE = {
  id: "itil", name: "ITIL 4 Foundation", vendor: "PeopleCert", badge: "ITIL 4", color: "#4ade80",
  desc: "The world's most used framework for IT service management. Learn it level by level, then pass the ITIL 4 Foundation exam.",
  levels: [
    { title: "Introduction to IT Service Management", lessons: ["What Is IT Service Management?", "What Is ITIL?", "Why Companies Use ITIL", "ITIL History and Evolution"] },
    { title: "ITIL 4 Key Concepts", lessons: ["Services and Service Management", "Value and Value Co-creation", "Customers, Users and Sponsors", "Outcomes, Outputs and Costs", "Utility and Warranty", "Service Relationships"] },
    { title: "The Seven Guiding Principles", lessons: ["Focus on Value", "Start Where You Are", "Progress Iteratively with Feedback", "Collaborate and Promote Visibility", "Think and Work Holistically", "Keep It Simple and Practical", "Optimize and Automate"] },
    { title: "Four Dimensions of Service Management", lessons: ["Organizations and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"] },
    { title: "The Service Value System", lessons: ["The ITIL Service Value System", "Opportunity, Demand and Value", "Governance", "The Continual Improvement Model"] },
    { title: "The Service Value Chain", lessons: ["What Is the Service Value Chain?", "Plan and Improve", "Engage", "Design and Transition", "Obtain/Build", "Deliver and Support", "Value Streams in Action"] },
    { title: "Key ITIL Practices", lessons: ["Incident Management", "Problem Management", "Service Request Management", "Service Desk", "Change Enablement", "Service Level Management", "Continual Improvement", "Relationship Management", "IT Asset Management", "Monitoring and Event Management", "Release Management", "Service Configuration Management", "Deployment Management", "Information Security Management", "Supplier Management"] },
    { title: "Exam Preparation", exam: true, lessons: ["How the ITIL 4 Foundation Exam Works", "Exam Objectives Checklist", "Key Terms to Remember", "Practice Questions", "Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"] }
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
    levels: [
      { title: "LinkedIn Basics", role: "Account ready", color: "#7fb3e6", lessons: ["What LinkedIn Is and Why Recruiters Use It", "Creating Your Account", "Profile Photo and Banner", "Writing a Strong Headline"] },
      { title: "A Profile That Gets Found", role: "Visible to recruiters", color: "#3d8ad6", lessons: ["Writing Your About Section", "Experience, Projects and Labs", "Skills and Keywords for IT Support", "Adding Certifications and Badges", "Open to Work Settings"] },
      { title: "Job Hunting on LinkedIn", role: "Applying smart", color: "#0a66c2", lessons: ["Searching and Filtering Jobs", "Job Alerts and Easy Apply", "Messaging Recruiters", "Growing Your Network", "Posting About What You Learn"] }
    ]},
  { id: "glassdoor", name: "Glassdoor", group: "jobs", color: "#0caa41", tags: ["Jobs", "Salaries", "Reviews"],
    desc: "Job listings plus company reviews, salaries and real interview questions.",
    note: "There is no official exam. Use it to research companies before you apply.",
    levels: [
      { title: "Glassdoor Basics", role: "Account ready", color: "#7ad69a", lessons: ["What Glassdoor Is", "Creating Your Account", "Searching IT Support Jobs"] },
      { title: "Research Like a Pro", role: "Ready for interviews", color: "#0caa41", lessons: ["Reading Company Reviews", "Checking Salaries for Your Role", "Finding Real Interview Questions", "Comparing Companies Before You Apply"] }
    ]},
  { id: "indeed", name: "Indeed", group: "jobs", color: "#2557a7", tags: ["Jobs", "CV", "Applications"],
    desc: "One of the largest job boards. Great for entry-level help desk and IT support roles.",
    note: "There is no official exam. Indeed offers optional skill tests you can show on your profile.",
    levels: [
      { title: "Indeed Basics", role: "Account ready", color: "#8aa9db", lessons: ["What Indeed Is", "Creating Your Account", "Uploading Your CV"] },
      { title: "Applying the Smart Way", role: "Applying smart", color: "#2557a7", lessons: ["Searching and Filtering Jobs", "Job Alerts", "Indeed Skill Assessments", "Tracking Your Applications"] }
    ]},

  { id: "servicenow", name: "ServiceNow", group: "ticketing", color: "#62d84e", tags: ["ITSM", "Tickets", "ITIL"],
    desc: "The leading enterprise IT service management platform. Most big companies run their service desk on it.",
    note: "ServiceNow certifications build on each other like a pyramid: CSA first, then CAD, then CIS, Suite and finally the expert architect exams.",
    levels: [
      { title: "ServiceNow Basics for the Service Desk", role: "Fulfiller / Agent", color: "#8a9aa8", lessons: ["What Is ServiceNow?", "Navigating the Platform", "Logging and Updating an Incident", "Requests, the Service Catalog and Approvals", "Using the Knowledge Base", "Getting a Free Personal Developer Instance"] },
      { title: "Certified System Administrator", role: "Systems Administrator", color: "#4f7f7f", cert: ["CSA", "ServiceNow Certified System Administrator", "ServiceNow"],
        lessons: ["Users, Groups and Roles", "Lists, Forms and Filters", "Tables and Fields", "UI Policies and Data Policies", "Business Rules and Client Scripts Overview", "Notifications", "Reports and Dashboards", "Importing Data", "Update Sets", "CSA Exam Preparation"] },
      { title: "Certified Application Developer", role: "Application Developer", color: "#5ba8b5", cert: ["CAD", "ServiceNow Certified Application Developer", "ServiceNow"],
        lessons: ["Scoped Applications", "Building Tables and Forms", "Client-Side Scripting", "Server-Side Scripting", "Flow Designer", "Security and Access Control", "Integrations and REST APIs", "Testing and Publishing Apps", "CAD Exam Preparation"] },
      { title: "Certified Implementation Specialist (ITSM)", role: "Implementation Specialist", color: "#8a86d6", cert: ["CIS-ITSM", "Certified Implementation Specialist – IT Service Management", "ServiceNow"],
        lessons: ["Incident Management Setup", "Problem Management Setup", "Change Management Setup", "Service Catalog and Request Fulfillment", "Knowledge Management", "CMDB and CSDM Basics", "SLAs and Workflows", "CIS-ITSM Exam Preparation"] },
      { title: "Suite Certification", role: "Application Specialist", color: "#e08e8e", cert: ["SUITE", "ServiceNow Suite Certification (e.g. ITSM Professional)", "ServiceNow"],
        lessons: ["What Suite Certifications Are", "Choosing Your Suite (ITSM, CSM, HR...)", "Micro-certifications and Accreditations", "Advanced ITSM Features", "Suite Exam Preparation"] },
      { title: "Expert Programs", role: "Technical / Master Architect", color: "#8fd3bd", cert: ["CTA / CMA", "Certified Technical Architect / Certified Master Architect", "ServiceNow"],
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

  { id: "microsoft365", name: "Microsoft 365", group: "collab", color: "#d83b01", tags: ["Outlook", "Teams", "OneDrive", "SharePoint"],
    desc: "Outlook, Teams, OneDrive, SharePoint and more: the productivity ecosystem most offices use every day.",
    note: "Microsoft changes its exams often. MS-900 retired on 31 March 2026 (AB-900 replaced it) and MS-102 is listed to retire on 30 November 2026. Always check Microsoft Learn before you book.",
    levels: [
      { title: "Microsoft 365 for Everyday Support", role: "1st Line Support", color: "#f2a07b", lessons: ["What Is Microsoft 365?", "Outlook: Mail, Calendar and Common Problems", "Teams: Chat, Meetings and Calls", "OneDrive: Sync and Sharing", "SharePoint: Sites and Libraries", "Fixing the Top 10 User Issues"] },
      { title: "Copilot and Agent Administration Fundamentals", role: "M365 Fundamentals", color: "#ff8c4c", cert: ["AB-900", "Microsoft 365 Copilot and Agent Administration Fundamentals", "Microsoft"],
        lessons: ["Microsoft 365 Services Overview", "Microsoft 365 Admin Center", "Licences and Subscriptions", "Copilot and Agents Basics", "Security and Compliance Basics", "AB-900 Exam Preparation"] },
      { title: "Endpoint Administrator", role: "Endpoint Admin", color: "#ea6a2b", cert: ["MD-102", "Microsoft 365 Certified: Endpoint Administrator Associate", "Microsoft"],
        lessons: ["Deploying Windows with Autopilot", "Managing Devices with Intune", "Compliance and Configuration Policies", "Managing Apps", "Protecting Devices", "MD-102 Exam Preparation"] },
      { title: "Teams Administrator", role: "Teams Admin", color: "#c2410c", cert: ["MS-700", "Microsoft 365 Certified: Teams Administrator Associate", "Microsoft"],
        lessons: ["Planning Teams Deployment", "Teams Policies", "Meetings, Calling and Rooms", "Governance and Lifecycle", "MS-700 Exam Preparation"] },
      { title: "Microsoft 365 Administrator", role: "M365 Administrator Expert", color: "#9a2f05", cert: ["MS-102", "Microsoft 365 Certified: Administrator Expert (retiring 30 Nov 2026)", "Microsoft"],
        lessons: ["Tenant Setup and Domains", "Identity with Entra ID", "Defender XDR Basics", "Purview Compliance", "What Comes Next After MS-102", "MS-102 Exam Preparation"] }
    ]},
  { id: "googleworkspace", name: "Google Workspace", group: "collab", color: "#4285f4", tags: ["Gmail", "Drive", "Meet", "Admin"],
    desc: "Gmail, Drive, Meet, Docs and the Admin console: Google's office ecosystem used by many smaller companies and schools.",
    note: "Google offers an Associate and a Professional Workspace Administrator exam.",
    levels: [
      { title: "Google Workspace for Everyday Support", role: "1st Line Support", color: "#9cbcf7", lessons: ["What Is Google Workspace?", "Gmail and Calendar Support", "Drive and Shared Drives", "Google Meet", "Fixing Common User Issues"] },
      { title: "Associate Google Workspace Administrator", role: "Workspace Admin", color: "#4285f4", cert: ["Associate", "Associate Google Workspace Administrator", "Google"],
        lessons: ["The Admin Console", "Users, Groups and Org Units", "Licences and Billing", "Gmail and Drive Settings", "Basic Security Settings", "Associate Exam Preparation"] },
      { title: "Professional Google Workspace Administrator", role: "Senior Workspace Admin", color: "#1a56c4", cert: ["Professional", "Professional Google Workspace Administrator", "Google"],
        lessons: ["Identity, SSO and Directory Sync", "Advanced Security and Data Protection", "Mail Routing and Compliance", "Migrations to Workspace", "Troubleshooting at Scale", "Professional Exam Preparation"] }
    ]},
  { id: "slack", name: "Slack", group: "collab", color: "#611f69", tags: ["Chat", "Channels", "Salesforce"],
    desc: "Team chat organised in channels, popular in tech companies. Owned by Salesforce.",
    note: "Slack certifications are run by Salesforce on Trailhead.",
    levels: [
      { title: "Slack Basics", role: "Everyday user", color: "#b98ac0", lessons: ["What Is Slack?", "Workspaces, Channels and Threads", "Huddles and Calls", "Notifications and Common Problems"] },
      { title: "Slack Administrator", role: "Slack Admin", color: "#8e3a96", cert: ["Admin", "Salesforce Certified Slack Administrator", "Salesforce"],
        lessons: ["Workspace Settings", "Users, Guests and Roles", "Channel Management", "Apps and Integrations", "Security and Compliance", "Exam Preparation"] },
      { title: "Slack Consultant", role: "Slack Consultant", color: "#611f69", cert: ["Consultant", "Salesforce Certified Slack Consultant", "Salesforce"],
        lessons: ["Planning a Slack Rollout", "Enterprise Grid Design", "Change Management and Adoption", "Exam Preparation"] },
      { title: "Slack Developer", role: "Slack Developer", color: "#3b0f40", cert: ["Developer", "Salesforce Certified Slack Developer", "Salesforce"],
        lessons: ["Slack Apps and the API", "Workflow Builder", "Bots and Automation", "Exam Preparation"] }
    ]},
  { id: "zoom", name: "Zoom", group: "collab", color: "#0b5cff", tags: ["Meetings", "Webinars", "Rooms"],
    desc: "Video meetings and webinars. IT support often helps users with audio, video and Zoom Rooms.",
    note: "Zoom has no general professional certification for IT staff. Learn it through the levels below.",
    levels: [
      { title: "Zoom Basics", role: "Everyday user", color: "#8eb2ff", lessons: ["What Is Zoom?", "Joining and Hosting Meetings", "Audio and Video Troubleshooting"] },
      { title: "Supporting Zoom Users", role: "1st Line Support", color: "#4a85ff", lessons: ["Screen Sharing and Recording Issues", "Webinars and Large Meetings", "Zoom on Phones and Tablets", "Security Settings for Meetings"] },
      { title: "Zoom Administration", role: "Zoom Admin", color: "#0b5cff", lessons: ["Account and User Management", "Single Sign-On (SSO)", "Zoom Rooms Setup", "Reports and Monitoring"] }
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
      href: "course.html?c=itil#lv" + i, group: "itil", crumbs: [["Road map", "index.html#map"], ["ITIL 4 Foundation", "course.html?c=itil"]] });
  });
  /* every level with a certification gets an Exam Preparation section (lessons x1, x2 ...) */
  function examPrep(code) {
    return ["How the " + code + " Exam Works", code + " Exam Objectives Checklist", code + " Practice Questions", code + " Full Mock Exam and Review", "Booking the Exam and Exam Day Tips"];
  }
  TOOLS.forEach(function (tool) {
    tool.levels.forEach(function (lv, i) {
      lv.lessons = lv.lessons.filter(function (t) { return Array.isArray(t) || !/Exam Preparation$/.test(t); })
        .map(function (t, k) { return Array.isArray(t) ? t : [tool.id + "." + i + "." + (k + 1), t]; });
      lv.lessons.forEach(function (r, k) { LBL[r[0]] = i + "." + (k + 1); });
      lv.exam = !lv.cert ? [] : (lv.exam || examPrep(lv.cert[0].split(" ")[0])).map(function (t, k) { return Array.isArray(t) ? t : [tool.id + "." + i + ".x" + (k + 1), t]; });
      lv.exam.forEach(function (r, k) { LBL[r[0]] = i + ".E" + (k + 1); });
      COURSE_LEVELS.push({ id: tool.id + "-" + i, name: tool.name + " · Level " + i, title: lv.cert ? lv.cert[0] + " · " + lv.title : lv.title, color: lv.color, lessons: lv.lessons.concat(lv.exam),
        href: "tool.html?t=" + tool.id + "&l=" + i, group: "tool-" + tool.id, crumbs: [["Tools", "tools.html"], [tool.name, "tool.html?t=" + tool.id]] });
    });
  });
})();
