import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle () {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2.5 rounded-full bg-white/80 dark:bg-[#1C1C1E]/80 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-lg border border-gray-200 dark:border-gray-800'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.8 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10
        }}
        className='relative w-5 h-5 flex items-center justify-center'
      >
        {theme === 'dark' ? (
          <FiMoon className='w-5 h-5 text-[#98989D]' />
        ) : (
          <FiSun className='w-5 h-5 text-[#FF9F0A]' />
        )}
      </motion.div>
    </motion.button>
  )
}
