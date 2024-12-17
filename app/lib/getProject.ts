import projectsData from "../../public/data/projects.json";

export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  progress: number;
  status: string;
  image: string;
  budget: number;
  investmentGoal: number;
  currentInvestment: number;
}

export async function getProject(id: string): Promise<Project> {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 100));

  const project = projectsData.find((p) => p.id.toString() === id);
  if (!project) {
    throw new Error("Project not found");
  }
  return project as Project;
}
