import React, { useState, useEffect } from 'react';
import { REPORT_CONFIG } from './constants';
import { HeroMetric } from './components/HeroMetric';
import { MetricGrid } from './components/MetricGrid';
import { ExpertAnalysis } from './components/ExpertAnalysis';
import { ChartsSection } from './components/ChartsSection';
import { AiAutomationCard } from './components/AiAutomationCard';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        // Green Grass Texture: Vertical stripes (mowed lawn effect) + Vignette for depth
        background: `
          radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%),
          repeating-linear-gradient(
            90deg,
            #15803d 0px,
            #15803d 40px,
            #166534 40px,
            #166534 80px
          )
        `
      }}
    >
      {/* BACKGROUND: Tactical Football Field Lines (Chalk style) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <motion.div
           initial={{ scale: 1.5, opacity: 0, rotateX: 20 }}
           animate={{ scale: 1, opacity: 1, rotateX: 0 }}
           transition={{ duration: 3, ease: "easeOut" }}
           className="relative w-[150vw] h-[100vh] md:w-[1200px] md:h-[800px] border-2 border-white/50 rounded-3xl"
        >
           {/* Center Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/50 -translate-x-1/2"></div>
           
           {/* Center Circle */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/50 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
           </div>

           {/* Left Box (Penalty Area) */}
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-96 border-r-2 border-y-2 border-white/50 rounded-r-xl"></div>
           
           {/* Right Box (Penalty Area) */}
           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-96 border-l-2 border-y-2 border-white/50 rounded-l-xl"></div>
           
           {/* Corner Arcs */}
           <div className="absolute top-0 left-0 w-12 h-12 border-r-2 border-b-2 border-white/50 rounded-br-full"></div>
           <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-white/50 rounded-bl-full"></div>
           <div className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-white/50 rounded-tr-full"></div>
           <div className="absolute bottom-0 right-0 w-12 h-12 border-l-2 border-t-2 border-white/50 rounded-tl-full"></div>

           {/* Texture Overlay for noise/grit */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* White Glow Effect behind logo to separate from green */}
          <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full"></div>
          
          {/* Logo Animation */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-32 h-32 mb-8"
          >
            <img 
              src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
              alt="Loading Logo" 
              className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>

        {/* Loading Bar Container */}
        <div className="w-64 h-1.5 bg-black/30 rounded-full overflow-hidden mb-4 relative backdrop-blur-sm">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* Loading Text */}
        <motion.div className="flex flex-col items-center">
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-bold tracking-[0.2em] text-xs uppercase drop-shadow-md"
           >
              Carregando Performance
           </motion.p>
           <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[10px] text-white/80 mt-2 font-medium"
           >
              Sincronizando dados de Dezembro...
           </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increased slightly to show off the field animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-app-bg text-app-text font-sans antialiased overflow-hidden selection:bg-app-accent selection:text-white">
      
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader-component" />
        ) : (
          <motion.div
            key="dashboard-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col relative"
          >
            {/* Top Status Bar Decoration */}
            <div className="h-1 w-full bg-premium-gradient sticky top-0 z-50"></div>

            {/* Main Container - Mobile Width Constrained with Entrance Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-md mx-auto min-h-screen flex flex-col relative px-5 pt-8 pb-6 w-full"
            >
              
              {/* Header */}
              <header className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-app-muted text-xs font-medium uppercase tracking-widest mb-1">Relatório Mensal</p>
                  <h2 className="text-xl font-bold text-white">{REPORT_CONFIG.clientName}</h2>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 backdrop-blur-sm shadow-inner"
                >
                  <img 
                    src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                    alt="Logo Cliente" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </motion.div>
              </header>

              {/* Content Scroll Area */}
              <main className="flex-1">
                <HeroMetric />
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="flex items-center justify-between mb-4 mt-2"
                >
                  <h3 className="text-sm font-semibold text-white">Detalhamento</h3>
                </motion.div>
                
                <MetricGrid />
                <ChartsSection />
                
                {/* NEW AI AUTOMATION CARD */}
                <AiAutomationCard />
                
                <ExpertAnalysis />
              </main>

              {/* Footer (Simplified - No CTA) */}
              <footer className="mt-auto pt-8 pb-4">
                <div className="flex flex-col items-center justify-center opacity-50">
                   <p className="text-[10px] text-app-muted uppercase tracking-[0.2em] mb-4">Premium Performance</p>
                   <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                </div>
              </footer>

            </motion.div>
            
            {/* Background Ambience (Animated) */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-lg h-[600px] bg-app-primary/15 rounded-full blur-[120px] pointer-events-none -z-10"
            ></motion.div>
            
             <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="fixed bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-app-accent/10 rounded-full blur-[100px] pointer-events-none -z-10"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;