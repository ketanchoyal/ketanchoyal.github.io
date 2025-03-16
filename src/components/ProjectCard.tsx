import { motion } from 'framer-motion'
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiCloud,
  FiDatabase
} from 'react-icons/fi'
import { Project } from '@/types/github'
import { staggerItem } from './StaggerContainer'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className='group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800'
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <h3 className='text-xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent'>
              {project.name}
            </h3>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`flex items-center ${
                project.isLive
                  ? 'text-[#32D74B] dark:text-[#30D158]'
                  : 'text-[#FF9F0A] dark:text-[#FFB340]'
              }`}
              title={project.isLive ? 'Live data from GitHub' : 'Cached data'}
            >
              {project.isLive ? (
                <FiCloud className='w-4 h-4' />
              ) : (
                <FiDatabase className='w-4 h-4' />
              )}
            </motion.div>
          </div>
          <div className='flex items-center gap-3'>
            <motion.a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full hover:bg-[#007AFF]/10 dark:hover:bg-[#007AFF]/20 transition-colors'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className='w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]' />
            </motion.a>
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full hover:bg-[#32D74B]/10 dark:hover:bg-[#32D74B]/20 transition-colors'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className='w-5 h-5 text-[#32D74B] dark:text-[#30D158]' />
              </motion.a>
            )}
          </div>
        </div>

        <p className='text-[#8E8E93] dark:text-[#98989D] text-sm mb-4 line-clamp-2'>
          {project.description}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='px-3 py-1.5 text-xs font-medium rounded-xl bg-[#007AFF]/10 dark:bg-[#007AFF]/20 text-[#007AFF] dark:text-[#0A84FF]'>
            {project.language}
          </span>
          {project.topics.map((topic, index) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className='px-3 py-1.5 text-xs font-medium rounded-xl bg-[#32D74B]/10 dark:bg-[#32D74B]/20 text-[#32D74B] dark:text-[#30D158]'
            >
              {topic}
            </motion.span>
          ))}
        </div>

        <div className='flex items-center gap-4 text-sm text-[#8E8E93] dark:text-[#98989D]'>
          <div className='flex items-center gap-2'>
            <FiStar className='w-4 h-4 text-[#FF9F0A] dark:text-[#FFB340]' />
            <span className='font-medium'>{project.stars}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FiGitBranch className='w-4 h-4 text-[#BF5AF2] dark:text-[#C377FE]' />
            <span className='font-medium'>{project.forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
