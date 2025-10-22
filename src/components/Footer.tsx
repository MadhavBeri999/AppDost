import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer = () => {
  const quickLinks = ['Home', 'Services', 'Careers', 'Blog', 'Contact']
  const services = [
    'Android App Development',
    'Web Development',
    'UI/UX Design',
    'CRM Software',
    'Cloud Solutions',
    'Cybersecurity',
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <img
                src="/logo.png"
                alt="AppDost Logo"
                className="h-16 w-16 object-contain"
              />
              </div>
              <div>
                <h3 className="text-xl font-bold">AppDost</h3>
                <p className="text-sm ">COMPELETE IT SOLUTION</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital
              experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-400">Web Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">4+</div>
                <div className="text-xs text-gray-400">Android Apps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500">1</div>
                <div className="text-xs text-gray-400">CRM System</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight size={16} />
                    <span>{link}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href="#services"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight size={16} />
                    <span>{service}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                <a
                  href="mailto:contact@appdost.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@appdost.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <p>+91 76350 75422</p>
                  <p>+91 11 6929 0750</p>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="mb-2">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    3 Offices: Banka (HQ), Motihari, Patna
                  </p>
                  <motion.a
                    href="https://www.google.com/maps/place/Dev+Edge/@25.5926736,84.5997589,9z/data=!4m6!3m5!1s0x39f0ff540b33522f:0x3fbd68263bc0a0a!8m2!3d24.8226201!4d86.9242952!16s%2Fg%2F11ycxp26jw?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex flex-col items-center space-y-2 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 transition-all"
                  >
                    {/* Map Screenshot */}
                    <img
                      src="/location.png"  // replace with your screenshot path
                      alt="Dev Edge Location"
                      className="w-48 h-32 object-cover rounded-md border-2 border-gray-600 hover:border-blue-500"
                    />

                    {/* Optional label */}
                    <span className="text-white text-sm font-medium">
                      View Location
                    </span>
                  </motion.a>

                  
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8">
        <p className="text-center text-gray-400 text-sm">
          © 2025 AppDost - Complete IT Solution. All rights reserved.
        </p>
      </div>
    </div>
    </footer >
  )
}

export default Footer
