export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-6 text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                H-Mobile Hub & Accessories (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website or make a purchase from us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and shipping address</li>
                <li>Payment information (processed securely via M-Pesa)</li>
                <li>Order history and preferences</li>
                <li>Communications you send to us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information with service providers who assist us in operating 
                our business (such as delivery services), but only to the extent necessary to 
                provide our services to you.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our 
                website. You can control cookies through your browser settings, but disabling 
                them may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground mt-4 space-y-2">
                <li>Email: info@hmobilehub.co.ke</li>
                <li>Phone: +254 754 910 314</li>
                <li>WhatsApp: +254 754 910 314</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
