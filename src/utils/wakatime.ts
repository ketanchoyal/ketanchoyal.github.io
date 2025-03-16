import type {
  WakaTimeShareResponse,
  WakaTimeActivityResponse,
  WakaTimeDailyActivityResponse,
  CodingStats,
  WakaTimeDataItem,
  WakaTimeCategory,
  WakaTimeDailyData,
  SimpleItem,
  WakaTimeDailyActivity,
} from "@/types/wakatime";
import { FALLBACK_DATA } from "@/data/fallback-coding-stats";
import {
  MOBILE_LANGUAGES,
  PACKAGE_LANGUAGES,
  WEB_LANGUAGES,
} from "@/data/development-categories";

// WakaTime API URLs
const WAKATIME_BASE_URL = "https://wakatime.com/share/@ketanchoyal";
const WAKATIME_URLS = {
  languages: `${WAKATIME_BASE_URL}/b937b52b-84cd-46df-a39b-3a7a32814103.json`,
  activity: `${WAKATIME_BASE_URL}/f7eefa9d-d2f3-4159-bc9a-d1fc6990d045.json`,
  editors: `${WAKATIME_BASE_URL}/9d72ac70-7a83-44db-8f6b-723274db360a.json`,
  dailyActivity: `${WAKATIME_BASE_URL}/903c2445-765a-4768-97e4-4e5a373dd47c.json`,
};

async function fetchWakaTimeData<T>(url: string): Promise<T> {
  try {
    console.log(`Fetching WakaTime data from ${url}`);
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Portfolio-Website",
      },
      next: {
        revalidate: 3600, // Cache for 1 hour
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`Failed to fetch WakaTime data: ${response.statusText}`);
    }

    const data = await response.json();

    // Log the raw response for debugging
    console.log(`Raw WakaTime API response from ${url}:`, data);

    // Check if the response has the expected structure
    if (!data) {
      console.error("Empty response from WakaTime API");
      throw new Error("Empty response from WakaTime API");
    }

    // For daily activity data, the structure is different
    if (url.includes("903c2445-765a")) {
      // Daily activity URL
      console.log("Processing daily activity data:", data);
      if (!data.days) {
        console.error("Missing 'days' property in daily activity data:", data);
        throw new Error(
          "Invalid daily activity data format: Missing 'days' property"
        );
      }
      return data as T;
    }

    // For other endpoints, check for the data property
    if (!data.data) {
      console.error("Missing 'data' property in response:", data);
      throw new Error(
        `Invalid WakaTime data format: Missing 'data' property in response`
      );
    }

    return data;
  } catch (error) {
    console.error(`Error fetching WakaTime data from ${url}:`, error);
    console.error("Stack trace:", (error as Error).stack);
    throw error;
  }
}

export async function getWakaTimeStats(): Promise<CodingStats> {
  try {
    // Log which URLs we're fetching from
    console.log("Fetching WakaTime data from URLs:", {
      languages: WAKATIME_URLS.languages,
      activity: WAKATIME_URLS.activity,
      editors: WAKATIME_URLS.editors,
      dailyActivity: WAKATIME_URLS.dailyActivity,
    });

    // Fetch all WakaTime data in parallel with proper typing
    const [shareData, activityData, editorsData, codingActivityData] =
      await Promise.all([
        fetchWakaTimeData<WakaTimeShareResponse>(WAKATIME_URLS.languages),
        fetchWakaTimeData<WakaTimeActivityResponse>(WAKATIME_URLS.activity),
        fetchWakaTimeData<WakaTimeShareResponse>(WAKATIME_URLS.editors),
        fetchWakaTimeData<WakaTimeDailyActivityResponse>(
          WAKATIME_URLS.dailyActivity
        ),
      ]);

    // Log successful data fetching and data shapes
    console.log("Successfully fetched all WakaTime data:", {
      shareDataShape: shareData?.data?.length,
      activityDataShape: activityData?.data?.grand_total,
      editorsDataShape: editorsData?.data?.length,
      codingActivityDataShape: codingActivityData?.days?.length,
    });

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
