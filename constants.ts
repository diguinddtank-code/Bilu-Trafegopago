// ---------------------------------------------------------
// CONFIGURATION AREA - MOBILE APP DATA
// ---------------------------------------------------------

export const REPORT_CONFIG = {
  clientName: "Bilu Soccer Academy",
  month: "DEZEMBRO 2025",
  platform: "Meta Ads",
  
  // As 4 Métricas Principais Solicitadas
  metrics: {
    investment: 525.15,        // $ Investimento Total
    conversations: 106,         // Total Conversas WhatsApp
    costPerConversation: 4.95, // $ Custo por Conversa
    impressions: 24.870,        // Impressões
  },

  // Mensagem do Gestor (Estilo notificação)
  managerMessage: {
    author: "Seu Gestor",
    text: "A partir de 2026 esse será o canal onde os clientes poderão ver relatório de desempenho das campanhas. Feliz ano novo para todos",
    time: "Há 2 horas"
  }
};

// NOVO: Conquistas (Focadas em Performance de Mercado)
export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "CTR Superior",
    icon: "fa-solid fa-arrow-trend-up",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "shadow-[0_0_15px_rgba(52,211,153,0.2)]"
  },
  {
    id: 2,
    title: "Custo Otimizado",
    icon: "fa-solid fa-hand-holding-dollar",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "shadow-[0_0_15px_rgba(96,165,250,0.2)]"
  },
  {
    id: 3,
    title: "Alta Relevância",
    icon: "fa-solid fa-bullseye",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "shadow-[0_0_15px_rgba(192,132,252,0.2)]"
  }
];

export const PLACEMENT_DATA = [
  { name: 'FACEBOOK', value: 89, color: '#00ff88' },
  { name: 'INSTAGRAM', value: 17, color: '#00d1ff' },

];