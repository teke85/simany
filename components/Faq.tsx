"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is payment flexible?",
    answer: "Yes",
  },
  {
    question: "How about a learner who is working?",
    answer: "A carefully tailored timetable can be arranged",
  },
  {
    question: "Does the Tuition include Drivers Licence and Medicals?",
    answer: "No.",
  },
  {
    question: "Where are lessons conducted?",
    answer: [
      "Theory and Road Language(Signs) in the classroom at NAPSA.",
      "Practical start up at Mongu Stadium.",
      "Obstacle clearance and reverse drills at fra.",
    ],
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container font-[family-name:var(--font-rethink)] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {faq.answer.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
