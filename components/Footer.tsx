import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-8">
           <h3 className="text-2xl font-bold text-white mb-2 font-tech tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">ID_FORGE</h3>
           <p className="text-xs text-slate-400 tracking-[0.5em] uppercase">Secure Generation System</p>
        </div>

        <div className="flex space-x-8 mb-12">
          {['Privacy Protocol', 'Terms of Access', 'Signal Support'].map((item) => (
             <a key={item} href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors uppercase tracking-wider font-medium">
               {item}
             </a>
          ))}
        </div>

        <div className="text-center w-full pt-8 border-t border-white/5">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} STUDENT ID TOOLS. SYSTEM V.20.67
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;