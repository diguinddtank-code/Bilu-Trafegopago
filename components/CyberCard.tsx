import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  title?: string;
  icon?: string;
}

export const CyberCard: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  onClick,
  title,
  icon
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: [0.23, 1, 0.32, 1] }} // Bezier for elegant app feel
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-app-card border border-white/5 
        rounded-2xl shadow-lg 
        backdrop-blur-xl
        active:scale-[0.98] transition-transform duration-200
        ${className}
      `}
    >
      {/* Subtle shine effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Header if title/icon provided */}
      {(title || icon) && (
        <div className="flex items-center gap-3 p-4 border-b border-white/5 bg-white/5">
          {icon && <i className={`${icon} text-app-primary`}></i>}
          {title && <h3 className="text-white font-semibold text-sm tracking-wide">{title}</h3>}
        </div>
      )}
      
      {children}
    </motion.div>
  );
};