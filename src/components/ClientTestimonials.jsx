import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ImageWithLoader from './ImageWithLoader';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      name: 'Brandon Stone',
      position: 'IT Professional',
      image: '../assets/man-with-face-mask-looking-away.jpg',
      quote: 'I have been a client of Polysure Insurance for the past 5 years, and I have been extremely satisfied with the level of service and coverage that I have received. The team at Polysure Insurance is always responsive and helpful, answering any questions I have and ensuring that I have the coverage I need.',
      cardPosition: { top: '20%', left: '15%' },
      cardColor: 'bg-white'
    },
    {
      id: 2,
      name: 'Helen Rayo',
      position: 'CEO Representative',
      image: '../assets/man-with-face-mask-looking-away.jpg',
      quote: 'The claims process was smooth and hassle-free, and I received my settlement in a timely manner. I appreciate the peace of mind that comes with knowing that I am fully protected against unexpected events. I would highly recommend Polysure to anyone looking for a reliable and trustworthy insurance provider.',
      cardPosition: { top: '30%', right: '10%' },
      cardColor: 'bg-white'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      position: 'Business Owner',
      image: '../assets/man-with-face-mask-looking-away.jpg',
      quote: 'Polysure has been instrumental in protecting my business. Their comprehensive coverage and excellent customer service have given me the confidence to focus on growing my company without worrying about potential risks.',
      cardPosition: { bottom: '20%', left: '20%' },
      cardColor: 'bg-white'
    }
  ];

  const decorativeElements = [
    { type: 'square', color: 'bg-yellow-400', size: 'w-16 h-16', position: { top: '10%', left: '5%' } },
    { type: 'square', color: 'bg-purple-400', size: 'w-12 h-12', position: { top: '60%', left: '8%' } },
    { type: 'square', color: 'bg-yellow-400', size: 'w-20 h-20', position: { top: '15%', right: '8%' } },
    { type: 'square', color: 'bg-purple-400', size: 'w-24 h-24', position: { bottom: '25%', right: '5%' } },
    { type: 'circle', color: 'bg-gray-200', size: 'w-32 h-32', position: { bottom: '10%', right: '15%' } }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden min-h-screen">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Content - Heading */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-7xl font-medium text-gray-900 leading-tight"
            >
              Word from our <br /> clients
            </motion.h1>

            {/* Navigation Controls */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#374151' }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#374151' }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight size={20} />
              </motion.button>

              {/* Indicators */}
              <div className="flex space-x-2 ml-4">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gray-800 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Testimonials Area */}
          <motion.div variants={itemVariants} className="relative h-[600px]">
            {/* Decorative Elements */}
            {decorativeElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                variants={floatingVariants}
                animate="animate"
                className={`absolute ${element.color} ${element.size} ${
                  element.type === 'circle' ? 'rounded-full' : 'rounded-2xl'
                } opacity-80`}
                style={element.position}
              />
            ))}

            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Main Testimonial Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-xl max-w-md w-full z-10"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <Quote size={20} className="text-black" />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-6"
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      "{testimonials[currentTestimonial].quote}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <ImageWithLoader
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-16 h-16 rounded-full object-cover"
                          containerClassName="w-16 h-16 rounded-full overflow-hidden ring-4 ring-yellow-400/20"
                        />
                      </motion.div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentTestimonial].position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Background Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-0 right-0 w-80 h-60 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithLoader
                    src="../assets/man-with-face-mask-looking-away.jpg"
                    alt="Happy clients"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
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
        className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"
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
        className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30"
      />
    </div>
  );
};

export default ClientTestimonials;