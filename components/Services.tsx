import React from 'react';
import { WifiOff, CreditCard, Users, FileText, Settings, ShieldCheck, PieChart, Database } from 'lucide-react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    title: 'Pago Único',
    description: 'Sin costos adicionales, ni mensualidades, ni membresías. Compras la licencia y es tuya de por vida para tu computadora.',
    icon: <CreditCard className="h-8 w-8 text-white" />,
  },
  {
    title: 'Funciona Sin Internet',
    description: 'Trabaja sin interrupciones donde sea. Independencia total de la conexión a la red para tu operación diaria.',
    icon: <WifiOff className="h-8 w-8 text-white" />,
  },
  {
    title: 'Gestión Integral',
    description: 'Registro de pacientes, control de médicos y comisiones, caja diaria, arqueos y control de inventario de reactivos.',
    icon: <Settings className="h-8 w-8 text-white" />,
  },
  {
    title: 'Resultados Profesionales',
    description: 'Formatos A4, A5 o Ticket. Envía reportes PDF por correo o WhatsApp. Personalizamos con tu logotipo.',
    icon: <FileText className="h-8 w-8 text-white" />,
  },
];

const SECONDARY_FEATURES = [
  { icon: <Users size={20} />, text: "Usuarios Ilimitados con Roles" },
  { icon: <Database size={20} />, text: "Copias de Seguridad (Local/Nube)" },
  { icon: <ShieldCheck size={20} />, text: "Base de Datos de Pacientes y Médicos" },
  { icon: <PieChart size={20} />, text: "Control de Caja y Gastos" },
]

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Ventajas del Sistema</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Optimiza tu Laboratorio
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Imagina una herramienta informática versátil que se convierte en el corazón de tu operación diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="relative group bg-slate-50 p-6 rounded-2xl hover:bg-teal-600 transition-colors duration-300 hover:-translate-y-2 hover:shadow-xl border border-slate-100"
            >
              <div className="absolute -top-6 left-6 bg-teal-600 group-hover:bg-white p-4 rounded-xl shadow-lg transition-colors duration-300">
                <div className="group-hover:text-teal-600 transition-colors duration-300">
                   <span className="text-white group-hover:text-teal-600">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "h-8 w-8 text-white group-hover:text-teal-600" })}
                   </span>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-500 group-hover:text-teal-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Features Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
           <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Más funcionalidades incluidas</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SECONDARY_FEATURES.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-teal-500">{item.icon}</div>
                  <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};