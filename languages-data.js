/* © 10-Minute IT Roadmap. All rights reserved.
   This code and content may not be copied, scraped, or used to train or feed AI systems without written permission.
   Text and data mining is reserved (EU Directive 2019/790, Art. 4(3)). See NOTICE.md. */
/* Programming, scripting and query languages.
   Each language has 3 levels (Beginner, Intermediate, Advanced) shown as a gauge.
   Lesson keys: "lang.<id>.<level 1-3>.<n>"  (shown as 1.1, 2.3 ...). */
const LANG_LEVELS = [
  { name: "Beginner", color: "#f2d43d" },
  { name: "Intermediate", color: "#f7863a" },
  { name: "Advanced", color: "#e8253f" }
];
const LANG_GROUPS = [
  { id: "scripting", name: "Scripting & Automation", emoji: "⚙️" },
  { id: "query", name: "Query & Search", emoji: "🔎" },
  { id: "web", name: "Web Development", emoji: "🌐" },
  { id: "prog", name: "Programming Languages", emoji: "💻" },
  { id: "data", name: "Data & Config Formats", emoji: "🗂️" },
  { id: "iac", name: "Infrastructure as Code", emoji: "☁️" }
];
const LANGS = [
  { id: "powershell", name: "PowerShell", abbr: "PS>", color: "#2671be", group: "scripting", desc: "Microsoft's command shell and scripting language. The main tool to automate Windows, Active Directory and Microsoft 365.",
    levels: [["What Is PowerShell?", ["im2.11", "PowerShell Commands and Cmdlets"], "Get-Help and Get-Command", "The Pipeline and Objects", "Variables and Basic Operators", ["im2.12", "PowerShell Scripting and Automation"]],
             ["Conditions and Loops", "Functions and Parameters", "Working with Files and the Registry", "Managing Services and Processes", "Error Handling with Try/Catch"],
             ["Writing Advanced Scripts and Modules", "Remoting with PowerShell", "Active Directory Automation", "Scheduled Tasks and Automation", "Script Security and Execution Policy"]] },
  { id: "bash", name: "Bash", abbr: "$_", color: "#3a8a2f", group: "scripting", desc: "The command shell of Linux and macOS. Used every day to manage servers and automate tasks.",
    levels: [["What Is the Shell and Bash?", "Navigating Files and Folders", "Viewing and Editing Files", "Pipes and Redirection", "Permissions and sudo", ["im3.10", "Bash Commands and Shell Scripting"], ["im3.11", "Bash Automation and Practical Scripts"]],
             ["Variables and Arguments", "Conditions and Loops", "Functions in Bash", "grep, sed and awk", "Scheduling with cron"],
             ["Robust Scripts: Exit Codes and Error Handling", "Text Processing for Logs", "Automating Server Tasks", "Working with APIs using curl and jq", "Bash Script Security Best Practices"]] },
  { id: "cmd", name: "CMD / Batch", abbr: "C:\\>", color: "#4b5563", group: "scripting", desc: "The classic Windows Command Prompt and batch files. Still useful for quick support tasks.",
    levels: [["What Is the Command Prompt?", "Navigating with cd and dir", "Managing Files and Folders", "Network Commands: ipconfig, ping, tracert", "System Information Commands", ["im2.9", "CMD Commands and Batch Scripting"]],
             ["Batch File Basics", "Variables and Parameters", "IF, FOR and GOTO", "Calling Programs and Error Levels", "Useful Admin Commands (net, sc, tasklist)"],
             ["Automating Support Tasks with Batch", "Logging and Output Handling", "Scheduled Batch Jobs", "Batch vs PowerShell: When to Switch", "Troubleshooting Batch Scripts"]] },
  { id: "python", name: "Python", abbr: "Py", color: "#3776ab", group: "scripting", desc: "An easy, powerful language used for automation, networking, security, data and AI.",
    levels: [[["im6.1", "Introduction to Programming"], "What Is Python and Why Learn It?", "Installing Python and Your First Script", ["im6.2", "Variables, Data Types and Operators"], ["im6.3", "Conditions and Loops"],
              ["im6.4", "Functions and Modules"], ["im6.5", "Lists, Dictionaries and Data Structures"], ["im6.6", "Working with Files"], ["im6.8", "Error Handling"], ["im6.9", "Python Automation and Practical Scripts"]],
             ["Sets, Tuples and Comprehensions", "CSV and Excel Files", "pip and Virtual Environments", "Regular Expressions in Python", "Working with APIs and JSON"],
             ["Advanced IT Automation Projects", "Python for Networking", "Python for Security and Log Analysis", "Object-Oriented Python", "Testing and Packaging Your Code"]] },
  { id: "sql", name: "SQL", abbr: "SQL", color: "#d97706", group: "query", desc: "The language of databases. Read, filter and change data in almost every company system.",
    levels: [["What Is SQL and a Database?", "SELECT and FROM", ["im7.5", "SQL Queries and Filtering"], "Sorting and Limiting Results", "INSERT, UPDATE and DELETE"],
             ["JOINs Explained", "GROUP BY and Aggregates", "Subqueries", "Creating Tables and Keys", "Indexes and Performance Basics"],
             ["Window Functions", "Views and Stored Procedures", "Transactions and Locking", "Database Security and Permissions", "Query Tuning and Execution Plans"]] },
  { id: "kql", name: "KQL", abbr: "KQL", color: "#0078d4", group: "query", desc: "Kusto Query Language: used in Microsoft Sentinel, Defender and Azure to search logs and hunt threats.",
    levels: [["What Is KQL and Where It Is Used?", "Your First Query: Tables and take", "Filtering with where", "Choosing Columns with project", "Sorting and Time Filters"],
             ["summarize and count", "Charts with render", "Joining Tables", "Parsing Text with parse and extract", "Working with Dynamic and JSON Fields"],
             ["Writing Detection Rules in Microsoft Sentinel", "Threat Hunting Queries", "Functions and let Statements", "Query Performance Best Practices", "Building Workbooks and Dashboards"]] },
  { id: "spl", name: "Splunk SPL", abbr: "SPL", color: "#5d9d32", group: "query", desc: "Splunk's Search Processing Language, used by many SOC teams to search and alert on logs.",
    levels: [["What Is Splunk SPL?", "Searching Events and Time Ranges", "Fields and Filtering", "table, sort and dedup", "Basic stats"],
             ["stats, chart and timechart", "eval and Calculated Fields", "rex and Field Extraction", "Lookups", "Subsearches and Joins"],
             ["Detection Searches and Alerts", "Threat Hunting with SPL", "Data Models and tstats", "Dashboards and Reports", "Search Performance Best Practices"]] },
  { id: "html", name: "HTML", abbr: "</>", color: "#e34f26", group: "web", desc: "The structure of every web page: headings, text, links, images and forms.",
    levels: [["What Is HTML?", "Page Structure: head and body", "Headings, Text and Links", "Images and Lists", "Your First Web Page"],
             ["Forms and Inputs", "Tables", "Semantic HTML", "Audio, Video and Embeds", "Accessibility Basics"],
             ["SEO and Meta Tags", "HTML APIs (Canvas, Storage)", "Performance and Loading", "Web Components", "Security: Forms and XSS Basics"]] },
  { id: "css", name: "CSS", abbr: "{ }", color: "#1572b6", group: "web", desc: "The look of web pages: colours, fonts, layout and responsive design for phones.",
    levels: [["What Is CSS?", "Selectors and Properties", "Colors, Fonts and Text", "The Box Model", "Your First Styled Page"],
             ["Flexbox", "CSS Grid", "Responsive Design and Media Queries", "Positioning and Layers", "Transitions and Animations"],
             ["CSS Variables and Theming", "Modern Layout Patterns", "Design Systems and Utility CSS", "CSS Performance", "Dark Mode and Accessibility"]] },
  { id: "javascript", name: "JavaScript", abbr: "JS", color: "#c9a800", group: "web", desc: "The language of the browser. Makes web pages interactive and also runs on servers with Node.js.",
    levels: [["What Is JavaScript?", "Variables and Data Types", "Conditions and Loops", "Functions", "Arrays and Objects"],
             ["The DOM and Events", "Working with Forms", "Fetch and APIs", "Promises and async/await", "Modules and Tooling"],
             ["Node.js Basics", "Building a Small Web App", "Security: XSS and Safe Coding", "Testing JavaScript", "Performance and Debugging"]] },
  { id: "typescript", name: "TypeScript", abbr: "TS", color: "#3178c6", group: "web", desc: "JavaScript with types. Catches mistakes early and is used in most big web projects.",
    levels: [["What Is TypeScript?", "Basic Types", "Functions and Type Annotations", "Interfaces and Type Aliases", "Compiling TypeScript"],
             ["Union and Literal Types", "Classes and Access Modifiers", "Generics", "Modules and tsconfig", "TypeScript with the DOM"],
             ["Advanced Types and Utility Types", "Type Narrowing and Guards", "TypeScript in React and Node", "Strict Mode and Best Practices", "Migrating JavaScript to TypeScript"]] },
  { id: "php", name: "PHP", abbr: "PHP", color: "#777bb4", group: "web", desc: "A server-side web language that powers WordPress and many websites.",
    levels: [["What Is PHP?", "Variables and Echo", "Conditions and Loops", "Functions", "Arrays"],
             ["Forms and $_GET / $_POST", "Sessions and Cookies", "Working with MySQL", "Include Files and Templates", "Error Handling"],
             ["Object-Oriented PHP", "Composer and Frameworks", "Building a Login System", "PHP Security: SQL Injection and XSS", "Building a REST API"]] },
  { id: "c", name: "C", abbr: "C", color: "#5c6bc0", group: "prog", desc: "The low-level language behind operating systems and drivers. Great to understand how computers really work.",
    levels: [["What Is C?", "Your First C Program", "Variables and Data Types", "Conditions and Loops", "Functions"],
             ["Arrays and Strings", "Pointers Explained", "Structs", "Memory: malloc and free", "File I/O"],
             ["How C Talks to the Operating System", "Debugging with gdb", "Memory Bugs and Buffer Overflows", "Makefiles and Building", "Writing Safe C Code"]] },
  { id: "cpp", name: "C++", abbr: "C++", color: "#00599c", group: "prog", desc: "A fast, powerful language for games, browsers, security tools and high-performance software.",
    levels: [["What Is C++?", "Your First C++ Program", "Variables, Input and Output", "Conditions and Loops", "Functions"],
             ["Classes and Objects", "Constructors and Destructors", "References and Pointers", "The Standard Library (STL)", "Inheritance and Polymorphism"],
             ["Templates", "Smart Pointers and Memory", "Move Semantics", "Multithreading", "Modern C++ Best Practices"]] },
  { id: "csharp", name: "C#", abbr: "C#", color: "#7b2fa0", group: "prog", desc: "Microsoft's main language for .NET: Windows apps, web services and tools.",
    levels: [["What Is C# and .NET?", "Your First C# Program", "Variables and Types", "Conditions and Loops", "Methods"],
             ["Classes and Objects", "Collections and LINQ", "Exceptions", "Files and JSON", "Async and Await"],
             ["Building a Desktop or Web App", "Dependency Injection", "Entity Framework and Databases", "Testing in .NET", "Automating Windows with C#"]] },
  { id: "java", name: "Java", abbr: "Jv", color: "#e76f00", group: "prog", desc: "A popular language for enterprise software, Android apps and back-end systems.",
    levels: [["What Is Java?", "Your First Java Program", "Variables and Types", "Conditions and Loops", "Methods"],
             ["Classes and Objects", "Inheritance and Interfaces", "Collections", "Exceptions", "Files and Streams"],
             ["Multithreading", "Build Tools: Maven and Gradle", "Spring Boot Basics", "Testing with JUnit", "JVM Performance Basics"]] },
  { id: "go", name: "Go", abbr: "Go", color: "#00a7cf", group: "prog", desc: "A simple, fast language from Google, widely used for cloud and DevOps tools.",
    levels: [["What Is Go?", "Your First Go Program", "Variables and Types", "Conditions and Loops", "Functions"],
             ["Slices and Maps", "Structs and Methods", "Interfaces", "Error Handling", "Packages and Modules"],
             ["Goroutines and Channels", "Building CLI Tools", "Building a Web Server", "Testing in Go", "Go for Cloud and DevOps Tools"]] },
  { id: "rust", name: "Rust", abbr: "Rs", color: "#b7410e", group: "prog", desc: "A modern, memory-safe systems language, growing fast in security and infrastructure.",
    levels: [["What Is Rust?", "Your First Rust Program", "Variables and Mutability", "Conditions and Loops", "Functions"],
             ["Ownership and Borrowing", "Structs and Enums", "Pattern Matching", "Error Handling with Result", "Collections"],
             ["Traits and Generics", "Lifetimes", "Concurrency in Rust", "Cargo and Crates", "Rust for Security Tools"]] },
  { id: "ruby", name: "Ruby", abbr: "Rb", color: "#cc342d", group: "scripting", desc: "A friendly scripting language used for automation, web apps and security tools like Metasploit.",
    levels: [["What Is Ruby?", "Your First Ruby Script", "Variables and Data Types", "Conditions and Loops", "Methods"],
             ["Arrays and Hashes", "Blocks and Iterators", "Classes and Objects", "Gems and Bundler", "Files and Error Handling"],
             ["Ruby for Automation", "Ruby in Metasploit Modules", "Building CLI Tools", "Ruby on Rails Basics", "Testing with RSpec"]] },
  { id: "regex", name: "Regex", abbr: ".*", color: "#be185d", group: "query", desc: "Regular expressions: patterns to search, filter and extract text. Essential for logs and security investigations.",
    levels: [["What Is Regex?", "Literal Characters and Wildcards", "Character Classes and Ranges", "Quantifiers: *, + and ?", "Anchors: ^ and $"],
             ["Groups and Capturing", "Alternation and Escaping", "Regex in grep, PowerShell and Python", "Extracting IPs, Emails and URLs", "Regex in KQL and Splunk"],
             ["Lookahead and Lookbehind", "Named Groups", "Regex for Log Analysis and Detection", "Performance and Catastrophic Backtracking", "Testing and Debugging Regex"]] },
  { id: "json", name: "JSON", abbr: "JSON", color: "#0f766e", group: "data", desc: "The most common data format for APIs, logs, configuration and automation.",
    levels: [["What Is JSON?", "Objects, Arrays and Values", "JSON Syntax Rules and Common Errors", "Reading JSON from APIs and Logs", "JSON vs YAML vs XML"],
             ["Validating JSON with JSON Schema", "Querying JSON with jq", "JSON in PowerShell and Python", "Nested Data and Flattening", "JSON Logs in SIEM Tools"],
             ["Designing JSON APIs", "JSON Web Tokens (JWT)", "Large JSON Files and Streaming", "Security: JSON Injection and Parsing Risks", "Automating Configs with JSON"]] },
  { id: "xml", name: "XML", abbr: "XML", color: "#a16207", group: "data", desc: "A structured data format used in Windows, enterprise applications, configuration and data exchange.",
    levels: [["What Is XML?", "Elements, Attributes and Nesting", "Well-Formed XML Rules", "XML in Windows and Enterprise Apps", "XML vs JSON"],
             ["Namespaces", "Validating with XSD and DTD", "Querying XML with XPath", "XML in PowerShell", "Windows Event Logs as XML"],
             ["Transforming XML with XSLT", "SOAP Web Services", "Group Policy and Config Files in XML", "Security: XXE and XML Attacks", "Automating XML Processing"]] },
  { id: "yaml", name: "YAML", abbr: "YML", color: "#cb171e", group: "data", desc: "A simple format for configuration files: Docker, Kubernetes, Ansible and CI/CD pipelines.",
    levels: [["What Is YAML?", "Keys, Values and Indentation", "Lists and Nested Data", "Comments and Multi-line Text", "YAML vs JSON"],
             ["YAML in Docker Compose", "YAML in GitHub Actions", "YAML in Ansible", "Anchors and Aliases", "Validating YAML"],
             ["Kubernetes Manifests", "CI/CD Pipelines in YAML", "Templating with Helm", "Secrets and Security in YAML", "Debugging YAML Errors"]] },
  { id: "terraform", name: "Terraform (HCL)", abbr: "TF", color: "#7b42bc", group: "iac", desc: "Infrastructure as Code: build cloud networks, servers and services from text files.",
    levels: [["What Is Infrastructure as Code?", "What Is Terraform and HCL?", "Providers and Resources", "terraform init, plan and apply", "Variables and Outputs"],
             ["State Files Explained", "Modules", "Data Sources", "Building a Network in the Cloud", "Managing Multiple Environments"],
             ["Remote State and Locking", "Terraform in CI/CD", "Policy and Security Checks", "Importing Existing Infrastructure", "Terraform Best Practices"]] }
];
/* languages suggested after each Intermediate module */
const LANG_SUGGEST = {
  im1: ["powershell", "bash"], im2: ["powershell", "cmd", "xml"], im3: ["bash", "python"], im4: ["python", "bash"], im5: ["powershell", "kql"],
  im7: ["sql", "kql"], im8: ["html", "css", "javascript", "php", "json"], im9: ["kql", "spl", "python", "regex"],
  im10: ["bash", "yaml", "go"], im11: ["yaml", "json", "terraform", "python", "powershell"]
};

