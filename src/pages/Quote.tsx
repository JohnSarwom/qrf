
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Shield, CheckCircle, Clock, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Quote = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [contractDuration, setContractDuration] = useState('');

  const services = [
    { id: 'emergency', name: 'Emergency Response Planning', price: 5000 },
    { id: 'svr', name: 'Stolen Vehicle Recovery (SVR)', price: 3000 },
    { id: 'escorts', name: 'Armed Escorts & Protection', price: 8000 },
    { id: 'logistics', name: 'Logistical Support Services', price: 4000 },
    { id: 'consultancy', name: 'Security Consultancy', price: 6000 },
    { id: 'software', name: 'Specialized Software Solutions', price: 7000 },
  ];

  const pricingPlans = [
    { id: 'basic', name: 'Basic', description: 'Essential security services', multiplier: 1 },
    { id: 'professional', name: 'Professional', description: 'Comprehensive security package', multiplier: 1.5 },
    { id: 'enterprise', name: 'Enterprise', description: 'Full-scale security operations', multiplier: 2.2 },
  ];

  const contractDurations = [
    { id: 'monthly', name: 'Monthly', discount: 0 },
    { id: 'quarterly', name: 'Quarterly (3 months)', discount: 0.05 },
    { id: 'annual', name: 'Annual (12 months)', discount: 0.15 },
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
  };

  const calculateTotal = () => {
    const selectedServiceItems = services.filter(service => selectedServices.includes(service.id));
    const baseTotal = selectedServiceItems.reduce((sum, service) => sum + service.price, 0);
    const plan = pricingPlans.find(p => p.id === selectedPlan);
    const duration = contractDurations.find(d => d.id === contractDuration);
    
    if (!plan || !duration) return 0;
    
    const planTotal = baseTotal * plan.multiplier;
    const finalTotal = planTotal * (1 - duration.discount);
    
    return finalTotal;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Professional Quote Request</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Request Your Security Quote
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get a customized security solution tailored to your specific needs across Papua New Guinea
              </p>
            </div>

            <form className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" required />
                    </div>
                    <div>
                      <Label htmlFor="position">Position/Title</Label>
                      <Input id="position" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Primary Location/Region in PNG *</Label>
                    <Input id="location" placeholder="e.g., Port Moresby, Central Province" required />
                  </div>
                </CardContent>
              </Card>

              {/* Service Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Required Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Checkbox 
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor={service.id} className="font-medium cursor-pointer">
                            {service.name}
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Base: PGK {service.price.toLocaleString()}/month
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Plans */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Service Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                    <div className="grid md:grid-cols-3 gap-4">
                      {pricingPlans.map((plan) => (
                        <div key={plan.id} className="relative">
                          <div className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary">
                            <RadioGroupItem value={plan.id} id={plan.id} />
                            <div className="flex-1">
                              <Label htmlFor={plan.id} className="font-semibold cursor-pointer">
                                {plan.name}
                              </Label>
                              <p className="text-sm text-muted-foreground mb-2">
                                {plan.description}
                              </p>
                              <p className="text-sm font-medium text-primary">
                                {plan.multiplier}x base rate
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Contract Duration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Contract Duration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={contractDuration} onValueChange={setContractDuration}>
                    <div className="space-y-3">
                      {contractDurations.map((duration) => (
                        <div key={duration.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={duration.id} id={duration.id} />
                          <div className="flex-1 flex justify-between items-center">
                            <div>
                              <Label htmlFor={duration.id} className="font-medium cursor-pointer">
                                {duration.name}
                              </Label>
                              {duration.discount > 0 && (
                                <p className="text-sm text-green-600">
                                  Save {(duration.discount * 100).toFixed(0)}%
                                </p>
                              )}
                            </div>
                            {duration.discount > 0 && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Additional Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Requirements & Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="requirements">Specific Security Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Please describe your specific security needs, current challenges, or any special requirements..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Preferred Start Date</Label>
                    <Input id="timeline" type="date" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="emergency" />
                    <Label htmlFor="emergency">This is an urgent/emergency security requirement</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Quote Summary */}
              {selectedServices.length > 0 && selectedPlan && contractDuration && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Quote Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Selected Services:</span>
                        <span>{selectedServices.length} service(s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service Level:</span>
                        <span>{pricingPlans.find(p => p.id === selectedPlan)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contract Duration:</span>
                        <span>{contractDurations.find(d => d.id === contractDuration)?.name}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Estimated Monthly Total:</span>
                          <span className="text-primary">PGK {calculateTotal().toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          *Final pricing subject to detailed assessment and customization
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Submit Quote Request
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Our team will review your request and contact you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
