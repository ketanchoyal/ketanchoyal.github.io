import { CodingStats as CodingStatsType } from "@/types/wakatime";
import CodingStatsSummary from "./CodingStatsSummary";
import { FiDatabase } from "react-icons/fi";
import DailyActivityChart from "./DailyActivityChart";

export default function CodingStats({ stats }: { stats: CodingStatsType }) {
  return (
    <div className="space-y-8">
      {/* Live Data Indicator */}
      <div className="flex items-center gap-2">
        <div
          className={`h-2 w-2 rounded-full ${
            stats.isLive ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {stats.isLive ? "Live WakaTime Data" : "Using Fallback Data"}
        </span>
      </div>

      {/* GitHub-style Stats Summary */}
      <CodingStatsSummary stats={stats} />

      {/* Languages */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Top Languages</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.languages.slice(0, 5).map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between rounded-lg border p-4 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                {lang.name}
              </div>
              <span>{lang.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Development Environment</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.editors.map((editor) => (
            <div
              key={editor.name}
              className="flex items-center justify-between rounded-lg border p-4 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: editor.color }}
                />
                {editor.name}
              </div>
              <span>{editor.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Activity */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contribution Activity</h3>
        <div className="h-64">
          <DailyActivityChart data={stats.dailyActivity} />
        </div>
      </div>
    </div>
  );
}
