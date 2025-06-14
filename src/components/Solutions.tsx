
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cctv, Shield, AlertTriangle } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, teal 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-cyan-500/20 rounded-full px-6 py-3 mb-6 border border-cyan-500/30">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">SPECIALIZED SOLUTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced technology solutions for comprehensive security management, communication systems, and workplace safety.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Command Center Solutions */}
            <Card className="border-none bg-slate-900/50 border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Command Center"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Cctv className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Command Center Solutions</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With two decades of expertise in command center operations, QRF has designed and 
                  implemented state-of-the-art control rooms, including the G4S Control Room in Konedobu.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Centralized Security Monitoring</h4>
                      <p className="text-sm text-gray-400">Real-time CCTV surveillance and incident tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Radio Dispatch Coordination</h4>
                      <p className="text-sm text-gray-400">Integrated communication for rapid response teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Ergonomic ISO 11064 Design</h4>
                      <p className="text-sm text-gray-400">Optimized layouts for maximum operational efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">NCCC Hotline Management</h4>
                      <p className="text-sm text-gray-400">Dedicated Call Centre Management System (CCMS) for tracking municipal service requests</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communications Solutions */}
            <Card className="border-none bg-slate-900/50 border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Radio Communications"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Communications - Two-Way Radio & Data</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  As a leader in advanced radio and data communication, we provide comprehensive 
                  communication solutions for critical operations across Papua New Guinea.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Two-Way Radios</h4>
                      <p className="text-sm text-gray-400">Portable, Mobile, Digital, Analog, PoC systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Microwave & VSAT Solutions</h4>
                      <p className="text-sm text-gray-400">Nationwide connectivity for remote operations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Communication Systems</h4>
                      <p className="text-sm text-gray-400">Repeaters, Trunking, Dispatch Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Customized Solutions</h4>
                      <p className="text-sm text-gray-400">For Public Safety, Banking, Mining, Logistics & More</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hazard and Safety Solutions */}
            <Card className="border-none bg-slate-900/50 border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Safety Systems"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hazard and Safety Solutions</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive workplace safety and hazard management systems designed to protect 
                  personnel and assets through advanced monitoring and response technologies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Risk Assessment Software</h4>
                      <p className="text-sm text-gray-400">Automated hazard identification and risk evaluation systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Emergency Response Management</h4>
                      <p className="text-sm text-gray-400">Real-time incident response and evacuation coordination</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Safety Compliance Tracking</h4>
                      <p className="text-sm text-gray-400">Automated reporting and regulatory compliance monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Environmental Monitoring</h4>
                      <p className="text-sm text-gray-400">Air quality, noise levels, and environmental hazard detection</p>
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
