/* © 10-Minute IT Roadmap. All rights reserved. */
/* Career trees for the specializations (same shape as Cybersecurity): foundations, then one column per career.
   Each career: its learning paths (with topics), recommended tools (tool ids) and certificates (ids from comptia-data.js).
   TRACKS.sp<N> belongs to PATHS[N]. Edit freely. */
var SPEC_TREE = {
  sp1: { title: "Network Engineering Learning Roadmap", sub: "From networking basics to a professional network career. CCNA-level skills come first, then you choose your field.",
    base: [["Networking Fundamentals", "level.html?l=l3", "Beginner Level 3"], ["Intermediate Networking", "level.html?l=im4", "Intermediate Module 1"], ["Advanced Networking", "level.html?l=adv-im4", "Advanced Module 1"]], note: "Network Engineering Career Skills" },
  sp2: { title: "Systems Engineering Learning Roadmap", sub: "From managing one server to running a company's whole infrastructure. Start with the foundations, then pick the career that fits you.",
    base: [["Windows Administration", "level.html?l=im2", "Intermediate Module 2"], ["Linux Administration", "level.html?l=im3", "Intermediate Module 3"]], note: "Systems Engineering Career Skills" },
  sp3: { title: "Cloud Computing Learning Roadmap", sub: "Learn one cloud well first. The ideas are the same in Azure, AWS and Google Cloud, only the names change.",
    base: [["Networking and Linux Basics", "intermediate.html", "Intermediate Modules 1 and 3"], ["Cloud Computing Fundamentals", "level.html?l=im11", "Intermediate Module 8"]], note: "Cloud Career Skills" },
  sp4: { title: "DevOps and Automation Learning Roadmap", sub: "DevOps joins development and operations: build, test, release and run software automatically and reliably.",
    base: [["Linux Administration", "level.html?l=im3", "Intermediate Module 3"], ["Virtualization and Containers", "level.html?l=im10", "Intermediate Module 6"]], note: "DevOps Career Skills" },
  sp5: { title: "Software Development Learning Roadmap", sub: "Learn to build software: start with one language and the web basics, then choose what you want to build.",
    base: [["Web Fundamentals", "level.html?l=im8", "Intermediate Module 5"], ["Programming Fundamentals", "language.html?l=python", "Start with Python"]], note: "Developer Career Skills" },
  sp6: { title: "Data and Artificial Intelligence Learning Roadmap", sub: "From asking questions with SQL to building AI systems. Every data career starts with the same two foundations.",
    base: [["Database Fundamentals", "level.html?l=im7", "Intermediate Module 7"], ["SQL and Python", "language.html?l=sql", "Languages"]], note: "Data and AI Career Skills" },
  sp7: { title: "IT Support Engineering Learning Roadmap", sub: "The most common way into IT. Grow from answering the first call to running the whole service desk.",
    base: [["Beginner Levels 0 to 5", "index.html#map", "The Beginner road map"], ["IT Support Fundamentals", "level.html?l=l55", "Beginner Level 5.1"]], note: "IT Support Career Skills" },
  sp8: { title: "Enterprise Systems · SAP & Salesforce Learning Roadmap", sub: "The big business systems companies run on. SAP is the ERP (finance, purchasing, HR); Salesforce is the CRM (customers, sales, service).",
    base: [["Business Process Basics", null, "How companies buy, sell and report"], ["Database Fundamentals", "level.html?l=im7", "Intermediate Module 7"]], note: "Enterprise Systems Career Skills" }
};
var IC = {   // simple line icons for the career headers
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 18 4-6"/>',
  cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  loop: '<path d="M7 8a4 4 0 1 0 0 8c3 0 7-8 10-8a4 4 0 1 1 0 8c-3 0-7-8-10-8z"/>',
  box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
  database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  brain: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  check: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 3 3 5-6"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 19h20"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0M17 5a3.5 3.5 0 0 1 0 7M22 20a6 6 0 0 0-4-5.6"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'
};
function T(name) { return { name: name, topics: [].slice.call(arguments, 1) }; }

