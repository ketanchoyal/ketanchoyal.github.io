import Head from 'next/head'
import DataProvider from '@/components/DataProvider'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProjectsSection from '@/components/ProjectsSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <DataProvider>
      {({ projects, codingStats, loading, error }) => (
        <>
          <Head>
            <title>Ketan Choyal - Full Stack Developer</title>
            <meta
              name='description'
              content='Full Stack Developer specializing in Flutter, AWS, and TypeScript'
            />
          </Head>

          <main className='min-h-screen bg-[#F2F2F7] dark:bg-black'>
            <NavBar />
            <HeroSection />
            <ExperienceSection />
            <ExpertiseSection />
            <ProjectsSection
              projects={projects}
              loading={loading}
              error={error}
            />
            <StatsSection
              codingStats={codingStats}
              loading={loading}
              error={error}
            />
            <AboutSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </DataProvider>
  )
}
