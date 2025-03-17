import type { GitHubRepo, Project } from "@/types/github";
import { FALLBACK_PROJECTS as FALLBACK } from "@/data/projects";

// Function to get all repositories for a user
async function getUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
    };

    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

// Convert repository name to a more readable title
function repoNameToTitle(name: string): string {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Relevant topics for filtering repositories
const relevantTopics = [
  "flutter",
  "dart",
  "ios",
  "android",
  "mobile",
  "ui",
  "package",
  "firebase",
  "aws",
];

const mustHaveProjects = ["calorie_tracker"];

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (!token) {
      console.error("GitHub token not found in environment variables");
      return FALLBACK;
    }

    const repos = await getUserRepos("ketanchoyal");

    // Filter and sort featured repos based on:
    // 1. Has at least one relevant topic
    // 2. Sort by stars
    // 3. Take top 5 repos
    const featured = repos
      .filter(
        (repo) =>
          repo.topics.some((topic) =>
            relevantTopics.includes(topic.toLowerCase())
          ) ||
          repo.stargazers_count > 10 ||
          mustHaveProjects.includes(repo.name) // Include highly starred repos even without relevant topics
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo) => ({
        id: repo.id,
        name: repoNameToTitle(repo.name),
        description: repo.description || "No description available",
        url: repo.html_url,
        demoUrl: repo.homepage || null,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || "Unknown",
        topics: repo.topics || [],
        isLive: true,
      }));

    return featured.length > 0 ? featured : FALLBACK;
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return FALLBACK;
  }
}
