import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Truck, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'Happy Customers', value: '5,000+' },
  { label: 'Products Sold', value: '15,000+' },
  { label: 'Years in Business', value: '5+' },
  { label: 'Cities Served', value: '47' },
]

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We only stock genuine products from authorized distributors, ensuring you get authentic devices with valid warranties.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. Our dedicated support team is available 24/7 to assist with any questions or concerns.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery within Nairobi and reliable nationwide shipping to get your products to you quickly.',
  },
  {
    icon: Shield,
    title: 'Trusted Service',
    description: 'With thousands of satisfied customers, we\'ve built a reputation for reliability and excellent after-sales support.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
              Your Trusted Mobile Partner in Kenya
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Since our founding, H-Mobile Hub has been committed to making quality 
              mobile technology accessible to everyone in Kenya. We believe that 
              everyone deserves a reliable smartphone and premium accessories at fair prices.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="py-12 px-4 lg:px-8 text-center">
                <p className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <Image
                src="/about-store.png"
                alt="H-Mobile Hub store"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Our Story
              </p>
              <h2 className="mt-4 font-serif text-3xl lg:text-4xl font-medium text-foreground">
                From Passion to Purpose
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  H-Mobile Hub started with a simple observation: quality mobile phones 
                  and accessories were either too expensive or came with questionable authenticity 
                  in the Kenyan market.
                </p>
                <p>
                  Our founder set out to change that by building direct relationships with 
                  authorized distributors and manufacturers, cutting out middlemen to offer 
                  genuine products at competitive prices.
                </p>
                <p>
                  Today, we serve thousands of customers across Kenya, from Nairobi to 
                  Mombasa, Kisumu to Nakuru. Our commitment remains the same: quality products, 
                  fair prices, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at H-Mobile Hub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8">
                <value.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-medium text-foreground text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
            Ready to Shop?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Browse our collection of premium smartphones and accessories, 
            or get in touch if you have any questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button size="lg">Browse Products</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
