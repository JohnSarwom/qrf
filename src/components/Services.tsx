
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Car, Users, Wrench, MapPin, Settings, BookOpen, Handshake, GraduationCap, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Consultancy Services',
    description: 'Expert advice on risk assessment, crisis management, and emergency preparedness.',
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-primary" />,
    title: 'Emergency Response Planning',
    description: 'Customized planning services to help clients prepare for security threats.',
  },
  {
    icon: <Car className="w-10 h-10 text-primary" />,
    title: 'Stolen Vehicle Recovery (SVR) Support',
    description: 'Assistance with stolen vehicle recovery following a carjacking.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Armed Escorts',
    description: 'Provision of armed security escorts.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Logistical Support Services',
    description: 'Provision of tools, technology, and manpower to handle large-scale emergencies.',
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: 'Vehicle Tracking Platform',
    description: 'A system to track vehicles and monitor usage, aimed at preventing motor vehicle theft, abuse of vehicles, and delays in emergency response.',
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: 'Preventative System Rules',
    description: 'Custom rules and configurations within the tracking platform to proactively mitigate risks and enhance response effectiveness.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Emergency Preparedness Support',
    description: 'We help clients prepare for emergencies with comprehensive plans, systems, and training programs.',
  },
  {
    icon: <Handshake className="w-10 h-10 text-primary" />,
    title: 'Strategic Partnerships with Law Enforcement',
    description: 'Collaboration with police and security agencies to support operations and enhance response coordination.',
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    title: 'Trained Security Personnel',
    description: 'Deployment of highly trained staff experienced in crisis response, emergency logistics, and escort services.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: 'Innovation in Security Solutions',
    description: 'Emphasis on integrating technology and innovation into traditional security strategies, tailored to PNG\'s evolving threat landscape.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Security Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to protect your organization from evolving security threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="p-6 bg-primary/5">
                <div className="flex items-center space-x-4 mb-3">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.description}</p>
                <Button variant="outline" className="mt-auto w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
