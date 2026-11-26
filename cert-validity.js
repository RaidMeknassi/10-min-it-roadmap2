/* © 10-Minute IT Roadmap. All rights reserved. */
/* For every certification: how long it stays valid, the official page, and the vendor's renewal rules.
   Rules change: re-check the vendor pages from time to time (last checked November 2026). */
var CERT_RULES = {   // renewal rules page per vendor family
  comptia: "https://help.comptia.org/hc/en-us/articles/13923899954196-Which-CompTIA-Certifications-Must-Be-Renewed",
  cisco: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/recertification/index.html",
  ms: "https://learn.microsoft.com/en-us/credentials/certifications/renew-your-microsoft-certification",
  aws: "https://aws.amazon.com/certification/recertification/",
  google: "https://support.google.com/cloud-certification/answer/9907853?hl=en",
  redhat: "https://www.redhat.com/en/services/certification/renewal",
  isc2: "https://www.isc2.org/policies-procedures/member-policies",
  peoplecert: "https://www.peoplecert.org/ways-to-get-certified/Keep-your-certification-current",
  lf: "https://training.linuxfoundation.org/certification-policy-change-2024/",
  vmware: "https://knowledge.broadcom.com/external/article/312878/vmware-recertification-policy-rollback.html",
  pmi: "https://www.pmi.org/certifications/certification-resources/maintain",
  sa: "https://support.scrumalliance.org/hc/en-us/articles/360015777971-How-to-renew-certifications",
  safe: "https://support.scaledagile.com/en/articles/9791345-general-renewal-faqs",
  snow: "https://www.servicenow.com/community/training-and-certifications/delta-exam-guide-zurich-version/ta-p/2308148",
  atl: "https://community.atlassian.com/learning/hub/resources-and-support/about-atlassian-credentials",
  sf: "https://trailhead.salesforce.com/content/learn/modules/slack-administrator-certification-maintenance-spring-26/maintain-your-slack-administrator-certification-for-spring-26",
  offsec: "https://www.offsec.com/products/oscp-plus/",
  hashi: "https://developer.hashicorp.com/certifications/terraform-associate",
  gh: "https://learn.microsoft.com/en-us/credentials/certifications/github-foundations",
  ws: "https://lists.wireshark.org/archives/wireshark-users/202511/msg00001.html"
};
var CT = "https://www.comptia.org/en-us/certifications/";
var MSC = "https://learn.microsoft.com/en-us/credentials/certifications/";
var CE3 = "Valid 3 years. Renew with CompTIA continuing education (CEUs) or a higher CompTIA exam.";
var MSY = "Valid 1 year. Renew for free online each year with a short Microsoft Learn assessment.";
var MSF = "Does not expire (Microsoft Fundamentals certifications have no renewal).";
var PC3 = "Renew every 3 years from your exam date: PeopleCert CPD points, a newer exam in the same suite, or a retake.";
var SN = "Stays valid only if you pass ServiceNow's yearly delta exam (plus a maintenance fee after the first year). Miss it and it expires.";
var SA2 = "Valid 2 years. Renew with Scrum Education Units (SEUs) and a renewal fee.";
var SCRUMORG = "Does not expire (Scrum.org certifications are for life).";
/* name on the Certifications page -> [validity note, official page, rules key] */
var CERT_VALIDITY = {
  "CompTIA Tech+": ["Does not expire (good for life).", CT + "tech/", "comptia"],
  "CompTIA A+": [CE3, CT + "a/", "comptia"],
  "CompTIA Network+": [CE3, CT + "network/", "comptia"],
  "CompTIA Security+": [CE3, CT + "security/", "comptia"],
  "CompTIA Linux+": [CE3, CT + "linux/", "comptia"],
  "CompTIA CySA+": [CE3, CT + "cysa/", "comptia"],
  "CompTIA PenTest+": [CE3, CT + "pentest/", "comptia"],
  "CompTIA Cloud+": [CE3, CT + "cloud/", "comptia"],
  "CompTIA Data+": [CE3, CT + "data/", "comptia"],
  "CompTIA DataSys+": [CE3, CT + "datasys/", "comptia"],
  "CompTIA SecurityX": [CE3, CT + "securityx/", "comptia"],
  "CompTIA CloudNetX": [CE3, CT + "cloudnetx/", "comptia"],
  "CompTIA Server+": ["Earned from 1 October 2025: renew through CompTIA continuing education. Earned before: good for life.", CT + "server/", "comptia"],
  "CompTIA Project+": ["Earned from 1 October 2025: renew through CompTIA continuing education. Earned before: good for life.", CT + "project/", "comptia"],
  "CompTIA DataAI": ["New exam: check the renewal rule on CompTIA's page before you book.", CT, "comptia"],
  "CompTIA SecAI+": ["New exam: check the renewal rule on CompTIA's page before you book.", CT, "comptia"],
  "CompTIA SecOT+": ["New exam: check the renewal rule on CompTIA's page before you book.", CT, "comptia"],
  "Google IT Support Professional Certificate": ["No renewal: a Google Career Certificate is a one-time course certificate.", "https://grow.google/certificates"],
  "Google Data Analytics Certificate": ["No renewal: a Google Career Certificate is a one-time course certificate.", "https://grow.google/certificates/data-analytics/"],
  "Cisco CCNA": ["Valid 3 years. Renew with Cisco continuing education credits or by passing an exam.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html", "cisco"],
  "Cisco CCNP Enterprise": ["Valid 3 years. Renew with Cisco continuing education credits or by passing an exam.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html", "cisco"],
  "Cisco CCNP Security": ["Valid 3 years. Renew with Cisco continuing education credits or by passing an exam.", "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/ccnp-security/index.html", "cisco"],
  "ISC2 Certified in Cybersecurity (CC)": ["3-year cycle: earn CPE credits and pay the yearly ISC2 membership fee to keep it.", "https://www.isc2.org/certifications/cc", "isc2"],
  "Microsoft SC-900": [MSF, MSC + "security-compliance-and-identity-fundamentals/", "ms"],
  "Microsoft AZ-900 Azure Fundamentals": [MSF, MSC + "azure-fundamentals/", "ms"],
  "Microsoft DP-900 Data Fundamentals": [MSF, MSC + "azure-data-fundamentals/", "ms"],
  "Microsoft AI-900 Azure AI Fundamentals": [MSF, MSC + "azure-ai-fundamentals/", "ms"],
  "Microsoft SC-200": [MSY, MSC + "security-operations-analyst/", "ms"],
  "Microsoft AZ-800 Windows Server Hybrid Administrator": [MSY, MSC + "windows-server-hybrid-administrator/", "ms"],
  "Microsoft AZ-104 Azure Administrator": [MSY, MSC + "azure-administrator/", "ms"],
  "Microsoft AZ-204 Azure Developer": [MSY, MSC + "azure-developer/", "ms"],
  "Microsoft 365 Fundamentals (Microsoft 365)": [MSF, "https://learn.microsoft.com/en-us/credentials/browse/?credential_types=certification", "ms"],
  "Endpoint Administrator Associate (Microsoft 365)": [MSY, MSC + "modern-desktop/", "ms"],
  "Teams Administrator Associate (Microsoft 365)": [MSY, "https://learn.microsoft.com/en-us/credentials/browse/?credential_types=certification", "ms"],
  "Microsoft 365 and AI Services Administrator Associate (Microsoft 365)": [MSY, "https://learn.microsoft.com/en-us/credentials/browse/?credential_types=certification", "ms"],
  "Microsoft Certified: Azure Virtual Desktop Specialty (Microsoft Remote Desktop (RDP))": [MSY, MSC + "azure-virtual-desktop-specialty/", "ms"],
  "Red Hat RHCSA": ["Current for 3 years. Renew by passing a newer Red Hat exam (or the same one again).", "https://www.redhat.com/en/services/certification/rhcsa", "redhat"],
  "AWS Cloud Practitioner": ["Valid 3 years. Renew by passing the current exam (or a higher AWS exam).", "https://aws.amazon.com/certification/certified-cloud-practitioner/", "aws"],
  "AWS Solutions Architect Associate": ["Valid 3 years. Renew by passing the current exam (or a higher AWS exam).", "https://aws.amazon.com/certification/certified-solutions-architect-associate/", "aws"],
  "Google Associate Cloud Engineer": ["Valid 3 years. Renew with Google's shorter renewal exam or continuing education.", "https://cloud.google.com/learn/certification/cloud-engineer", "google"],
  "Associate Google Workspace Administrator (Google Workspace)": ["About 3 years (Google's rule for associate certifications). Renew by exam before it becomes inactive.", "https://cloud.google.com/learn/certification/google-workspace-administrator?hl=en", "google"],
  "Python Institute PCEP": ["Valid 5 years (Python Institute credential validity).", "https://pythoninstitute.org/pcep"],
  "Python Institute PCAP": ["Valid 5 years (Python Institute credential validity).", "https://pythoninstitute.org/pcap"],
  "OffSec OSCP": ["OSCP never expires. The OSCP+ you get with it is valid 3 years and must be renewed.", "https://www.offsec.com/courses/pen-200/", "offsec"],
  "VMware VCP": ["Does not expire (VMware removed recertification in 2019), but each VCP is tied to a product version.", "https://docs.broadcom.com/doc/vmware-certification-frequently-asked-questions", "vmware"],
  "Certified Kubernetes Administrator (CKA)": ["Valid 2 years for exams taken since April 2024 (3 years before that).", "https://training.linuxfoundation.org/certification-catalog/", "lf"],
  "HashiCorp Terraform Associate": ["Valid 2 years. Renew by passing the current exam.", "https://developer.hashicorp.com/certifications/terraform-associate", "hashi"],
  "GitHub Foundations": ["GitHub certifications have been valid 2 years; renewals are moving to Microsoft Learn. Check the date on your profile.", "https://learn.microsoft.com/en-us/credentials/certifications/github-foundations", "gh"],
  "ITIL Foundation": [PC3, "https://www.peoplecert.org/", "peoplecert"],
  "PRINCE2 7 Foundation (PRINCE2 F)": [PC3, "https://www.peoplecert.org/", "peoplecert"],
  "PRINCE2 7 Practitioner (PRINCE2 P)": [PC3, "https://www.peoplecert.org/", "peoplecert"],
  "Professional Scrum Master I (PSM I)": [SCRUMORG, "https://www.scrum.org/assessments/professional-scrum-master-i-certification"],
  "Professional Scrum Master II (PSM II)": [SCRUMORG, "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-assessments"],
  "Professional Scrum Master III (PSM III)": [SCRUMORG, "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-iii-assessment"],
  "Professional Scrum Product Owner I (PSPO I)": [SCRUMORG, "https://www.scrum.org/professional-scrum-certifications"],
  "Professional Scrum Product Owner II (PSPO II)": [SCRUMORG, "https://www.scrum.org/professional-scrum-certifications"],
  "Professional Scrum Product Owner III (PSPO III)": [SCRUMORG, "https://www.scrum.org/professional-scrum-certifications"],
  "Certified ScrumMaster (CSM)": [SA2, "https://www.scrumalliance.org/get-certified/scrum-master-track", "sa"],
  "Advanced Certified ScrumMaster (A-CSM)": [SA2, "https://www.scrumalliance.org/get-certified/scrum-master-track/advanced-certified-scrummaster", "sa"],
  "Certified Scrum Professional – ScrumMaster (CSP-SM)": [SA2, "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrum-professional-scrummaster", "sa"],
  "SAFe Scrum Master (SSM)": ["Valid 1 year. Renew every year in SAFe Studio (no new exam).", "https://scaledagile.com/safe-certification-2", "safe"],
  "Certified Associate in Project Management (CAPM)": ["3-year cycle: earn 15 PDUs to renew.", "https://www.pmi.org/certifications", "pmi"],
  "PMI Agile Certified Practitioner (PMI-ACP)": ["3-year cycle: earn 30 PDUs to renew.", "https://www.pmi.org/certifications/agile-acp", "pmi"],
  "Project Management Professional (PMP)": ["3-year cycle: earn 60 PDUs to renew.", "https://www.pmi.org/certifications", "pmi"],
  "Jira Service Management Agent Essentials (Jira Service Management)": ["Atlassian certificates last 12 months; Atlassian certifications (ACA/ACP) last 2 years.", "https://www.atlassian.com/certification", "atl"],
  "Jira Service Management with AI Fundamentals (replaces ACA-910) (Jira Service Management)": ["Atlassian certificates last 12 months; Atlassian certifications (ACA/ACP) last 2 years.", "https://www.atlassian.com/certification", "atl"],
  "Managing Jira Service Projects for Cloud (Jira Service Management)": ["Valid 2 years (Atlassian certification). Renew with continuing education units or a retake.", "https://www.atlassian.com/certification", "atl"],
  "Jira Administration for Cloud (Jira Service Management)": ["Valid 2 years (Atlassian certification). Renew with continuing education units or a retake.", "https://www.atlassian.com/certification", "atl"],
  "Salesforce Certified Slack Administrator (Slack)": ["Keep it by finishing Salesforce's free maintenance module on Trailhead every year.", "https://trailhead.salesforce.com/content/learn/trails/maintain-your-salesforce-certifications", "sf"],
  "Salesforce Certified Slack Consultant (Slack)": ["Keep it by finishing Salesforce's free maintenance module on Trailhead every year.", "https://trailhead.salesforce.com/content/learn/trails/maintain-your-salesforce-certifications", "sf"],
  "Salesforce Certified Slack Developer (Slack)": ["Keep it by finishing Salesforce's free maintenance module on Trailhead every year.", "https://trailhead.salesforce.com/content/learn/trails/maintain-your-salesforce-certifications", "sf"],
  "Wireshark Certified Analyst (Wireshark)": ["Valid 3 years. Renew by taking the exam again.", "https://www.wireshark.org/certifications", "ws"]
};
/* ITIL advanced modules and designations, ServiceNow levels: same rule for the whole family */
function certValidity(name) {
  var v = CERT_VALIDITY[name]; if (v) return v;
  if (/^ITIL |^Monitor, Support|^Plan, Implement|^Collaborate, Assure/.test(name)) return [PC3, "https://www.peoplecert.org/", "peoplecert"];
  if (/\(ServiceNow\)$/.test(name)) return [SN, "https://learning.servicenow.com/", "snow"];
  return null;
}
/* small block: "⏳ note · Official page ↗ · Renewal rules ↗" (links open in a new tab and never trigger the card link) */
function certValidityEl(name) {
  var v = certValidity(name); if (!v) return null;
  var box = document.createElement("div"); box.className = "cx-valid";
  var p = document.createElement("p"); p.textContent = "⏳ " + v[0]; box.appendChild(p);
  var links = document.createElement("div"); links.className = "cx-src";
  function lk(t, u) { var s = document.createElement("span"); s.className = "cx-srcl"; s.setAttribute("role", "link"); s.tabIndex = 0; s.textContent = t; s.title = u;
    function go(e) { e.preventDefault(); e.stopPropagation(); window.open(u, "_blank", "noopener"); }
    s.addEventListener("click", go); s.addEventListener("keydown", function (e) { if (e.key === "Enter") go(e); }); links.appendChild(s); }
  lk("Official page ↗", v[1]); if (v[2] && CERT_RULES[v[2]]) lk("Renewal rules ↗", CERT_RULES[v[2]]);
  box.appendChild(links); return box;
}
