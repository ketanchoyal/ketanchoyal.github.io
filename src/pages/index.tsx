import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import StaggerContainer from '@/components/StaggerContainer';
import { getFeaturedProjects, type Project } from '@/utils/github';

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

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface HomeProps {
  projects: Project[];
}

export async function getStaticProps() {
  try {
    console.log('Fetching projects in getStaticProps...');
    const projects = await getFeaturedProjects();
    console.log('Projects fetched:', projects);
    
    return {
      props: {
        projects,
      },
      // Revalidate every hour to keep project stats fresh
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        projects: [],
      },
      revalidate: 3600,
    };
  }
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    console.log('Rendered projects:', projects);
  }, [projects]);

  return (
    <>
      <Head>
        <title>Ketan Choyal | Mobile Developer</title>
        <meta name="description" content="Senior Full Stack Developer specializing in Flutter, React Native, and native mobile development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <StaggerContainer className="flex gap-6">
              {['projects', 'expertise', 'about', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black dark:text-white hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-colors capitalize"
                >
                  {item}
                </motion.a>
              ))}
            </StaggerContainer>
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
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Mobile Development', items: ['Flutter', 'Dart', 'iOS Integration', 'Clean Architecture'] },
                    { title: 'Backend & Cloud', items: ['AWS Services', 'Firebase', 'RESTful APIs'] },
                    { title: 'UI/UX Design', items: ['Custom Widgets', 'Responsive Design', 'Animation'] },
                    { title: 'Tools & Practices', items: ['Git', 'CI/CD', 'Test-Driven Development'] }
                  ].map((category) => (
                    <motion.div
                      key={category.title}
                      variants={staggerItem}
                      className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <motion.li
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-[#007AFF] rounded-full" />
                            <span className="text-[#8E8E93] dark:text-[#98989D]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-16 px-4 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]">Featured Projects</h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </StaggerContainer>
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
