import { motion } from 'framer-motion'

const expertiseCategories = [
  {
    title: 'Mobile Development',
    color: '#007AFF',
    darkColor: '#0A84FF',
    items: [
      'Flutter & Dart',
      'iOS Integration',
      'Clean Architecture',
      'State Management'
    ]
  },
  {
    title: 'Cloud & Backend',
    color: '#32D74B',
    darkColor: '#30D158',
    items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Serverless Framework']
  },
  {
    title: 'Frontend & TypeScript',
    color: '#BF5AF2',
    darkColor: '#C377FE',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'DevOps & Tools',
    color: '#FF9F0A',
    darkColor: '#FFB340',
    items: ['GitHub Actions', 'Bitrise', 'CI/CD']
  }
]

export default function ExpertiseSection () {
  return (
    <section id='expertise' className='py-16 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='max-w-3xl'
        >
          <h2 className='text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
            Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'
                style={{
                  borderLeft: `4px solid ${category.color}`,
                  borderLeftColor: `${category.color}`
                }}
              >
                <h3 className='text-xl font-semibold mb-4 text-black dark:text-white'>
                  {category.title}
                </h3>
                <ul className='space-y-2'>
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className='flex items-center gap-2'
                    >
                      <span
                        className='w-2 h-2 rounded-full'
                        style={{
                          backgroundColor: category.color
                        }}
                      />
                      <span className='text-[#8E8E93] dark:text-[#98989D]'>
                        {item}
                      </span>
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
