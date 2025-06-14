
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Car, Users, Wrench, BookOpen, Handshake, GraduationCap, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
    title: 'Consultancy Services',
    description: 'Expert advice on risk assessment, crisis management, and emergency preparedness.',
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-cyan-400" />,
    title: 'Emergency Response Planning',
    description: 'Customized planning services to help clients prepare for security threats.',
  },
  {
    icon: <Car className="w-10 h-10 text-cyan-400" />,
    title: 'Stolen Vehicle Recovery (SVR) Support',
    description: 'Assistance with stolen vehicle recovery following a carjacking.',
  },
  {
    icon: <Users className="w-10 h-10 text-cyan-400" />,
    title: 'Armed Escorts',
    description: 'Provision of armed security escorts.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-cyan-400" />,
    title: 'Logistical Support Services',
    description: 'Provision of tools, technology, and manpower to handle large-scale emergencies.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    title: 'Emergency Preparedness Support',
    description: 'We help clients prepare for emergencies with comprehensive plans, systems, and training programs.',
  },
  {
    icon: <Handshake className="w-10 h-10 text-cyan-400" />,
    title: 'Strategic Partnerships with Law Enforcement',
    description: 'Collaboration with police and security agencies to support operations and enhance response coordination.',
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-cyan-400" />,
    title: 'Trained Security Personnel',
    description: 'Deployment of highly trained staff experienced in crisis response, emergency logistics, and escort services.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-cyan-400" />,
    title: 'Innovation in Security Solutions',
    description: 'Emphasis on integrating technology and innovation into traditional security strategies, tailored to PNG\'s evolving threat landscape.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, teal 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-cyan-500/20 rounded-full px-6 py-3 mb-6 border border-cyan-500/30">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">SECURITY SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Security Services</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to protect your organization from evolving security threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="flex flex-col overflow-hidden bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 group"
            >
              <CardHeader className="p-6 bg-slate-100/50 dark:bg-slate-800/50">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 dark:text-gray-300 mb-4 text-sm flex-grow">{service.description}</p>
                <Button variant="outline" className="mt-auto w-full border-cyan-500/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:text-slate-900 transition-colors">
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
