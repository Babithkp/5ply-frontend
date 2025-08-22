import { useState } from "react";
import img1 from "./assets/Cardboard Golupadi Side View empty Brown.jpg";
import img2 from "./assets/Cardboard Golupadi with golu Dolls.jpg";
import img3 from "./assets/Cardboard Golupadi with Measurement.jpg";
import axios from "axios";
import { useRazorpay, type RazorpayOrderOptions } from "react-razorpay";
import { useNavigate } from "react-router";

const key_id = import.meta.env.VITE_RAZORPAY_KEY_ID;

if (!key_id) {
  throw new Error("Missing Razorpay API keys");
}

const loadScript = async (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      resolve(script);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const axiosService = axios.create({
  baseURL: "https://5ply-backend.vercel.app",
});

const initialOrderCreate = async (item: {
  title: string;
  description: string;
  price: number;
}) => {
  const response = await axiosService.post("/payment/order", item);
  return response.data;
};

const verifyPayment = async (paymentPayload: {
  orderCreationId: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
}) => {
  const response = await axiosService.post("/payment/success", paymentPayload);
  return response.data;
};

function Home() {
  const [quantity, setQuantity] = useState("1");
  const { Razorpay } = useRazorpay();
  const router = useNavigate();
  const onPurchase = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Script failed to load");
      return;
    }
    const item = {
      title: "Golu Padi",
      description:
        "5-step, 2.5ft x 2.5ft x 2.5ft, 0.5ft per step. Heavy-duty, DIY, foldable. Supports up to 20 kg per step.",
      price: parseInt(quantity),
    };

    const orderCreation = await initialOrderCreate(item);

    const options: RazorpayOrderOptions = {
      key: key_id!,
      amount: item.price * 100,
      currency: "INR",
      name: item.title,
      description: item.description,
      order_id: orderCreation.id,
      handler: async function (response) {
        const paymentPayload = {
          orderCreationId: orderCreation.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await verifyPayment(paymentPayload);
        if (result) {
          router("/success/" + orderCreation.id);
        } else {
          router("/failure");
        }
      },
    };

    const paymentObject = new Razorpay(options);
    paymentObject.open();
  };

  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
            Order Golu Padi
          </h1>

          <div className="grid gap-4 sm:grid-cols-3">
            <img
              src={img1}
              alt="Golu Padi Empty"
              className="w-full h-48 object-contain rounded-xl shadow bg-white"
            />
            <img
              src={img2}
              alt="Golu Padi with Dolls"
              className="w-full h-48 object-contain rounded-xl shadow bg-white"
            />
            <img
              src={img3}
              alt="Golu Padi Size"
              className="w-full h-48 object-contain rounded-xl shadow bg-white"
            />
          </div>

          <p className="mt-6 text-lg leading-relaxed">
            <strong>Cardboard Golu Padi:</strong> 5-step, 2.5ft x 2.5ft x 2.5ft,
            0.5ft per step. Heavy-duty, DIY, foldable. Supports up to 20 kg per
            step.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            <strong>Price Per Golu Padis:</strong> INR 1000
          </p>

          <form id="orderForm" className="mt-6 space-y-4">
            <div>
              <label className="block font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold" htmlFor="address">
                Delivery Address
              </label>
              <textarea
                id="address"
                required
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold" htmlFor="quantity">
                Number of Golu Padis
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-bold transition"
              onClick={onPurchase}
            >
              Pay ₹{parseInt(quantity) * 1000}
            </button>

            <div className="flex justify-around text-sm text-blue-60 max-md:flex-col">
              <a href="/terms-and-conditions" className="hover:border-b">
                Terms and Conditions
              </a>
              <a
                href="/refund-and-cancellation-policy"
                className="hover:border-b"
              >
                Refund & Cancellation Policy
              </a>
              <a href="/privacy-policy" className="hover:border-b">
                Privacy Policy
              </a>
              <a href="/shipping-policy" className="hover:border-b">
                Shipping Policy
              </a>
              <a href="/contactus" className="hover:border-b">
                Contact Us
              </a>
            </div>
          </form>

          <div id="thankYou" className="hidden text-center mt-8 px-4">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Thank you for your pre-order!
            </h2>
            <p className="text-gray-700 mb-4">
              We've opened WhatsApp for you to complete the order. We'll contact
              you shortly.
            </p>
            <p className="font-semibold text-lg text-gray-900">
              Your Order ID: <span id="orderIdDisplay"></span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
