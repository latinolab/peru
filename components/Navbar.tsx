import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Ventajas', href: '#servicios' },
  { label: 'Precio', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-teal-600 p-2 rounded-lg text-white">
              <Laptop size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                RIOSOFT<span className="text-teal-500">PERU</span>
              </span>
              <span className={`text-xs font-semibold tracking-wider ${scrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                LATINOLAB 2025
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-semibold hover:text-teal-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-100 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/51933126365" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform transform hover:scale-105 shadow-lg"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/51933126365"
            target="_blank"
            className="block w-full text-center mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg font-bold"
          >
            Solicitar Demo en WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};