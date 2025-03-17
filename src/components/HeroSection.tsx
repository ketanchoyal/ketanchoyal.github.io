import { motion } from 'framer-motion'

export default function HeroSection () {
  return (
    <section className='pt-32 pb-8 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl'
        >
          <motion.h1
            className='text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm Ketan Choyal
          </motion.h1>
          <motion.h2
            className='text-3xl mb-8 text-[#8E8E93] dark:text-[#98989D]'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className='text-xl text-[#8E8E93] dark:text-[#98989D] leading-relaxed'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building scalable mobile and cloud solutions with Flutter, AWS, and
            TypeScript. Passionate about serverless architecture and creating
            exceptional user experiences.
          </motion.p>
          <motion.div
            className='flex gap-4 mt-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10'>
              <span className='w-2 h-2 rounded-full bg-[#007AFF] dark:bg-[#0A84FF]' />
              <span className='text-[#007AFF] dark:text-[#0A84FF] font-medium'>
                Flutter
              </span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D74B]/10 dark:bg-[#30D158]/10'>
              <span className='w-2 h-2 rounded-full bg-[#32D74B] dark:bg-[#30D158]' />
              <span className='text-[#32D74B] dark:text-[#30D158] font-medium'>
                AWS
              </span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF5AF2]/10 dark:bg-[#C377FE]/10'>
              <span className='w-2 h-2 rounded-full bg-[#BF5AF2] dark:bg-[#C377FE]' />
              <span className='text-[#BF5AF2] dark:text-[#C377FE] font-medium'>
                TypeScript
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
