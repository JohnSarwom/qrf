
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Shield, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to secure your operations? Contact our team for a comprehensive 
              security assessment and customized solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john.doe@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <Input placeholder="e.g., Security Management, Emergency Response" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your security requirements..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full gradient-blue text-white font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Location</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Serving Papua New Guinea with headquarters in Port Moresby and coverage 
                    extending to nearby centers across the region.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Primary Service Areas:</p>
                    <p>• Port Moresby Metropolitan Area</p>
                    <p>• Central Province</p>
                    <p>• Nationwide Coverage Available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">24/7 Emergency Response</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our rapid response teams are available around the clock to handle 
                    security emergencies and critical situations.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary mb-2">Emergency Hotline:</p>
                    <p className="text-2xl font-bold text-primary">Available 24/7</p>
                    <p className="text-xs text-muted-foreground mt-2">
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
