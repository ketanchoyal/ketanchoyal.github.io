import { CodingStats } from "@/types/wakatime";
import { IoFlameOutline, IoTrophyOutline, IoCodeOutline, IoTimeOutline } from "react-icons/io5";

interface Props {
  stats: CodingStats;
}

interface StatCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  icon: JSX.Element;
  className?: string;
}

function StatCard({ title, value, subValue, icon, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-lg border p-4 dark:border-gray-700 ${className}`}>
      <div className="mb-2 text-blue-500 dark:text-blue-400">{icon}</div>
      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
      {subValue && <p className="text-sm text-gray-500 dark:text-gray-400">{subValue}</p>}
    </div>
  );
}

export default function CodingStatsSummary({ stats }: Props) {
  const formatHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Current Streak"
        value={`${stats.currentStreak} days`}
        icon={<IoFlameOutline className="h-6 w-6" />}
        className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
      />
      <StatCard
        title="Longest Streak"
        value={`${stats.longestStreak} days`}
        icon={<IoTrophyOutline className="h-6 w-6" />}
      />
      <StatCard
        title="Total Contributions"
        value={stats.totalContributions}
        subValue={`${stats.contributionsLastYear} in the last year`}
        icon={<IoCodeOutline className="h-6 w-6" />}
      />
      <StatCard
        title="Average Daily"
        value={formatHours(stats.averageHoursPerDay)}
        subValue={`${formatHours(stats.totalHours)} total`}
        icon={<IoTimeOutline className="h-6 w-6" />}
      />
    </div>
  );
}
