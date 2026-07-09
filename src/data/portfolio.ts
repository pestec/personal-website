export const profile = {
  name: "Cosmin Peste",
  role: "Data Engineering Delivery Manager",
  location: "London, UK",
  email: "me@cosminpeste.com",
  tagline:
    "Data engineering leader turning complex, regulated data platforms into reliable, self-serve infrastructure.",
} as const;

export type Experience = {
  start: string;
  end: string;
  title: string;
  company: string;
  location: string;
  url: string;
};

export const experience: Experience[] = [
  {
    start: "Jul 2026",
    end: "Present",
    title: "Data Engineering Delivery Manager",
    company: "AXA",
    location: "London",
    url: "https://www.axa.co.uk",
  },
  {
    start: "Oct 2021",
    end: "Jul 2026",
    title: "Lead Data Engineer",
    company: "AXA",
    location: "London",
    url: "https://www.axa.co.uk",
  },
  {
    start: "Jan 2019",
    end: "Oct 2021",
    title: "Senior Data Engineer",
    company: "Experian",
    location: "London",
    url: "https://www.experian.com",
  },
  {
    start: "Sep 2018",
    end: "Jan 2019",
    title: "Data Analyst",
    company: "Experian",
    location: "London",
    url: "https://www.experian.com",
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Coventry University",
  location: "Coventry, UK",
  start: "2014",
  end: "2018",
};

export const certificates = [
  { name: "Microsoft Azure Fundamentals — AZ-900", issuer: "Microsoft", grade: "Pass" },
  { name: "Microsoft Azure Data Fundamentals — DP-900", issuer: "Microsoft", grade: "Pass" },
  { name: "Excel Advanced Spreadsheets — Level 3", issuer: "British Computer Society", grade: "88%" },
  { name: "Introduction to MySQL", issuer: "Oracle", grade: "Pass" },
  { name: "IT Essentials: PC Hardware and Software", issuer: "Cisco Network Academy", grade: "Pass" },
];

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Programming & Data Processing",
    items: ["Python", "PySpark", "Pandas", "SQL", "T-SQL", "PostgreSQL", "HTML", "CSS", "JavaScript / Node.js"],
  },
  {
    category: "Data Engineering & Platforms",
    items: ["Azure Databricks", "Azure Data Factory", "Azure Data Lake", "Apache Spark", "Unity Catalog", "Docker", "Jenkins"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure DevOps", "CI/CD Pipelines", "Git", "GitHub", "SVN", "Bitbucket"],
  },
  {
    category: "Data Governance & Metadata",
    items: ["Collibra", "Unity Catalog"],
  },
  {
    category: "Data Visualisation & BI",
    items: ["Power BI", "Tableau"],
  },
  {
    category: "Collaboration & Agile",
    items: ["Jira", "Confluence", "SharePoint"],
  },
];

export type Project = {
  year: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    year: "2025",
    name: "MapVista",
    description: "AI trip planner — conversational itineraries, agent-based recommendations.",
    tech: ["React", "Node.js", "OpenAI API"],
  },
  {
    year: "2021",
    name: "Flight Delay Prediction",
    description: "ML model predicting flight delays from aviation and weather data.",
    tech: ["Python", "Scikit-learn", "Azure"],
  },
  {
    year: "2019",
    name: "Crime Rate Analysis",
    description: "Uncovering city crime patterns with SQL, Python, and Power BI.",
    tech: ["SQL", "Python", "Power BI"],
  },
  {
    year: "2018",
    name: "Fantasy Football",
    description: "Web-scraped app aggregating stats, built and deployed on Azure.",
    tech: ["Python", "Web Scraping", "Azure"],
  },
];

export const interests =
  "Outside of work: personal projects, new frameworks, and tennis.";
