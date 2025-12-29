import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa'
import { SiFlutter, SiTypescript, SiFirebase, SiGraphql } from 'react-icons/si'

const FloatingIcon = ({ children, delay, x, y, className }: { children: React.ReactNode, delay: number, x: number | string, y: number | string, className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{
      duration: 5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute pointer-events-none z-0 ${className}`}
    style={{ left: x, top: y }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className='relative pt-48 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden'>

      {/* Floating Tech Constellation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <FloatingIcon delay={0} x="10%" y="20%" className="text-[#02569B] dark:text-[#54C5F8]"><SiFlutter size={60} /></FloatingIcon>
        <FloatingIcon delay={1} x="85%" y="15%" className="text-[#FF9900]"><FaAws size={70} /></FloatingIcon>
        <FloatingIcon delay={2} x="75%" y="70%" className="text-[#3178C6]"><SiTypescript size={50} /></FloatingIcon>
        <FloatingIcon delay={3} x="15%" y="65%" className="text-[#FFCA28]"><SiFirebase size={60} /></FloatingIcon>
        <FloatingIcon delay={1.5} x="5%" y="45%" className="text-[#61DAFB]"><FaReact size={55} /></FloatingIcon>
        <FloatingIcon delay={2.5} x="90%" y="40%" className="text-[#339933]"><FaNodeJs size={60} /></FloatingIcon>
        <FloatingIcon delay={3.5} x="50%" y="10%" className="text-[#E10098]"><SiGraphql size={40} /></FloatingIcon>
        <FloatingIcon delay={0.5} x="30%" y="85%" className="text-[#4FC08D]"><FaVuejs size={50} /></FloatingIcon>
      </div>

      <div className='container mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto'
        >
          <motion.h1
            className='text-6xl md:text-8xl font-bold mb-8 tracking-tight'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-sm'>
              Ketan Choyal
            </span>
          </motion.h1>

          <motion.h2
            className='text-2xl md:text-4xl mb-8 text-slate-700 dark:text-slate-200 font-light'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & Architect
          </motion.h2>

          <motion.p
            className='text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Specializing in Flutter, AWS, TypeScript, and Serverless architectures.
            Designing realtime data sync systems for <span className="font-semibold text-blue-500">1M+ users</span>.
          </motion.p>

          <motion.div
            className='flex gap-6 justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href='https://www.linkedin.com/in/ketanchoyal/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 rounded-full glass-card text-slate-700 dark:text-white hover:scale-110 hover:text-blue-500 transition-all'
              aria-label='LinkedIn'
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href='https://github.com/ketanchoyal'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 rounded-full glass-card text-slate-700 dark:text-white hover:scale-110 hover:text-purple-500 transition-all'
              aria-label='GitHub'
            >
              <FaGithub size={28} />
            </a>
            <a
              href='mailto:ketanchoyal@gmail.com'
              className='p-4 rounded-full glass-card text-slate-700 dark:text-white hover:scale-110 hover:text-pink-500 transition-all'
              aria-label='Email'
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
