import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'
import PageTransition from '@/components/PageTransition'
import { AnimatePresence } from 'framer-motion'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <div className='min-h-screen bg-white dark:bg-[#000000] transition-colors duration-200'>
        <div className='fixed top-3 right-4 z-[60]'></div>
        <AnimatePresence mode='wait'>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
