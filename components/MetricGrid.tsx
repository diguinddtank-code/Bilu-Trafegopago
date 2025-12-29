import React from 'react';
import { CyberCard } from './CyberCard';
import { REPORT_CONFIG } from '../constants';
import CountUp from 'react-countup';

export const MetricGrid: React.FC = () => {
  const { metrics } = REPORT_CONFIG;

  const items = [
    {
      id: 1,
      label: "Investimento",
      value: metrics.investment,
      prefix: "$ ", // Changed to Dollar
      icon: "fa-solid fa-coins", 
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      desc: "Orçamento utilizado"
    },
    {
      id: 2,
      label: "Custo por Conversa",
      value: metrics.costPerConversation,
      prefix: "$ ", // Changed to Dollar
      icon: "fa-solid fa-tags", 
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      desc: "Eficiência do lead"
    },
    {
      id: 3,
      label: "Impressões",
      value: metrics.impressions,
      icon: "fa-solid fa-eye",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      desc: "Alcance dos anúncios"
    }
  ];

  return (
    <div className="space-y-4 mb-8">
      {items.map((item, idx) => (
        <CyberCard key={item.id} delay={0.2 + (idx * 0.1)} className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
              <i className={`${item.icon} ${item.color} text-lg`}></i>
            </div>
            <div>
              <p className="text-app-muted text-xs font-medium uppercase tracking-wider">{item.label}</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                {item.prefix && <span className="text-app-muted text-lg font-normal mr-1">{item.prefix}</span>}
                <CountUp 
                  end={item.value} 
                  decimals={item.value % 1 !== 0 ? 2 : 0} 
                  duration={2} 
                  separator="."
                  decimal=","
                />
              </h3>
            </div>
          </div>
          <div className="text-right">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <i className="fa-solid fa-chevron-right text-white/20 text-xs"></i>
             </div>
          </div>
        </CyberCard>
      ))}
    </div>
  );
};