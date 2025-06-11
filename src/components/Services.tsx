
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Bell, Users, Car, Cctv, ArrowRight, Monitor, Zap } from 'lucide-react';
import { BentoGrid, BentoItem } from './BentoGrid';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bell,
      title: "Emergency Response Planning",
      description: "Comprehensive emergency strategies and rapid threat assessment protocols.",
      features: ["24/7 rapid threat assessment", "Crisis management protocols", "Multi-agency coordination", "Real-time incident tracking"],
      highlight: "Priority Service",
      color: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-500"
    },
    {
      icon: Car,
      title: "Stolen Vehicle Recovery (SVR)",
      description: "Rapid response to carjackings and vehicle theft with advanced tracking systems.",
      features: ["GPS tracking integration", "Quick recovery protocols", "Law enforcement coordination", "Insurance claim support"],
      highlight: "Proven Results",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Armed Escorts & Protection",
      description: "Elite CPOs for cash-in-transit, VIP security, and high-risk operations.",
      features: ["Certified protection officers", "Secure transport protocols", "Route risk assessment", "Counter-surveillance measures"],
      highlight: "Elite Standards",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: Users,
      title: "Logistical Support Services",
      description: "Strategic deployment of personnel, vehicles, and technology for crisis management.",
      features: ["Rapid resource deployment", "Emergency logistics coordination", "Technology integration", "Multi-site operations"],
      highlight: "Comprehensive",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Cctv,
      title: "Security Consultancy",
      description: "Expert risk assessment, crisis management, and emergency preparedness consulting.",
      features: ["Comprehensive security audits", "Threat risk analysis", "Emergency planning design", "Compliance assessments"],
      highlight: "Expert Analysis",
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-600"
    },
    {
      icon: Monitor,
      title: "Specialized Software Solutions",
      description: "Custom software development and implementation for security operations and management.",
      features: ["Security management systems", "Access control software", "Incident reporting platforms", "Real-time monitoring dashboards"],
      highlight: "Technology Focus",
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3 mb-6 glass">
              <Shield className="w-5 h-5 text-primary animate-glow" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Comprehensive Security Solutions</span>
              <Zap className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
              Tailored security solutions designed to meet the unique challenges of Papua New Guinea's 
              business environment with <span className="font-bold text-primary">proven expertise</span> and rapid response capabilities.
            </p>
          </div>

          {/* Enhanced Services Bento Grid */}
          <BentoGrid className="mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <BentoItem 
                  key={index}
                  span={index === 0 || index === 5 ? 'col-span-2' : 'col-span-1'}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? `animate-scale-in animate-stagger-${(index % 6) + 1}` : 'opacity-0 scale-95'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`h-full p-8 bg-gradient-to-br ${service.color} backdrop-blur-sm relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,currentColor_50%,transparent_65%)] bg-[length:20px_20px]"></div>
                    </div>

                    {/* Service Highlight Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="text-xs font-black text-primary bg-white/90 rounded-full px-3 py-2 shadow-lg">
                        {service.highlight}
                      </div>
                    </div>

                    {/* Icon with Enhanced Animation */}
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-12 shadow-2xl' : 'scale-100 rotate-0'
                    } bg-white/90 backdrop-blur-sm`}>
                      <IconComponent className={`w-10 h-10 ${service.iconColor} transition-all duration-300 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`} />
                    </div>

                    {/* Title with Gradient */}
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features with Enhanced Styling */}
                    <div className={`transition-all duration-500 ${
                      isHovered ? 'max-h-96 opacity-100' : 'max-h-32 opacity-80'
                    } mb-6`}>
                      <ul className="space-y-3">
                        {service.features.slice(0, isHovered ? service.features.length : 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start group">
                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm text-primary font-bold">
                        {isHovered ? 'Click to learn more' : 'Hover for details'}
                      </div>
                      <ArrowRight className={`w-5 h-5 text-primary transition-all duration-300 ${
                        isHovered ? 'translate-x-2 scale-110' : 'translate-x-0 scale-100'
                      }`} />
                    </div>
                  </div>
                </BentoItem>
              );
            })}
          </BentoGrid>

          {/* Enhanced Call to Action */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-6">Ready to Secure Your Operations?</h3>
                <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
                  Contact our expert team for a comprehensive security assessment and customized solution tailored to your needs.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-xl shadow-2xl hover-lift transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started Today
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
