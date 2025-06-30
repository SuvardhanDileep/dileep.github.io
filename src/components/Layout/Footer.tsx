import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <span className="text-white">Made with</span>
              <Heart className="text-neon-pink w-5 h-5" fill="currentColor" />
              <Code className="text-neon-blue w-5 h-5" />
              <span className="text-white">and</span>
              <Coffee className="text-neon-purple w-5 h-5" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-4"
            >
              © {currentYear} Suvardhan Dileep Gaddameedi. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400"
            >
              AI Engineer & Full-Stack Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-neon-purple/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>
    </footer>
  );
};

export default Footer;