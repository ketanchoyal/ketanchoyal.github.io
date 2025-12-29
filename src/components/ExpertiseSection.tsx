import { motion } from 'framer-motion'

const expertiseCategories = [
  {
    title: 'Mobile Development',
    color: '#007AFF',
    darkColor: '#0A84FF',
    items: [
      'Flutter & Dart',
      'Native Mobile (Swift/UIKit & Kotlin)',
      'State Management (Riverpod,Bloc and More)',
      'Clean Architecture',
      'Maps & Location Services (Mapbox)',
      'App Store & Play Store Deployment'
    ]
  },
  {
    title: 'Cloud & Backend',
    color: '#32D74B',
    darkColor: '#30D158',
    items: [
      'AWS (Lambda, DynamoDB)',
      'Serverless Framework',
      'API Gateway & Redis',
      'Google Cloud / Firebase',
      'Node.js & GraphQL',
      'Real-time Data Sync'
    ]
  },
  {
    title: 'Frontend & Web',
    color: '#BF5AF2',
    darkColor: '#C377FE',
    items: [
      'Next.js & React',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML/CSS',
      'Responsive Design'
    ]
  },
  {
    title: 'DevOps & Processes',
    color: '#FF9F0A',
    darkColor: '#FFB340',
    items: [
      'CI/CD (Bitrise, GitHub Actions)',
      'Git, GitHub & Bitbucket',
      'Jira, Confluence & Asana',
      'Figma to Code Implementation',
      'Unit, Widget & Integration Testing',
      'Code Review & Mentorship'
    ]
  }
]

export default function ExpertiseSection() {
  return (
    <section id='expertise' className='py-20 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <h2 className='text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>
            Technical Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className='glass-panel p-8 rounded-3xl hover:border-blue-500/30 transition-all'
              >
                <h3 className='text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-3'>
                  <span className='w-3 h-3 rounded-full' style={{ backgroundColor: category.color }} />
                  {category.title}
                </h3>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className='flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-medium'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-slate-400/50' />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
