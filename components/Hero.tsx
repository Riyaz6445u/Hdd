import React from 'react';
import { ChevronRight, ScanLine, Fingerprint, Activity, Wifi } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTools = () => {
    const element = document.getElementById('tools');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 pb-20 lg:pt-32 lg:pb-40">
      {/* Texture Backgrounds */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Radial Gradient Glows - Pink & Blue */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_10px_rgba(232,121,249,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
              </span>
              System Online v4.0
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 font-tech">
              NEXT GEN <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                IDENTITY PROTOCOLS
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-fuchsia-500/50 pl-6 bg-gradient-to-r from-fuchsia-500/5 to-transparent">
              Generate holographic-ready student identification credentials. 
              Secure, instant, and fully compliant with 2067 academic standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={scrollToTools}
                className="group relative px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                Access Tools
              </button>
              
              <a 
                href="student-id.html"
                className="group px-8 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 hover:text-white hover:border-cyan-400 font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                Create ID
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Mock Illustration - Holographic Card */}
          <div className="flex justify-center lg:justify-end perspective-1000">
            <div className="relative group w-80 sm:w-96 aspect-[1.58/1] transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d">
              
              {/* Card Container */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Glowing Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"></div>

                {/* Card Content */}
                <div className="relative h-full w-full p-6 flex flex-col z-10">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                          <ScanLine className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[10px] text-fuchsia-400 tracking-[0.2em] uppercase">Institute</div>
                          <div className="text-white font-bold font-tech text-lg leading-none">NEO-TOKYO UNIV</div>
                        </div>
                     </div>
                     <Wifi className="text-cyan-500 w-5 h-5 animate-pulse" />
                  </div>

                  {/* Body */}
                  <div className="flex gap-4 flex-1">
                    {/* Photo Area */}
                    <div className="w-24 h-24 rounded-lg border border-fuchsia-500/30 bg-black/50 relative overflow-hidden flex items-center justify-center">
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent animate-pulse"></div>
                       <Fingerprint className="text-fuchsia-500/50 w-12 h-12" />
                    </div>

                    {/* Info Lines */}
                    <div className="flex-1 space-y-3">
                       <div>
                          <div className="text-[9px] text-slate-400 uppercase tracking-widest">Student Name</div>
                          <div className="text-white font-tech text-xl tracking-wide">ALEX_CIPHER</div>
                       </div>
                       <div className="flex gap-4">
                          <div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-widest">ID NO</div>
                            <div className="text-cyan-400 font-mono text-xs shadow-cyan-glow">882-X9-22</div>
                          </div>
                          <div>
                            <div className="text-[9px] text-slate-400 uppercase tracking-widest">Valid</div>
                            <div className="text-fuchsia-400 font-mono text-xs shadow-pink-glow">2070</div>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-3">
                    <div className="flex gap-1">
                       {[...Array(8)].map((_, i) => (
                         <div key={i} className={`w-1 h-3 ${i % 2 === 0 ? 'bg-cyan-500' : 'bg-fuchsia-500'}`}></div>
                       ))}
                    </div>
                    <Activity className="text-fuchsia-500 w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Holographic Projection Effect Behind */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;