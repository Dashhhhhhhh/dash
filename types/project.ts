export interface Project {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  approach: string[];
  results: string[];
  metrics: Record<string, string | number>;
  repoUrl: string;
  demoUrl?: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  tags: string[];
  date: string;
}

export type Projects = Project[];
