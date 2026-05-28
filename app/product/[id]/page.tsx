"use client"

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ShoppingBag, Heart, Truck, Shield, ArrowLeft, MessageCircle } from 'lucide-react'
import { getProductById, formatPrice, products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/products/product-card'
import { toast } from 'sonner'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addToCart } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering the ${product.name} (${formatPrice(product.price)}). Is it available?`
    )
    window.open(`https://wa.me/254754910314?text=${message}`, '_blank')
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-secondary overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p>
            
            <h1 className="mt-2 font-serif text-3xl lg:text-4xl font-medium text-foreground">
              {product.name}
            </h1>
            
            <p className="mt-4 text-2xl font-medium text-foreground">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mt-6">
              {product.inStock ? (
                <span className="inline-flex items-center gap-2 text-sm text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-red-600">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  Out of Stock
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWhatsAppOrder}
                className="flex-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Free Delivery</p>
                  <p className="text-sm text-muted-foreground">Within Nairobi for orders over KES 10,000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Warranty</p>
                  <p className="text-sm text-muted-foreground">Genuine manufacturer warranty</p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="mt-8 p-4 bg-secondary">
              <p className="text-sm font-medium text-foreground">Payment Options</p>
              <p className="mt-2 text-sm text-muted-foreground">
                M-Pesa • Cash on Delivery • Bank Transfer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border mt-16 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