TRACKS.sp1 = [
  { name: "Network Engineer", color: "#60a5fa", icon: IC.server, blurb: "Build, run and fix the switches and routers that connect a company.", tools: ["packettracer", "wireshark"], certs: ["network", "ccna"], paths: [
    T("Switching Technologies", "Ethernet switching", "VLANs and trunks", "Spanning Tree", "EtherChannel", "Layer 3 switching"),
    T("Routing Technologies", "Static and default routes", "OSPF", "EIGRP and BGP basics", "Route redistribution", "IPv6 routing"),
    T("Troubleshooting and Monitoring", "Troubleshooting method", "Diagnostic tools", "Packet analysis", "SNMP and Syslog", "Performance monitoring"),
    T("High Availability", "HSRP and VRRP", "Redundant links", "Failover and recovery") ] },
  { name: "Network Security Engineer", color: "#f472b6", icon: IC.shield, blurb: "Protect the network: firewalls, VPNs, access control and zero trust.", tools: ["nmap"], certs: ["security", "ccnacyber"], paths: [
    T("Network Security", "Security fundamentals", "Firewalls", "Access control lists", "VPN fundamentals", "Securing network devices"),
    T("Advanced Network Security", "Next-generation firewalls", "IDS and IPS", "Network access control", "Zero trust networking", "Segmentation") ] },
  { name: "Cloud and Data Center Network Engineer", color: "#22d3ee", icon: IC.cloud, blurb: "Design the networks inside clouds, data centers and wireless campuses.", tools: [], certs: ["cloudnetx"], paths: [
    T("Wireless Networking", "Wireless fundamentals", "Wi-Fi standards", "Wireless security", "Enterprise wireless design", "Site surveys"),
    T("Cloud Networking", "Cloud networking fundamentals", "AWS networking", "Azure networking", "Hybrid cloud networks", "Cloud load balancing"),
    T("Data Center Networking", "Data center architecture", "Spine-leaf design", "VXLAN and overlays", "Data center redundancy", "Storage networking") ] },
  { name: "Network Automation Architect", color: "#a78bfa", icon: IC.code, blurb: "Automate networks with code and design them at large scale.", tools: ["ansible"], certs: [], paths: [
    T("Network Automation and Programmability", "Automation fundamentals", "Python for network engineers", "Network APIs", "Ansible for networks", "Infrastructure as code"),
    T("Service Provider and Telecom Networking", "ISP architecture", "MPLS", "WAN technologies", "SD-WAN", "Quality of service"),
    T("Network Architecture and Design", "Enterprise architecture", "Campus design", "Capacity planning", "Redundancy and scale", "Design documentation") ] }
];
TRACKS.sp2 = [
  { name: "Windows Server Administrator", color: "#38bdf8", icon: IC.server, blurb: "Run the Windows servers, Active Directory and Microsoft 365 that most companies depend on.", tools: ["sysinternals", "intune"], certs: ["az900"], paths: [
    T("Windows Server Roles", "Installing and configuring Windows Server", "DNS and DHCP roles", "File and print servers", "Remote Desktop Services", "Server Manager and Windows Admin Center"),
    T("Active Directory at Scale", "Sites, replication and FSMO roles", "Group Policy design", "Delegation and least privilege", "Backup and recovery of AD", "Hybrid identity with Entra ID"),
    T("PowerShell Automation", "Scripts, functions and modules", "Remoting many servers", "Automating users and reports", "Scheduled tasks", "Error handling and logging"),
    T("Patching and Monitoring", "Windows Update and WSUS", "Performance Monitor", "Event log collection", "Backup strategy", "Troubleshooting a slow server") ] },
  { name: "Linux Systems Administrator", color: "#34d399", icon: IC.terminal, blurb: "Keep Linux servers running: the system behind most websites and cloud services.", tools: ["ansible"], certs: ["linux", "rhcsa"], paths: [
    T("Linux Server", "Installing a server", "Users, groups and sudo", "Services with systemd", "Storage and LVM", "SSH and remote administration"),
    T("Shell Scripting", "Bash scripts and variables", "Loops and conditions", "Text tools: grep, sed, awk", "Cron jobs", "Writing safe scripts"),
    T("Linux Networking and Services", "Network configuration", "Firewalls: ufw and firewalld", "Web and DNS services", "NFS and Samba file sharing", "Troubleshooting connections"),
    T("Linux Security and Hardening", "Permissions and SELinux/AppArmor", "SSH hardening", "Updates and patching", "Log monitoring", "Security baselines") ] },
  { name: "Virtualization Engineer", color: "#fb923c", icon: IC.layers, blurb: "Build the virtual servers, storage and backups that everything else runs on.", tools: ["virtualbox"], certs: ["server", "vcp"], paths: [
    T("Hypervisors in Production", "VMware vSphere basics", "Microsoft Hyper-V", "Proxmox and KVM", "Templates and cloning", "Resource planning"),
    T("Storage and Backup", "RAID, SAN and NAS", "Backup types and schedules", "Snapshots vs backups", "Disaster recovery plans", "Testing a restore"),
    T("High Availability", "Clusters and failover", "Live migration", "Load balancing", "Redundant power and network", "Planning for failure") ] },
  { name: "Infrastructure Engineer", color: "#a78bfa", icon: IC.gauge, blurb: "Design, monitor and tune the whole environment so systems stay fast and available.", tools: [], certs: [], paths: [
    T("Operating System Internals", "Processes and threads", "Memory management", "File systems", "The boot process", "System calls"),
    T("Monitoring and Observability", "Metrics, logs and traces", "Dashboards and alerts", "Capacity planning", "Finding the bottleneck", "Writing a post-incident review"),
    T("Enterprise Infrastructure", "Data center basics", "Identity and access at scale", "Configuration management", "Change management", "Documentation and runbooks") ] }
];
TRACKS.sp3 = [
  { name: "Azure Administrator", color: "#38bdf8", icon: IC.cloud, blurb: "Run a company's Microsoft cloud: identities, virtual machines, storage and networks.", tools: [], certs: ["az900"], paths: [
    T("Azure Fundamentals", "Regions, subscriptions and resource groups", "The Azure portal and CLI", "Core services", "Pricing and support", "Shared responsibility"),
    T("Azure Identity and Governance", "Microsoft Entra ID", "Role-based access control", "Policies and locks", "Management groups", "Cost management"),
    T("Azure Compute and Storage", "Virtual machines and scale sets", "App Service and containers", "Storage accounts", "Backup and recovery", "Monitoring with Azure Monitor"),
    T("Azure Networking", "Virtual networks and subnets", "Network security groups", "VPN and ExpressRoute", "Load balancers and DNS", "Troubleshooting connectivity") ] },
  { name: "AWS Cloud Engineer", color: "#f59e0b", icon: IC.box, blurb: "Build and run systems on Amazon Web Services, the most widely used cloud.", tools: [], certs: ["awsccp", "awssaa"], paths: [
    T("AWS Fundamentals", "Regions and availability zones", "The console and CLI", "IAM users, roles and policies", "Billing and budgets", "The Well-Architected Framework"),
    T("Core AWS Services", "EC2 and Auto Scaling", "S3 storage", "RDS and DynamoDB", "VPC networking", "CloudWatch monitoring"),
    T("AWS Architecture", "Designing for high availability", "Load balancing and caching", "Serverless with Lambda", "Decoupling with queues", "Cost optimization") ] },
  { name: "Google Cloud Engineer", color: "#34a853", icon: IC.layers, blurb: "Deploy and manage applications on Google Cloud.", tools: [], certs: ["gcdl", "gace"], paths: [
    T("Google Cloud Fundamentals", "Projects and billing", "Console and gcloud CLI", "IAM basics", "Core products", "Pricing"),
    T("Google Cloud Compute and Storage", "Compute Engine", "Cloud Storage", "Cloud SQL", "Google Kubernetes Engine", "Monitoring and logging"),
    T("Google Cloud Networking and Security", "VPC networks", "Firewall rules", "Load balancing", "Identity-Aware Proxy", "Best practices") ] },
  { name: "Cloud Security Engineer", color: "#f472b6", icon: IC.shield, blurb: "Protect cloud accounts, data and workloads from attack and misconfiguration.", tools: [], certs: ["cloud", "sc900"], paths: [
    T("Cloud Identity and Access", "Least privilege", "MFA and Conditional Access", "Service accounts and keys", "Privileged access", "Auditing permissions"),
    T("Securing Cloud Workloads", "Network segmentation", "Encryption and key management", "Hardening virtual machines and containers", "Secrets management", "Secure storage"),
    T("Cloud Detection and Compliance", "Cloud logs and alerts", "Posture management", "Common misconfigurations", "Compliance frameworks", "Incident response in the cloud") ] }
];
TRACKS.sp4 = [
  { name: "DevOps Engineer", color: "#a78bfa", icon: IC.loop, blurb: "Automate the path from a developer's code to a running application.", tools: ["docker"], certs: ["ghf"], paths: [
    T("Git and GitHub", "Commits, branches and merges", "Pull requests and reviews", "Branching strategies", "Resolving conflicts", "GitHub Actions basics"),
    T("CI/CD Pipelines", "Continuous integration", "Automated tests in the pipeline", "Build artifacts", "Deployment strategies", "Rollbacks"),
    T("Docker and Containers", "Images and containers", "Dockerfiles", "Registries", "Docker Compose", "Container security basics"),
    T("Monitoring and Logging", "Metrics and dashboards", "Central logging", "Alerts that matter", "Tracing requests", "On-call basics") ] },
  { name: "Kubernetes Engineer", color: "#326ce5", icon: IC.box, blurb: "Run containers at scale: deploy, scale and heal applications automatically.", tools: ["kubernetes"], certs: ["cka"], paths: [
    T("Kubernetes Core", "Clusters, nodes and pods", "Deployments and services", "ConfigMaps and Secrets", "Storage", "kubectl troubleshooting"),
    T("Running Kubernetes", "Ingress and networking", "Scaling and updates", "Helm charts", "RBAC and security", "Cluster upgrades"),
    T("GitOps", "Infrastructure in Git", "Argo CD and Flux", "Environments and promotion", "Drift detection", "Secrets in GitOps") ] },
  { name: "Infrastructure as Code Engineer", color: "#22d3ee", icon: IC.code, blurb: "Create servers, networks and cloud resources from code instead of by hand.", tools: ["ansible"], certs: ["terraform"], paths: [
    T("Terraform", "Providers and resources", "State and backends", "Variables and modules", "Plan and apply", "Team workflows"),
    T("Configuration Management", "Ansible playbooks and roles", "Idempotent changes", "Inventories", "Secrets with Vault", "Testing automation"),
    T("Cloud Automation", "Scripting cloud tasks", "Pipelines for infrastructure", "Policy as code", "Cost controls", "Documentation as code") ] },
  { name: "Site Reliability Engineer", color: "#4ade80", icon: IC.gauge, blurb: "Keep services reliable: measure, automate and learn from every incident.", tools: [], certs: [], paths: [
    T("Reliability Fundamentals", "SLIs, SLOs and error budgets", "Reducing toil", "Capacity planning", "Release engineering", "Blameless culture"),
    T("Incident Response", "On-call and escalation", "Incident command", "Communication during outages", "Root cause analysis", "Post-incident reviews"),
    T("Performance and Scaling", "Load testing", "Caching", "Database bottlenecks", "Autoscaling", "Chaos engineering basics") ] }
];
TRACKS.sp5 = [
  { name: "Frontend Developer", color: "#f472b6", icon: IC.window, blurb: "Build what users see and click in the browser.", tools: [], certs: [], paths: [
    T("HTML and CSS in Depth", "Semantic HTML", "Layouts with Flexbox and Grid", "Responsive design", "Accessibility", "CSS architecture"),
    T("JavaScript and TypeScript", "Modern JavaScript", "The DOM and events", "Async code and fetch", "TypeScript types", "Debugging in the browser"),
    T("Frontend Frameworks", "Components and state", "React basics", "Routing", "Calling APIs", "Build tools"),
    T("Frontend Quality", "Unit and UI tests", "Performance", "Web security basics", "Version control workflow", "Deploying a site") ] },
  { name: "Backend Developer", color: "#4ade80", icon: IC.server, blurb: "Build the servers, APIs and data logic behind every application.", tools: ["postman"], certs: ["pcep"], paths: [
    T("Programming Foundations", "Variables, functions and data structures", "Object-oriented programming", "Error handling", "Working with files", "Clean code"),
    T("APIs and REST", "Designing endpoints", "HTTP methods and status codes", "JSON and validation", "Authentication and tokens", "API documentation"),
    T("Databases for Developers", "SQL queries and joins", "Schema design", "ORMs", "Transactions", "NoSQL basics"),
    T("Backend in Production", "Logging and monitoring", "Caching and queues", "Security: OWASP Top 10", "Testing", "Deploying with containers") ] },
  { name: "Cloud and AI Developer", color: "#38bdf8", icon: IC.cloud, blurb: "Build applications that run in the cloud and use AI services.", tools: ["docker"], certs: ["ai901"], paths: [
    T("Cloud Application Development", "App hosting options", "Serverless functions", "Cloud storage and databases", "Identity for apps", "CI/CD for cloud apps"),
    T("Building with AI", "Calling AI models from code", "Prompt design", "Retrieval and embeddings", "AI agents and tools", "Responsible AI and costs") ] },
  { name: "QA and Test Automation Engineer", color: "#fbbf24", icon: IC.check, blurb: "Make sure software works before users find the bugs.", tools: ["postman"], certs: [], paths: [
    T("Testing Fundamentals", "Test types and levels", "Writing test cases", "Bug reports", "Exploratory testing", "Agile testing"),
    T("Test Automation", "Automating the browser", "API testing", "Test data", "Tests in CI/CD", "Flaky tests"),
    T("Performance and Security Testing", "Load testing basics", "Finding slow pages", "Security testing basics", "Accessibility testing", "Reporting quality") ] }
];
TRACKS.sp6 = [
  { name: "Data Analyst", color: "#fbbf24", icon: IC.chart, blurb: "Turn raw data into answers and dashboards people can act on.", tools: ["powerbi"], certs: ["data", "dp900"], paths: [
    T("SQL for Analysis", "Filtering and sorting", "Joins", "Grouping and aggregates", "Window functions", "Cleaning data"),
    T("Spreadsheets and Power BI", "Excel for analysis", "Data models", "Building reports", "DAX basics", "Sharing dashboards"),
    T("Statistics for Analysts", "Averages and spread", "Distributions", "Correlation", "A/B tests", "Avoiding common mistakes"),
    T("Data Storytelling", "Choosing the right chart", "Finding the insight", "Presenting to managers", "Dashboards that get used", "Data ethics") ] },
  { name: "Database Administrator", color: "#fb923c", icon: IC.database, blurb: "Keep databases fast, safe and always available.", tools: ["mysqlworkbench"], certs: ["datasys", "dp900"], paths: [
    T("Database Administration", "Installing and configuring", "Users and permissions", "Maintenance tasks", "Monitoring", "Upgrades"),
    T("Backup and Recovery", "Backup types", "Point-in-time recovery", "Replication", "High availability", "Testing restores"),
    T("Performance and Security", "Indexes", "Query tuning", "Encryption", "Auditing", "Hardening a database") ] },
  { name: "Data Engineer", color: "#22d3ee", icon: IC.layers, blurb: "Build the pipelines that move and prepare data for everyone else.", tools: [], certs: ["dp900"], paths: [
    T("Python for Data", "Reading and writing data", "pandas basics", "Working with APIs", "Data quality checks", "Scheduling scripts"),
    T("Data Pipelines", "ETL and ELT", "Batch vs streaming", "Orchestration", "Error handling", "Monitoring pipelines"),
    T("Data Warehouses and Lakes", "Warehouse design", "Star schemas", "Data lakes", "Cloud data platforms", "Governance") ] },
  { name: "AI and Machine Learning Engineer", color: "#a78bfa", icon: IC.brain, blurb: "Build and run systems that learn from data, including generative AI.", tools: [], certs: ["dataai", "ai901"], paths: [
    T("Machine Learning Fundamentals", "Supervised and unsupervised learning", "Training and test data", "Common algorithms", "Evaluating a model", "Overfitting"),
    T("Generative AI", "How large language models work", "Prompting", "Retrieval-augmented generation", "Fine-tuning basics", "Evaluating AI output"),
    T("MLOps and Responsible AI", "Deploying a model", "Monitoring drift", "Versioning data and models", "Bias and fairness", "AI governance") ] }
];
TRACKS.sp7 = [
  { name: "Help Desk Technician", color: "#2dd4bf", icon: IC.headset, blurb: "The first person users call. Fix common problems and pass on the hard ones well.", tools: ["servicenow", "jira"], certs: ["a", "itilf"], paths: [
    T("Ticketing and ITIL", "Logging a good ticket", "Priorities and SLAs", "Incidents vs requests", "Escalation", "Knowledge articles"),
    T("Account and Access Support", "Password resets and MFA", "Locked accounts", "Group membership", "Shared mailboxes", "Verifying the user's identity"),
    T("Remote Support", "Remote desktop tools", "Guiding a user by phone", "Common Windows fixes", "Printer and Wi-Fi problems", "Remote support safety"),
    T("Customer Communication", "Listening and asking questions", "Explaining without jargon", "Difficult callers", "Writing clear updates", "Closing the ticket") ] },
  { name: "Desktop Support Engineer", color: "#38bdf8", icon: IC.laptop, blurb: "Hands-on support: laptops, hardware, deployments and the problems help desk cannot fix.", tools: ["sysinternals", "intune"], certs: ["ab900"], paths: [
    T("Hardware Troubleshooting", "Diagnosing a dead PC", "Replacing parts", "Laptops and docking stations", "Peripherals", "Warranty and vendors"),
    T("Windows Deployment", "Imaging and Autopilot", "Drivers and updates", "Application packaging", "User profile migration", "Asset tracking"),
    T("Advanced Troubleshooting", "Slow computers", "Blue screens", "Network and VPN issues", "Reading event logs", "Root cause vs quick fix") ] },
  { name: "Workplace Administrator", color: "#a78bfa", icon: IC.users, blurb: "Run the tools everyone works in: Microsoft 365, Google Workspace and Teams.", tools: ["microsoft365", "googleworkspace"], certs: ["ab900"], paths: [
    T("Microsoft 365 Administration", "Users and licences", "Exchange Online", "Teams and SharePoint", "Security defaults", "Service health"),
    T("Google Workspace Administration", "Users and organizational units", "Gmail and Drive settings", "Sharing rules", "Devices", "Reports"),
    T("Identity and Device Management", "Single sign-on", "MFA rollout", "Conditional Access", "Managing phones and laptops", "Onboarding and offboarding") ] },
  { name: "Service Desk Lead", color: "#fbbf24", icon: IC.briefcase, blurb: "Lead the support team: quality, numbers, processes and people.", tools: [], certs: ["itilf", "project"], paths: [
    T("Service Management", "Incident and problem management", "Change enablement", "Service level management", "Continual improvement", "Major incidents"),
    T("Metrics and Quality", "KPIs that matter", "Customer satisfaction", "Ticket quality reviews", "Trends and reporting", "Reducing repeat tickets"),
    T("Leading a Support Team", "Shifts and workload", "Coaching", "Hiring and onboarding", "Working with vendors", "Building a knowledge base") ] }
];
TRACKS.sp8 = [
  { name: "SAP Functional Consultant", color: "#1b90ff", icon: IC.briefcase, blurb: "Set up SAP so it matches how the business buys, sells and reports.", tools: [], certs: [], paths: [
    T("SAP Fundamentals", "What ERP is", "SAP S/4HANA overview", "Navigation and Fiori", "Organizational structure", "Master data"),
    T("SAP Functional Consultant", "Finance (FI/CO)", "Materials management (MM)", "Sales and distribution (SD)", "Business process flows", "Configuration basics"),
    T("SAP Projects", "Gathering requirements", "Fit-to-standard workshops", "Testing", "Go-live and support", "Documentation") ] },
  { name: "SAP Technical Specialist", color: "#f59e0b", icon: IC.cog, blurb: "Run, extend and secure the SAP system itself.", tools: [], certs: [], paths: [
    T("SAP Technical Administration", "System landscape", "Installations and updates", "Transports", "Monitoring", "Backup and recovery"),
    T("SAP Development", "ABAP basics", "Reports and forms", "Enhancements", "Fiori apps", "Integrations and APIs"),
    T("SAP Security", "Users and roles", "Authorizations", "Segregation of duties", "Audit logs", "Compliance") ] },
  { name: "Salesforce Administrator", color: "#22d3ee", icon: IC.cloud, blurb: "Configure Salesforce for sales and service teams without writing code.", tools: [], certs: [], paths: [
    T("Salesforce Fundamentals", "What CRM is", "Objects, fields and records", "Navigation", "Sales and Service Cloud", "AppExchange"),
    T("Salesforce Administrator", "Users, profiles and permission sets", "Page layouts", "Flows and automation", "Reports and dashboards", "Data import"),
    T("Salesforce Security", "Sharing model", "Field-level security", "Login and session security", "Audit trail", "Data protection") ] },
  { name: "Salesforce Consultant and Developer", color: "#a78bfa", icon: IC.code, blurb: "Design Salesforce solutions and build what clicks cannot do.", tools: [], certs: [], paths: [
    T("Salesforce Functional Consultant", "Discovery and requirements", "Sales process design", "Service process design", "User adoption", "Solution documentation"),
    T("Salesforce Development", "Apex basics", "Lightning Web Components", "SOQL queries", "Integrations", "Testing and deployment") ] }
];
