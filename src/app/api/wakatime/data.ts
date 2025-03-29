import { unstable_cache } from 'next/cache';

const WAKATIME_BASE_URL = "https://wakatime.com/share/@ketanchoyal";

const WAKATIME_URLS = {
  languages: `${WAKATIME_BASE_URL}/b937b52b-84cd-46df-a39b-3a7a32814103.json`,
  activity: `${WAKATIME_BASE_URL}/f7eefa9d-d2f3-4159-bc9a-d1fc6990d045.json`,
  editors: `${WAKATIME_BASE_URL}/9d72ac70-7a83-44db-8f6b-723274db360a.json`,
  dailyActivity: `${WAKATIME_BASE_URL}/903c2445-765a-4768-97e4-4e5a373dd47c.json`,
};

export const getWakaTimeData = async (type: keyof typeof WAKATIME_URLS) => {
  const url = WAKATIME_URLS[type];
  if (!url) {
    throw new Error("Invalid type parameter");
  }

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600, // Cache for 1 hour
        tags: [`wakatime-${type}`],
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching WakaTime data:", error);
    throw error;
  }
};
