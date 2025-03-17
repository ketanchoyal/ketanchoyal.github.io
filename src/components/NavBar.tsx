import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Stats', href: '#stats' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-100 dark:border-gray-800'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <nav className='container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between'>
          <motion.a
            href='#'
            className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            KC
          </motion.a>

          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='px-4 py-2 rounded-full text-[#8E8E93] dark:text-[#98989D] hover:text-[#1C1C1E] dark:hover:text-white transition-colors'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <motion.button
              className='md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
            >
              <svg
                className='w-6 h-6 text-[#1C1C1E] dark:text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className='fixed inset-x-0 top-[72px] z-40 md:hidden'
          >
            <motion.div
              className='container mx-auto px-4 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg'
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <div className='flex flex-col space-y-1'>
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleMobileNavClick(item.href)}
                    className='px-4 py-3 rounded-xl text-left text-[#8E8E93] dark:text-[#98989D] hover:text-[#1C1C1E] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
