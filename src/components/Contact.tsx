
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Shield, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
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
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">CONTACT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to secure your operations? Contact our team for a comprehensive 
              security assessment and customized solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john.doe@company.com" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <Input placeholder="e.g., Security Management, Emergency Response" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your security requirements..."
                      className="min-h-[120px] bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Location</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Serving Papua New Guinea with headquarters in Port Moresby and coverage 
                    extending to nearby centers across the region.
                  </p>
                  <div className="text-sm text-gray-400">
                    <p className="font-medium text-gray-300">Primary Service Areas:</p>
                    <p>• Port Moresby Metropolitan Area</p>
                    <p>• Central Province</p>
                    <p>• Nationwide Coverage Available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">24/7 Emergency Response</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Our rapid response teams are available around the clock to handle 
                    security emergencies and critical situations.
                  </p>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                    <p className="text-sm font-medium text-cyan-400 mb-2">Emergency Hotline:</p>
                    <p className="text-2xl font-bold text-cyan-400">Available 24/7</p>
                    <p className="text-xs text-gray-400 mt-2">
                      For immediate security assistance and emergency response
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
