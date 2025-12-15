import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;