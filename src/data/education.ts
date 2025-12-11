export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  meta?: string;
};

export const education: EducationItem[] = [
  {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    dates: "August 2025 - Present",
    meta: "Specializing in Machine Learning",
  },
  {
    school: "University of Massachusetts Amherst",
    degree: "Bachelor of Science in Computer Science & Computational Mathematics",
    dates: "September 2020 - May 2024",
  },
];
