import React from 'react';
import { motion } from 'framer-motion';

export const PaymentStatus: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
      className="mb-8"
    >
      <div className="group relative overflow-hidden rounded-xl border border-amber-500/10 bg-amber-900/5 px-4 py-3 hover:bg-amber-900/10 transition-colors duration-300">
        
        {/* Subtle accent line on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber-500/30"></div>

        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            {/* Icon Box */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
              <i className="fa-solid fa-receipt text-xs"></i>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-300">Fatura Mensal</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wide">Ref: Dezembro</span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/10 px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-500">
              Pendente
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};