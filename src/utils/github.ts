interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
}

const FEATURED_REPOS = [
  'Our-E-School',
  'extended_navbar_scaffold',
  'mapbox_search',
  'sub_track',
  'calorie_tracker_app',
];

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Our E-School',
    description: 'A mobile app created using Flutter Framework for School management.',
    image: '/images/our-e-school.png',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'https://github.com/ketanchoyal/Our-E-School',
    stars: 504,
    forks: 292,
  },
  {
    id: 2,
    title: 'Extended Navbar Scaffold',
    description: 'A Custom Extended Scaffold with Expandable and Floating Navigation Bar.',
    image: '/images/extended_navbar_scaffold.png',
    technologies: ['Flutter', 'Dart', 'UI Components'],
    githubUrl: 'https://github.com/ketanchoyal/extended_navbar_scaffold',
    stars: 141,
    forks: 39,
  },
  {
    id: 3,
    title: 'Mapbox Search',
    description: 'A Flutter package for place search using MapBox API.',
    image: '/images/mapbox_search.png',
    technologies: ['Flutter', 'MapBox', 'Dart'],
    githubUrl: 'https://github.com/ketanchoyal/mapbox_search',
    stars: 73,
    forks: 60,
  },
  {
    id: 4,
    title: 'Sub Track',
    description: 'A Flutter application to keep track of subscriptions.',
    image: '/images/sub_track.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    githubUrl: 'https://github.com/ketanchoyal/sub_track',
    stars: 43,
    forks: 3,
  },
  {
    id: 5,
    title: 'Calorie Tracker',
    description: 'A minimal Calorie Tracker app with HealthKit support.',
    image: '/images/calorie_tracker_app.png',
    technologies: ['Flutter', 'HealthKit', 'Dart'],
    githubUrl: 'https://github.com/ketanchoyal/calorie_tracker_app',
    stars: 0,
    forks: 0,
  },
];

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    console.log('Fetching GitHub projects...');
    const projectPromises = FEATURED_REPOS.map(async (repo) => {
      try {
        console.log(`Fetching repo: ${repo}`);
        const response = await fetch(`https://api.github.com/repos/ketanchoyal/${repo}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-Website'
          }
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Failed to fetch repo ${repo}:`, {
            status: response.status,
            statusText: response.statusText,
            error: errorText
          });
          // Return the fallback data for this repo
          return FALLBACK_PROJECTS.find(p => p.githubUrl.toLowerCase().includes(repo.toLowerCase())) || null;
        }
        
        const data: GitHubRepo = await response.json();
        console.log(`Successfully fetched repo: ${repo}`, {
          stars: data.stargazers_count,
          forks: data.forks_count,
          topics: data.topics
        });
        
        const project: Project = {
          id: data.id,
          title: data.name
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          description: data.description || '',
          image: `/images/${data.name.toLowerCase()}.png`,
          technologies: data.topics.length > 0 ? data.topics : ['Flutter', 'Dart'],
          githubUrl: data.html_url,
          stars: data.stargazers_count,
          forks: data.forks_count,
        };

        if (data.homepage) {
          project.liveUrl = data.homepage;
        }

        return project;
      } catch (repoError) {
        console.error(`Error fetching individual repo ${repo}:`, repoError);
        // Return the fallback data for this repo
        return FALLBACK_PROJECTS.find(p => p.githubUrl.toLowerCase().includes(repo.toLowerCase())) || null;
      }
    });
    
    const results = await Promise.all(projectPromises);
    const validProjects = results.filter((project): project is Project => project !== null);
    console.log('Final projects:', validProjects);
    return validProjects;
  } catch (error) {
    console.error('Error in getFeaturedProjects:', error);
    // Return all fallback projects if everything fails
    return FALLBACK_PROJECTS;
  }
}
