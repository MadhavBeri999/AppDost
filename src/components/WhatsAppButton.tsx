import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917635075422"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(34, 197, 94, 0.7)',
          '0 0 0 20px rgba(34, 197, 94, 0)',
          '0 0 0 0 rgba(34, 197, 94, 0)'
        ]
      }}
      transition={{
        boxShadow: {
          repeat: Infinity,
          duration: 2
        }
      }}
    >
      <MessageCircle className="text-white" size={28} />
    </motion.a>
  );
}
