import { motion } from 'framer-motion';
import { FiClock, FiCode, FiTerminal } from 'react-icons/fi';
import type { CodingStats } from '@/utils/wakatime';

interface CodingStatsProps {
  stats: CodingStats;
}

export default function CodingStats({ stats }: CodingStatsProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          {...fadeInUp}
          className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
              <FiClock className="w-6 h-6 text-[#007AFF]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Time</h3>
          </div>
          <p className="text-2xl font-bold text-[#007AFF]">{stats.totalTime}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Daily Average: {stats.dailyAverage}
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/30">
              <FiCode className="w-6 h-6 text-[#32D74B]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Languages</h3>
          </div>
          <div className="space-y-3">
            {stats.topLanguages.map((lang, index) => (
              <div key={lang.name} className="relative">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lang.percent}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percent}%` }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-[#32D74B] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900/30">
              <FiTerminal className="w-6 h-6 text-[#BF5AF2]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            {stats.recentActivity.languages.slice(0, 3).map((lang, index) => (
              <div key={lang.name} className="relative">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lang.percent}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percent}%` }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-[#BF5AF2] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detailed Stats */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Development Environment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Editors */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Preferred Editors</h4>
            <div className="space-y-3">
              {stats.recentActivity.editors.map((editor, index) => (
                <div key={editor.name} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{editor.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{editor.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${editor.percent}%` }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#007AFF] to-[#32D74B] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Activity Categories</h4>
            <div className="space-y-3">
              {stats.recentActivity.categories.map((category, index) => (
                <div key={category.name} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{category.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percent}%` }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#32D74B] to-[#BF5AF2] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