/* build lesson rows, labels and lesson-page levels */
(function () {
  LANGS.forEach(function (L) {
    L.lv = L.levels.map(function (titles, i) {
      var rows = titles.map(function (t, k) { var key = Array.isArray(t) ? t[0] : "lang." + L.id + "." + (i + 1) + "." + (k + 1); LBL[key] = (i + 1) + "." + (k + 1); return [key, Array.isArray(t) ? t[1] : t]; });
      if (typeof COURSE_LEVELS !== "undefined") COURSE_LEVELS.push({ id: "lang-" + L.id + "-" + (i + 1), name: L.name, title: LANG_LEVELS[i].name, color: LANG_LEVELS[i].color, lessons: rows,
        href: "language.html?l=" + L.id + "&v=" + (i + 1), group: "lang-" + L.id, crumbs: [["Languages", "languages.html"], [L.name, "language.html?l=" + L.id]] });
      return rows;
    });
  });
})();
function langById(id) { return LANGS.filter(function (l) { return l.id === id; })[0]; }
function langDone() { var d = {}; try { d = JSON.parse(localStorage.getItem("itroadmap-v2-done") || "{}"); } catch (e) {} return d; }
/* how far a learner is: 0 = starting Beginner ... 3 = all three levels done */
function langProgress(L) { var d = langDone(), p = 0; for (var i = 0; i < 3; i++) { if (L.lv[i].every(function (r) { return d[r[0]]; })) p = i + 1; else break; } return p; }
/* small square icon with the language's short name */
function langIcon(L, size) {
  var s = size || 44;
  return '<span class="lang-ico" style="--lc:' + L.color + ';width:' + s + 'px;height:' + s + 'px;font-size:' + Math.round(s * (L.abbr.length > 3 ? 0.28 : L.abbr.length > 2 ? 0.32 : 0.4)) + 'px">' + L.abbr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</span>';
}
/* gauge: 3 coloured segments (Beginner, Intermediate, Advanced) and a needle.
   pos: 0..3 (needle points to the middle of segment pos, or to the end when 3). */
