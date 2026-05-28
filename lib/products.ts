import type { Product } from './cart-context'

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 189999,
    image: '/products/iphone-15-pro.png',
    category: 'Smartphones',
    description: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 179999,
    image: '/products/samsung-s24.png',
    category: 'Smartphones',
    description: 'Premium Android flagship with S Pen, 200MP camera, and AI-powered features.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    price: 149999,
    image: '/products/pixel-8-pro.png',
    category: 'Smartphones',
    description: 'Pure Android experience with incredible AI camera features and 7 years of updates.',
    inStock: true,
  },
  {
    id: '4',
    name: 'OnePlus 12',
    price: 109999,
    image: '/products/oneplus-12.png',
    category: 'Smartphones',
    description: 'Flagship killer with Snapdragon 8 Gen 3, Hasselblad cameras, and 100W charging.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Xiaomi 14 Pro',
    price: 89999,
    image: '/products/xiaomi-14.png',
    category: 'Smartphones',
    description: 'Leica optics, premium build quality, and flagship specs at an incredible price.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Tecno Phantom X2 Pro',
    price: 59999,
    image: '/products/tecno-phantom.png',
    category: 'Smartphones',
    description: 'Retractable portrait lens, MediaTek Dimensity 9000, and stunning curved display.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Premium Leather Case',
    price: 3499,
    image: '/products/leather-case.png',
    category: 'Cases',
    description: 'Handcrafted genuine leather case with soft microfiber lining. Available for all major brands.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Clear Protective Case',
    price: 1999,
    image: '/products/clear-case.png',
    category: 'Cases',
    description: 'Crystal clear TPU case with military-grade drop protection.',
    inStock: true,
  },
  {
    id: '9',
    name: '65W GaN Charger',
    price: 4999,
    image: '/products/gan-charger.png',
    category: 'Chargers',
    description: 'Ultra-compact GaN charger supporting PD 3.0 and QC 5.0 for lightning-fast charging.',
    inStock: true,
  },
  {
    id: '10',
    name: 'Wireless Charging Pad',
    price: 3999,
    image: '/products/wireless-charger.png',
    category: 'Chargers',
    description: '15W fast wireless charging with Qi2 magnetic alignment for perfect positioning.',
    inStock: true,
  },
  {
    id: '11',
    name: 'USB-C to Lightning Cable',
    price: 1499,
    image: '/products/usb-cable.png',
    category: 'Cables',
    description: 'MFi certified braided cable with 20W fast charging support. 2m length.',
    inStock: true,
  },
  {
    id: '12',
    name: 'AirPods Pro 2',
    price: 34999,
    image: '/products/airpods-pro.png',
    category: 'Audio',
    description: 'Premium wireless earbuds with adaptive audio, conversation awareness, and USB-C.',
    inStock: true,
  },
  {
    id: '13',
    name: 'Samsung Galaxy Buds3 Pro',
    price: 29999,
    image: '/products/galaxy-buds.png',
    category: 'Audio',
    description: 'Premium sound with AI-powered ANC and 360 Audio for immersive listening.',
    inStock: true,
  },
  {
    id: '14',
    name: 'Tempered Glass Screen Protector',
    price: 999,
    image: '/products/screen-protector.png',
    category: 'Protection',
    description: '9H hardness tempered glass with oleophobic coating. Easy bubble-free installation.',
    inStock: true,
  },
  {
    id: '15',
    name: 'Car Phone Mount',
    price: 2499,
    image: '/products/car-mount.png',
    category: 'Accessories',
    description: 'Magnetic car mount with MagSafe compatibility and 360° rotation.',
    inStock: true,
  },
  {
    id: '16',
    name: 'Power Bank 20000mAh',
    price: 5999,
    image: '/products/power-bank.png',
    category: 'Power',
    description: 'High-capacity power bank with 65W output and pass-through charging.',
    inStock: true,
  },
]

export const categories = [
  'All',
  'Smartphones',
  'Cases',
  'Chargers',
  'Cables',
  'Audio',
  'Protection',
  'Accessories',
  'Power',
]

export function formatPrice(price: number): string {
  return `KES ${price.toLocaleString()}`
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  )
}
