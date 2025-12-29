import React from 'react';
import { CyberCard } from './CyberCard';
import { motion } from 'framer-motion';

export const AiAutomationCard: React.FC = () => {
  return (
    <CyberCard className="mb-8 border-purple-500/30 bg-gradient-to-br from-[#130f26] to-[#09090b]">
      {/* Background Tech Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none"></div>
      
      <div className="relative z-10 p-1">
        
        {/* Header with "Coming Soon" Badge */}
        <div className="flex justify-between items-start mb-6 px-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 p-[1px]">
               <div className="w-full h-full bg-[#130f26] rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-robot text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-lg"></i>
               </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">AI Agent Pro</h3>
              <p className="text-[10px] text-purple-300/70 uppercase tracking-widest">Automação de Agenda</p>
            </div>
          </div>
          
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-md">
            <i className="fa-solid fa-lock text-[10px] text-app-muted"></i>
            <span className="text-[10px] font-semibold text-white tracking-wide uppercase">Em Breve</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-4 pb-4">
           
           {/* The "Locked" Metric */}
           <div className="relative p-5 rounded-xl border border-dashed border-purple-500/20 bg-purple-500/5 flex flex-col items-center justify-center text-center overflow-hidden group">
              
              {/* Scanline Animation */}
              <motion.div 
                animate={{ top: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20"
              />

              <div className="relative z-10 opacity-50 blur-[2px] group-hover:blur-0 transition-all duration-500">
                 <h2 className="text-4xl font-bold text-white mb-1">100%</h2>
                 <p className="text-xs text-gray-400">Agendamentos Automáticos</p>
              </div>
              
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                 <div className="bg-[#09090b]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-purple-500/30 shadow-xl">
                    <p className="text-xs text-purple-200 font-medium flex items-center gap-2">
                       <i className="fa-solid fa-hourglass-half animate-pulse"></i>
                       Treinando Modelo...
                    </p>
                 </div>
              </div>
           </div>

           {/* Value Proposition */}
           <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                 <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-gray-200">Zero interação humana:</strong> A IA qualifica, responde dúvidas e agenda a visita sozinha.
                 </p>
              </div>
              <div className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                 <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-gray-200">Economia de tempo:</strong> Foque em fechar matrículas enquanto o robô cuida do atendimento 24/7.
                 </p>
              </div>
           </div>

        </div>
      </div>
    </CyberCard>
  );
};