import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithLoader = ({ src, alt, className = "", containerClassName = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Loader */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 ${className}`}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          
          {/* Skeleton content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
              className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'linear',
                }}
                className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: isLoading ? 1.1 : 1, 
          opacity: isLoading ? 0 : 1 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Error state */}
      {hasError && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${className}`}
        >
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageWithLoader;