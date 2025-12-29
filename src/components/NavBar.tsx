import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Stats', href: '#stats' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

export default function NavBar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 transition-opacity"
        >
          KC
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-white transition-all cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-gray-300"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 p-4 rounded-3xl glass-panel md:hidden flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-2xl text-slate-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 hover:text-blue-500 dark:hover:text-white transition-all font-medium"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
