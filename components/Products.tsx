import React from 'react';
import { Check, Info, Monitor } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-teal-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Elige la Mejor Versión</h2>
          <p className="mt-4 max-w-2xl mx-auto text-teal-100">
            Una inversión única para organizar tu negocio de por vida.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-teal-600 p-6 text-center text-white relative">
               <div className="absolute top-4 right-4 bg-yellow-400 text-teal-900 text-xs font-bold px-2 py-1 rounded-md uppercase">
                  Más Vendido
               </div>
               <h3 className="text-2xl font-bold">VERSIÓN PROFESIONAL</h3>
               <div className="mt-4 flex items-baseline justify-center">
                 <span className="text-5xl font-extrabold">S/ 899</span>
                 <span className="text-teal-100 ml-1 text-sm">/ pago único</span>
               </div>
               <p className="mt-2 text-teal-100 text-sm">Para control total de ventas y empleados</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "Licencia de por vida (Sin pagos mensuales)",
                  "Instalación remota incluida",
                  "2 Capacitaciones personalizadas",
                  "Gestión de Pacientes y Médicos",
                  "Control de Inventario y Stock",
                  "Usuarios Ilimitados con roles",
                  "Backup en Google Drive / Yahoo"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
                 <h4 className="flex items-center text-slate-800 font-bold mb-2">
                    <Monitor className="w-4 h-4 mr-2" /> Requisitos del PC:
                 </h4>
                 <p className="text-xs text-slate-500">Windows 10 o 11, mínimo 8GB de RAM. PC de escritorio o Laptop.</p>
              </div>

              <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex items-start">
                <Info className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-800">
                  <strong>Importante:</strong> Sistema de registro manual. No se conecta a equipos automatizados ni directo a SUNAT (emite tickets internos).
                </p>
              </div>

              <a href="https://wa.me/51933126365?text=Hola,%20me%20interesa%20la%20Versión%20Profesional%20del%20sistema" 
                 target="_blank"
                 className="mt-8 block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg">
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};