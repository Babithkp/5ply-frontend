import img3 from "./assets/Outofstock.png";import img1 from "./assets/white-cardboard.jpg";

// const key_id = import.meta.env.VITE_RAZORPAY_KEY_ID;

// if (!key_id) {
//   throw new Error("Missing Razorpay API keys");
// }

// const loadScript = async (src: string) => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = () => {
//       resolve(script);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// const axiosService = axios.create({
//   baseURL: "https://5ply-backend.vercel.app",
//   // baseURL: "http://localhost:3000",
// });

// const initialOrderCreate = async (item: {
//   title: string;
//   description: string;
//   price: number;
// }) => {
//   const response = await axiosService.post("/payment/order", item);
//   return response.data;
// };

// const verifyPayment = async (paymentPayload: {
//   orderCreationId: string;
//   razorpayPaymentId: string;
//   razorpayOrderId: string;
// }) => {
//   const response = await axiosService.post("/payment/success", paymentPayload);
//   return response.data;
// };

// const uploadToGoogleSheet = async (data: {
//   OrderId?: string;
//   Name: string;
//   Phone: string;
//   Address: string;
//   Quantity: string;
// }) => {
//   try {
//     const response = await axiosService.post("/payment/capture", data);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

function Home() {
  // const [quantity, setQuantity] = useState("1");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [loading, setLoading] = useState(false);
  // const { Razorpay } = useRazorpay();
  // const router = useNavigate();

  // const onPurchase = async () => {
  //   if (name === "" || phone === "" || address === "" || quantity === "") {
  //     alert("Please fill all the fields");
  //     return;
  //   }
  //   if (parseInt(quantity) < 1) {
  //     alert("Please enter a valid quantity");
  //     return;
  //   }
  //   setLoading(true);
  //   const response = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );
  //   if (!response) {
  //     alert("Script failed to load");
  //     return;
  //   }
  //   const item = {
  //     title: "Andal Packaging Industries",
  //     description:
  //       "5-step, 2.5ft x 2.5ft x 2.5ft, 0.5ft per step. Heavy-duty, DIY, foldable. Supports up to 20 kg per step.",
  //     price: parseInt(quantity) * 1300,
  //   };

  //   const orderCreation = await initialOrderCreate(item);

  //   const options: RazorpayOrderOptions = {
  //     key: key_id!,
  //     amount: item.price * 100,
  //     currency: "INR",
  //     name: item.title,
  //     description: item.description,
  //     order_id: orderCreation.id,
  //     handler: async function (response) {
  //       const paymentPayload = {
  //         orderCreationId: orderCreation.id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };

  //       const result = await verifyPayment(paymentPayload);
  //       if (result) {
  //         const data = {
  //           OrderId: orderCreation.id,
  //           Name: name,
  //           Phone: phone,
  //           Address: address,
  //           Quantity: quantity,
  //         };
  //         const message = `Order: Cardboard Golu Padi\nOrder ID: ${orderCreation.id}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nQuantity: ${quantity}`;
  //         setLoading(true);
  //         const result = await uploadToGoogleSheet(data);
  //         setLoading(false);
  //         if (result) {
  //           router(`/success/${orderCreation.id}`);
  //           const waURL = `https://wa.me/918220626325?text=${encodeURIComponent(
  //             message
  //           )}`;
  //           window.location.href = waURL;
  //         }
  //       } else {
  //         router("/failure");
  //       }
  //     },
  //   };

  //   const paymentObject = new Razorpay(options);
  //   paymentObject.open();
  //   setLoading(false);
  // };

  return (
    <main className="bg-amber-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
            Order Golu Padi
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-green-500 text-center font-medium">
            Thank you for your order and continued support
          </p>
          <p className="mb-4 text-lg leading-relaxed text-green-500 text-center font-medium">
            we truly value your trust in us
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={img1}
              alt="white cardboard"
              className="h-48 w-full object-contain rounded-xl shadow "
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
            For assembling related help refer this video:{" "}
            <a
              href="https://youtu.be/YR8LQELUOco"
              target="_blank"
              className="bg-green-500 p-2 rounded-lg text-white font-medium"
            >
              Video Link
            </a>
          </p>

          <p className="mt-4 text-lg leading-relaxed text-red-500  font-medium">
            Thank you for your orders this year. This item will be open for
            pre-order starting from next year's Krishna Janmashtami.
          </p>
          <p className=" text-lg leading-relaxed text-red-500  font-medium">
            We aren't accepting orders anymore.
          </p>

          {/* <p className="mt-6 text-lg leading-relaxed text-orange-700 font-medium">
            Currently the brown color golu padi is out of stock
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            You can order the white golu padis, and its a limited stock item.
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            <strong>Price Per Golu Padis (white):</strong> INR 1300
          </p> */}

          {/* <form id="orderForm" className="mt-6 space-y-4">
            <div>
              <label className="block font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold" htmlFor="address">
                Delivery Address (with pincode)
              </label>
              <textarea
                id="address"
                required
                className="w-full px-4 py-2 border rounded-lg"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
              disabled={loading}
            >
              {loading ? "Loading..." : "Pay ₹" + parseInt(quantity) * 1300}
            </button>

            
          </form> */}
          <div className="flex justify-around text-sm text-blue-60 max-md:flex-col mt-10">
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
        </div>
      </div>
    </main>
  );
}

export default Home;
