import { CodingStats } from "@/types/wakatime";

// Fallback data focusing on mobile and package development
export const FALLBACK_DATA: CodingStats = {
  totalHours: 1200, // 1200 hours of coding
  languages: [
    {
      name: "Dart",
      percent: 45.2,
      color: "#00B4AB",
    },
    {
      name: "Swift",
      percent: 25.5,
      color: "#F05138",
    },
    {
      name: "TypeScript",
      percent: 15.8,
      color: "#3178C6",
    },
    {
      name: "Kotlin",
      percent: 8.3,
      color: "#7F52FF",
    },
    {
      name: "Python",
      percent: 5.2,
      color: "#3776AB",
    },
  ],
  editors: [
    {
      name: "Android Studio",
      percent: 45.0,
      color: "#3DDC84",
    },
    {
      name: "VS Code",
      percent: 35.0,
      color: "#007ACC",
    },
    {
      name: "Xcode",
      percent: 20.0,
      color: "#147EFB",
    },
  ],
  dailyActivity: Array.from({ length: 14 }, (_, i) => ({
    date: new Date(Date.now() - (13 - i) * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    total: Math.random() * 8 * 3600, // Random hours between 0-8 hours per day
    categories: Math.random() * 3600, // Random category time
  })),
  bestDay: {
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    total: 8 * 3600, // 8 hours
    categories: 7.5 * 3600, // 7.5 hours in categories
  },
  isLive: false,
  // GitHub-style stats that reflect your active development work
  longestStreak: 14, // 14 days longest streak
  totalContributions: 312, // Total contributions
  contributionsLastYear: 280, // Contributions in the last year
  averageHoursPerDay: 6.2, // Average coding hours per day
};
