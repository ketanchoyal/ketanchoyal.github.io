interface GitHubRepo {
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
    console.error("Error fetching user repositories:", error);
    return [];
  }
}

// Function to get repository details including topics
async function getRepoDetails(
  username: string,
  repoName: string
): Promise<GitHubRepo | null> {
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
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repo: GitHubRepo = await response.json();
    return repo;
  } catch (error) {
    console.error(`Error fetching repo details for ${repoName}:`, error);
    return null;
  }
}

// Convert repository name to a more readable title
function repoNameToTitle(name: string): string {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to get image URL for a project
function getProjectImage(repoName: string): string {
  // First try to get a project-specific image
  const specificImage = `/images/${repoName.toLowerCase()}.png`;

  // You could add logic here to check if the image exists
  // For now, we'll return the specific image path
  return specificImage;
}

const featuredRepos = [
  "Our-E-School",
  "extended_navbar_scaffold",
  "mapbox_search",
  "Sub-Track",
  "calorie_tracker",
];

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (!token) {
      console.error("GitHub token not found in environment variables");
      return FALLBACK_PROJECTS;
    }

    const response = await fetch(
      "https://api.github.com/users/ketanchoyal/repos?sort=stars&per_page=100",
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub repos:", response.status);
      return FALLBACK_PROJECTS;
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter and sort featured repos
    const featured = repos
      .filter((repo) => featuredRepos.includes(repo.name))
      .sort(
        (a, b) => featuredRepos.indexOf(a.name) - featuredRepos.indexOf(b.name)
      )
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

    return featured;
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return FALLBACK_PROJECTS;
  }
}

// Fallback data in case the API fails
const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Our E-School",
    description:
      "A mobile app created using Flutter Framework for School management.",
    url: "https://github.com/ketanchoyal/Our-E-School",
    demoUrl: null,
    stars: 504,
    forks: 292,
    language: "Dart",
    topics: ["Flutter", "Firebase", "Dart"],
    isLive: false,
  },
  {
    id: 2,
    name: "Extended Navbar Scaffold",
    description:
      "A Custom Extended Scaffold with Expandable and Floating Navigation Bar.",
    url: "https://github.com/ketanchoyal/extended_navbar_scaffold",
    demoUrl: null,
    stars: 141,
    forks: 39,
    language: "Dart",
    topics: ["Flutter", "Dart", "UI Components"],
    isLive: false,
  },
  {
    id: 3,
    name: "Mapbox Search",
    description: "A Flutter package for place search using MapBox API.",
    url: "https://github.com/ketanchoyal/mapbox_search",
    demoUrl: null,
    stars: 73,
    forks: 60,
    language: "Dart",
    topics: ["Flutter", "MapBox", "Dart"],
    isLive: false,
  },
  {
    id: 4,
    name: "Sub Track",
    description: "A Flutter application to keep track of subscriptions.",
    url: "https://github.com/ketanchoyal/Sub-Track",
    demoUrl: null,
    stars: 43,
    forks: 3,
    language: "Dart",
    topics: ["Flutter", "Dart", "SQLite"],
    isLive: false,
  },
  {
    id: 5,
    name: "Calorie Tracker",
    description: "A calorie tracking app with iOS HealthKit integration.",
    url: "https://github.com/ketanchoyal/calorie-tracker",
    demoUrl: null,
    stars: 15,
    forks: 2,
    language: "Dart",
    topics: ["Flutter", "HealthKit", "iOS"],
    isLive: false,
  },
];
