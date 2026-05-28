"use client"

import { products } from '@/lib/products'
import { ProductCard } from './product-card'

interface ProductGridProps {
  category?: string
  limit?: number
}

export function ProductGrid({ category, limit }: ProductGridProps) {
  let filteredProducts = products

  if (category && category !== 'All') {
    filteredProducts = products.filter((p) => p.category === category)
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
