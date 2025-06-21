import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const PolysureFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const footerSections = [
    {
      title: 'Insurance Products',
      links: [
        { name: 'Personal Insurance', href: '#' },
        { name: 'Business Insurance', href: '#' },
        { name: 'Life Insurance', href: '#' }
      ]
    },
    {
      title: 'Renew Your Policy',
      links: [
        { name: 'Renew Policy', href: '#' },
        { name: 'Forgot Premium Payment', href: '#' },
        { name: 'Policy Due', href: '#' }
      ]
    },
    {
      title: 'Claim',
      links: [
        { name: 'Claim Your Policy', href: '#' },
        { name: 'Claim Complaint', href: '#' },
        { name: 'Claim Status', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-300' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer ref={containerRef} className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Top Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex lg:flex-row flex-col gap-24 items-center">
                {/* Company Statement */}
                <div>
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight mb-8"
                  >
                    We are <br /> a leading insurance company dedicated to keeping <br /> families safe and secure.
                  </motion.h2>
                </div>

                {/* Social Media Icons */}
                <motion.div variants={itemVariants} className="flex justify-start lg:justify-end">
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.2, 
                          y: -2,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="border-t border-gray-800 mb-12"
            />

            {/* Footer Links and Newsletter */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
              {/* Brand and Contact Info */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 mb-8"
                >
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <span className="text-2xl font-bold">Polysure</span>
                </motion.div>

                <div className="space-y-4 text-gray-400">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <MapPin size={16} className="mt-1 text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">2982 Emily Drive Columbia, SC 29203</span>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">sales-support@polysure.com</span>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">803-880-6290</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Footer Links */}
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-lg font-semibold text-white"
                  >
                    {section.title}
                  </motion.h3>
                  <motion.ul variants={containerVariants} className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        variants={itemVariants}
                      >
                        <motion.a
                          href={link.href}
                          whileHover={{ 
                            x: 5,
                            color: '#fbbf24',
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                          }}
                          className="text-gray-400 hover:text-yellow-400 transition-all duration-200 block py-1 text-sm"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}

              {/* Newsletter Signup */}
              <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-lg font-semibold text-white"
                >
                  Stay informed with newsletter
                </motion.h3>
                
                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 text-sm"
                      required
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitted}
                    className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-[#F5C258] hover:bg-yellow-500 text-black'
                    }`}
                  >
                    {isSubmitted ? 'Submitted!' : 'Submit'}
                  </motion.button>
                </motion.form>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-900/50 text-green-400 rounded-lg text-xs"
                  >
                    Thank you for subscribing to our newsletter!
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              variants={itemVariants}
              className="border-t border-gray-800 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo and Copyright */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-4"
                >
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-400 text-sm">
                    © 2023 Polysure. All right reserved.
                  </span>
                </motion.div>

                {/* Legal Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex space-x-6"
                >
                  <motion.a
                    href="#"
                    whileHover={{ color: '#fbbf24' }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ color: '#fbbf24' }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    Terms & Conditions
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"
      />
    </footer>
  );
};

export default PolysureFooter;