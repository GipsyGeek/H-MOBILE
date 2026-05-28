import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck, Shield, CreditCard, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductGrid } from '@/components/products/product-grid'

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery within Nairobi',
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Genuine products with warranty',
  },
  {
    icon: CreditCard,
    title: 'M-Pesa',
    description: 'Easy and secure payments',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 customer support',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Belledonne Inspired */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <Image
            src="/hero-phone.png"
            alt="Premium smartphones"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        
        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              New Collection
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
              Premium Mobile Experience
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Discover the latest smartphones and premium accessories. 
              Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/shop?category=Smartphones">
                <Button variant="outline" size="lg">
                  View Smartphones
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Product Info */}
        <div className="absolute bottom-8 right-8 bg-card/95 backdrop-blur p-6 max-w-xs hidden lg:block border border-border shadow-lg">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Featured
          </p>
          <p className="mt-2 font-medium text-foreground">
            iPhone 15 Pro Max, from the latest Apple collection.
          </p>
          <Link 
            href="/product/1" 
            className="mt-3 inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors border-b border-foreground pb-0.5"
          >
            Discover
          </Link>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {features.map((feature) => (
              <div key={feature.title} className="py-8 px-4 lg:px-8 text-center">
                <feature.icon className="h-6 w-6 mx-auto text-accent" />
                <h3 className="mt-3 font-medium text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Belledonne Style Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Smartphones */}
            <Link href="/shop?category=Smartphones" className="group relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src="/category-smartphones.png"
                alt="Smartphones collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-card p-8 max-w-[280px]">
                <h2 className="font-serif text-2xl font-medium text-foreground uppercase tracking-wider">
                  Smartphones
                </h2>
                <span className="mt-2 inline-block text-sm text-muted-foreground border-b border-muted-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                  Discover all models
                </span>
              </div>
            </Link>

            {/* Accessories */}
            <Link href="/shop?category=Cases" className="group relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/category-accessories.png"
                alt="Accessories collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute top-8 left-8 bg-card p-8 max-w-[280px]">
                <h2 className="font-serif text-2xl font-medium text-foreground uppercase tracking-wider">
                  Accessories
                </h2>
                <span className="mt-2 inline-block text-sm text-muted-foreground border-b border-muted-foreground pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                  Discover all models
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
              Featured Products
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our most popular phones and accessories
            </p>
          </div>
          
          <ProductGrid limit={8} />
          
          <div className="mt-12 text-center">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / WhatsApp CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium">
                10% OFF Your First Order
              </h2>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                Subscribe to our updates and get exclusive offers, new arrivals, 
                and insider-only discounts delivered directly to your WhatsApp.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                placeholder="Your phone number"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <Image
                src="/about-teaser.png"
                alt="About H-Mobile Hub"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Our Story
              </p>
              <h2 className="mt-4 font-serif text-3xl lg:text-4xl font-medium text-foreground">
                Quality Meets Affordability
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                At H-Mobile Hub, we believe everyone deserves access to quality mobile 
                technology. Since our founding, we&apos;ve been committed to bringing 
                the latest smartphones and accessories to Kenya at competitive prices, 
                backed by genuine warranties and exceptional customer service.
              </p>
              <Link href="/about">
                <Button variant="outline" className="mt-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
