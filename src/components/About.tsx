
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Cctv, Award, MapPin, Phone } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Established Leader Since 2000+</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About QRF
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Quick Response Force (QRF) is Papua New Guinea's premier security and emergency response firm, 
              specializing in rapid threat mitigation, asset protection, and cutting-edge communication solutions.
            </p>
          </div>

          {/* Enhanced Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
            }`}>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Two Decades of Industry Leadership
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  <strong className="text-primary">Including the design and construction of the G4S Control Room in Konedobu</strong>, 
                  QRF has established itself as the undisputed leader in Security Management, Emergency Response, 
                  and Two-way Radio Communications throughout Papua New Guinea.
                </p>
                <p>
                  Our integrated approach combines cutting-edge technology, highly trained personnel, 
                  and strategic partnerships with law enforcement to deliver swift, reliable, and 
                  effective security and communication solutions for businesses, government agencies, and international organizations.
                </p>
                <p>
                  <strong className="text-primary">Trusted by major corporations including Vodafone PNG</strong>, 
                  we provide dedicated resources, vehicles, and specialized teams to ensure comprehensive 
                  security coverage across Port Moresby and nationwide operations.
                </p>
              </div>

              {/* Enhanced Service Icons */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-primary">Security Management</div>
                  <div className="text-xs text-muted-foreground">Armed Protection & Asset Security</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-primary">Emergency Response</div>
                  <div className="text-xs text-muted-foreground">24/7 Rapid Deployment Teams</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Cctv className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-primary">Radio Communications</div>
                  <div className="text-xs text-muted-foreground">Advanced Digital Systems</div>
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'animate-fade-in' : 'opacity-0 scale-95'
            }`}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="QRF Security Operations Center"
                  className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Coverage Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-primary/20">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-bold text-primary">PNG Wide Coverage</div>
                    <div className="text-xs text-muted-foreground">Port Moresby HQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Attributes */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'
          }`}>
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Dedicated Resources</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dedicated resources, vehicles and drivers, specifically assigned to respond 
                  and support major business activities in Port Moresby and nearby centers.
                </p>
                <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  Vodafone PNG Partner
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Expert Personnel</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Drivers and security personnel are carefully hand picked with extensive experience 
                  in security response and advanced defensive & offensive driving skills.
                </p>
                <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  Elite Training Standards
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">Armed Protection</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Armed Close Protection Officers (CPO) are carefully selected with proven track records 
                  in cash and valuables in transit, VIP protection, and emergency response.
                </p>
                <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-3 py-1 inline-block">
                  G4S Control Room Built
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
