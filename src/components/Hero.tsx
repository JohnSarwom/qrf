
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 gradient-overlay"></div>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <Shield className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-semibold">Papua New Guinea's Premier Security Force</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Main Heading */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Quick Response</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                Force
              </span>
            </h1>
          </div>

          {/* Enhanced Subheading */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Leading security and emergency response firm with <span className="font-bold text-blue-300">20+ years</span> of expertise
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Specialized in rapid threat mitigation, asset protection, and advanced communication solutions across Papua New Guinea
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => scrollToSection('#services')}
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-counter' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-300 mb-2">20+</div>
              <div className="text-sm text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300 font-medium">Emergency Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-gray-300 font-medium">PNG Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">G4S</div>
              <div className="text-sm text-gray-300 font-medium">Control Room Built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors"
             onClick={() => scrollToSection('#about')}>
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
