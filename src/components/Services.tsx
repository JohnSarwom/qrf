
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Bell, Users, Car, Cctv } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bell,
      title: "Emergency Response Planning",
      description: "Customized strategies to mitigate security threats.",
      features: ["Rapid threat assessment", "Crisis management protocols", "24/7 response teams"]
    },
    {
      icon: Car,
      title: "Stolen Vehicle Recovery (SVR) Support",
      description: "Rapid response to carjackings and theft.",
      features: ["GPS tracking systems", "Quick recovery protocols", "Law enforcement coordination"]
    },
    {
      icon: Shield,
      title: "Armed Escorts & Close Protection",
      description: "Highly trained CPOs for cash-in-transit and VIP security.",
      features: ["Certified protection officers", "Secure transport", "Risk assessment"]
    },
    {
      icon: Users,
      title: "Logistical Support Services",
      description: "Deployment of personnel, vehicles, and technology for crisis management.",
      features: ["Resource deployment", "Emergency logistics", "Technology integration"]
    },
    {
      icon: Cctv,
      title: "Consultancy Services",
      description: "Risk assessment, crisis management, and emergency preparedness.",
      features: ["Security audits", "Risk analysis", "Emergency planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive security solutions tailored to meet the unique challenges 
              of Papua New Guinea's business environment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
