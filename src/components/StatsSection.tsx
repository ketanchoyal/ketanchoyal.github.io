import { motion } from 'framer-motion'
import { CodingStats as CodingStatsType } from '@/types/wakatime'
import CodingStats from './CodingStats'

interface StatsSectionProps {
  codingStats: CodingStatsType | null
  loading: boolean
  error: string | null
}

export default function StatsSection ({
  codingStats,
  loading,
  error
}: StatsSectionProps) {
  return (
    <section id='stats' className='py-16 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='max-w-3xl'
        >
          <h2 className='text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
            Coding Stats
          </h2>
          {/* Live Data Indicator */}
          <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center gap-2'>
              <motion.div
                animate={{
                  scale: codingStats?.isLive ? [1, 1.2, 1] : 1
                }}
                transition={{
                  repeat: codingStats?.isLive ? Infinity : 0,
                  duration: 2
                }}
                className={`h-2 w-2 rounded-full ${
                  codingStats?.isLive
                    ? 'bg-gradient-to-r from-[#32D74B] to-[#30D158]'
                    : 'bg-gradient-to-r from-[#FF9F0A] to-[#FFB340]'
                }`}
              />
              <span className='text-sm text-[#8E8E93] dark:text-[#98989D]'>
                {codingStats?.isLive
                  ? 'Live WakaTime Data'
                  : 'Using Fallback Data'}
              </span>
            </div>
          </div>
          {error && (
            <div className='text-[#FF453A] dark:text-[#FF453A] mb-4'>
              {error}
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {loading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className='rounded-2xl overflow-hidden bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 p-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className='space-y-4'>
                      <div className='h-6 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse w-1/2' />
                      <div className='h-8 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse w-1/3' />
                    </div>
                  </motion.div>
                ))
              : codingStats && (
                  <>
                    <motion.div
                      className='rounded-2xl overflow-hidden bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 p-6'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className='text-lg font-medium text-[#8E8E93] dark:text-[#98989D] mb-2'>
                        Top Language
                      </h3>
                      <p className='text-2xl font-bold'>
                        {codingStats.languages[0]?.name}
                      </p>
                      <p className='text-[#8E8E93] dark:text-[#98989D]'>
                        {codingStats.languages[0]?.percent.toFixed(1)}% of
                        coding time
                      </p>
                    </motion.div>
                    <motion.div
                      className='rounded-2xl overflow-hidden bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 p-6'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className='text-lg font-medium text-[#8E8E93] dark:text-[#98989D] mb-2'>
                        Top Editor
                      </h3>
                      <p className='text-2xl font-bold'>
                        {codingStats.editors[0]?.name}
                      </p>
                      <p className='text-[#8E8E93] dark:text-[#98989D]'>
                        {codingStats.editors[0]?.percent.toFixed(1)}% of coding
                        time
                      </p>
                    </motion.div>
                  </>
                )}
          </div>
        </motion.div>
        {codingStats && <CodingStats stats={codingStats} />}
      </div>
    </section>
  )
}
