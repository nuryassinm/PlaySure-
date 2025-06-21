import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Shield, Clock, Award } from 'lucide-react';

const FeaturesStrip = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const features = [
    {
      id: 1,
      icon: DollarSign,
      title: 'Cost Effective',
      // description: 'Competitive pricing with maximum value'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Certified Platform',
      // description: 'Industry standard security and compliance'
    },
    {
      id: 3,
      icon: Clock,
      title: '24/7 Services',
      // description: 'Round-the-clock support and assistance'
    },
    {
      id: 4,
      icon: Award,
      title: '12+ Years Experience',
      // description: 'Proven track record and expertise'
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black py-12 lg:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {/* Diagonal lines pattern */}
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
      </div>

      <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="flex gap-5 items-center text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <motion.div
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                className="relative mb-6"
              >
                {/* Icon Background Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="w-20 h-20 bg-[#2C2C2C] rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 group-hover:bg-yellow-400/30 transition-all duration-300"
                >
                  <feature.icon 
                    size={32} 
                    className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" 
                  />
                </motion.div>

                {/* Pulse Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute inset-0 w-20 h-20 bg-yellow-400/20 rounded-full"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="space-y-3"
              >
                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                >
                  {feature.description}
                </motion.p>
              </motion.div>

              {/* Hover Line Effect */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '60px' }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-yellow-400 mt-4 rounded-full"
              />
            </motion.div>
          ))}
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
        className="absolute top-4 left-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"
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
        className="absolute bottom-4 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
          style={{
            left: `${15 + (i * 15)}%`,
            top: `${20 + (i % 3) * 20}%`
          }}
        />
      ))}

      {/* Edge Glow Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </div>
  );
};

export default FeaturesStrip;