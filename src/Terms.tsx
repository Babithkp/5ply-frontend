export default function Terms() {  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen px-4 py-10">
      <section className="max-w-3xl mx-auto  bg-white p-6 rounded-2xl shadow-xl font-medium">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
          Terms and Conditions
        </h1>
        <p>
          Welcome to Andal Packaging Industries (“Company”, “we”, “our”, “us”).
          These Terms & Conditions (“Terms”) govern your purchase and use of our
          products through our website. By placing an order, you agree to these
          Terms.
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Products
            <p>
              We manufacture and sell cardboard-based products. All product
              descriptions, prices, and availability are subject to change
              without prior notice.
            </p>
          </li>
          <li>
            Orders & Payment
            <ul className="list-disc list-inside">
              <li>
                Orders are confirmed only after successful payment via Razorpay.
              </li>
              <li>
                We reserve the right to cancel any order in case of suspected
                fraud or incorrect information.
              </li>
            </ul>
          </li>
          <li>
            Shipping & Delivery
            <ul className="list-disc list-inside">
              <li>
                Products will be shipped to the address provided at checkout.
              </li>
              <li>
                Delivery times may vary depending on location and logistics
                partners.
              </li>
              <li>
                We are not responsible for delays caused by courier partners.
              </li>
            </ul>
          </li>
          <li>
            Refunds & Cancellations
            <p>
              Refunds, returns, and cancellations are subject to our Refund &
              Cancellation Policy.
            </p>
          </li>
          <li>
            Intellectual Property
            <p>
              All product designs, branding, and content are owned by Andal packaging industries.
            </p>
          </li>
          <li>
            Limitation of Liability
            <p>
              We are not liable for damages arising from misuse of our products.
            </p>
          </li>
          <li>
            Governing Law
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
