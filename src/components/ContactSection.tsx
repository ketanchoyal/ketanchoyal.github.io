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
    icon: <FiGithub className='w-6 h-6' />,
    gradient: 'from-[#007AFF] to-[#0A84FF]'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ketanchoyal',
    icon: <FiLinkedin className='w-6 h-6' />,
    gradient: 'from-[#32D74B] to-[#30D158]'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ketanchoyal',
    icon: <FiTwitter className='w-6 h-6' />,
    gradient: 'from-[#BF5AF2] to-[#C377FE]'
  },
  {
    name: 'Email',
    url: 'mailto:me@ketanchoyal.dev',
    icon: <FiMail className='w-6 h-6' />,
    gradient: 'from-[#FF9F0A] to-[#FFB340]'
  }
]

export default function ContactSection () {
  return (
    <section id='contact' className='py-16 px-4'>
      <div className='container mx-auto max-w-3xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
            Let's Connect
          </h2>
          <p className='text-[#8E8E93] dark:text-[#98989D] text-lg'>
            Looking to build a scalable mobile app with Flutter and AWS? Or need
            help with serverless architecture? Let's connect and create
            something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-4'
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
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className='flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl backdrop-saturate-150 border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group'
            >
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${link.gradient} bg-opacity-[0.03] dark:bg-opacity-[0.06] group-hover:bg-opacity-[0.06] dark:group-hover:bg-opacity-[0.09] transition-all duration-300`}
              >
                {link.icon}
              </div>
              <span className='font-medium text-[#1C1C1E] dark:text-white'>
                {link.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
