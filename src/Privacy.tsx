export default function Privacy() {
  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen px-4 py-10">
      <section className="max-w-3xl mx-auto  bg-white p-6 rounded-2xl shadow-xl font-medium">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
          Privacy policy
        </h1>
        <p>
          Your privacy is important to us at Andal Packaging Industries. This
          Privacy Policy explains how we collect, use, and protect your data.
        </p>
        <p>Information We Collect</p>
        <ul className="list-disc list-inside">
          <li>Personal details (name, email, phone number, address).</li>
          <li>Payment information (handled securely by Razorpay).</li>
          <li>Order history and preferences.</li>
        </ul>
        <p>How We Use Information</p>
        <ul className="list-disc list-inside">
          <li>To process and deliver your orders.</li>
          <li>To communicate order updates, offers, and support.</li>
          <li>To improve our website and services.</li>
        </ul>
        <p>Data Security</p>
        <p>
          We follow strict security measures to protect your data. Payment
          details are processed securely by Razorpay and not stored on our
          servers.
        </p>
        <p>Cookies</p>
        <p>Our website may use cookies to enhance user experience.</p>
        <p>Your Rights</p>
        <p>
          You may request access, correction, or deletion of your personal data
          by contacting us.
        </p>
      </section>
    </main>
  );
}
