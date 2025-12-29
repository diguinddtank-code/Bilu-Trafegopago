import React from 'react';
import { CyberCard } from './CyberCard';
import { ACHIEVEMENTS_DATA, PLACEMENT_DATA } from '../constants';
import { motion } from 'framer-motion';

export const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8">
       {/* New Section: Gamified Achievements (Optimistic & Visual) */}
       <CyberCard title="Destaques de Mercado" icon="fa-solid fa-medal" className="pb-6">
          <div className="p-5 grid grid-cols-3 gap-3">
             {ACHIEVEMENTS_DATA.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1), type: "spring" }}
                  className={`
                    relative flex flex-col items-center justify-center p-3 rounded-xl border
                    ${item.bg} ${item.border} ${item.glow}
                    group hover:scale-105 transition-transform duration-300
                  `}
                >
                   {/* Shine effect on hover */}
                   <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                   
                   <div className={`text-2xl mb-2 ${item.color} drop-shadow-md`}>
                      <i className={item.icon}></i>
                   </div>
                   <span className="text-[10px] text-center font-semibold text-white/90 leading-tight">
                      {item.title}
                   </span>
                   
                   {/* Checkmark badge */}
                   <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-black shadow-sm">
                      <i className="fa-solid fa-check text-[8px] text-black font-bold"></i>
                   </div>
                </motion.div>
             ))}
          </div>
          
          <div className="px-6 text-center">
            <p className="text-xs text-app-muted italic">
              "Seus anúncios superaram a média do setor em atratividade e custo."
            </p>
          </div>
       </CyberCard>

       {/* Top Placements - Kept as is */}
       <CyberCard title="Canais Vencedores" icon="fa-solid fa-layer-group" className="p-0 pb-5">
          <div className="px-5 space-y-5 mt-4">
            {PLACEMENT_DATA.map((item, idx) => (
               <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center gap-2">
                       <i className="fa-solid fa-circle text-[6px]" style={{ color: item.color }}></i>
                       <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white font-bold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: item.color 
                      }}
                    ></div>
                  </div>
               </div>
            ))}
          </div>
       </CyberCard>
    </div>
  );
};