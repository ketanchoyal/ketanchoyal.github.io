import { CodingStats as CodingStatsType } from '@/types/wakatime'
import DailyActivityChart from './DailyActivityChart'
import YearSelector from './YearSelector'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function CodingStats({ stats }: { stats: CodingStatsType }) {
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

  return (
    <div className='space-y-8'>
      {/* Live Data Indicator */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <motion.div
            animate={{
              scale: stats.isLive ? [1, 1.2, 1] : 1
            }}
            transition={{
              repeat: stats.isLive ? Infinity : 0,
              duration: 2
            }}
            className={`h-2 w-2 rounded-full ${
              stats.isLive
                ? 'bg-gradient-to-r from-[#32D74B] to-[#30D158]'
                : 'bg-gradient-to-r from-[#FF9F0A] to-[#FFB340]'
            }`}
          />
          <span className='text-sm text-[#8E8E93] dark:text-[#98989D]'>
            {stats.isLive ? 'Live WakaTime Data' : 'Using Fallback Data'}
          </span>
        </div>
      </div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='space-y-4'
      >
        <h3 className='text-xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent'>
          Tech Stack
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.languages.slice(0, 6).map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className='flex items-center justify-between rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
            >
              <div className='flex items-center gap-3'>
                <div
                  className='h-3 w-3 rounded-full'
                  style={{
                    background: `linear-gradient(135deg, ${lang.color}, ${lang.color}88)`
                  }}
                />
                <span className='font-medium text-[#1C1C1E] dark:text-white'>
                  {lang.name}
                </span>
              </div>
              <span className='text-sm font-medium bg-gradient-to-r from-[#007AFF] to-[#32D74B] bg-clip-text text-transparent'>
                {lang.percent.toFixed(1)}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Editors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='space-y-4'
      >
        <h3 className='text-xl font-semibold bg-gradient-to-r from-[#32D74B] to-[#30D158] bg-clip-text text-transparent'>
          Development Environment
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.editors.map((editor, index) => (
            <motion.div
              key={editor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className='flex items-center justify-between rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
            >
              <div className='flex items-center gap-3'>
                <div
                  className='h-3 w-3 rounded-full'
                  style={{
                    background: `linear-gradient(135deg, ${editor.color}, ${editor.color}88)`
                  }}
                />
                <span className='font-medium text-[#1C1C1E] dark:text-white'>
                  {editor.name}
                </span>
              </div>
              <span className='text-sm font-medium bg-gradient-to-r from-[#32D74B] to-[#30D158] bg-clip-text text-transparent'>
                {editor.percent.toFixed(1)}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contribution Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='space-y-4'
      >
        <YearSelector
          availableYears={availableYears}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
        <DailyActivityChart
          data={yearlyActivity}
          title='Full Stack Development Activity'
        />
      </motion.div>
    </div>
  )
}
