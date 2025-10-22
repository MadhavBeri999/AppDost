
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Play, ArrowRight } from 'lucide-react'

const FeaturedProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      category: 'AI-Powered Educational Platform',
      title: 'BEU Mate - Bihar Engineering',
      description:
        'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.',
      problem: 'Students struggled with scattered resources',
      solution: 'AI-driven personalized learning platform',
      outcome: '10,000+ active users, 85% placement rate',
      tech: ['React Native', 'Node.js', 'AI/ML'],
      links: [
        { icon: Play, label: 'Play Store', url: '#' },
        { icon: ExternalLink, label: 'Website', url: '#' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      image: '/beu.png',
    },
    {
      category: 'Educational Platform',
      title: 'Devskillquest',
      description:
        'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects and coding challenges.',
      problem: 'Lack of practical coding experience',
      solution: 'Project-based learning with real challenges',
      outcome: '5,000+ developers trained, 70% job placement',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      links: [{ icon: ExternalLink, label: 'Website', url: '#' }],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
    },
    {
      category: 'Wedding Planning Portal',
      title: 'The Weddings Chapter',
      description:
        'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolios and booking management.',
      problem: 'Fragmented wedding planning process',
      solution: 'All-in-one wedding marketplace',
      outcome: '500+ vendors, 1,000+ successful events',
      tech: ['PHP', 'Laravel', 'MySQL'],
      links: [{ icon: ExternalLink, label: 'Website', url: '#' }],
      gradient: 'from-rose-500 to-red-500',
      image: '/wedding.png',
    },
  ]

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </div>

                  {/* Project Details */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4 w-fit`}>
                      {project.category}
                    </span>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem → Solution → Outcome */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 dark:text-red-400 text-xs font-bold">P</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Problem:</span> {project.problem}
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">S</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> {project.solution}
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 dark:text-green-400 text-xs font-bold">O</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Outcome:</span> {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <link.icon size={16} className="text-gray-700 dark:text-gray-300" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{link.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
