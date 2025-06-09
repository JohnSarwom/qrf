
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Bell, Users, Car, Cctv, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
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
      highlight: "Priority Service"
    },
    {
      icon: Car,
      title: "Stolen Vehicle Recovery (SVR)",
      description: "Rapid response to carjackings and vehicle theft with advanced tracking systems.",
      features: ["GPS tracking integration", "Quick recovery protocols", "Law enforcement coordination", "Insurance claim support"],
      highlight: "Proven Results"
    },
    {
      icon: Shield,
      title: "Armed Escorts & Protection",
      description: "Elite CPOs for cash-in-transit, VIP security, and high-risk operations.",
      features: ["Certified protection officers", "Secure transport protocols", "Route risk assessment", "Counter-surveillance measures"],
      highlight: "Elite Standards"
    },
    {
      icon: Users,
      title: "Logistical Support Services",
      description: "Strategic deployment of personnel, vehicles, and technology for crisis management.",
      features: ["Rapid resource deployment", "Emergency logistics coordination", "Technology integration", "Multi-site operations"],
      highlight: "Comprehensive"
    },
    {
      icon: Cctv,
      title: "Security Consultancy",
      description: "Expert risk assessment, crisis management, and emergency preparedness consulting.",
      features: ["Comprehensive security audits", "Threat risk analysis", "Emergency planning design", "Compliance assessments"],
      highlight: "Expert Analysis"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Comprehensive Security Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tailored security solutions designed to meet the unique challenges of Papua New Guinea's 
              business environment with proven expertise and rapid response capabilities.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-2xl transition-all duration-500 border-none shadow-lg cursor-pointer overflow-hidden
                    ${isExpanded ? 'shadow-2xl scale-105' : ''} 
                    ${isVisible ? `animate-slide-up` : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <CardContent className="p-8 relative">
                    {/* Service Highlight Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2 py-1">
                        {service.highlight}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-100'}`}>
                      <ul className={`space-y-3 ${isExpanded ? '' : 'overflow-hidden'}`}>
                        {service.features.slice(0, isExpanded ? service.features.length : 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expand Button */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-xs text-primary font-medium">
                        {isExpanded ? 'Less Details' : 'More Details'}
                      </div>
                      <ArrowRight className={`w-4 h-4 text-primary transition-transform duration-300 ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Need Immediate Security Response?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our 24/7 emergency response teams are standing by to handle any security situation across Papua New Guinea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Emergency Hotline
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
