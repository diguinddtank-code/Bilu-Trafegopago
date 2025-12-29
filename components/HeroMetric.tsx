import React from 'react';
import { motion } from 'framer-motion';
import { REPORT_CONFIG } from '../constants';
import CountUp from 'react-countup';

export const HeroMetric: React.FC = () => {
  const { metrics, month } = REPORT_CONFIG;

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-6 relative group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-premium-gradient rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-[#1c1c22] to-[#121215] rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-app-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-app-accent/10 rounded-full blur-xl"></div>

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
            <i className="fa-brands fa-whatsapp text-green-400 text-sm"></i>
            <span className="text-xs font-medium text-green-400 uppercase tracking-wide">Conversas</span>
          </div>
          <span className="text-app-muted text-xs font-medium">{month}</span>
        </div>

        <div className="relative z-10 mb-8">
          <div className="flex items-baseline gap-1">
            <h1 className="text-6xl font-bold text-white tracking-tight">
               <CountUp end={metrics.conversations} duration={2} />
            </h1>
            <span className="text-xl text-app-muted font-light">leads</span>
          </div>
          <p className="text-app-muted text-sm mt-2 font-medium">
            Total de conversas iniciadas
          </p>
        </div>

        {/* New Visual Section: Campaign Status & Quality */}
        <div className="relative z-10 grid grid-cols-2 gap-3">
          
          {/* Status Badge */}
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </div>
             <i className="fa-solid fa-bolt text-yellow-400 mb-2"></i>
             <span className="text-xs font-semibold text-white">Ativa</span>
             <span className="text-[10px] text-app-muted uppercase tracking-wider mt-1">Status</span>
          </div>

          {/* Quality Badge */}
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
             <i className="fa-solid fa-ranking-star text-app-primary mb-2"></i>
             <span className="text-xs font-semibold text-white">Excelente</span>
             <span className="text-[10px] text-app-muted uppercase tracking-wider mt-1">Qualidade</span>
          </div>

        </div>

      </div>
    </motion.div>
  );
};