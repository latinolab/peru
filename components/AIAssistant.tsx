import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Riosoft. ¿Te interesa saber cómo funciona nuestro software sin internet y de pago único?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, input);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col border border-slate-200 ${isOpen ? 'scale-100 opacity-100 h-[500px]' : 'scale-0 opacity-0 h-0'}`}
      >
        {/* Header */}
        <div className="bg-teal-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Ventas Riosoft Perú</h3>
              <p className="text-xs text-teal-100 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                En línea (Gemini AI)
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-slate-50 no-scrollbar">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                  <Loader2 size={16} className="animate-spin text-teal-600" />
                  <span className="text-xs text-slate-400">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="flex items-center bg-slate-100 rounded-full px-4 py-2">
            <input
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400"
              placeholder="Pregunta precios, requisitos..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`ml-2 p-1.5 rounded-full transition-colors ${input.trim() ? 'text-teal-600 hover:bg-teal-100' : 'text-slate-400'}`}
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-1">
            <span className="text-[10px] text-slate-400">Powered by Google Gemini</span>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-90 opacity-0 pointer-events-none absolute' : 'rotate-0 opacity-100'}`}
      >
        <MessageSquare size={28} />
      </button>
    </div>
  );
};