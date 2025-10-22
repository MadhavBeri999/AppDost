import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const FloatingButtons = () => {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatbotAutoOpened, setChatbotAutoOpened] = useState(false)

  useEffect(() => {
    // Auto-open chatbot after 10-15 seconds
    const timer = setTimeout(() => {
      if (!chatbotAutoOpened) {
        setShowChatbot(true)
        setChatbotAutoOpened(true)
      }
    }, 12000) // 12 seconds

    return () => clearTimeout(timer)
  }, [chatbotAutoOpened])

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917635075422"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all group"
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(34, 197, 94, 0.7)',
              '0 0 0 20px rgba(34, 197, 94, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full"
        />
        <svg
          className="w-8 h-8 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>

      {/* Chatbot Button & Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {showChatbot && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Chat with us!</h4>
                    <p className="text-white/80 text-xs">We typically reply in minutes</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-4 h-64 bg-gray-50 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    👋 Hi there! How can we help you today?
                  </p>
                </div>
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300"
                  >
                    📱 Tell me about your services
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300"
                  >
                    💰 Get a quote for my project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all text-sm text-gray-700 dark:text-gray-300"
                  >
                    📞 Schedule a consultation
                  </motion.button>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white text-sm"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbot Toggle Button */}
        {!showChatbot && (
          <motion.button
            onClick={() => setShowChatbot(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(99, 102, 241, 0.7)',
                  '0 0 0 20px rgba(99, 102, 241, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full"
            />
            <MessageCircle className="text-white relative z-10" size={28} />
          </motion.button>
        )}
      </div>
    </>
  )
}

export default FloatingButtons
