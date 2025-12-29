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
    <div className='space-y-8 pt-8'>
      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='space-y-6'
      >
        <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>
          Tech Stack
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.languages.slice(0, 6).map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='glass-card p-4 rounded-xl flex items-center justify-between group'
            >
              <div className='flex items-center gap-3'>
                <div
                  className='h-3 w-3 rounded-full shadow-[0_0_10px_currentColor]'
                  style={{ color: lang.color, backgroundColor: lang.color }}
                />
                <span className='font-medium text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors'>
                  {lang.name}
                </span>
              </div>
              <span className='text-sm font-bold text-slate-500 dark:text-slate-400'>
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
        className='space-y-6'
      >
        <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400'>
          Development Environment
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.editors.map((editor, index) => (
            <motion.div
              key={editor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='glass-card p-4 rounded-xl flex items-center justify-between group'
            >
              <div className='flex items-center gap-3'>
                <div
                  className='h-3 w-3 rounded-full shadow-[0_0_10px_currentColor]'
                  style={{ color: editor.color, backgroundColor: editor.color }}
                />
                <span className='font-medium text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors'>
                  {editor.name}
                </span>
              </div>
              <span className='text-sm font-bold text-slate-500 dark:text-slate-400'>
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
