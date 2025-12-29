import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'


interface Experience {
    company: string
    role: string
    period: string
    description: string
    technologies: string[]
    link?: string
    brands?: string[]
}

const experiences: Experience[] = [
    {
        company: 'Recipe Unlimited Corporation',
        role: 'Senior Flutter Developer',
        period: 'Feb 2022 - Present',
        description: 'Leading the development of realtime data synchronization for KDS systems. Converting Figma designs into robust Flutter code for brands like Harvey\'s and Swiss Chalet. Developed backend APIs and integrated with AWS Lambda, DynamoDB, and Redis. Enhanced app performance via platform channels.',
        technologies: ['Flutter', 'Dart', 'TypeScript', 'AWS', 'Salesforce', 'Vue.js', 'Bitrise'],
        link: 'https://www.recipeunlimited.com',
        brands: [
            "Harvey's", "Swiss Chalet", "East Side Mario's", "St-Hubert",
            "Montana's", "Kelsey's", "Fresh", "Burger's Priest", "Olive Garden Canada"
        ]
    },
    {
        company: 'Datomar Labs',
        role: 'Flutter Developer',
        period: 'May 2021 - Feb 2022',
        description: 'Led the development of a food delivery mobile/web app using Flutter and GraphQL. Implemented state management solutions using Provider with MVVM architecture. Optimized API design for improved networking and performance.',
        technologies: ['Flutter', 'Dart', 'GraphQL', 'TypeScript', 'GitHub Actions', 'Firebase']
    },
    {
        company: 'LISN',
        role: 'Flutter Developer (Startup)',
        period: 'Mar 2021 - May 2022',
        description: 'Resolved bugs and added new features to a Flutter-based web and mobile app. Refactored code to improve performance and maintainability.',
        technologies: ['Flutter', 'Dart', 'TypeScript', 'GitHub', 'Clubhouse', 'Firebase']
    },
    {
        company: 'Mits Infotech',
        role: 'Software Developer',
        period: 'Jan 2019 - Nov 2019',
        description: 'Developed cross-platform mobile apps using Flutter and native iOS/Android technologies. Built UI flows for login, error handling, and notifications.',
        technologies: ['Flutter', 'Swift', 'Kotlin', 'TypeScript', 'Firebase', 'UIKit']
    }
]

export default function ExperienceSection() {
    return (
        <section id='experience' className='py-16 px-4'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='max-w-4xl'
                >
                    <h2 className='text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
                        Professional Experience
                    </h2>

                    <div className='space-y-12'>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='relative pl-8 border-l-2 border-gray-100 dark:border-gray-800'
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ring-white dark:ring-black ${index === 0 ? 'bg-[#007AFF]' : 'bg-gray-300 dark:bg-gray-600'
                                    }`} />

                                <SpotlightCard className='bg-white dark:bg-[#1C1C1E] rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800'>
                                    <div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
                                        <div>
                                            <h3 className='text-2xl font-bold text-[#1C1C1E] dark:text-white'>
                                                {exp.role}
                                            </h3>
                                            {exp.link ? (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='text-lg font-medium text-[#007AFF] hover:underline'
                                                >
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                <span className='text-lg font-medium text-[#007AFF]'>
                                                    {exp.company}
                                                </span>
                                            )}
                                        </div>
                                        <div className='mt-2 md:mt-0 px-4 py-1 rounded-full bg-gray-100 dark:bg-[#2C2C2E] text-sm font-medium text-[#8E8E93] dark:text-[#98989D] self-start md:self-auto'>
                                            {exp.period}
                                        </div>
                                    </div>

                                    <p className='text-[#8E8E93] dark:text-[#98989D] leading-relaxed mb-6'>
                                        {exp.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2 mb-6'>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className='px-3 py-1 text-xs font-medium rounded-full bg-[#007AFF]/10 text-[#007AFF] dark:bg-[#0A84FF]/10 dark:text-[#0A84FF]'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {exp.brands && (
                                        <div className='border-t border-gray-100 dark:border-gray-800 pt-6'>
                                            <p className='text-sm font-semibold text-[#8E8E93] dark:text-[#98989D] mb-4 uppercase tracking-wider'>
                                                Powering Major Brands
                                            </p>
                                            <div className='flex flex-wrap gap-3'>
                                                {exp.brands.map((brand, i) => (
                                                    <motion.span
                                                        key={brand}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.3 + (i * 0.05) }}
                                                        viewport={{ once: true }}
                                                        className='px-4 py-2 rounded-lg bg-gray-50 dark:bg-[#2C2C2E] text-sm font-medium text-[#1C1C1E] dark:text-white hover:bg-gray-100 dark:hover:bg-[#3A3A3C] transition-colors cursor-default'
                                                    >
                                                        {brand}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
