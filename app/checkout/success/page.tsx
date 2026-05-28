import Link from 'next/link'
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
      <div className="flex justify-center">
        <CheckCircle className="h-20 w-20 text-green-600" />
      </div>
      
      <h1 className="mt-8 font-serif text-3xl lg:text-4xl font-medium text-foreground">
        Order Placed Successfully!
      </h1>
      
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Thank you for your order. We&apos;ve received your request and will contact you 
        shortly to confirm the details and arrange payment/delivery.
      </p>

      <div className="mt-8 p-6 bg-secondary text-left">
        <h2 className="font-medium text-foreground">What happens next?</h2>
        <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              1
            </span>
            <span>Our team will review your order and verify availability</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              2
            </span>
            <span>We&apos;ll contact you via WhatsApp or phone to confirm</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              3
            </span>
            <span>Arrange payment (M-Pesa or Cash on Delivery)</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              4
            </span>
            <span>Your order will be delivered to your address</span>
          </li>
        </ol>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://wa.me/254754910314"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full sm:w-auto">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </a>
        <Link href="/shop">
          <Button className="w-full sm:w-auto">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Have questions? Contact us at{' '}
        <a href="tel:+254754910314" className="text-foreground hover:text-accent">
          +254 754 910 314
        </a>
      </p>
    </div>
  )
}
