import React from 'react';
import { motion } from 'framer-motion';
import { REPORT_CONFIG } from '../constants';

export const ExpertAnalysis: React.FC = () => {
  const { managerMessage } = REPORT_CONFIG;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-8"
    >
      <div className="relative overflow-hidden bg-app-surface/40 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl">
        
        {/* Decorative background sheen */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl pointer-events-none"></div>

        <div className="flex items-start gap-4 relative z-10">
          
          {/* Avatar with Gradient Ring & Glow */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-app-primary via-white/50 to-app-accent shadow-[0_0_15px_rgba(59,130,246,0.3)]">
               <div className="w-full h-full rounded-full bg-[#18181b] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-app-primary/20 to-transparent"></div>
                  <i className="fa-solid fa-user-tie text-white text-lg relative z-10"></i>
               </div>
            </div>
            {/* Online Status Dot */}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#18181b] rounded-full shadow-sm"></div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                {/* Gradient Name */}
                <h4 className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  {managerMessage.author}
                </h4>
                <p className="text-[10px] text-app-primary font-medium tracking-widest uppercase mt-0.5">
                  Performance Strategist
                </p>
              </div>
              
              {/* Glass Pill Timestamp */}
              <span className="text-[10px] font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                {managerMessage.time}
              </span>
            </div>

            {/* Message Body */}
            <div className="relative pl-1">
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {managerMessage.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};