
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import FloatingElements from './FloatingElements';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 transition-transform duration-1000 parallax"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0 gradient-overlay gradient-mesh" />
        
        {/* Floating Elements */}
        <FloatingElements />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:40px_40px] animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Badge with Glass Effect */}
          <div className={`inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8 transition-all duration-1000 hover-glow ${isVisible ? 'animate-fade-in animate-stagger-1' : 'opacity-0 translate-y-10'}`}>
            <Shield className="w-5 h-5 text-blue-300 animate-glow" />
            <span className="text-sm font-semibold">Papua New Guinea's Premier Security Force</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>

          {/* Enhanced Main Heading with Staggered Animation */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="block animate-slide-in-left">Quick Response</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white animate-slide-in-right">
                Force
              </span>
            </h1>
          </div>

          {/* Enhanced Subheading with Typewriter Effect */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in animate-stagger-3' : 'opacity-0'}`}>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Leading security and emergency response firm with <span className="font-bold text-blue-300 animate-glow">20+ years</span> of expertise
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light">
              Specialized in rapid threat mitigation, asset protection, and advanced communication solutions across Papua New Guinea
            </p>
          </div>

          {/* Enhanced CTA Buttons with Hover Effects */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'animate-scale-in animate-stagger-4' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover-lift group" 
              onClick={() => scrollToSection('#services')}
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg glass backdrop-blur-sm transition-all duration-300 hover-lift" 
              onClick={() => scrollToSection('#contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Enhanced Stats with Animated Counters */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in animate-stagger-5' : 'opacity-0 scale-95'}`}>
            <div className="glass rounded-xl p-4 md:p-6 hover-lift hover-glow transition-all duration-500 group">
              <AnimatedCounter 
                end={20} 
                suffix="+" 
                className="text-3xl md:text-4xl font-black text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="glass rounded-xl p-4 md:p-6 hover-lift hover-glow transition-all duration-500 group">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Emergency Response</div>
            </div>
            <div className="glass rounded-xl p-4 md:p-6 hover-lift hover-glow transition-all duration-500 group">
              <AnimatedCounter 
                end={100} 
                suffix="%" 
                className="text-3xl md:text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">PNG Owned</div>
            </div>
            <div className="glass rounded-xl p-4 md:p-6 hover-lift hover-glow transition-all duration-500 group">
              <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">Full</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Control Room Built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div 
          className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-white hover:scale-110 transition-all duration-300 glass" 
          onClick={() => scrollToSection('#about')}
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
