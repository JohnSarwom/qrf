
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Monitor, Zap, Eye } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Control Room Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-60"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.1)_25px,rgba(59,130,246,0.1)_26px,transparent_27px,transparent_49px),linear-gradient(transparent_24px,rgba(59,130,246,0.1)_25px,rgba(59,130,246,0.1)_26px,transparent_27px,transparent_49px)] bg-[length:50px_50px]"></div>
        </div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Radar Sweep Effect */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/30 rounded-full animate-ping" />
          <div className="absolute top-20 right-20 w-24 h-24 border border-cyan-400/50 rounded-full animate-pulse" />
          
          {/* Data Stream Lines */}
          <div className="absolute top-1/4 left-3/4 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-2/3 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Monitoring Icons */}
          <Monitor className="absolute top-32 right-32 w-6 h-6 text-cyan-400/60 animate-pulse" />
          <Eye className="absolute bottom-32 right-16 w-5 h-5 text-blue-400/60 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <Zap className="absolute top-1/2 right-40 w-4 h-4 text-cyan-400/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Main Content */}
          <div className="text-white space-y-8">
            {/* Enhanced Badge */}
            <div className={`inline-flex items-center space-x-3 bg-slate-800/60 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 transition-all duration-1000 ${isVisible ? 'animate-fade-in animate-stagger-1' : 'opacity-0 translate-y-10'}`}>
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-100">Papua New Guinea's Premier Security Force</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up animate-stagger-2' : 'opacity-0 translate-y-20'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                <span className="block text-white">Quick Response</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                  Force
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in animate-stagger-3' : 'opacity-0'}`}>
              <p className="text-lg sm:text-xl mb-4 text-gray-300 max-w-2xl leading-relaxed">
                Leading security and emergency response firm with <span className="font-bold text-cyan-400">20+ years</span> of expertise
              </p>
              <p className="text-base text-gray-400 mb-8 max-w-xl">
                Specialized in rapid threat mitigation, asset protection, and advanced communication solutions across Papua New Guinea
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'animate-scale-in animate-stagger-4' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-400/30 hover:scale-105" 
                onClick={() => scrollToSection('#services')}
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105" 
                onClick={() => scrollToSection('#contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in animate-stagger-5' : 'opacity-0 scale-95'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:bg-slate-800/60 hover:border-cyan-400/40 transition-all duration-500 group">
                <AnimatedCounter 
                  end={20} 
                  suffix="+" 
                  className="text-4xl font-black text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:bg-slate-800/60 hover:border-cyan-400/40 transition-all duration-500 group">
                <div className="text-4xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Emergency Response</div>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:bg-slate-800/60 hover:border-cyan-400/40 transition-all duration-500 group">
                <AnimatedCounter 
                  end={100} 
                  suffix="%" 
                  className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">PNG Owned</div>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:bg-slate-800/60 hover:border-cyan-400/40 transition-all duration-500 group">
                <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">Full</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Control Room Built</div>
              </div>
            </div>

            {/* Tech Status Indicators */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between bg-slate-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-300">System Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">OPERATIONAL</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-slate-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg px-4 py-3">
                <span className="text-sm text-gray-300">Response Time</span>
                <span className="text-xs text-cyan-400 font-medium">&lt; 5 MIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div 
          className="w-6 h-12 border-2 border-cyan-400/60 rounded-full flex justify-center cursor-pointer hover:border-cyan-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-slate-900/20" 
          onClick={() => scrollToSection('#about')}
        >
          <div className="w-1 h-3 bg-cyan-400/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
