import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const WhyChoosePolysure = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const features = [
    {
      id: 1,
      title: 'Do everything online in no time. no more paper work.',
      description: 'Get quoted and covered in under 10 minutes online.',
      style: 'yellow',
      featured: true
    },
    {
      id: 2,
      title: 'You are covered instantly with Polysure Insurance.',
      description: 'Get quoted and covered in under 10 minutes online.',
      style: 'white'
    },
    {
      id: 3,
      title: 'Skip premiums. For when life happens.',
      description: 'Get quoted and covered in under 10 minutes online.',
      style: 'white'
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

  return (
    <div ref={containerRef} className="py-16 lg:py-24 rounded-2xl bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {/* Grid pattern */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <div className="flex lg:flex-row flex-col  w-full justify-between gap-12 lg:gap-16 items-start mb-16">
            {/* Left Column - Logo and Why Choose */}
            <motion.div variants={itemVariants} className="space-y-8 w-full">
              {/* Logo */}
              

              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Why choose Polysure
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 leading-relaxed text-lg"
              >
                Polysure is a digital-first insurer that uses <br />
               technology to make life insurance simpler, <br />
                smarter, and more rewarding. Quick <br /> stress-free claims, instant quotes from top <br />
                 insurers and being present for you in the <br /> toughest of times.
              </motion.p>
            </motion.div>

            {/* Right Column - Main Heading */}
            <motion.div variants={itemVariants} className="lg:pl-8">
              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block"
                >
                  Designed from the ground up
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block"
                >
                  for the internet era.
                </motion.span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed mt-8"
              >
                When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.
              </motion.p>
            </motion.div>
          </div>

          {/* Features Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                  feature.style === 'yellow' 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-black' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15'
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="space-y-6"
                >
                  <motion.h3
                    className={`text-xl lg:text-2xl font-bold leading-tight ${
                      feature.style === 'yellow' ? 'text-black' : 'text-white'
                    }`}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    className={`leading-relaxed ${
                      feature.style === 'yellow' ? 'text-black/80' : 'text-gray-300'
                    }`}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Arrow Button */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex w-12 h-12 bg-black rounded-full items-center justify-center cursor-pointer"
                  >
                    <ArrowRight 
                      size={20} 
                      className={feature.style === 'yellow' ? 'text-white' : 'text-yellow-400'} 
                    />
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: feature.style === 'yellow' 
                      ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 146, 60, 0.2))'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                  }}
                />

                {/* Floating Animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1, 0]
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
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"
      />

      {/* Additional Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full opacity-40"
      />
    </div>
  );
};

export default WhyChoosePolysure;