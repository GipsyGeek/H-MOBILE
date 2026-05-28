import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does delivery take?',
        answer: 'We offer same-day delivery within Nairobi for orders placed before 2 PM. For other areas in Kenya, delivery typically takes 2-5 business days depending on your location.',
      },
      {
        question: 'Do you deliver nationwide?',
        answer: 'Yes! We deliver to all 47 counties in Kenya. Delivery fees vary based on your location. Orders above KES 10,000 qualify for free delivery within Nairobi.',
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order is dispatched, we\'ll send you a WhatsApp message with tracking information. You can also contact our customer service team for updates.',
      },
      {
        question: 'Can I change or cancel my order?',
        answer: 'You can modify or cancel your order within 1 hour of placing it by contacting us via WhatsApp or phone. Once the order is dispatched, changes cannot be made.',
      },
    ],
  },
  {
    category: 'Payment',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept M-Pesa (our primary payment method) and Cash on Delivery. For M-Pesa payments, you\'ll receive payment instructions via WhatsApp after placing your order.',
      },
      {
        question: 'Is it safe to pay online?',
        answer: 'Absolutely! M-Pesa is a secure mobile payment system regulated by Safaricom. You\'ll receive an M-Pesa confirmation message for every transaction.',
      },
      {
        question: 'Can I pay in installments?',
        answer: 'Currently, we don\'t offer installment payments. However, you can use Lipa na M-Pesa Fuliza if you have it enabled on your M-Pesa account.',
      },
    ],
  },
  {
    category: 'Products & Warranty',
    questions: [
      {
        question: 'Are all your products genuine?',
        answer: 'Yes, we only sell 100% genuine products sourced from authorized distributors and manufacturers. Every smartphone comes with an official warranty.',
      },
      {
        question: 'What warranty do you offer?',
        answer: 'All smartphones come with manufacturer warranty (typically 1 year). Accessories have a 6-month warranty against manufacturing defects. Keep your receipt as proof of purchase.',
      },
      {
        question: 'What if I receive a defective product?',
        answer: 'Contact us within 48 hours of receiving your order. We\'ll arrange a replacement or full refund. Please don\'t open sealed products if you notice external damage upon delivery.',
      },
      {
        question: 'Do you offer phone repairs?',
        answer: 'We currently focus on sales. For repairs, we can recommend trusted service centers. Repairs during warranty period should be handled at authorized service centers.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 7 days of delivery for unopened products in original packaging. Opened products can only be returned if defective. Please contact us before returning any item.',
      },
      {
        question: 'How long do refunds take?',
        answer: 'Once we receive and inspect the returned item, refunds are processed within 3-5 business days. M-Pesa refunds are instant once processed.',
      },
      {
        question: 'Who pays for return shipping?',
        answer: 'If the return is due to a defect or our error, we cover the return shipping. For change-of-mind returns, the customer covers return shipping costs.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Help Center
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about orders, shipping, payments, 
              and more. Can&apos;t find what you&apos;re looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                    className="border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Our customer support team is available to help you with any questions 
            or concerns. Reach out to us via WhatsApp for the fastest response.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/254754910314"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
