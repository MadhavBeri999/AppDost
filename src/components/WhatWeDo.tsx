import { motion } from 'framer-motion';
import { Palette, Code, Globe, Smartphone, Wrench, Rocket } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      
      content: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement.',
      color: 'from-pink-500 to-rose-500',
      span: 'col-span-2 row-span-1',
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      
      content: 'Building robust, scalable enterprise solutions tailored to your business needs.',
      color: 'from-blue-500 to-cyan-500',
      span: 'col-span-1 row-span-2',
    },
    {
      icon: Globe,
      title: 'Web Development',
      
      content: 'Responsive, high-performance web apps using cutting-edge frameworks.',
      color: 'from-purple-500 to-indigo-500',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      
      content: 'Native & cross-platform apps that users love — iOS, Android, and beyond.',
      color: 'from-green-500 to-emerald-500',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: Wrench,
      title: 'Full-Stack Development',
      
      content: 'Frontend elegance, backend power, and cloud scalability — all in one place.',
      color: 'from-orange-500 to-amber-500',
      span: 'col-span-2 row-span-1',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      
      content: 'Helping businesses modernize with strategic digital solutions & cloud migration.',
      color: 'from-violet-500 to-purple-500',
      span: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section id="what-we-do" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">We Do</span>
          </h2>
          
        </motion.div>

        {/* 🧩 Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${service.color} ${service.span} p-6 flex flex-col justify-between backdrop-blur-lg bg-opacity-30 text-white group`}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-3xl" />

              {/* Icon and Emoji */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3">
                  <service.icon size={28} />
                </div>
                <span className="text-2xl">{service.emoji}</span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold mt-4">{service.title}</h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-white/90 leading-relaxed mt-2">
                {service.content}
              </p>

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl"
                initial={false}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
