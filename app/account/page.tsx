"use client"

import { useState } from 'react'
import Link from 'next/link'
import { User, Package, Heart, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('login')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
    toast.success('Successfully logged in!')
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
    toast.success('Account created successfully!')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    toast.success('Successfully logged out!')
  }

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-medium text-foreground">
            My Account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Sign in or create an account to track your orders
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link href="/account/forgot-password" className="text-foreground hover:text-accent transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register" className="mt-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="register-firstName">First Name</Label>
                  <Input
                    id="register-firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-lastName">Last Name</Label>
                  <Input
                    id="register-lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-phone">Phone Number</Label>
                <Input
                  id="register-phone"
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-confirm">Confirm Password</Label>
                <Input
                  id="register-confirm"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="text-sm">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="rounded mt-1" required />
                  <span className="text-muted-foreground">
                    I agree to the{' '}
                    <Link href="/terms" className="text-foreground hover:text-accent">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-foreground hover:text-accent">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  // Logged in view
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl font-medium text-foreground">
            My Account
          </h1>
          <p className="mt-1 text-muted-foreground">
            Welcome back, John!
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            <Link 
              href="/account" 
              className="flex items-center gap-3 px-4 py-3 bg-secondary text-foreground"
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Link 
              href="/account/orders" 
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Package className="h-5 w-5" />
              Orders
            </Link>
            <Link 
              href="/account/wishlist" 
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Heart className="h-5 w-5" />
              Wishlist
            </Link>
            <Link 
              href="/account/settings" 
              className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-border p-6 lg:p-8">
            <h2 className="font-medium text-lg text-foreground pb-4 border-b border-border">
              Profile Information
            </h2>
            
            <form className="mt-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="profile-firstName">First Name</Label>
                  <Input
                    id="profile-firstName"
                    defaultValue="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-lastName">Last Name</Label>
                  <Input
                    id="profile-lastName"
                    defaultValue="Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-email">Email</Label>
                  <Input
                    id="profile-email"
                    type="email"
                    defaultValue="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-phone">Phone Number</Label>
                  <Input
                    id="profile-phone"
                    type="tel"
                    defaultValue="+254 712 345 678"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Default Delivery Address</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-address">Street Address</Label>
                    <Input
                      id="profile-address"
                      defaultValue="123 Main Street"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profile-city">City</Label>
                      <Input
                        id="profile-city"
                        defaultValue="Nairobi"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profile-county">County</Label>
                      <Input
                        id="profile-county"
                        defaultValue="Nairobi"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={() => toast.success('Profile updated!')}>
                  Save Changes
                </Button>
              </div>
            </form>
          </div>

          {/* Recent Orders */}
          <div className="mt-8 bg-card border border-border p-6 lg:p-8">
            <h2 className="font-medium text-lg text-foreground pb-4 border-b border-border">
              Recent Orders
            </h2>
            <div className="mt-6 text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto text-muted-foreground/50" />
              <p className="mt-4">No orders yet</p>
              <Link href="/shop">
                <Button variant="outline" className="mt-4">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
