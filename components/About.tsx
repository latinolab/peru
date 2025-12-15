import React from 'react';
import { Globe, Shield, Smile } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
             <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
                Sobre RIOSOFTPERU
             </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Empoderando a los Laboratorios de Latinoamérica
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Bienvenidos a <strong>LATINOLAB 2025</strong>. Nuestro sistema está diseñado para transformar la forma en que los laboratorios pequeños y medianos trabajan.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ayudamos a emprendedores listos para abrir su negocio con éxito. Organizamos y controlamos tu laboratorio para que mantengas todo en orden y mejores tu eficiencia con facilidad.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Presencia Internacional</h4>
                  <p className="text-sm text-slate-500">Clientes en Perú y toda Latinoamérica.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Seguridad y Confianza</h4>
                  <p className="text-sm text-slate-500">Respaldo ante inconvenientes. Nunca estarás solo.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-lg mr-4">
                  <Smile className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Capacitación Incluida</h4>
                  <p className="text-sm text-slate-500">Te enseñamos a usar el sistema paso a paso.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-slate-200 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img 
              className="relative rounded-2xl shadow-xl w-full object-cover border-4 border-white"
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop" 
              alt="Equipo de Soporte Riosoft" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-teal-500 max-w-xs">
              <p className="text-sm font-bold text-slate-800">"El sistema se adapta perfectamente a cualquier país de Latinoamérica."</p>
              <p className="text-xs text-slate-400 mt-2">- Cliente Satisfecho</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};