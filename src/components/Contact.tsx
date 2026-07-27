import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Headset, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactPoints = [
  'Rapid response planning for sites and personnel',
  'Radio communications and dispatch support',
  'Command center and monitoring capability',
];

const serviceAreas = ['Port Moresby Metropolitan Area', 'Central Province', 'Nationwide coverage available'];

const requirementTypes = [
  'Emergency response planning',
  'Asset protection or escort',
  'Vehicle recovery support',
  'Command center support',
  'Radio communications',
  'Security consultancy',
];

const urgencyOptions = ['Immediate', 'Within 24 hours', 'This week', 'Planning ahead'];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5f8fb] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
              <Headset className="h-4 w-4" />
              Contact QRF
            </div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
              Plan a security response around your operation.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Share the site, personnel, movement, or communications challenge you need covered. QRF can help scope a practical response plan for PNG operating conditions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-xl bg-white p-5 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200/80 md:p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700">Security assessment</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">Send a message</h3>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                <Mail className="h-6 w-6" />
              </span>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-2 block text-sm font-bold text-slate-700">First name <span className="text-cyan-700">*</span></label>
                  <Input id="first-name" name="firstName" required placeholder="John" className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-2 block text-sm font-bold text-slate-700">Last name <span className="text-cyan-700">*</span></label>
                  <Input id="last-name" name="lastName" required placeholder="Doe" className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Email <span className="text-cyan-700">*</span></label>
                  <Input id="email" name="email" type="email" required placeholder="john.doe@company.com" className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">Phone <span className="text-cyan-700">*</span></label>
                  <Input id="phone" name="phone" required placeholder="+675 ..." className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-700">Company or organization</label>
                  <Input id="company" name="company" placeholder="Your company" className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
                <div>
                  <label htmlFor="location" className="mb-2 block text-sm font-bold text-slate-700">Operating area</label>
                  <Input id="location" name="location" placeholder="Port Moresby, Central Province, remote site..." className="h-12 rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="requirement-type" className="mb-2 block text-sm font-bold text-slate-700">Requirement type <span className="text-cyan-700">*</span></label>
                  <select
                    id="requirement-type"
                    name="requirementType"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-950 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Select requirement</option>
                    {requirementTypes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="mb-2 block text-sm font-bold text-slate-700">Urgency <span className="text-cyan-700">*</span></label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-950 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Select urgency</option>
                    {urgencyOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">Operational details <span className="text-cyan-700">*</span></label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about the operation, location, timeframe, and response needs."
                  className="min-h-[138px] rounded-md border-slate-200 bg-slate-50 text-slate-950 placeholder:text-slate-400"
                />
              </div>
              <p className="text-xs font-semibold leading-5 text-slate-500">
                Sensitive route, personnel, asset, and site details should be shared only as needed. QRF will use this enquiry to triage the right follow-up conversation.
              </p>
              {submitted && (
                <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm font-bold text-cyan-900" role="status">
                  Enquiry captured for triage. Connect this form to your preferred email, CRM, or secure intake workflow before production launch.
                </div>
              )}
              <Button type="submit" className="h-12 rounded-md bg-slate-950 font-black text-white hover:bg-cyan-500 hover:text-slate-950">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/70 ring-1 ring-slate-900/10 md:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">24/7 posture</p>
                  <h3 className="mt-2 text-2xl font-black">Emergency response support</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    QRF is positioned to support urgent security requirements, field coordination, and response planning for critical operations.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {contactPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg bg-white/[0.06] p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                    <span className="text-sm font-semibold leading-6 text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-black text-slate-950">Service areas</h3>
                </div>
                <div className="grid gap-2">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-cyan-400 p-6 text-slate-950 shadow-sm ring-1 ring-cyan-300">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black">Available for urgent requirements</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                  Use the form to request a call-back and share the operational details your team needs covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
