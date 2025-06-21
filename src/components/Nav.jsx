import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Insurance Products', url: '#' },
    { name: 'Renew Your Policy', url: '#' },
    { name: 'Claim', url: '#' },
    { name: 'Support', url: '#' },
    { name: 'Learn', url: '#' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? ' bg-black/90 shadow-lg' : ''
      }`}
    >
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 mr-2"></div>
              <span className="font-bold text-white text-xl">Polysure</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.05, color: '#f97316' }}
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-colors text-sm font-medium"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-md"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col space-y-3 mt-4 px-3 pb-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-colors text-sm font-medium"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;