import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

interface DailyActivityData {
  date: string
  total: number
  categories: number
}

interface ChartData {
  date: string
  fullDate: string
  hours: number
  month: string
}

interface DailyActivityChartProps {
  data: DailyActivityData[]
  title?: string
}

export default function DailyActivityChart ({
  data,
  title = 'Coding Activity'
}: DailyActivityChartProps): JSX.Element {
  const chartData: ChartData[] = data
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(day => {
      const date = new Date(day.date)
      return {
        date: date.toISOString(),
        fullDate: date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        hours: day.total / 3600,
        month: date.toLocaleDateString('en-US', { month: 'short' })
      }
    })

  // Get unique months with their first occurrence index
  const uniqueMonths = Array.from(new Set(chartData.map(item => item.month)))
  const maxHours = Math.max(...chartData.map(d => d.hours))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className='flex flex-col space-y-4 h-72 w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
    >
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h3 className='text-xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent'>
            {title}
          </h3>
          <p className='text-sm text-[#8E8E93] dark:text-[#98989D]'>
            Max {maxHours.toFixed(1)} hours/day
          </p>
        </div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 16, left: 8, bottom: 10 }}
        >
          <defs>
            <linearGradient id='colorHours' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='5%' stopColor='#007AFF' stopOpacity={0.15} />
              <stop offset='95%' stopColor='#32D74B' stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id='chartStroke' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='0%' stopColor='#007AFF' />
              <stop offset='100%' stopColor='#32D74B' />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='month'
            stroke='#8E8E93'
            fontSize={12}
            fontWeight={500}
            tickLine={false}
            axisLine={false}
            ticks={uniqueMonths}
            minTickGap={30}
            interval={'equidistantPreserveStart'}
            dy={8}
            padding={{ left: 16, right: 16 }}
          />
          <YAxis
            stroke='#8E8E93'
            fontSize={12}
            fontWeight={500}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => `${value}h`}
            dx={-8}
            padding={{ top: 16, bottom: 16 }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const value = payload[0].value as number
                const percentage = (value / maxHours) * 100

                return (
                  <div className='rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-[#1C1C1E]/90 p-4 shadow-lg backdrop-blur-xl backdrop-saturate-150'>
                    <p className='text-base font-semibold text-[#1C1C1E] dark:text-white'>
                      {payload[0].payload.fullDate}
                    </p>
                    <div className='mt-2 flex items-center justify-between'>
                      <p className='text-sm text-[#8E8E93] dark:text-[#98989D]'>
                        {value.toFixed(1)} hours
                      </p>
                      <p className='text-sm font-medium bg-gradient-to-r from-[#007AFF] to-[#32D74B] bg-clip-text text-transparent'>
                        {percentage.toFixed(0)}%
                      </p>
                    </div>
                    <div className='mt-2 h-1.5 w-full rounded-full bg-gradient-to-r from-[#007AFF]/10 to-[#32D74B]/10'>
                      <div
                        className='h-1.5 rounded-full bg-gradient-to-r from-[#007AFF] to-[#32D74B]'
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Area
            type='monotone'
            dataKey='hours'
            stroke='url(#chartStroke)'
            strokeWidth={2.5}
            fillOpacity={1}
            fill='url(#colorHours)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
