import type { Project } from "@/types/github";

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Our E-School",
    description:
      "A comprehensive mobile app built with Flutter Framework for School management. This highly popular project demonstrates expertise in creating complex educational management systems.",
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
      "A custom Flutter package providing an elegant Extended Scaffold with Expandable and Floating Navigation Bar. Popular among Flutter developers for its unique UI capabilities.",
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
    description:
      "A Flutter package for place search and static map images using MapBox API. Widely used by developers for implementing location-based features.",
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
    description:
      "A sleek Flutter application designed to help users keep track of their subscriptions. Features a modern UI and efficient subscription management system.",
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
    description:
      "A minimal yet powerful Calorie Tracker app with HealthKit integration, demonstrating native iOS capabilities alongside Flutter.",
    url: "https://github.com/ketanchoyal/calorie-tracker",
    demoUrl: null,
    stars: 15,
    forks: 2,
    language: "Dart",
    topics: ["Flutter", "HealthKit", "iOS"],
    isLive: false,
  },
];

export const projects: Project[] = FALLBACK_PROJECTS;
