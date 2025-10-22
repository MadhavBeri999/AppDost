import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onConsultationClick: () => void;
}

export default function Navbar({ onConsultationClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Career', href: '#career' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ backgroundColor: 'transparent' }}
      animate={{
        backgroundColor: isScrolled ? 'hsl(var(--background))' : 'transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'backdrop-blur-lg bg-background/95' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a href="#home" className="flex items-center space-x-4">
              {/* Logo image with larger height */}
              <img
                src="/logo.png"
                alt="AppDost Logo"
                className="h-16 w-16 object-contain"
              />
              {/* Text block with gradient */}
              <div className="flex flex-col leading-tight">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent">
                  AppDost
                </span>
                <span className="text-lg font-medium bg-gradient-to-r from-green-700 to-green-300 bg-clip-text text-transparent">
                  COMPLETE IT SOLUTION
                </span>
              </div>
            </a>
          </motion.div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
                  } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <motion.button
              onClick={onConsultationClick}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                onConsultationClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
