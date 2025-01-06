export interface DailyProject {
  day: number;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  tags: string[];
  imageUrl: string;
}