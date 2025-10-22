import { motion } from 'framer-motion';
import { CheckCircle2, Zap, RefreshCcw, Award, TrendingUp, Users } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Complete Lifecycle Expertise',
      description: 'From ideation to deployment and beyond',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology Stack',
      description: 'We work with the latest tools and frameworks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: RefreshCcw,
      title: 'Agile Development Process',
      description: 'Fast iterations, continuous feedback, rapid delivery',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Quality-First Approach',
      description: 'Rigorous testing and code reviews ensure excellence',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Client-Centric Focus',
      description: 'Your success is our success',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AppDost?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through innovation, dedication, and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <reason.icon className="text-white" size={32} />
              </div>
              
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
