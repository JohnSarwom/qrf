import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Users, TrendingUp, Globe, Eye } from 'lucide-react';
import SectionWrapper from './SectionWrapper'; // Assuming SectionWrapper is a valid component

const services = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Threat Detection & Response',
    description: '24/7 monitoring and rapid response to security incidents using advanced AI and expert analysis.',
    features: [
      'Real-time threat intelligence',
      'Automated incident correlation',
      'Managed Detection and Response (MDR)',
    ],
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: 'Vulnerability Management',
    description: 'Proactive identification and remediation of vulnerabilities across your digital assets.',
    features: [
      'Continuous scanning & assessment',
      'Risk-based prioritization',
      'Penetration testing services',
    ],
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Security Awareness Training',
    description: 'Empower your workforce to recognize and mitigate cyber threats through engaging training programs.',
    features: [
      'Customizable training modules',
      'Phishing simulations',
      'Performance tracking & reporting',
    ],
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Cybersecurity Consulting',
    description: 'Strategic guidance to build and mature your cybersecurity posture in line with business objectives.',
    features: [
      'Security strategy development',
      'Compliance & risk assessments (ISO 27001, GDPR)',
      'Cloud security architecture',
    ],
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Managed Firewall Services',
    description: 'Comprehensive management of your firewall infrastructure for robust perimeter security.',
    features: [
      'Firewall deployment & configuration',
      'Policy management & optimization',
      'Performance monitoring & reporting',
    ],
  },
  {
    icon: <Eye className="w-10 h-10 text-primary" />,
    title: 'Digital Forensics',
    description: 'Investigate cyber incidents to understand impact, identify attackers, and support recovery efforts.',
    features: [
      'Incident data collection & analysis',
      'Evidence preservation',
      'Expert witness testimony',
    ],
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services" className="py-16 md:py-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">Our Security Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Comprehensive solutions to protect your organization from evolving cyber threats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <CardHeader className="p-6 bg-primary/5">
              <div className="flex items-center space-x-4 mb-3">
                {service.icon}
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4 text-sm flex-grow">{service.description}</p>
              {/* If you want to display features, you can add them here, e.g.:
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                {service.features.slice(0, 2).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              */}
              <Button variant="outline" className="mt-auto w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
