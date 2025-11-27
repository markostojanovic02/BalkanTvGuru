import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const QUICK_QUESTIONS = [
  { label: '🚀 Besplatan Test', text: 'Mogu li dobiti besplatan test?' },
  { label: '💰 Cjenovnik', text: 'Koje su cijene paketa?' },
  { label: '📺 Popis Kanala', text: 'Koje kanale imate u ponudi?' },
  { label: '💳 Načini Plaćanja', text: 'Kako mogu platiti?' },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Pozdrav! Ja sam vaš IPTV asistent. Kako vam mogu pomoći oko BalkanTvGuru servisa?' }
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

  // Hide callout when chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowCallout(false);
    }
  }, [isOpen]);

  const handleSend = async (textOverride?: string) => {
    // Determine the text to send: either the override (from button click) or the input state
    const textToSend = typeof textOverride === 'string' ? textOverride : input;

    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const apiHistory = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await getChatResponse(userMessage.text, apiHistory);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Callout Bubble */}
      {!isOpen && showCallout && (
        <div className="mb-4 mr-2 bg-white text-slate-800 px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-blue-100 animate-bounce flex items-center gap-2 max-w-[200px]">
          <span className="text-xl">👋</span>
          <p className="text-sm font-bold">Trebaš pomoć?</p>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowCallout(false); }}
            className="ml-auto text-slate-400 hover:text-slate-600"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm border border-white/30">
                  <Bot size={22} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-blue-600"></div>
              </div>
              <div>
                <h3 className="font-bold text-base flex items-center gap-1">
                  Pitaj Gurua
                  <Sparkles size={14} className="text-yellow-300" />
                </h3>
                <span className="text-[11px] text-blue-100 opacity-90">Online • Odgovara odmah</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div key={index}>
                <div 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
                
                {/* Show Quick Questions ONLY after the FIRST bot message */}
                {index === 0 && msg.role === 'model' && messages.length === 1 && (
                  <div className="mt-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-bottom-2">
                    {QUICK_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(q.text)}
                        className="text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 p-3 rounded-xl transition-all hover:shadow-sm text-left active:scale-95"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2.5 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Napišite pitanje..."
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder-slate-400"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={`p-2 rounded-full transition-all ${
                  !input.trim() 
                    ? 'text-slate-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:scale-105'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400 font-medium">AI Podrška • BalkanTvGuru</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-700 to-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <X size={32} />
        ) : (
          <MessageCircle size={32} className="group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;