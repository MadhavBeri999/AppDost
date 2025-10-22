import { motion } from 'framer-motion';
import { Search, Palette as PaletteIcon, Code2, Rocket } from 'lucide-react';

export default function DevelopmentProcess() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PaletteIcon,
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/50 to-background relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Development Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card border border-[#F7D3B3] rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <step.icon className="text-white" size={40} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Step Number Badge */}
              <div className="mt-4 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
