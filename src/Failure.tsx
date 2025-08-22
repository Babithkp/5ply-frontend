import { useNavigate } from "react-router";export default function Failure() {
  const navigate = useNavigate();
  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen px-4 py-10">
      <section className="max-w-3xl mx-auto  bg-white p-6 rounded-2xl shadow-xl font-medium">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
          Payment Failed
        </h1>
        <p> Sorry, we couldn't process your payment.</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl text-lg font-bold transition"
        >
          Back to Home
        </button>
      </section>
    </main>
  );
}
