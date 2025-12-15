import React from 'react';
import { Facebook, Youtube, Video, Laptop } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
               <Laptop size={20} className="text-teal-600" />
               <span className="text-xl font-bold text-white">
                RIOSOFT<span className="text-teal-600">PERU</span>
               </span>
            </div>
            <p className="text-sm">Tu socio tecnológico para laboratorios clínicos.</p>
            <p className="text-xs mt-1 text-slate-600">© 2025 Todos los derechos reservados.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/riofriosoftperu" target="_blank" className="hover:text-white transition-colors flex flex-col items-center">
               <Facebook size={24} />
               <span className="text-[10px] mt-1">riofriosoftperu</span>
            </a>
            <a href="https://www.tiktok.com/@riosoftperu" target="_blank" className="hover:text-white transition-colors flex flex-col items-center">
               <Video size={24} />
               <span className="text-[10px] mt-1">riosoftperu</span>
            </a>
            <a href="https://www.youtube.com/@riofriosoftperu" target="_blank" className="hover:text-white transition-colors flex flex-col items-center">
               <Youtube size={24} />
               <span className="text-[10px] mt-1">riofriosoftperu</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};