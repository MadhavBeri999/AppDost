import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Briefcase, Cloud, Shield } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning'],
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-[#F5C4BE] via-[#FCE1DA] to-[#FBF1E6] relative overflow-hidden"
    >
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Our Services</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We deliver end-to-end IT solutions that drive business growth and digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white/20 border border-[#F7D3B3] rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-2xl"
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Hidden content */}
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                    height: isHovered ? 'auto' : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
