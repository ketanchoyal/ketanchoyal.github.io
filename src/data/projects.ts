export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
}

export const projects: Project[] = [
  {
    id: 'our-e-school',
    title: 'Our E-School',
    description: 'A comprehensive mobile app built with Flutter Framework for School management. This highly popular project demonstrates expertise in creating complex educational management systems.',
    image: '/images/our-e-school.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    githubUrl: 'https://github.com/ketanchoyal/Our-E-School',
    stars: 504,
    forks: 292
  },
  {
    id: 'extended-navbar',
    title: 'Extended Navbar Scaffold',
    description: 'A custom Flutter package providing an elegant Extended Scaffold with Expandable and Floating Navigation Bar. Popular among Flutter developers for its unique UI capabilities.',
    image: '/images/extended-navbar.jpg',
    technologies: ['Flutter', 'Dart', 'Custom Widgets', 'UI/UX'],
    githubUrl: 'https://github.com/ketanchoyal/extended_navbar_scaffold',
    stars: 141,
    forks: 39
  },
  {
    id: 'mapbox-search',
    title: 'Mapbox Search',
    description: 'A Flutter package for place search and static map images using MapBox API. Widely used by developers for implementing location-based features.',
    image: '/images/mapbox-search.jpg',
    technologies: ['Flutter', 'Dart', 'MapBox API', 'Geolocation'],
    githubUrl: 'https://github.com/ketanchoyal/mapbox_search',
    stars: 73,
    forks: 60
  },
  {
    id: 'sub-track',
    title: 'Sub-Track',
    description: 'A sleek Flutter application designed to help users keep track of their subscriptions. Features a modern UI and efficient subscription management system.',
    image: '/images/sub-track.jpg',
    technologies: ['Flutter', 'Dart', 'State Management', 'Local Storage'],
    githubUrl: 'https://github.com/ketanchoyal/Sub-Track',
    stars: 43,
    forks: 3
  },
  {
    id: 'calorie-tracker',
    title: 'Calorie Tracker',
    description: 'A minimal yet powerful Calorie Tracker app with HealthKit integration, demonstrating native iOS capabilities alongside Flutter.',
    image: '/images/calorie-tracker.jpg',
    technologies: ['Flutter', 'Dart', 'HealthKit', 'iOS Integration'],
    githubUrl: 'https://github.com/ketanchoyal/calorie_tracker',
    stars: 3,
    forks: 1
  }
];
