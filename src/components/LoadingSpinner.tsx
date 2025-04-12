import React from 'react';
import { Car } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<Props> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`relative ${sizeClasses[size]} ${className}`}
      >
        <Car className={`text-primary ${sizeClasses[size]}`} />
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{
            scale: [1.2, 1.8, 1.2],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;