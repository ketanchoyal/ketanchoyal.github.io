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
}

export default function DailyActivityChart ({
  data
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='h-64 w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 p-6'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 16, left: 8, bottom: 10 }}
        >
          <defs>
            <linearGradient id='colorHours' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#007AFF' stopOpacity={0.3} />
              <stop offset='95%' stopColor='#007AFF' stopOpacity={0} />
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
                return (
                  <div className='rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-[#1C1C1E]/90 p-4 shadow-lg backdrop-blur-xl backdrop-saturate-150'>
                    <p className='text-base font-semibold text-[#1C1C1E] dark:text-white'>
                      {payload[0].payload.fullDate}
                    </p>
                    <p className='mt-1 text-sm text-[#8E8E93] dark:text-[#98989D]'>
                      {value.toFixed(1)}h
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
          <Area
            type='monotone'
            dataKey='hours'
            stroke='#007AFF'
            strokeWidth={2}
            fillOpacity={1}
            fill='url(#colorHours)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
