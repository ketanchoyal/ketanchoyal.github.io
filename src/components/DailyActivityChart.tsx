import { useMemo } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface ChartDataPoint {
  date: string;
  total: number;
  categories?: number;
}

interface Props {
  data: ChartDataPoint[];
}

const getActivityLevel = (hours: number): string => {
  if (hours === 0) return "bg-gray-100 dark:bg-gray-800";
  if (hours < 2) return "bg-blue-200 dark:bg-blue-900";
  if (hours < 4) return "bg-blue-300 dark:bg-blue-700";
  if (hours < 6) return "bg-blue-400 dark:bg-blue-600";
  return "bg-blue-500 dark:bg-blue-500";
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatHours = (hours: number) => {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${h}h ${m}m`;
};

const getDayLabels = () => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
    <div key={day} className="text-xs text-gray-500 dark:text-gray-400" style={{ gridRow: i + 2 }}>
      {day}
    </div>
  ));
};

const getMonthLabels = (weeks: ChartDataPoint[][]) => {
  const months: { label: string; column: number }[] = [];
  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0];
    if (firstDay) {
      const date = new Date(firstDay.date);
      const month = date.toLocaleDateString("en-US", { month: "short" });
      if (months.length === 0 || months[months.length - 1].label !== month) {
        months.push({ label: month, column: weekIndex + 1 });
      }
    }
  });
  return months.map(({ label, column }) => (
    <div
      key={`${label}-${column}`}
      className="text-xs text-gray-500 dark:text-gray-400"
      style={{ gridColumn: column, gridRow: 1 }}
    >
      {label}
    </div>
  ));
};

export default function DailyActivityChart({ data }: Props) {
  const weeks = useMemo(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const weeks: ChartDataPoint[][] = [];
    let currentWeek: ChartDataPoint[] = [];

    sortedData.forEach((day) => {
      const dayOfWeek = new Date(day.date).getDay();

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(day);

      if (currentWeek.length === 7 || day === sortedData[sortedData.length - 1]) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    return weeks;
  }, [data]);

  return (
    <div className="w-full overflow-x-auto">
      <div className="inline-grid gap-1 p-2" style={{ gridTemplateRows: "auto repeat(7, 1fr)" }}>
        {/* Month labels */}
        {getMonthLabels(weeks)}

        {/* Day labels */}
        <div className="grid gap-1 pr-2" style={{ gridRow: "2 / span 7", gridColumn: 1 }}>
          {getDayLabels()}
        </div>

        {/* Activity grid */}
        <div
          className="grid gap-1"
          style={{
            gridRow: "2 / span 7",
            gridColumn: "2 / span " + weeks.length,
            gridTemplateRows: "repeat(7, 1fr)",
            gridTemplateColumns: `repeat(${weeks.length}, 1fr)`,
          }}
        >
          {weeks.map((week, weekIndex) =>
            Array.from({ length: 7 }).map((_, dayIndex) => {
              const day = week[dayIndex];
              const hours = day ? day.total / 3600 : 0;

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-3 w-3 rounded-sm transition-colors ${getActivityLevel(hours)}`}
                  data-tooltip-id="activity-tooltip"
                  data-tooltip-content={day ? `${formatDate(day.date)}: ${formatHours(hours)}` : "No activity"}
                />
              );
            })
          )}
        </div>
      </div>

      <ReactTooltip
        id="activity-tooltip"
        place="top"
        className="!bg-white !text-gray-900 dark:!bg-gray-800 dark:!text-white"
      />

      <div className="mt-2 flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-sm bg-gray-100 dark:bg-gray-800" />
          <div className="h-3 w-3 rounded-sm bg-blue-200 dark:bg-blue-900" />
          <div className="h-3 w-3 rounded-sm bg-blue-300 dark:bg-blue-700" />
          <div className="h-3 w-3 rounded-sm bg-blue-400 dark:bg-blue-600" />
          <div className="h-3 w-3 rounded-sm bg-blue-500 dark:bg-blue-500" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
