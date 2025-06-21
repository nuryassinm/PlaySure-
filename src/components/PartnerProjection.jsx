import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, FileText, Users, Shield, Mail } from 'lucide-react';
import ImageWithLoader from './ImageWithLoader';

const PartnerProjection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const features = [
    'Detailed loss information',
    'Risk resource centre',
    'Adjustment manager portal'
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
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <div ref={containerRef} className="py-16 lg:py-24 bg-[#F8F7F3] my-20 rounded-2xl">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight"
            >
              Partner in projection
            </motion.h1>
            
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              As an insurance agent provides a number of benefits, including increased earning potential, flexibility, access to a wider range of insurance products, and opportunities for growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg"
              >
                Start free trial
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg"
              >
                Login
              </motion.button>
            </motion.div>

            {/* Features Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
              >
                Doing more for you and your clients
              </motion.h3>
              
              {/* Features List */}
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-full text-sm lg:text-base"
                  >
                    <span>{feature}</span>
                    {index < features.length - 1 && (
                      <div className="w-1 h-1 bg-gray-400 rounded-full ml-2" />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Signup Form */}
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 relative"
                >
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail id"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 text-gray-900 placeholder-gray-500"
                    required
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitted}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  {isSubmitted ? 'Submitted!' : 'Submit'}
                </motion.button>
              </motion.form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm"
                >
                  Thank you for your interest! We'll be in touch soon.
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Overlay */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithLoader
                src="../assets/man-with-face-mask-looking-away.jpg"
                alt="Professional insurance agent working on tablet"
                className="w-full h-[600px] object-cover"
                containerClassName="relative"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating Icon Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="absolute bottom-8 left-8 bg-yellow-400 rounded-2xl p-6 shadow-xl"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  {/* Plus Icon */}
                  <Plus className="w-8 h-8 text-black absolute -top-2 -left-2" />
                  
                  {/* Main Icon - Document/Clipboard */}
                  <motion.div
                    animate={{
                      y: [0, -3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 bg-black rounded-lg flex items-center justify-center"
                  >
                    <FileText className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  
                  {/* Decorative Dots */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-black rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute top-2 -right-3 w-2 h-2 bg-black rounded-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-60"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-12 -left-12 w-40 h-40 bg-gray-200 rounded-full blur-2xl opacity-40"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerProjection;