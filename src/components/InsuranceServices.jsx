import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ImageWithLoader from './ImageWithLoader';

const InsuranceServices = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const services = [
    {
      id: 1,
      title: 'Personal Insurance',
      description: 'Choose any products and give couple of answers. We create customised plan as per your need.',
      image: '../assets/man2.png',
      backgroundShape: 'purple',
      cardStyle: 'white',
      buttonStyle: 'yellow'
    },
    {
      id: 2,
      title: 'Business Insurance',
      description: 'Enter your requirements and give couple of answers. We provide you best solution.',
      image: '../assets/handsome-young-businessman-portrait.png',
      backgroundShape: 'yellow',
      cardStyle: 'yellow',
      buttonStyle: 'white',
      featured: true
    },
    {
      id: 3,
      title: 'Life Insurance',
      description: 'Secure your life with the specially designed life insurance plans and live tension free life.',
      image: '../assets/young-adult-wearing-face-mask-removebg-preview.png',
      backgroundShape: 'green',
      cardStyle: 'white',
      buttonStyle: 'yellow'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const getBackgroundShape = (shape) => {
    switch (shape) {
      case 'purple':
        return 'bg-purple-400';
      case 'yellow':
        return 'bg-yellow-400';
      case 'green':
        return 'bg-green-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getShapeElement = (shape, index) => {
    const baseClasses = "absolute opacity-80";
    const shapeClass = getBackgroundShape(shape);
    
    switch (shape) {
      case 'purple':
        return (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            className={`${baseClasses} ${shapeClass} w-24 h-24 transform rotate-45 -top-12 -left-12 rounded-lg`}
          />
        );
      case 'yellow':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            className={`${baseClasses} ${shapeClass} w-32 h-32 rounded-full -top-16 -right-16`}
          >
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + i * 0.1 }}
                className="absolute bg-yellow-300 w-1 h-6 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-24px)`
                }}
              />
            ))}
          </motion.div>
        );
      case 'green':
        return (
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            className={`${baseClasses} ${shapeClass} w-28 h-28 rounded-3xl -top-14 -right-14`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="py-16 my-20 rounded-3xl lg:py-24 bg-[#F8F7F3]">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Simple Smarter & Rewarding Cover
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              You can customise your insurance policy and choose to safeguard exactly what you want. We'll take care of the rest.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8 space-y-3 lg:gap-12 items-end"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className={`relative overflow-hidden rounded-3xl shadow-xl ${
                  service.featured ? 'md:scale-110 md:-mb-8' : ''
                } ${
                  service.cardStyle === 'yellow' 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                    : 'bg-white'
                }`}
              >
                {/* Background Shape */}
                <div className="relative overflow-hidden">
                  {getShapeElement(service.backgroundShape, index)}
                  
                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    className="relative h-80 overflow-hidden"
                  >
                    <ImageWithLoader
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="p-8 text-center"
                >
                  <motion.h3
                    className={`text-2xl lg:text-3xl font-bold mb-4 ${
                      service.cardStyle === 'yellow' ? 'text-black' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    className={`mb-8 leading-relaxed ${
                      service.cardStyle === 'yellow' ? 'text-black/80' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </motion.p>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: service.buttonStyle === 'yellow' 
                        ? "0 8px 25px rgba(251, 191, 36, 0.4)"
                        : "0 8px 25px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg ${
                      service.buttonStyle === 'yellow'
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                        : 'bg-white hover:bg-gray-50 text-black border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Get matched
                  </motion.button>
                </motion.div>

                {/* Floating Animation */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 pointer-events-none"
                />
              </motion.div>
            ))}
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
        className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 pointer-events-none"
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
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
    </div>
  );
};

export default InsuranceServices;