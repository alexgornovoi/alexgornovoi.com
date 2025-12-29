export type RoleLink = {
  label: string;
  url: string;
};

export type Role = {
  id: string;
  title: string;
  dates: string;
  description?: string;
  longDescription?: string;
  highlights?: string[];
  achievements?: string[];
  technologies?: string[];
  links?: RoleLink[];
};

export type ExperienceItem = {
  company: string;
  location?: string;
  roles: Role[];
};

export const experience: ExperienceItem[] = [
  {
    company: "The Cigna Group",
    location: "Bloomfield, CT",
    roles: [
      {
        id: "cigna-ai-engineer",
        title: "AI Engineer",
        dates: "Jul 2025 - Present",
        description: "Building end-to-end data pipelines and AI solutions within the AI Center of Enablement.",
        longDescription: "As an AI Engineer in the AI Center of Enablement, I build end-to-end data pipelines that process information from diverse sources, handling both backend infrastructure and frontend interfaces. My work focuses on creating scalable solutions that integrate with enterprise systems.",
        highlights: [
          "Building end-to-end data pipelines processing data from multiple sources",
          "Developing both backend services and frontend interfaces for AI applications",
          "Integrating with enterprise data sources and APIs",
          "Contributing to the Enterprise Context Model architecture",
        ],
        technologies: ["Python", "LangChain", "AWS", "RAG", "OpenAI", "Vector Databases"],
      },
      {
        id: "cigna-sre",
        title: "Site Reliability Engineer",
        dates: "Jul 2024 - Jul 2025",
        description: "Improved SRE efficiency via service virtualization, chaos testing, and automation; patterns and tools adopted across SRE community and enterprise resiliency efforts.",
        longDescription: "Improved SRE efficiency through service virtualization, chaos testing, and automation initiatives. Developed patterns and tools that were adopted across the SRE community and enterprise resiliency efforts.",
        highlights: [
          "Built a Python package to automate Gremlin chaos tests; integrated into enterprise resiliency testing pipeline and adopted by SRE teams",
          "Created a new pattern for virtual service development that streamlined steps and improved sharing across teams",
          "Partnered with teams to design and deploy virtual services to enhance reliability testing",
          "Assisted teams with FMEA to identify risks and strengthen resilience",
        ],
        achievements: [
          "Chaos testing package adopted enterprise-wide as part of resiliency testing pipeline",
          "Virtual service pattern became standard approach for cross-team service development",
        ],
        technologies: ["Python", "Gremlin", "Service Virtualization", "FMEA"],
      },
      {
        id: "cigna-intern",
        title: "Application Developer Intern",
        dates: "May 2023 - Aug 2023",
        description: "Built test automation frameworks and CI pipelines to improve code quality and delivery speed.",
        longDescription: "Built test automation frameworks and CI pipelines to improve code quality and delivery speed for the development team.",
        highlights: [
          "Created an end-to-end testing framework using Cypress",
          "Configured CloudBees CI to run tests on each code push",
        ],
        achievements: [
          "Enabled automated regression testing on every code push, improving deployment confidence",
        ],
        technologies: ["Cypress", "JavaScript", "CloudBees", "CI/CD"],
      },
    ],
  },
  {
    company: "Stockbridge School of Agriculture, UMass Amherst",
    location: "Amherst, MA",
    roles: [
      {
        id: "umass-it",
        title: "Information Technology Assistant & Desktop Support",
        dates: "Jul 2022 - May 2024",
        description: "Day-to-day technical support for School of Agriculture and College of Natural Sciences; supported faculty, researchers, and staff.",
        longDescription: "Provided day-to-day technical support for the School of Agriculture and College of Natural Sciences, supporting faculty, researchers, and staff with their technology needs.",
        highlights: [
          "Resolved hardware and software issues, including troubleshooting and component replacement",
          "Imaged, configured, and deployed equipment; decommissioned outdated technology",
          "Performed installs, updates, and security patches",
          "Delivered occasional user training and guidance to faculty and researchers",
        ],
        achievements: [
          "Maintained reliable IT operations across two colleges for nearly 2 years",
          "Streamlined equipment deployment process through standardized imaging workflows",
        ],
        technologies: ["Windows", "macOS", "Hardware Troubleshooting", "System Imaging"],
      },
    ],
  },
];

// Helper function to find a role by ID
export function findRoleById(id: string): { company: ExperienceItem; role: Role } | null {
  for (const company of experience) {
    for (const role of company.roles) {
      if (role.id === id) {
        return { company, role };
      }
    }
  }
  return null;
}

// Get all role IDs for static path generation
export function getAllRoleIds(): string[] {
  return experience.flatMap(company => company.roles.map(role => role.id));
}
