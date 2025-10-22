import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Type, Contrast } from 'lucide-react';

interface AccessibilityPanelProps {
  fontSize: string;
  onFontSizeChange: (size: string) => void;
  highContrast: boolean;
  onHighContrastToggle: () => void;
}

export default function AccessibilityPanel({
  fontSize,
  onFontSizeChange,
  highContrast,
  onHighContrastToggle
}: AccessibilityPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const fontSizes = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large' },
    { label: 'X-Large', value: 'xlarge' }
  ];

  return (
    <div className="fixed top-40 right-6 z-40">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-card border-2 border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-primary transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Accessibility Settings"
      >
        <Settings className="text-foreground" size={24} />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 w-64 bg-card border-2 border-border rounded-2xl shadow-2xl p-4"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Settings size={20} />
              Accessibility
            </h3>

            {/* Font Size */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Type size={18} className="text-muted-foreground" />
                <label className="text-sm font-medium">Font Size</label>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {fontSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => onFontSizeChange(size.value)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      fontSize === size.value
                        ? 'bg-gradient-to-r from-primary to-accent text-white'
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Contrast size={18} className="text-muted-foreground" />
                <label className="text-sm font-medium">High Contrast</label>
              </div>
              <button
                onClick={onHighContrastToggle}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
                  highContrast
                    ? 'bg-gradient-to-r from-primary to-accent text-white'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {highContrast ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
