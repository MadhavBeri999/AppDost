import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onConsultationClick: () => void;
}

export default function Hero({ onConsultationClick }: HeroProps) {
  const features = [
    '100% Client Satisfaction',
    'Secure & Scalable',
    '24/7 Support'
  ];

  return (
    // ✅ Added pt-32 to create space below navbar
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-32"
    >
      {/* 🎥 Optimized Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none" // ✅ Prevents lag by not preloading full video
          className="w-full h-full object-cover"
        >
          {/* ⬇️ Replace with your own video file */}
          <source src="/bgvideo_uRKodD13.mp4" type="video/mp4" />
        </video>

        {/* ✅ Slightly darker overlay for readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Ideas
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent">
              Into Digital Reality
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software,
            we bring innovation and excellence to every project with our expert team of developers.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <CheckCircle2 className="text-accent" size={20} />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.a>

            <motion.button
              onClick={onConsultationClick}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="mt-16 inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
}
