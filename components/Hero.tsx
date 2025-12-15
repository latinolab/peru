import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop" 
          alt="Software de Laboratorio Clínico" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-teal-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-6 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-400 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              Versión 100% Peruana 🇵🇪
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            Control Interno Total para tu <span className="text-teal-400">Laboratorio Clínico</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
            Olvídate del Excel y las libretas. <strong>LATINOLAB 2025</strong> es el software de pago único que funciona sin internet. Ideal para emprendedores y laboratorios medianos.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8 text-slate-300 text-sm font-medium justify-center sm:justify-start">
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-400 mr-1"/> Sin pagos mensuales</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-400 mr-1"/> Sin Internet</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-400 mr-1"/> Soporte Garantizado</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#productos" 
              className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Ver Precio y Versión
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contacto" 
              className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border-2 border-slate-400 hover:bg-white/10 transition-all"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};