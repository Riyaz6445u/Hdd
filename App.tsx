import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsSection from './components/ToolsSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <Hero />
        <ToolsSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;