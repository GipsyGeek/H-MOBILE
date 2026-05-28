export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="mt-6 text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to H-Mobile Hub & Accessories. These Terms and Conditions govern your 
                use of our website and the purchase of products from us. By accessing our 
                website or placing an order, you agree to be bound by these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">2. Products and Pricing</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  All products displayed on our website are subject to availability. We reserve 
                  the right to discontinue any product at any time.
                </p>
                <p>
                  Prices are displayed in Kenyan Shillings (KES) and are inclusive of any 
                  applicable taxes. We reserve the right to change prices without prior notice, 
                  but any price changes will not affect orders that have already been confirmed.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">3. Orders and Payment</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  By placing an order, you are making an offer to purchase products subject to 
                  these terms. We reserve the right to refuse or cancel any order for any reason.
                </p>
                <p>
                  Payment must be made in full before delivery for M-Pesa orders. Cash on 
                  Delivery orders must be paid upon receipt of the products.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">4. Delivery</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  We aim to deliver products within the estimated timeframes, but delivery times 
                  are not guaranteed. We are not liable for any delays beyond our control.
                </p>
                <p>
                  Risk of loss passes to you upon delivery of the products. Please inspect 
                  products upon delivery and report any damage immediately.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">5. Returns and Refunds</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  You may return unopened products in their original packaging within 7 days 
                  of delivery for a full refund, minus any shipping costs.
                </p>
                <p>
                  Defective products may be returned for replacement or refund within the 
                  warranty period. Please contact us before returning any item.
                </p>
                <p>
                  Refunds will be processed within 3-5 business days after we receive and 
                  inspect the returned product.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">6. Warranty</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  All products come with manufacturer warranty as specified in the product 
                  description. Warranty claims should be directed to the manufacturer or 
                  authorized service center.
                </p>
                <p>
                  Warranty does not cover damage caused by misuse, accidents, unauthorized 
                  modifications, or normal wear and tear.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, H-Mobile Hub shall not be liable for 
                any indirect, incidental, special, or consequential damages arising from your 
                use of our website or products.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, images, logos, and graphics, is 
                the property of H-Mobile Hub or its licensors and is protected by intellectual 
                property laws.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of Kenya. Any disputes shall be subject to the exclusive 
                jurisdiction of the courts of Kenya.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: info@hmobilehub.co.ke</li>
                <li>Phone: +254 754 910 314</li>
                <li>WhatsApp: +254 754 910 314</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. 
                Changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
