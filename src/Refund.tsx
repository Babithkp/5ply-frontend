export default function Refund() {
  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen px-4 py-10">
      <section className="max-w-3xl mx-auto  bg-white p-6 rounded-2xl shadow-xl font-medium">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
          Refund & Cancellation Policy
        </h1>
        <p>At Andal Packaging Industries , we strive to provide the highest quality cardboard products.</p>
        <p>Cancellations</p>
        <ul className="list-disc list-inside">
            <li>Once an order is placed, it cannot be cancelled under any circumstances.</li>
            <li>We request customers to carefully review their order details before completing payment.</li>
        </ul>
        <p>Refunds & Returns</p>
        <ul className="list-disc list-inside">
            <li>Wrong product delivered.</li>
            <li>We do not provide refunds once the order has been placed and confirmed</li>
        </ul>
        <p>For refund/cancellation support, contact us at </p>
        <p>andalpackaging@gmail.com.</p>
      </section>
    </main>
  );
}
