import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ImageWithLoader from './ImageWithLoader';

const GetQuoteCTA = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative py-16 lg:py-24  overflow-hidden">
      {/* Background Split */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black"></div>
      
      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex lg:flex-row flex-col justify-between gap-12 lg:gap-16 w-full items-start"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pr-8">
            {/* Small heading */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-2xl text-gray-600 font-medium"
            >
              Get a quote
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                Customised coverage options
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                for all types of businesses.
              </motion.span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(251, 191, 36, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Get a quote
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Connect to our expert
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div variants={itemVariants} className="relative h-[600px]">
            {/* Top Right Image - Family */}
            <motion.div
              variants={imageVariants}
              custom={1}
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="absolute top-0 right-0 w-60 h-48 rounded-3xl overflow-hidden shadow-xl z-10"
            >
              <ImageWithLoader
                src="../assets/man-with-face-mask-looking-away.jpg"
                alt="Happy family with child"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Center Right Image - Family at Home */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              variants={floatingVariants}
              animate="animate"
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="absolute top-32 right-16 w-72 h-56 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <ImageWithLoader
                src="/api/placeholder/450/350"
                alt="Family working from home"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Bottom Image - Happy Couple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              animate={{
                y: [0, -8, 0],
                rotate: [0, -1, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="absolute bottom-16 left-8 w-80 h-60 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <ImageWithLoader
                src="/api/placeholder/500/400"
                alt="Couple making house shape with hands"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute top-8 left-4 w-16 h-16 bg-yellow-400 rounded-2xl opacity-80"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
                transition: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute bottom-4 right-4 w-12 h-12 bg-purple-400 rounded-full opacity-70"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute top-1/2 left-0 w-8 h-8 bg-gray-300 rounded-lg opacity-60"
            />

            {/* Background Glow Effects */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"
            />

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-300 rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-50"
        />
      </div>
    </div>
  );
};

export default GetQuoteCTA;