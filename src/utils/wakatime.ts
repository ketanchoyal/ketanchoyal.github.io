import type {
  WakaTimeShareResponse,
  WakaTimeActivityResponse,
  WakaTimeDailyActivityResponse,
  CodingStats,
} from "@/types/wakatime";
import { FALLBACK_DATA } from "@/data/fallback-coding-stats";
import { getWakaTimeData } from "@/app/api/wakatime/data";

export async function getWakaTimeStats(): Promise<CodingStats> {
  try {
    // Fetch all WakaTime data in parallel with proper typing
    const [shareData, activityData, editorsData, codingActivityData] =
      await Promise.all([
        getWakaTimeData("languages") as Promise<WakaTimeShareResponse>,
        getWakaTimeData("activity") as Promise<WakaTimeActivityResponse>,
        getWakaTimeData("editors") as Promise<WakaTimeShareResponse>,
        getWakaTimeData("dailyActivity") as Promise<WakaTimeDailyActivityResponse>,
      ]);

    // Process daily activity data
    const dailyActivity = codingActivityData.days
      .filter((day) => day.total > 0)
      .map((day) => ({
        date: day.date,
        total: day.total,
        categories: day.categories.reduce((acc, cat) => acc + cat.total, 0),
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Calculate GitHub-style stats
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    // Calculate current streak
    let currentStreak = 0;
    for (let i = 0; i < dailyActivity.length; i++) {
      const date = new Date(dailyActivity[i].date);
      const expectedDate = new Date(now);
      expectedDate.setDate(now.getDate() - i);

      if (
        date.toDateString() !== expectedDate.toDateString() ||
        dailyActivity[i].total === 0
      ) {
        break;
      }
      currentStreak++;
    }

    // Calculate longest streak
    let longestStreak = 0;
    let currentStreakCount = 0;
    let lastDate: Date | null = null;

    dailyActivity.forEach((day) => {
      const date = new Date(day.date);
      if (!lastDate) {
        currentStreakCount = 1;
      } else {
        const diffDays = Math.floor(
          (lastDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffDays === 1) {
          currentStreakCount++;
        } else {
          currentStreakCount = 1;
        }
      }
      longestStreak = Math.max(longestStreak, currentStreakCount);
      lastDate = date;
    });

    // Calculate total contributions and yearly stats
    const totalContributions = dailyActivity.length;
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);

    const contributionsLastYear = dailyActivity.filter(
      (day) => new Date(day.date) > oneYearAgo
    ).length;

    // Calculate average hours per day
    const totalHours = dailyActivity.reduce(
      (acc, day) => acc + day.total / 3600,
      0
    );
    const averageHoursPerDay = totalHours / Math.max(dailyActivity.length, 1);

    // Find the best day
    const bestDay = dailyActivity[0];

    // Process language data
    const languages = shareData.data
      .filter((lang) => lang.name && lang.percent > 0)
      .map((lang) => ({
        name: lang.name,
        percent: lang.percent,
        color: lang.color || "#858585",
        text: lang.text || null,
      }))
      .sort((a, b) => b.percent - a.percent);

    // Process editor data
    const editors = editorsData.data
      .filter((editor) => editor.name && editor.percent > 0)
      .map((editor) => ({
        name: editor.name,
        percent: editor.percent,
        color: editor.color || "#858585",
        text: editor.text || null,
      }))
      .sort((a, b) => b.percent - a.percent);

    return {
      totalHours,
      languages,
      editors,
      dailyActivity,
      bestDay: bestDay
        ? {
            date: bestDay.date,
            total: bestDay.total,
            categories: bestDay.categories,
          }
        : null,
      isLive: true,
      longestStreak,
      totalContributions,
      contributionsLastYear,
      averageHoursPerDay,
    };
  } catch (error) {
    console.error("Error in getWakaTimeStats:", error);
    return FALLBACK_DATA;
  }
}
