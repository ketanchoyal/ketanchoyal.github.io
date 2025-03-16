import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

interface ContactLink {
  name: string
  url: string
  icon: JSX.Element
  gradient: string
}

const contactLinks: ContactLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ketanchoyal',
    icon: <FiGithub className='w-7 h-7' />,
    gradient: 'from-[#007AFF] to-[#0A84FF]'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ketanchoyal',
    icon: <FiLinkedin className='w-7 h-7' />,
    gradient: 'from-[#32D74B] to-[#30D158]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ketanchoyal',
    icon: <FiTwitter className='w-7 h-7' />,
    gradient: 'from-[#BF5AF2] to-[#C377FE]'
  },
  {
    name: 'Email',
    url: 'mailto:ketanchoyal@gmail.com',
    icon: <FiMail className='w-7 h-7' />,
    gradient: 'from-[#FF9F0A] to-[#FFB340]'
  }
]

export default function ContactSection () {
  return (
    <div className='mx-auto max-w-6xl space-y-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
        viewport={{ once: true }}
        className='space-y-4 text-center'
      >
        <h2 className='text-3xl font-bold bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2] bg-clip-text text-transparent'>
          Let&apos;s Connect
        </h2>
        <p className='text-[#8E8E93] dark:text-[#98989D] max-w-2xl mx-auto'>
          Looking to build a scalable mobile app with Flutter and AWS? Or need
          help with serverless architecture? Let&apos;s connect and create
          something amazing together.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: index * 0.1 + 0.3
            }}
            viewport={{ once: true }}
            className={`flex items-center justify-center gap-3 p-6 rounded-2xl bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group`}
          >
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${link.gradient} bg-opacity-10 dark:bg-opacity-20 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-all duration-300`}
            >
              <div className={`transition-colors duration-300`}>
                {link.icon}
              </div>
            </div>
            <span className='font-medium text-[#1C1C1E] dark:text-white'>
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
