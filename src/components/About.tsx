
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Cctv, Award, MapPin, Phone, Star, Zap, Target, Eye, UserCheck, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
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

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setParallaxOffset(scrolled * 0.1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3 mb-6 glass">
              <Award className="w-5 h-5 text-primary animate-glow" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Established Leader Since 2000+</span>
              <Star className="w-4 h-4 text-primary animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">QRF</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
              Quick Response Force (QRF) specializes in <span className="font-bold text-primary">innovative and rapid security solutions</span> in Papua New Guinea, 
              delivering cutting-edge emergency response and asset protection services.
            </p>
          </div>

          {/* Mission & Vision Statements */}
          <div className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            <Card className="border-none shadow-2xl hover-lift hover-glow transition-all duration-500 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To enhance resilience and safety through quick response services, providing innovative security solutions 
                  that protect our clients' assets and ensure rapid emergency response across Papua New Guinea.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover-lift hover-glow transition-all duration-500 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a global standard-bearer in emergency response services, setting the benchmark for security 
                  excellence and innovative solutions in the Asia-Pacific region and beyond.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-primary mb-4">Leadership Team</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced leadership team brings decades of expertise in security management, 
                emergency response, and strategic operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-2xl hover-lift hover-glow transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <UserCheck className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-2">Heni Sarwom</h4>
                  <p className="text-accent font-bold mb-4">General Manager</p>
                  <p className="text-muted-foreground text-sm">
                    Leading QRF with extensive experience in security operations, strategic planning, 
                    and emergency response coordination across Papua New Guinea.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl hover-lift hover-glow transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-2">Security Director</h4>
                  <p className="text-accent font-bold mb-4">Operations Head</p>
                  <p className="text-muted-foreground text-sm">
                    Overseeing all security operations, tactical planning, and coordination with law enforcement agencies 
                    to ensure comprehensive protection services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl hover-lift hover-glow transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-2">Response Coordinator</h4>
                  <p className="text-accent font-bold mb-4">Emergency Response</p>
                  <p className="text-muted-foreground text-sm">
                    Managing emergency response protocols, training programs, and ensuring rapid deployment 
                    of resources during critical situations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-primary mb-4">Our Core Values</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These fundamental principles guide every aspect of our operations and client relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Continuously advancing our technology and methodologies to stay ahead of emerging threats.",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  icon: ShieldCheck,
                  title: "Reliability",
                  description: "Consistently delivering dependable security services that our clients can trust completely.",
                  gradient: "from-primary to-accent"
                },
                {
                  icon: Handshake,
                  title: "Partnership",
                  description: "Building strong collaborative relationships with clients, law enforcement, and community stakeholders.",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: Shield,
                  title: "Safety",
                  description: "Prioritizing the protection and well-being of our clients, personnel, and communities we serve.",
                  gradient: "from-blue-500 to-cyan-500"
                }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-none shadow-xl hover-lift hover-glow transition-all duration-500 group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-black text-primary mb-3">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enhanced Main Content with Asymmetrical Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className={`lg:col-span-7 transition-all duration-1000 delay-500 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-20'
            }`}>
              <div className="space-y-8">
                <h3 className="text-4xl font-black text-primary mb-8 leading-tight">
                  Two Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Industry Leadership</span>
                </h3>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift">
                    <p>
                      <strong className="text-primary text-xl">Including the design and construction of the G4S Control Room in Konedobu</strong>, 
                      QRF has established itself as the undisputed leader in Security Management, Emergency Response, 
                      and Two-way Radio Communications throughout Papua New Guinea.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift">
                    <p>
                      Our integrated approach combines cutting-edge technology, highly trained personnel, 
                      and strategic partnerships with law enforcement to deliver swift, reliable, and 
                      effective security and communication solutions for businesses, government agencies, and international organizations.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                    <p>
                      <strong className="text-primary text-xl">Trusted by major corporations including Vodafone PNG</strong>, 
                      we provide dedicated resources, vehicles, and specialized teams to ensure comprehensive 
                      security coverage across Port Moresby and nationwide operations.
                    </p>
                  </div>
                </div>

                {/* Enhanced Service Icons with Modern Design */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-1">Security Management</div>
                    <div className="text-xs text-muted-foreground">Armed Protection & Asset Security</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-1">Emergency Response</div>
                    <div className="text-xs text-muted-foreground">24/7 Rapid Deployment Teams</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <Cctv className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-1">Radio Communications</div>
                    <div className="text-xs text-muted-foreground">Advanced Digital Systems</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-5 transition-all duration-1000 delay-700 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-20'
            }`}>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="QRF Security Operations Center"
                    className="rounded-3xl object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl hover-lift glass">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-lg font-black text-primary">PNG Wide</div>
                      <div className="text-sm text-muted-foreground">Coverage Area</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl hover-lift glass">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-primary animate-pulse" />
                    <div>
                      <AnimatedCounter 
                        end={24} 
                        className="text-lg font-black text-primary" 
                      />
                      <div className="text-sm text-muted-foreground">Hour Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Attributes with Modern Cards */}
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-900 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'
          }`}>
            {[
              {
                icon: Shield,
                title: "Dedicated Resources",
                description: "Dedicated resources, vehicles and drivers, specifically assigned to respond and support major business activities in Port Moresby and nearby centers.",
                badge: "Vodafone PNG Partner",
                gradient: "from-primary to-accent"
              },
              {
                icon: Users,
                title: "Expert Personnel",
                description: "Drivers and security personnel are carefully hand picked with extensive experience in security response and advanced defensive & offensive driving skills.",
                badge: "Elite Training Standards",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Phone,
                title: "Armed Protection",
                description: "Armed Close Protection Officers (CPO) are carefully selected with proven track records in cash and valuables in transit, VIP protection, and emergency response.",
                badge: "G4S Control Room Built",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((attribute, index) => {
              const IconComponent = attribute.icon;
              return (
                <Card key={index} className={`border-none shadow-2xl hover-lift hover-glow transition-all duration-500 group animate-stagger-${index + 1}`}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`w-24 h-24 bg-gradient-to-br ${attribute.gradient} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl relative z-10`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-black text-primary mb-6 relative z-10">{attribute.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                      {attribute.description}
                    </p>
                    <div className="text-xs text-primary font-bold bg-primary/10 rounded-full px-4 py-2 inline-block relative z-10">
                      {attribute.badge}
                    </div>
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

export default About;
