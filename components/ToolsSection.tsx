import React from 'react';
import { SquareUser, GraduationCap, FileCheck, Award, ArrowRight, Zap } from 'lucide-react';
import { Tool } from '../types';

const tools: Tool[] = [
  {
    id: 'student-id',
    title: 'Student ID Generator',
    description: 'Create professional student ID cards with custom photo, institution logo, and personal details.',
    icon: SquareUser,
    link: 'student-id.html',
    colorClass: 'text-cyan-400 group-hover:text-cyan-300'
  },
  {
    id: 'college-id',
    title: 'College ID Generator',
    description: 'Design robust college-style identity cards for university students and faculty members.',
    icon: GraduationCap,
    link: 'college-id.html',
    colorClass: 'text-fuchsia-400 group-hover:text-fuchsia-300'
  },
  {
    id: 'admit-card',
    title: 'Admit Card Generator',
    description: 'Generate official exam admit cards complete with exam centers, timings, and roll numbers.',
    icon: FileCheck,
    link: 'admit-card.html',
    colorClass: 'text-blue-400 group-hover:text-blue-300'
  },
  {
    id: 'bonafide',
    title: 'Bonafide Certificate',
    description: 'Create authentic bonafide certificates with customizable institution text and signature areas.',
    icon: Award,
    link: 'bonafide.html',
    colorClass: 'text-pink-400 group-hover:text-pink-300'
  }
];

const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-tech tracking-wide">
            AVAILABLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">MODULES</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-600 mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(192,38,211,0.5)]"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Select a protocol below to initiate the generation sequence. 
            <span className="block text-sm mt-3 text-cyan-500/60 font-mono">
              [SYSTEM STATUS: ONLINE]
            </span>
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <a 
              key={tool.id} 
              href={tool.link}
              className="group relative glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="text-slate-400 group-hover:text-fuchsia-400 w-5 h-5 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-slate-900 border border-white/10 ${tool.colorClass} shadow-lg transition-transform group-hover:scale-110 duration-300 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                  <tool.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors font-tech uppercase tracking-wide">
                    {tool.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">
                    <Zap className="w-3 h-3 mr-1" />
                    Initialize Tool
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Bottom Border Gradient Animation */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ToolsSection;