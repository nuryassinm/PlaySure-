import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const InsurancePartners = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const partners = [
    { 
      name: 'Allianz', 
      logo: 'ALLIANZ',
      color: 'text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    { 
      name: 'Optus', 
      logo: 'OPTUS',
      color: 'text-gray-600',
      bgColor: 'hover:bg-gray-50'
    },
    { 
      name: 'Esurance', 
      logo: 'esurance',
      color: 'text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    { 
      name: 'GEICO', 
      logo: 'GEICO',
      color: 'text-green-600',
      bgColor: 'hover:bg-green-50'
    },
    { 
      name: 'Safeco Insurance', 
      logo: 'SAFECO',
      subtext: 'INSURANCE',
      color: 'text-blue-700',
      bgColor: 'hover:bg-blue-50'
    },
    { 
      name: 'TIAA', 
      logo: 'TIAA',
      color: 'text-gray-700',
      bgColor: 'hover:bg-gray-50'
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const LogoComponent = ({ partner, index }) => (
    <motion.div
      variants={logoVariants}
      custom={index}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className={`flex items-center  justify-center p-8 rounded-xl transition-all duration-300 cursor-pointer ${partner.bgColor} group`}
    >
      <div className={`text-center ${partner.color} group-hover:scale-105 transition-transform duration-300`}>
        {partner.name === 'Allianz' && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="text-2xl font-bold">ALLIANZ</span>
          </div>
        )}
        
        {partner.name === 'Optus' && (
          <div className="text-3xl font-bold tracking-wider">
            OPTUS
          </div>
        )}
        
        {partner.name === 'Esurance' && (
          <div className="text-2xl font-light tracking-wide lowercase italic">
            esurance
          </div>
        )}
        
        {partner.name === 'GEICO' && (
          <div className="text-3xl font-bold tracking-wider">
            GEICO
          </div>
        )}
        
        {partner.name === 'Safeco Insurance' && (
          <div className="text-center">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-6 h-6 bg-blue-700 rounded-sm"></div>
              <span className="text-2xl font-bold">SAFECO</span>
            </div>
            <div className="text-sm font-medium tracking-wider">
              INSURANCE
            </div>
          </div>
        )}
        
        {partner.name === 'TIAA' && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-3xl font-bold">TIAA</span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="py-16 lg:py-20 bg-[#F8F7F3]">
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Optional Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.h2
              variants={itemVariants}
              className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-4"
            >
              Trusted by Leading Insurance Companies
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-yellow-400 mx-auto rounded-full"
            />
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center"
          >
            {partners.map((partner, index) => (
              <LogoComponent
                key={partner.name}
                partner={partner}
                index={index}
              />
            ))}
          </motion.div>

          {/* Optional CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-6 max-w-2xl mx-auto"
            >
              Join thousands of satisfied customers who trust our platform to manage their insurance needs efficiently and securely.
            </motion.p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-20"
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
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Floating Animation for Logos */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Animated insurance icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-blue-100 rounded-lg opacity-30 flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-24 w-12 h-12 bg-green-100 rounded-lg opacity-30 flex items-center justify-center"
        >
          <div className="w-6 h-6 bg-green-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InsurancePartners;