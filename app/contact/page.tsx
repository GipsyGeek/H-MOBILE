"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us directly',
    value: '+254 754 910 314',
    href: 'tel:+254754910314',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us',
    value: '+254 754 910 314',
    href: 'https://wa.me/254754910314',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email',
    value: 'info@hmobilehub.co.ke',
    href: 'mailto:info@hmobilehub.co.ke',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'When we\'re available',
    value: 'Mon-Sat: 8AM - 8PM',
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Message sent successfully! We\'ll get back to you soon.')
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have questions about our products or need help with an order? 
              We&apos;re here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {contactMethods.map((method) => (
              <div key={method.title} className="py-8 px-4 lg:px-6">
                <method.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-medium text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-2 block text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-foreground">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground">
                Visit Our Store
              </h2>
              <p className="mt-4 text-muted-foreground">
                Come visit us in person to see our full range of products.
              </p>

              <div className="mt-8 p-8 bg-secondary">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">H-Mobile Hub Store</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      Nairobi, Kenya<br />
                      (Specific location provided upon inquiry)
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">Opening Hours</h3>
                    <div className="mt-2 text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-8 p-8 bg-primary text-primary-foreground">
                <h3 className="font-medium text-lg">Prefer WhatsApp?</h3>
                <p className="mt-2 text-primary-foreground/70">
                  Chat with us directly for quick responses to your questions or to place an order.
                </p>
                <a
                  href="https://wa.me/254754910314"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
