
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Cctv } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About QRF
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quick Response Company (QRF) is a premier security and emergency response firm 
              specializing in rapid threat mitigation, asset protection, and advanced 
              communication solutions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Two Decades of Industry Experience
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Including the design and construction of the G4S Control Room in Konedobu, 
                QRF has established itself as a leader in Security Management, Emergency Response, 
                and Two-way Radio Communications.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our integrated approach combines cutting-edge technology, highly trained personnel, 
                and strategic partnerships with law enforcement to deliver swift, reliable, and 
                effective security and communication solutions for businesses and government agencies.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary">Security Management</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Cctv className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary">Radio Communications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Security Operations Center"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Dedicated Resources</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated resources, vehicles and drivers, specifically assigned to respond 
                  and support Vodafone business activities in Port Moresby and nearby centers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Expert Drivers</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Drivers are carefully hand picked who are highly experienced in security 
                  response and who possess skills in defensive and offensive driving.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cctv className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Armed Protection</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Armed Close Protection Officers (CPO) are carefully hand picked who possess 
                  a proven track record in cash and valuables in transit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
