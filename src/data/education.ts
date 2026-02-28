export type EducationLink = {
  label: string;
  url: string;
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  dates: string;
  meta?: string;
  description?: string;
  coursework?: string[];
  achievements?: string[];
  activities?: string[];
  links?: EducationLink[];
};

export const education: EducationItem[] = [
  {
    id: "gatech",
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science, Machine Learning",
    dates: "August 2025 - Present",
    description: "Pursuing a Master's degree in Computer Science with a specialization in Machine Learning. The program focuses on advanced topics in artificial intelligence, deep learning, and their applications in real-world systems.",
    coursework: [
      "Computer Vision",
      "Machine Learning",
      "Time Series Analysis",
    ],
  },
  {
    id: "umass",
    school: "University of Massachusetts Amherst",
    degree: "Bachelor of Science in Computer Science & Computational Mathematics",
    dates: "September 2020 - May 2024",
    description: "Completed a dual degree in Computer Science and Computational Mathematics, combining strong theoretical foundations with practical software engineering skills.",
    coursework: [
      "Scalable Web Systems",
      "Data Management",
      "Artificial Intelligence",
      "Introduction to Algorithms",
      "Software Engineering",
      "Web Programming",
      "Game Programming",
      "Formal Language Theory",
      "Statistics I",
      "Scientific Computation",
      "Ordinary Differential Equations",
      "Abstract Algebra",
      "Theory of Numbers",
      "Multivariate Calculus",
    ],
    achievements: [
      "Dean's List - Multiple Semesters",
    ],
  },
];

// Helper function to find education by ID
export function findEducationById(id: string): EducationItem | null {
  return education.find(edu => edu.id === id) || null;
}

// Get all education IDs for static path generation
export function getAllEducationIds(): string[] {
  return education.map(edu => edu.id);
}
