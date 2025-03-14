import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '@/utils/github';
import ProjectImage from './ProjectImage';
import { staggerItem } from './StaggerContainer';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl bg-[#F2F2F7] dark:bg-[#1C1C1E] shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <ProjectImage src={project.image} alt={project.title} />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-[#000000] dark:text-[#FFFFFF]">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E8E93] dark:text-[#98989D] hover:text-[#000000] dark:hover:text-[#FFFFFF] transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8E93] dark:text-[#98989D] hover:text-[#000000] dark:hover:text-[#FFFFFF] transition-colors"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-[#8E8E93] dark:text-[#98989D] mb-4">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-[#8E8E93] dark:text-[#98989D]">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🍴</span>
            <span>{project.forks}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
