import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className='relative'
    >
      {/* Background gradient decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='absolute -z-10 overflow-hidden'
      >
        {/* Flutter gradient */}
        <div className='fixed -top-[40rem] left-[20rem] h-[60rem] w-[60rem] rounded-full bg-gradient-to-r from-[#007AFF] to-[#0A84FF] opacity-[0.03] blur-3xl dark:opacity-[0.06]' />
        {/* AWS gradient */}
        <div className='fixed -top-[30rem] right-[15rem] h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-[#32D74B] to-[#30D158] opacity-[0.03] blur-3xl dark:opacity-[0.06]' />
        {/* TypeScript gradient */}
        <div className='fixed top-[20rem] left-[15rem] h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-[#BF5AF2] to-[#C377FE] opacity-[0.03] blur-3xl dark:opacity-[0.06]' />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
