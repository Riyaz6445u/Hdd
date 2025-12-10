import React, { useState } from 'react';
import { IdCard, Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'TOOLS', href: '#tools' },
    { label: 'ABOUT', href: '#' },
    { label: 'ACCESS', href: '#' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-slate-900 p-2 rounded-lg border border-white/10">
                <Cpu className="h-6 w-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors" />
              </div>
            </div>
            <div className="ml-3 flex flex-col">
              <span className="font-bold text-2xl text-white tracking-wider font-tech bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ID_FORGE</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/80 group-hover:text-fuchsia-500/80 transition-colors">System 2067</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-semibold tracking-widest text-slate-300 hover:text-white transition-colors duration-200 font-tech relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full box-shadow-glow"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 shadow-2xl absolute w-full backdrop-blur-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-bold tracking-wider text-slate-200 hover:text-white hover:bg-white/5 font-tech border-l-2 border-transparent hover:border-fuchsia-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;