import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id='about' className='py-16 px-4'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='max-w-3xl'
        >
          <h2 className='text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] via-[#32D74B] to-[#BF5AF2]'>
            About Me
          </h2>
          <div className='prose dark:prose-invert max-w-none'>
            <p className='text-lg text-[#8E8E93] dark:text-[#98989D] leading-relaxed'>
              As a Full Stack Developer specializing in Flutter and
              AWS, I build scalable, serverless applications that
              deliver exceptional user experiences. My expertise spans
              mobile development with Flutter, cloud architecture with
              AWS, and modern web development using TypeScript and
              Next.js.
            </p>
            <p className='text-lg mt-4 text-[#8E8E93] dark:text-[#98989D] leading-relaxed'>
              I'm passionate about serverless architecture and
              continuously exploring new AWS services to create
              efficient, cost-effective solutions. Currently
              contributing to the Flutter community through
              open-source projects and always excited to collaborate
              on innovative mobile and cloud solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
