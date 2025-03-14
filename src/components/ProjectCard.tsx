import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCloud, FiDatabase } from 'react-icons/fi';
import { Project } from '@/utils/github';
import { staggerItem } from './StaggerContainer';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#1C1C1E] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
      whileHover={{ y: -5 }}
    >      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`flex items-center ${project.isLive ? 'text-green-500 dark:text-green-400' : 'text-gray-400 dark:text-gray-600'}`}
              title={project.isLive ? 'Live data from GitHub' : 'Cached data'}
            >
              {project.isLive ? <FiCloud className="w-4 h-4" /> : <FiDatabase className="w-4 h-4" />}
            </motion.div>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.a>
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          >
            {project.language}
          </span>
          {project.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <FiStar className="w-4 h-4" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiGitBranch className="w-4 h-4" />
            <span>{project.forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
