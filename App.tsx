import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Tv, Film, PlayCircle, Smartphone, Wifi, CreditCard, CheckCircle, 
  MessageCircle, Star, ShieldCheck, Zap, Globe, Server, UserCheck, Users, BarChart, ChevronDown, ChevronUp, Send, ChevronLeft, ChevronRight
} from 'lucide-react';
import { 
  CONTACT_WHATSAPP_LINK, CONTACT_VIBER_LINK, CONTACT_TELEGRAM_LINK, NAV_LINKS, PRICING_PLANS, 
  TESTIMONIALS, FAQ_ITEMS 
} from './constants';
import Chatbot from './components/Chatbot';
import { FaqItem } from './types';

// Helper Component for FAQ Accordion
const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 font-bold text-lg flex justify-between items-center text-slate-800 focus:outline-none"
      >
        <span className="flex items-center gap-3">
          <span className="text-blue-500 min-w-[20px]"><MessageCircle size={20} /></span>
          {item.question}
        </span>
        <span className="text-slate-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pl-14 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-50 pt-4 animate-in slide-in-from-top-2">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  
  // Testimonial Carousel State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Precise sizing logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1); // Mobile
      } else if (width >= 768 && width < 1280) {
        setItemsPerPage(2); // Tablet/Laptop - WIDER CARDS
      } else {
        setItemsPerPage(3); // Large Desktop
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-800">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group block min-w-[150px]">
              {!logoError ? (
                <img 
                  src="logo.jpg" 
                  alt="BalkanTvGuru" 
                  className="h-14 w-auto object-contain hover:opacity-90 transition-opacity" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  BalkanTvGuru
                </span>
              )}
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href={CONTACT_WHATSAPP_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Naruči Odmah
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-slate-700 p-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={CONTACT_WHATSAPP_LINK}
              className="bg-blue-600 text-center text-white py-3 rounded-lg font-medium"
            >
              Naruči Odmah
            </a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 animate-fade-in-up">
              <Star size={16} className="fill-blue-700" />
              <span className="font-bold">28,000+</span> Zadovoljnih korisnika
            </div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
              Gledajte TV bilo gdje, <br/>
              <span className="text-blue-600">bez granica.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Preko 1500 kanala, videoteka sa <strong>1000+ serija</strong> (50,000+ epizoda) i 15,000+ filmova. 
              Stabilno, kvalitetno i povoljno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full md:w-auto pt-4">
              <a 
                href={CONTACT_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <PlayCircle size={20} />
                Besplatan Test (48h)
              </a>
              <a 
                href="#pricing"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:shadow-lg"
              >
                Pogledaj Pakete
              </a>
            </div>

            {/* Simplified Contact Section */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-slate-900 font-bold text-lg md:text-2xl text-center px-4">
                Kontakt WhatsApp/Viber na: <span className="text-blue-600">+387 65 238 217</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-12 pt-8 text-slate-500 text-sm md:text-base font-medium max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={20} className="text-green-500" /> Bez Ugovora
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={20} className="text-green-500" /> 24/7 Podrška
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={20} className="text-green-500" /> Vraćanje Unazad
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
      </section>

      {/* --- REQUIREMENTS & PROCESS --- */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Kako funkcioniše?</h2>
            <p className="text-slate-600">Sve što vam treba je stabilna internet konekcija (15 Mbps+) i pametni uređaj.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-200 -z-10"></div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative">
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-sm">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Kontakt</h3>
              <p className="text-slate-600">Javite nam se putem WhatsApp-a ili Vibera za aktivaciju besplatnog testa.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative">
              <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-blue-200 shadow-lg">
                <PlayCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Besplatan Test</h3>
              <p className="text-slate-600">Dobijate 48h besplatno da isprobate kompletan sadržaj i uvjerite se u kvalitet.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-sm">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Aktivacija</h3>
              <p className="text-slate-600">Nakon testa vršite uplatu na željeni period i uživate u neograničenom sadržaju.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Cjenovnik</h2>
            <p className="text-slate-600">Premium usluga po pristupačnim cijenama. Plaćanje je sigurno i jednostavno.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-3xl p-6 border flex flex-col justify-between ${
                  plan.isPopular 
                    ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-gradient-to-b from-white to-blue-50' 
                    : 'border-slate-200 shadow-lg'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    NAJISPLATIVIJE
                  </div>
                )}
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wider">{plan.duration}</h3>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="text-slate-400 line-through text-lg">€{plan.oldPrice}</span>
                      <span className="text-4xl font-extrabold text-slate-900">€{plan.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                        <span className={`text-sm ${feature.includes('GRATIS') ? 'font-bold text-blue-700' : ''}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={CONTACT_WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Odaberi Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (CAROUSEL) --- */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Zadovoljni Korisnici</h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Left Button */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-slate-600 hover:text-blue-600 hover:scale-110 transition-all border border-slate-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  // Precise logic: Move by (CurrentIndex * (100 / ItemsPerPage))
                  transform: `translateX(-${currentTestimonialIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                  {TESTIMONIALS.map((t) => (
                    <div 
                      key={t.id} 
                      className="px-4 box-border"
                      style={{ 
                        // Explicit width based on items per page
                        width: `${100 / itemsPerPage}%`, 
                        minWidth: `${100 / itemsPerPage}%`,
                        flexShrink: 0 
                      }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                          <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                  <div className="font-bold text-lg text-slate-900">{t.name}</div>
                                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wide">{t.location}</div>
                                </div>
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed italic whitespace-normal break-words">"{t.text}"</p>
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
            </div>

             {/* Right Button */}
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg text-slate-600 hover:text-blue-600 hover:scale-110 transition-all border border-slate-100"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentTestimonialIndex ? 'bg-blue-600 w-4' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- RESELLERS --- */}
      <section id="resellers" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 skew-x-12 translate-x-20 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                B2B PARTNERSTVO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Postani Reseller
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Pridružite se našem timu i zaradite prodajom najstabilnijeg IPTV servisa na tržištu. Nudimo kompletno rješenje za vaš biznis.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Pouzdan Panel</h4>
                    <p className="text-slate-600 text-sm">Jednostavan sistem za upravljanje korisnicima i kreiranje linija.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Podrška Admin Tima</h4>
                    <p className="text-slate-600 text-sm">Naš tim vam stoji na raspolaganju za sva tehnička pitanja i pomoć.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg h-fit text-blue-600">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Unlimited Opcija</h4>
                    <p className="text-slate-600 text-sm">Za iskusne resellere nudimo "Unlimited" panele po specijalnim uslovima.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <a 
                  href={CONTACT_WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg inline-flex items-center gap-2"
                >
                  Postani Partner
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex-1 bg-slate-100 rounded-3xl p-8 border border-slate-200">
              <div className="text-center space-y-4">
                 <h3 className="text-xl font-bold">Započni Biznis Danas</h3>
                 <p className="text-slate-600 text-sm">Bez velikih ulaganja. Visoka profitna marža.</p>
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-xs text-slate-500">Anonimnost</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">24h</div>
                      <div className="text-xs text-slate-500">Aktivacija</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">Najčešća pitanja</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <FaqAccordionItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-6">
                 <a href="#home">
                   {/* Fallback for footer logo as well */}
                   {!logoError ? (
                     <img 
                       src="logo.jpg" 
                       alt="BalkanTvGuru" 
                       className="h-10 w-auto hover:opacity-80 transition-opacity" 
                       onError={() => setLogoError(true)}
                     />
                   ) : (
                     <span className="text-xl font-bold text-white">BalkanTvGuru</span>
                   )}
                 </a>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                BalkanTvGuru je vodeći IPTV provajder u regiji. Nudimo stabilnost, kvalitet i podršku kojoj možete vjerovati.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Brzi Linkovi</h4>
              <ul className="space-y-3 text-sm">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                    <div className="bg-slate-800 p-2 rounded-lg"><MessageCircle size={18} /></div>
                    WhatsApp
                  </a>
                </li>
                <li>
                  {/* Updated to use the Business Link */}
                  <a href={CONTACT_VIBER_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                    <div className="bg-slate-800 p-2 rounded-lg"><Smartphone size={18} /></div>
                    Viber
                  </a>
                </li>
                <li>
                  <a href={CONTACT_TELEGRAM_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <div className="bg-slate-800 p-2 rounded-lg"><Send size={18} /></div>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Načini Plaćanja</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Bankovna kartica (Stripe)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> PayPal
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Crypto
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span> Western Union / Ria / MoneyGram
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Abon
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Xbon
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Kladionica
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>&copy; {new Date().getFullYear()} BalkanTvGuru. Sva prava zadržana.</div>
            <div className="flex gap-4">
               {/* Removed Privacy and Terms links as requested */}
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}