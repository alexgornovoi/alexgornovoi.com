export type ExperienceItem = {
  company: string;
  roles: { title: string; dates: string; meta?: string }[];
};

export const experience: ExperienceItem[] = [
  {
    company: "The Cigna Group",
    roles: [
      {
        title: "AI Engineer",
        dates: "Jul 2025 - Present",
        meta: "AI Center of Enablement · Enterprise Context Model",
      },
      {
        title: "Site Reliability Engineer",
        dates: "Jul 2024 - Jul 2025",
        meta: "Service virtualization · Chaos testing · Automation",
      },
      {
        title: "Application Developer Intern",
        dates: "May 2023 - Aug 2023",
        meta: "Cypress E2E · CI (CloudBees)",
      },
    ],
  },
  {
    company: "Stockbridge School of Agriculture, UMass Amherst",
    roles: [
      {
        title: "IT Assistant & Desktop Support",
        dates: "Jul 2022 - May 2024",
        meta: "IT support · Imaging/deployment · Maintenance",
      },
    ],
  },
];
