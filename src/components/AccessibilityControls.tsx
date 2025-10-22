import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Type, Contrast } from 'lucide-react'

interface AccessibilityControlsProps {
  fontSize: 'normal' | 'large'
  setFontSize: (size: 'normal' | 'large') => void
  highContrast: boolean
  setHighContrast: (value: boolean) => void
}

const AccessibilityControls = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
}: AccessibilityControlsProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-40 right-6 z-40">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
      >
        <Settings className="text-gray-700 dark:text-gray-300" size={20} />
      </motion.button>

      {/* Controls Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute right-0 top-14 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 w-64 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Accessibility</h4>

            {/* Font Size */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Type size={16} className="text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Font Size
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    fontSize === 'normal'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    fontSize === 'large'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Large
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Contrast size={16} className="text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    High Contrast
                  </span>
                </div>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    highContrast ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <motion.div
                    animate={{ x: highContrast ? 24 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-4 h-4 bg-white rounded-full"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccessibilityControls
