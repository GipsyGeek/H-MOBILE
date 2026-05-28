"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from '@/components/products/product-card'
import { products, categories } from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  let filteredProducts = products
  if (selectedCategory !== 'All') {
    filteredProducts = products.filter((p) => p.category === selectedCategory)
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
      break
    case 'name':
      filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name))
      break
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl lg:text-5xl font-medium text-foreground">
          Shop
        </h1>
        <p className="mt-4 text-muted-foreground">
          Discover our complete collection of premium mobile phones and accessories
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 pb-8 border-b border-border">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-muted-foreground">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  )
}
