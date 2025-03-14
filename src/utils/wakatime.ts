interface WakaTimeResponse {
  data: {
    languages: Array<{
      name: string;
      percent: number;
      total_seconds: number;
    }>;
    editors: Array<{
      name: string;
      percent: number;
      total_seconds: number;
    }>;
    grand_total: {
      total_seconds: number;
      daily_average: number;
      human_readable_total: string;
      human_readable_daily_average: string;
    };
  };
}

export interface CodingStats {
  totalTime: string;
  dailyAverage: string;
  topLanguages: Array<{
    name: string;
    percent: number;
  }>;
  recentActivity: {
    categories: Array<{
      name: string;
      percent: number;
    }>;
    languages: Array<{
      name: string;
      percent: number;
    }>;
    editors: Array<{
      name: string;
      percent: number;
    }>;
  };
}

// Default stats as fallback
const DEFAULT_STATS: CodingStats = {
  totalTime: '10000+ hours',
  dailyAverage: '8+ hours',
  topLanguages: [
    { name: 'Dart', percent: 65 },
    { name: 'TypeScript', percent: 15 },
    { name: 'Swift', percent: 10 },
    { name: 'JavaScript', percent: 5 },
    { name: 'Python', percent: 5 }
  ],
  recentActivity: {
    categories: [
      { name: 'Mobile Development', percent: 65 },
      { name: 'Full Stack Development', percent: 20 },
      { name: 'Code Review', percent: 10 },
      { name: 'Documentation', percent: 5 }
    ],
    languages: [
      { name: 'Dart', percent: 70 },
      { name: 'TypeScript', percent: 15 },
      { name: 'Swift', percent: 10 },
      { name: 'JavaScript', percent: 3 },
      { name: 'Python', percent: 2 }
    ],
    editors: [
      { name: 'VS Code', percent: 60 },
      { name: 'Android Studio', percent: 25 },
      { name: 'Xcode', percent: 15 }
    ]
  }
};

export async function getWakaTimeStats(): Promise<CodingStats> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_WAKATIME_API_KEY;
    if (!apiKey) {
      console.warn('WakaTime API key not found');
      return DEFAULT_STATS;
    }

    const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch WakaTime stats:', response.status);
      return DEFAULT_STATS;
    }

    const stats: WakaTimeResponse = await response.json();

    // If the API response doesn't match our expected format, return default stats
    if (!stats.data || !stats.data.languages || !stats.data.editors || !stats.data.grand_total) {
      console.warn('WakaTime data format mismatch');
      return DEFAULT_STATS;
    }

    return {
      totalTime: stats.data.grand_total.human_readable_total,
      dailyAverage: stats.data.grand_total.human_readable_daily_average,
      topLanguages: stats.data.languages
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 5)
        .map(lang => ({
          name: lang.name,
          percent: Math.round(lang.percent * 10) / 10
        })),
      recentActivity: {
        categories: [
          { name: 'Mobile Development', percent: 65 },
          { name: 'Full Stack Development', percent: 20 },
          { name: 'Code Review', percent: 10 },
          { name: 'Documentation', percent: 5 }
        ],
        languages: stats.data.languages
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 5)
          .map(lang => ({
            name: lang.name,
            percent: Math.round(lang.percent * 10) / 10
          })),
        editors: stats.data.editors
          .sort((a, b) => b.percent - a.percent)
          .map(editor => ({
            name: editor.name,
            percent: Math.round(editor.percent * 10) / 10
          }))
      }
    };
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);
    return DEFAULT_STATS;
  }
}
