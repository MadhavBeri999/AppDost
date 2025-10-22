import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'

const OpenSource = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      emoji: '🤖',
      title: 'DeepFake Detection',
      subtitle: 'AI/ML Summer Internship Project',
      tags: ['AI/ML', 'Jupyter'],
      description:
        'Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project.',
      gradient: 'from-[#D2CAFC] to-[#D9F5FF]',
    },
    {
      emoji: '🐍',
      title: 'NooBot',
      subtitle: 'Intelligent Python Automation Bot',
      tags: ['Python', 'Automation'],
      description:
        'Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.',
      gradient: 'from-[#ABECFF] to-[#F9ECFE]',
    },
    {
      emoji: '📚',
      title: 'EduTools',
      subtitle: 'Educational Web Platform',
      tags: ['HTML/CSS', 'Education'],
      description:
        'Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.',
      gradient: 'from-[#FDC4F3] to-[#D2CAFC]',
    },
    {
      emoji: '💬',
      title: 'DialogFlow Chatbot',
      subtitle: 'Conversational AI Assistant',
      tags: ['DialogFlow', 'NLP'],
      description:
        "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
      gradient: 'from-[#F9ECFE] to-[#ABECFF]',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Source & Innovation Projects
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div
                className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-300 h-full flex flex-col`}
              >
                {/* Emoji */}
                <div
                  className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center text-4xl mb-4 transition-transform"
                >
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-800 mb-4">{project.subtitle}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-white/30 text-gray-900 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-800 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* GitHub Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-blue-700 font-semibold hover:text-blue-500 transition-colors mt-auto"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Interested in working with us on your next project?
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSource
