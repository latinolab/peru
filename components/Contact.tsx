import React from 'react';
import { Mail, Phone, MapPin, CreditCard, DollarSign } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">¿Listo para comenzar?</h2>
          <p className="mt-4 text-slate-400">Contáctanos hoy mismo y da el primer paso hacia una gestión más eficiente.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Datos de Contacto</h3>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-teal-600/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">WhatsApp Oficial</p>
                  <a href="https://wa.me/51933126365" className="text-xl font-bold hover:text-teal-400 transition-colors">+51 933 126 365</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal-600/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                   <p className="text-xs text-slate-400 uppercase tracking-wide">Correo Electrónico</p>
                  <p className="text-lg font-medium">riosoftperu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-teal-600/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                   <p className="text-xs text-slate-400 uppercase tracking-wide">Ubicación</p>
                  <p className="text-lg font-medium">Lima, Perú (Atención a toda Latam)</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-700">
               <h4 className="font-bold mb-4 flex items-center"><DollarSign className="w-5 h-5 mr-2 text-teal-400"/> Medios de Pago Disponibles</h4>
               <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <ul className="space-y-1">
                    <li className="font-bold text-white mb-2">Perú:</li>
                    <li>• BCP / BBVA / Interbank</li>
                    <li>• Yape / Plin</li>
                  </ul>
                  <ul className="space-y-1">
                    <li className="font-bold text-white mb-2">Extranjero:</li>
                    <li>• PayPal</li>
                    <li>• Western Union</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Buying Process */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Proceso de Compra</h3>
            
            <div className="relative border-l-2 border-teal-200 ml-3 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></div>
                <h4 className="font-bold text-lg">1. Solicita Cotización</h4>
                <p className="text-slate-600 text-sm">Escríbenos al WhatsApp para recibir la proforma y cuentas bancarias.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></div>
                <h4 className="font-bold text-lg">2. Abono del 50%</h4>
                <p className="text-slate-600 text-sm">Realiza el pago inicial y envíanos tu logotipo para personalizar el sistema.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></div>
                <h4 className="font-bold text-lg">3. Instalación Remota</h4>
                <p className="text-slate-600 text-sm">Nos conectamos vía AnyDesk/RustDesk para instalar y configurar todo en tu PC.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-2 border-white"></div>
                <h4 className="font-bold text-lg">4. Capacitación y Pago Final</h4>
                <p className="text-slate-600 text-sm">Te enseñamos a usarlo (2 sesiones). El 50% restante se paga al finalizar.</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/51933126365"
                target="_blank"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-center transition-colors shadow-lg"
              >
                Iniciar Compra por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};