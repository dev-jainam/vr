import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to VR GLOBAL CONSULTANCY FZE. I am your executive advisor assistant. How can I assist with your UAE corporate accounting or strategic advisory queries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are 'VR Global Advisor', a sophisticated AI assistant for VR GLOBAL CONSULTANCY FZE, a premium Dubai-based accounting and business consultancy firm. Your tone is authoritative, minimal, and professional. You specialize in UAE Corporate Tax, VAT, IFRS Standards, and Statutory Audit. Avoid emojis. Suggest a private consultation for sensitive financial details. All answers should reflect the company's commitment to VR Institutional Blue and Institutional Excellence."
        }
      });
      
      const botText = response.text || "I apologize, but I am unable to process that request. Please contact our partners directly for immediate advisory.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Our digital advisor is currently under maintenance. Please contact our Dubai HQ for assistance." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-100 h-[500px]">
          <div className="bg-vr-navy p-5 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-vr-blue p-2.5 rounded-full shadow-lg shadow-vr-blue/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-sm font-bold luxury-font uppercase tracking-widest">VR Global Advisor</h3>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Strategic AI • Dubai</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-vr-navy text-white rounded-tr-none shadow-xl' 
                    : 'bg-white text-vr-navy shadow-sm border border-gray-100 rounded-tl-none font-light'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-vr-slate p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-1.5">
                  <span className="animate-bounce font-bold">.</span>
                  <span className="animate-bounce delay-100 font-bold">.</span>
                  <span className="animate-bounce delay-200 font-bold">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-5 border-t bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tax Strategy, Audit, UAE Corporate Tax..."
                className="w-full pl-5 pr-14 py-4 bg-gray-50 rounded-2xl text-[12px] font-medium focus:outline-none focus:ring-1 focus:ring-vr-blue/30 transition-all border border-gray-100"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 p-2.5 bg-vr-navy text-white rounded-xl hover:bg-vr-blue transition-colors"
              >
                <Send className="w-4 h-4 text-vr-blue" />
              </button>
            </div>
          </div>
        </div>
      ) : (
          <></>
        // <button
        //   onClick={() => setIsOpen(true)}
        //   className="bg-vr-navy text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform active:scale-95 flex items-center gap-3 border border-white/5"
        // >
        //   <MessageSquare className="w-5 h-5 text-vr-blue" />
        //   <span className="hidden sm:inline font-bold uppercase tracking-[0.4em] text-[10px]">Advisor</span>
        // </button>
      )}
    </div>
  );
};

export default Chatbot;