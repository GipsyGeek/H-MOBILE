"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('mpesa')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const deliveryFee = totalPrice >= 10000 ? 0 : 500
  const finalTotal = totalPrice + deliveryFee

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <h1 className="font-serif text-3xl font-medium text-foreground">
          No Items in Cart
        </h1>
        <p className="mt-4 text-muted-foreground">
          Please add items to your cart before checking out.
        </p>
        <Link href="/shop">
          <Button className="mt-8">Browse Products</Button>
        </Link>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const customerName = formData.get('firstName') + ' ' + formData.get('lastName')
    const phone = formData.get('phone')

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Generate order summary for WhatsApp
    const orderItems = items
      .map(item => `- ${item.name} x${item.quantity} (${formatPrice(item.price * item.quantity)})`)
      .join('\n')

    const orderMessage = encodeURIComponent(
      `*New Order from H-Mobile Hub Website*\n\n` +
      `*Customer:* ${customerName}\n` +
      `*Phone:* ${phone}\n\n` +
      `*Order Items:*\n${orderItems}\n\n` +
      `*Subtotal:* ${formatPrice(totalPrice)}\n` +
      `*Delivery:* ${deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}\n` +
      `*Total:* ${formatPrice(finalTotal)}\n\n` +
      `*Payment Method:* ${paymentMethod === 'mpesa' ? 'M-Pesa' : 'Cash on Delivery'}`
    )

    // Clear cart and redirect
    clearCart()
    toast.success('Order placed successfully!')
    
    // Open WhatsApp with order details
    window.open(`https://wa.me/254754910314?text=${orderMessage}`, '_blank')
    
    router.push('/checkout/success')
    setIsSubmitting(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Back Link */}
      <Link 
        href="/cart" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="mt-6 font-serif text-3xl lg:text-4xl font-medium text-foreground">
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-12 grid lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Information */}
            <section>
              <h2 className="font-medium text-lg text-foreground pb-4 border-b border-border">
                Contact Information
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
              </div>
            </section>

            {/* Delivery Address */}
            <section>
              <h2 className="font-medium text-lg text-foreground pb-4 border-b border-border">
                Delivery Address
              </h2>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      placeholder="Nairobi"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="county">County *</Label>
                    <Input
                      id="county"
                      name="county"
                      required
                      placeholder="Nairobi"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Delivery Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any special delivery instructions..."
                    rows={3}
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="font-medium text-lg text-foreground pb-4 border-b border-border">
                Payment Method
              </h2>
              <div className="mt-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 p-4 border border-border cursor-pointer hover:bg-secondary transition-colors">
                    <RadioGroupItem value="mpesa" id="mpesa" />
                    <Label htmlFor="mpesa" className="flex-1 cursor-pointer">
                      <span className="font-medium">M-Pesa</span>
                      <span className="block text-sm text-muted-foreground">
                        Pay via M-Pesa mobile money
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border border-border cursor-pointer hover:bg-secondary transition-colors">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <span className="font-medium">Cash on Delivery</span>
                      <span className="block text-sm text-muted-foreground">
                        Pay when you receive your order
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 lg:p-8 sticky top-24">
              <h2 className="font-medium text-lg text-foreground">
                Order Summary
              </h2>

              {/* Items */}
              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 bg-card shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-foreground">
                    {deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                By placing your order, you agree to our{' '}
                <Link href="/terms" className="underline hover:text-foreground">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
