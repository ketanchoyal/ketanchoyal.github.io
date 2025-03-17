import { motion } from 'framer-motion'
import { Project } from '@/types/github'
import ProjectCard from './ProjectCard'

interface ProjectsSectionProps {
  projects: Project[]
  loading: boolean
  error: string | null
}

export default function ProjectsSection({ projects, loading, error }: ProjectsSectionProps) {
  return (
    <section id='projects' className='py-16 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
            Featured Projects
          </h2>
          {error && (
            <div className='text-[#FF453A] dark:text-[#FF453A] mb-4'>
              {error}
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className='rounded-2xl overflow-hidden bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 h-[280px]'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className='p-6 space-y-4'>
                      <div className='h-6 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse' />
                      <div className='space-y-2'>
                        <div className='h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse' />
                        <div className='h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse w-2/3' />
                      </div>
                    </div>
                  </motion.div>
                ))
              : projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
