import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Home', url: '/' },
    { name: 'Rent', url: '/rent' },
    { name: 'Services', url: '/services' },
    { name: 'News', url: '/news' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full top-0 z-50 shadow-sm bg-white"
    >
      <div className="max-w-[105rem] mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md">
                <div className='w-5 h-5 bg-blue-600 rotate-45' />
              </div>
              <span className="font-bold text-2xl">LONA</span>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-white p-1 rounded-md flex items-center space-x-4">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveLink(link.name)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeLink === link.name ? 'bg-gray-200 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {isSearchOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg"
                >
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-64 p-2 border rounded-lg"
                    autoFocus
                  />
                </motion.div>
              )}
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"
            >
              Contact Us
              <span className="ml-2">→</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-t z-40 shadow-md"
            >
              <div className="px-4 py-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-4 p-2">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <a
                  href="/contact"
                  className="block mt-4 w-full text-center bg-black text-white px-4 py-2 rounded-full"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
