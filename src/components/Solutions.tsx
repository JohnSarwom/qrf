
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cctv, Shield, AlertTriangle } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced technology solutions for comprehensive security management, communication systems, and workplace safety.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Command Center Solutions */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Command Center"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Cctv className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Command Center Solutions</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With two decades of expertise in command center operations, QRF has designed and 
                  implemented state-of-the-art control rooms, including the G4S Control Room in Konedobu.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Centralized Security Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Real-time CCTV surveillance and incident tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Radio Dispatch Coordination</h4>
                      <p className="text-sm text-muted-foreground">Integrated communication for rapid response teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Ergonomic ISO 11064 Design</h4>
                      <p className="text-sm text-muted-foreground">Optimized layouts for maximum operational efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">NCCC Hotline Management</h4>
                      <p className="text-sm text-muted-foreground">Dedicated Call Centre Management System (CCMS) for tracking municipal service requests</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communications Solutions */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Radio Communications"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Communications - Two-Way Radio & Data</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a leader in advanced radio and data communication, we provide comprehensive 
                  communication solutions for critical operations across Papua New Guinea.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Two-Way Radios</h4>
                      <p className="text-sm text-muted-foreground">Portable, Mobile, Digital, Analog, PoC systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Microwave & VSAT Solutions</h4>
                      <p className="text-sm text-muted-foreground">Nationwide connectivity for remote operations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Communication Systems</h4>
                      <p className="text-sm text-muted-foreground">Repeaters, Trunking, Dispatch Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Customized Solutions</h4>
                      <p className="text-sm text-muted-foreground">For Public Safety, Banking, Mining, Logistics & More</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hazard and Safety Solutions */}
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Safety Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Hazard and Safety Solutions</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive workplace safety and hazard management systems designed to protect 
                  personnel and assets through advanced monitoring and response technologies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Risk Assessment Software</h4>
                      <p className="text-sm text-muted-foreground">Automated hazard identification and risk evaluation systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Emergency Response Management</h4>
                      <p className="text-sm text-muted-foreground">Real-time incident response and evacuation coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Safety Compliance Tracking</h4>
                      <p className="text-sm text-muted-foreground">Automated reporting and regulatory compliance monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Environmental Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Air quality, noise levels, and environmental hazard detection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
