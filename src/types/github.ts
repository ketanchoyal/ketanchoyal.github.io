export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  demoUrl: string | null;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  isLive: boolean;
}
