import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: 10, suffix: '+', label: 'Web Projects', icon: '🌐' },
    { value: 4, suffix: '+', label: 'Android Apps', icon: '📱' },
    { value: 1, suffix: '', label: 'CRM Project', icon: '💼' }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, idx) => {
      if (stat.value <= 1) {
        setCounters(prev => {
          const copy = [...prev];
          copy[idx] = stat.value;
          return copy;
        });
        return;
      }

      let start = 1;
      const end = stat.value;
      const interval = setInterval(() => {
        setCounters(prev => {
          const copy = [...prev];
          if (copy[idx] < end) {
            copy[idx] += 1;
          } else {
            clearInterval(interval);
          }
          return copy;
        });
      }, 150); // Adjust speed here (ms per increment)
    });
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                y: -5
              }}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary transition-all duration-300"
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
              >
                {counters[index]}{stat.suffix}
              </motion.h3>
              <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
