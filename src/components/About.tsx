import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Cctv, Award, MapPin, Phone, Star, Zap, Target, Eye, UserCheck, Handshake, Lightbulb, ShieldCheck, Plus, CheckCircle, Clock, Globe } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, teal 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-cyan-500/20 rounded-full px-6 py-3 mb-6 border border-cyan-500/30">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">SECURITY PROTECTION</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">US</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Quick Response Force (QRF) specializes in innovative and rapid security solutions in Papua New Guinea, 
              delivering cutting-edge emergency response and asset protection services.
            </p>
          </div>

          {/* Trusted Partners Section */}
          <div className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-wider">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[
                  { name: "Vodafone PNG", subtitle: "Telecommunications Partner" },
                  { name: "G4S", subtitle: "Control Room Built" },
                  { name: "Government PNG", subtitle: "Security Services" },
                  { name: "Mining Sector", subtitle: "Asset Protection" }
                ].map((partner, index) => (
                  <div key={index} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80">
                    <div className="text-white font-bold text-lg mb-1">{partner.name}</div>
                    <div className="text-gray-400 text-sm">{partner.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Side - Mission & Vision Cards */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-20'
            }`}>
              {/* Mission Card */}
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between hover:bg-slate-800/70 transition-all duration-300"
                    onClick={() => toggleCard('mission')}
                  >
                    <h3 className="text-2xl font-bold text-white">OUR MISSION</h3>
                    <Plus className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                      expandedCard === 'mission' ? 'rotate-45' : ''
                    }`} />
                  </div>
                  {expandedCard === 'mission' && (
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-fade-in">
                      To enhance resilience and safety through quick response services, providing innovative security solutions 
                      that protect our clients' assets and ensure rapid emergency response across Papua New Guinea. We deliver 
                      comprehensive security management, emergency response coordination, and advanced communication systems.
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between hover:bg-slate-800/70 transition-all duration-300"
                    onClick={() => toggleCard('vision')}
                  >
                    <h3 className="text-2xl font-bold text-white">OUR VISION</h3>
                    <Plus className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                      expandedCard === 'vision' ? 'rotate-45' : ''
                    }`} />
                  </div>
                  {expandedCard === 'vision' && (
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-fade-in">
                      To become a global standard-bearer in emergency response services, setting the benchmark for security 
                      excellence and innovative solutions in the Asia-Pacific region and beyond. We envision a future where 
                      advanced security technology and rapid response capabilities protect communities and businesses worldwide.
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Experience Highlight */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-3xl font-black text-white">20+</div>
                    <div className="text-gray-300 text-sm">Years of Excellence</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Two decades of proven leadership in Security Management, Emergency Response, and Two-way Radio Communications throughout Papua New Guinea.
                </p>
              </div>
            </div>

            {/* Right Side - Professional Image */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
            }`}>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="QRF Security Professional"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-lg font-bold text-white">PNG Wide</div>
                      <div className="text-sm text-gray-400">Coverage</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-lg font-bold text-white">24/7</div>
                      <div className="text-sm text-gray-400">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-white mb-4">WHY CHOOSE US</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our comprehensive security solutions combine cutting-edge technology, expert personnel, and proven methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "TRUSTED SECURITY",
                  description: "Two decades of proven expertise in security management, emergency response, and asset protection across Papua New Guinea.",
                  features: ["Armed Protection", "VIP Security", "Asset Protection"]
                },
                {
                  icon: Clock,
                  title: "24/7 MONITORING",
                  description: "Round-the-clock surveillance and rapid response capabilities with dedicated personnel and advanced communication systems.",
                  features: ["Control Room Operations", "Real-time Monitoring", "Instant Response"]
                },
                {
                  icon: Shield,
                  title: "FULL PROTECTION",
                  description: "Comprehensive security solutions including emergency response, radio communications, and specialized tactical operations.",
                  features: ["Emergency Response", "Radio Systems", "Tactical Operations"]
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
