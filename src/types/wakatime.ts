// Common interface for items with color
export interface ColoredItem {
  name: string;
  percent: number;
  color: string;
}

export interface SimpleItem {
  name: string;
  percent: number;
  color?: string;
  text?: string | null;
}

// WakaTime API response types
export interface WakaTimeDataItem {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string | null;
  total_seconds: number;
  color?: string;
}

export interface WakaTimeCategory {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string | null;
  total_seconds: number;
}

export interface WakaTimeDailyData {
  categories: WakaTimeCategory[];
  dependencies: WakaTimeCategory[];
  editors: WakaTimeCategory[];
  grand_total: {
    decimal: string;
    digital: string;
    hours: number;
    minutes: number;
    text: string | null;
    total_seconds: number;
  };
  languages: WakaTimeCategory[];
  machines: WakaTimeCategory[];
  operating_systems: WakaTimeCategory[];
  projects: WakaTimeCategory[];
  range: {
    date: string;
    end: string;
    start: string;
    text: string | null;
    timezone: string;
  };
}

export interface WakaTimeShareResponse {
  data: WakaTimeDataItem[];
}

export interface WakaTimeActivityResponse {
  data: {
    best_day: {
      created_at: string;
      date: string;
      id: string;
      modified_at: string | null;
      text: string | null;
      total_seconds: number;
    };
    grand_total: {
      decimal: string;
      digital: string;
      hours: number;
      minutes: number;
      text: string | null;
      total_seconds: number;
      human_readable_total: string;
      human_readable_daily_average: string;
      human_readable_total_including_other_language: string;
      human_readable_daily_average_including_other_language: string;
    };
  };
}

export interface WakaTimeDailyActivity {
  date: string;
  total: number;
  categories: Array<{
    name: string;
    total: number;
  }>;
}

export interface WakaTimeDailyActivityResponse {
  days: WakaTimeDailyActivity[];
}

// Our app's types
export interface CodingStats {
  totalHours: number;
  languages: SimpleItem[];
  editors: SimpleItem[];
  dailyActivity: Array<{
    date: string;
    total: number;
    categories: number;
  }>;
  bestDay: {
    date: string;
    total: number;
    categories: number;
  } | null;
  isLive: boolean;
  // Adding GitHub-style stats
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
  contributionsLastYear: number;
  averageHoursPerDay: number;
}
