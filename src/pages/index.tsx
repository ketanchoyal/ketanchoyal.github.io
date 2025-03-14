import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import CodingStats from '@/components/CodingStats';
import { getFeaturedProjects, type Project } from '@/utils/github';
import { getWakaTimeStats, type CodingStats as CodingStatsType } from '@/utils/wakatime';
import { FiLoader } from 'react-icons/fi';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface HomeProps {
  initialProjects: Project[];
  initialCodingStats: CodingStatsType | null;
}

export async function getStaticProps() {
  try {
    console.log('Fetching data in getStaticProps...');
    const [projects, codingStats] = await Promise.all([
      getFeaturedProjects(),
      getWakaTimeStats()
    ]);

    console.log('WakaTime stats:', codingStats);
    console.log('GitHub projects:', projects);

    return {
      props: {
        initialProjects: projects,
        initialCodingStats: codingStats,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        initialProjects: [],
        initialCodingStats: null,
      },
      revalidate: 3600,
    };
  }
}

export default function Home({ initialProjects, initialCodingStats }: HomeProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [codingStats, setCodingStats] = useState<CodingStatsType | null>(initialCodingStats);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [freshProjects, freshStats] = await Promise.all([
          getFeaturedProjects(),
          getWakaTimeStats()
        ]);
        setProjects(freshProjects);
        setCodingStats(freshStats);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load latest data. Using cached data.');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we don't have initial data
    if (initialProjects.length === 0 || !initialCodingStats) {
      fetchData();
    }
  }, [initialProjects, initialCodingStats]);

  return (
    <>
      <Head>
        <title>Ketan Choyal - Senior Full Stack Developer</title>
        <meta name="description" content="Portfolio of Ketan Choyal - Senior Full Stack Developer specializing in Flutter and mobile development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 py-4 border-b border-[#F2F2F7] dark:border-[#1C1C1E]"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]"
            >
              KC
            </motion.h1>
            <motion.div 
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex gap-6"
            >
              {['projects', 'expertise', 'stats', 'about', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-colors capitalize"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.nav>

        <main>
          <section className="pt-32 pb-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <motion.h1 
                  className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I'm Ketan Choyal
                </motion.h1>
                <motion.h2 
                  className="text-3xl mb-8 text-[#8E8E93] dark:text-[#98989D]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Senior Full Stack Developer
                </motion.h2>
                <motion.p 
                  className="text-xl text-[#8E8E93] dark:text-[#98989D] leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Specializing in Flutter development and creating exceptional mobile experiences. Currently exploring new AWS Services and looking to collaborate on Flutter Open-Source projects.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section id="expertise" className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Mobile Development', items: ['Flutter', 'Dart', 'iOS Integration', 'Clean Architecture'] },
                    { title: 'Backend & Cloud', items: ['AWS Services', 'Firebase', 'RESTful APIs'] },
                    { title: 'UI/UX Design', items: ['Custom Widgets', 'Responsive Design', 'Animation'] },
                    { title: 'Tools & Practices', items: ['Git', 'CI/CD', 'Test-Driven Development'] }
                  ].map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                            <span className="text-[#8E8E93] dark:text-[#98989D]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="stats" className="py-16 px-4 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">Coding Activity</h2>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                  >
                    {error}
                  </motion.div>
                )}

                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, index) => (
                      <motion.div
                        key={`skeleton-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-sm"
                      >
                        <div className="h-8 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse mb-4" />
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse" />
                          <div className="h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse w-2/3" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : codingStats ? (
                  <CodingStats stats={codingStats} />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 text-[#8E8E93] dark:text-[#98989D]"
                  >
                    No coding activity data available
                  </motion.div>
                )}
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">Featured Projects</h2>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {loading ? (
                    // Loading skeleton
                    [...Array(6)].map((_, index) => (
                      <motion.div
                        key={`skeleton-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-sm"
                      >
                        <div className="aspect-video bg-gray-100 dark:bg-[#2C2C2E] animate-pulse" />
                        <div className="p-6 space-y-4">
                          <div className="h-6 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse" />
                          <div className="space-y-2">
                            <div className="h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse" />
                            <div className="h-4 bg-gray-100 dark:bg-[#2C2C2E] rounded animate-pulse w-2/3" />
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="about" className="py-16 px-4">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">About Me</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-[#8E8E93] dark:text-[#98989D] leading-relaxed">
                    As a Senior Full Stack Developer with a passion for mobile development, 
                    I specialize in creating intuitive and high-performance applications using Flutter and modern technologies. 
                    My work includes popular open-source projects and custom solutions for complex business needs.
                  </p>
                  <p className="text-lg mt-4 text-[#8E8E93] dark:text-[#98989D] leading-relaxed">
                    I'm actively contributing to the Flutter community through open-source projects 
                    and always excited to collaborate on innovative mobile solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="py-16 px-4 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-lg"
              >
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">Get in Touch</h2>
                <p className="text-lg mb-8 text-[#8E8E93] dark:text-[#98989D] leading-relaxed">
                  Looking to collaborate on Flutter projects or need help with mobile development? 
                  Let's connect and create something amazing together.
                </p>
                <motion.a
                  href="https://github.com/ketanchoyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#007AFF] text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub Profile
                </motion.a>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="py-8 px-4 text-center text-[#8E8E93] dark:text-[#98989D]">
          <div className="container mx-auto">
            <p> {new Date().getFullYear()} Ketan Choyal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
