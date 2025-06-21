import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const PolysureSplitDesign = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const cards = [
    {
      id: 1,
      title: 'Individuals & Family',
      description: 'We help a proper send-off and help your family keep living their best life in your absence.',
      image: '../assets/corporate-business-people.jpg',
      color: 'from-yellow-400 to-orange-400',
      textColor: 'text-black'
    },
    {
      id: 2,
      title: 'Business Protection',
      description: 'Protecting your business means staying one step ahead, and helping you prevent problems before they happen.',
      image: '../assets/african-american-women-sitting-table-near-document-pen-figure-gavel.jpg',
      color: 'from-purple-400 to-pink-400',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Health & Wellness',
      description: 'We help a proper send-off and help your family keep living their best life in your absence.',
      image: '../assets/young-adult-wearing-face-mask.jpg',
      color: 'from-green-400 to-blue-400',
      textColor: 'text-white'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Half - Black */}
        <div className="h-[700px] w-full bg-black"></div>
        {/* Right Half - White */}
        <div className="h-1/2 bg-[#F8F7F3]"></div>
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-50 px-6 lg:px-8 py-6"
      >
        <div className="max-w-[105rem] mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Shield className="w-8 h-8 text-orange-400" />
            <span className="text-2xl font-bold text-white">Polysure</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Insurance Products', 'Renew Your Policy', 'Claim', 'Support', 'Learn'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)" }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-all duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-[105rem] mx-auto px-6 lg:px-8 pt-12 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]"
        >
          {/* Left Content - On Black Background */}
          <motion.div variants={itemVariants} className="space-y-8 text-white">
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                Taking care of what's
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                important.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              Start buying and managing your policies by digitally system. And create a comfortable and easy collection as per your need. Protect yourself and your lovedone.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Start for Free
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Cards Spanning Both Backgrounds */}
          <motion.div variants={itemVariants} className="relative">
            {/* Navigation Controls */}
            <div className="absolute top-4 right-4 z-20 flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Cards Container */}
            <div className="relative h-[600px] overflow-hidden">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    x: index === currentSlide ? 0 : 100,
                    scale: index === currentSlide ? 1 : 0.9,
                    zIndex: index === currentSlide ? 10 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* Card Image */}
                    <div className="relative h-2/3 overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer"
                      >
                        <ChevronRight size={24} />
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <motion.div
                      className={`h-1/3 p-6 bg-gradient-to-r ${card.color} flex flex-col justify-center`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.h3
                        className={`text-2xl font-bold mb-3 ${card.textColor}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        className={`${card.textColor} opacity-90 leading-relaxed`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {card.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Slide Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-2 mt-6"
            >
              {cards.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"
      />
    </div>
  );
};

export default PolysureSplitDesign;