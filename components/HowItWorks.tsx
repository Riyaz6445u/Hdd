import React from 'react';
import { MousePointerClick, PenLine, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MousePointerClick,
      title: 'SELECT MODULE',
      description: 'Choose the appropriate generator from the toolset.',
      color: 'text-cyan-400',
      border: 'group-hover:border-cyan-500/50',
      bg: 'bg-cyan-500/5'
    },
    {
      icon: PenLine,
      title: 'INPUT DATA',
      description: 'Inject subject details into the secure form fields.',
      color: 'text-fuchsia-400',
      border: 'group-hover:border-fuchsia-500/50',
      bg: 'bg-fuchsia-500/5'
    },
    {
      icon: Download,
      title: 'EXPORT ASSET',
      description: 'Download the high-resolution credentials instantly.',
      color: 'text-blue-400',
      border: 'group-hover:border-blue-500/50',
      bg: 'bg-blue-500/5'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className={`relative z-10 w-24 h-24 bg-slate-950 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${step.border} transition-colors duration-300`}>
                <div className={`absolute inset-0 ${step.bg} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform`}></div>
                <step.icon className={`w-10 h-10 ${step.color}`} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 font-tech tracking-wider">{step.title}</h4>
              <p className="text-slate-300 max-w-xs text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;