function langGauge(pos, opts) {
  opts = opts || {};
  var W = 200, cx = 100, cy = 100, R = 92, r = 56, gap = 3, out = [];
  function pt(a, rad) { var t = a * Math.PI / 180; return [cx + rad * Math.cos(t), cy - rad * Math.sin(t)]; }
  LANG_LEVELS.forEach(function (lv, i) {
    var a0 = 180 - i * 60 - (i ? gap / 2 : 0), a1 = 180 - (i + 1) * 60 + (i < 2 ? gap / 2 : 0);
    var p0 = pt(a0, R), p1 = pt(a1, R), p2 = pt(a1, r), p3 = pt(a0, r);
    var d = "M" + p0[0].toFixed(1) + " " + p0[1].toFixed(1) + " A" + R + " " + R + " 0 0 1 " + p1[0].toFixed(1) + " " + p1[1].toFixed(1) + " L" + p2[0].toFixed(1) + " " + p2[1].toFixed(1) + " A" + r + " " + r + " 0 0 0 " + p3[0].toFixed(1) + " " + p3[1].toFixed(1) + " Z";
    var on = opts.sel === i, dim = opts.sel != null && opts.sel !== i;
    out.push('<path class="g-seg' + (on ? " on" : "") + '" data-i="' + i + '" d="' + d + '" fill="' + lv.color + '"' + (dim ? ' opacity="0.62"' : "") + '><title>' + lv.name + '</title></path>');
    if (opts.labels) { var m = pt(180 - i * 60 - 30, R + 16); out.push('<text x="' + m[0].toFixed(1) + '" y="' + (m[1] + 4).toFixed(1) + '" text-anchor="middle" class="g-lbl">' + lv.name.toUpperCase() + '</text>'); }
  });
  var ang = pos >= 3 ? 8 : 180 - pos * 60 - 30, tip = pt(ang, R - 12), b1 = pt(ang + 90, 6), b2 = pt(ang - 90, 6);
  out.push('<polygon class="g-needle" points="' + tip[0].toFixed(1) + "," + tip[1].toFixed(1) + " " + b1[0].toFixed(1) + "," + b1[1].toFixed(1) + " " + b2[0].toFixed(1) + "," + b2[1].toFixed(1) + '"/>');
  out.push('<circle class="g-hub" cx="' + cx + '" cy="' + cy + '" r="10"/>');
  var vb = opts.labels ? "-44 -18 288 130" : "0 0 200 112";
  return '<svg class="lang-gauge' + (opts.cls ? " " + opts.cls : "") + '" viewBox="' + vb + '" role="img" aria-label="Level gauge">' + out.join("") + '</svg>';
}
/* strip of suggested languages (icons only) for a level/module */
function langSuggestBox(levelId) {
  var ids = LANG_SUGGEST[levelId]; if (!ids) return null;
  var box = document.createElement("div"); box.className = "lang-sugg";
  box.innerHTML = '<span class="lang-sugg-t">Languages to learn</span><div class="lang-sugg-icons"></div>';
  ids.forEach(function (id) {
    var L = langById(id); if (!L) return;
    var a = document.createElement("a"); a.href = "language.html?l=" + L.id; a.title = L.name; a.setAttribute("aria-label", L.name); a.className = "lang-sugg-a";
    a.innerHTML = langIcon(L, 40); a.addEventListener("click", function (e) { e.stopPropagation(); });
    box.querySelector(".lang-sugg-icons").appendChild(a);
  });
  return box;
}
