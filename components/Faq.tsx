'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How to Get Your License in each state?",
    answer: "The process varies by state, but generally involves completing a driver's education course, passing a written test, completing supervised driving hours, and passing a road test. We provide specific guidance for each state's requirements."
  },
  {
    question: "Do you have a driving school near me?",
    answer: "We have multiple locations across different states. Enter your zip code on our locations page to find the nearest driving school to you."
  },
  {
    question: "How long does it take to learn to drive?",
    answer: "The learning period varies per individual, but typically takes 20-40 hours of professional instruction plus additional practice hours. Most students complete their training within 2-3 months."
  },
  {
    question: "How much are driving lessons?",
    answer: "Our lesson prices vary based on package selection and location. Basic packages start at $299, and we offer various payment plans to suit different budgets."
  },
  {
    question: "How to become a driving instructor?",
    answer: "To become a driving instructor, you need a valid driver's license, clean driving record, pass a background check, complete our instructor training program, and obtain state certification."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

