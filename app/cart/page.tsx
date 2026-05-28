"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
        <h1 className="mt-6 font-serif text-3xl font-medium text-foreground">
          Your Cart is Empty
        </h1>
        <p className="mt-4 text-muted-foreground">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
        <Link href="/shop">
          <Button className="mt-8">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="font-serif text-3xl lg:text-4xl font-medium text-foreground">
        Shopping Cart
      </h1>
      <p className="mt-2 text-muted-foreground">
        {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
      </p>

      <div className="mt-12 grid lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-4 bg-card border border-border"
            >
              {/* Image */}
              <div className="relative h-32 w-32 bg-secondary shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </p>
                    <Link 
                      href={`/product/${item.id}`}
                      className="mt-1 font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="shrink-0 -mt-2 -mr-2"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  {/* Quantity */}
                  <div className="flex items-center border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-10 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-none"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>

                  {/* Price */}
                  <p className="font-medium text-foreground">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-secondary p-6 lg:p-8 sticky top-24">
            <h2 className="font-medium text-lg text-foreground">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-foreground">
                  {totalPrice >= 10000 ? 'Free' : formatPrice(500)}
                </span>
              </div>
              <div className="pt-4 border-t border-border flex justify-between">
                <span className="font-medium text-foreground">Total</span>
                <span className="font-medium text-foreground">
                  {formatPrice(totalPrice >= 10000 ? totalPrice : totalPrice + 500)}
                </span>
              </div>
            </div>

            {totalPrice < 10000 && (
              <p className="mt-4 text-xs text-muted-foreground">
                Add {formatPrice(10000 - totalPrice)} more for free delivery
              </p>
            )}

            <Link href="/checkout">
              <Button className="w-full mt-6" size="lg">
                Proceed to Checkout
              </Button>
            </Link>

            <Link href="/shop">
              <Button variant="outline" className="w-full mt-4">
                Continue Shopping
              </Button>
            </Link>

            {/* Payment Methods */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                We Accept
              </p>
              <p className="mt-2 text-sm text-foreground">
                M-Pesa • Cash on Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
