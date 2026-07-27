import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Can QRF support urgent security requirements?',
    answer: 'Yes. The enquiry flow is designed to capture urgency, operating area, requirement type, and contact details so QRF can triage critical requests quickly.',
  },
  {
    question: 'What information should an organization provide first?',
    answer: 'Share the location, timeframe, personnel or assets involved, current risks, communications needs, and whether the requirement is immediate or planned.',
  },
  {
    question: 'Does QRF support radio communications as well as security services?',
    answer: 'Yes. The site positions QRF around both operational security and radio/data communications, including dispatch support, mobile radios, repeaters, and command center workflows.',
  },
  {
    question: 'Can QRF work with an existing client security team?',
    answer: 'Yes. The recommended operating model allows QRF to support existing client teams through planning, field coordination, communications, and escalation procedures.',
  },
  {
    question: 'How are sensitive enquiries handled?',
    answer: 'Security enquiries can involve confidential personnel, asset, route, and site information. The contact flow should be treated as a confidential planning request and followed up directly by QRF.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
            <HelpCircle className="h-4 w-4" />
            Buyer Questions
          </div>
          <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            Practical answers before a serious conversation.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Enterprise teams need clear expectations before they share sensitive operational details.
          </p>
        </div>

        <Accordion type="single" collapsible className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-black text-slate-950 hover:text-cyan-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-semibold leading-7 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
