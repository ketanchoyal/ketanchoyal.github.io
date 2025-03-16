import { CodingStats as CodingStatsType } from '@/types/wakatime'
import DailyActivityChart from './DailyActivityChart'
import YearSelector from './YearSelector'
import { useState, useMemo } from 'react'

export default function CodingStats ({ stats }: { stats: CodingStatsType }) {
  // Get available years from daily activity data
  const availableYears = useMemo(() => {
    const years = new Set<number>()
    stats.dailyActivity.forEach(day => {
      years.add(new Date(day.date).getFullYear())
    })
    return Array.from(years).sort((a, b) => b - a) // Sort descending
  }, [stats.dailyActivity])

  // Default to the current year
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(
    availableYears.includes(currentYear)
      ? currentYear
      : availableYears[0] || currentYear
  )

  // Filter daily activity data for the selected year
  const yearlyActivity = useMemo(() => {
    return stats.dailyActivity.filter(day => {
      const date = new Date(day.date)
      return date.getFullYear() === selectedYear
    })
  }, [stats.dailyActivity, selectedYear])

  // Calculate yearly stats
  // const yearlyStats = useMemo(() => {
  //   const totalSeconds = yearlyActivity.reduce((acc, day) => acc + day.total, 0)
  //   const hours = totalSeconds / 3600
  //   const contributions = yearlyActivity.filter(day => day.total > 0).length

  //   return {
  //     totalHours: hours,
  //     contributionsLastYear: contributions,
  //     averageHoursPerDay: hours / (yearlyActivity.length || 1)
  //   }
  // }, [yearlyActivity])

  return (
    <div className='space-y-8'>
      {/* Live Data Indicator */}
      <div className='flex items-center gap-2'>
        <div
          className={`h-2 w-2 rounded-full ${
            stats.isLive ? 'bg-green-500' : 'bg-yellow-500'
          }`}
        />
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {stats.isLive ? 'Live WakaTime Data' : 'Using Fallback Data'}
        </span>
      </div>

      {/* GitHub-style Stats Summary */}
      {/* <CodingStatsSummary
        stats={{
          ...stats,
          totalHours: yearlyStats.totalHours,
          contributionsLastYear: yearlyStats.contributionsLastYear,
          averageHoursPerDay: yearlyStats.averageHoursPerDay
        }}
      /> */}

      {/* Languages */}
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Top Languages</h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.languages.slice(0, 5).map(lang => (
            <div
              key={lang.name}
              className='flex items-center justify-between rounded-lg border p-4 dark:border-gray-700'
            >
              <div className='flex items-center gap-2'>
                <span
                  className='inline-block h-3 w-3 rounded-full'
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
      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Development Environment</h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.editors.map(editor => (
            <div
              key={editor.name}
              className='flex items-center justify-between rounded-lg border p-4 dark:border-gray-700'
            >
              <div className='flex items-center gap-2'>
                <span
                  className='inline-block h-3 w-3 rounded-full'
                  style={{ backgroundColor: editor.color }}
                />
                {editor.name}
              </div>
              <span>{editor.percent.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Activity */}
      <div className='space-y-4'>
        <YearSelector
          availableYears={availableYears}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
        <div className='h-64'>
          <DailyActivityChart data={yearlyActivity} />
        </div>
      </div>
    </div>
  )
}
