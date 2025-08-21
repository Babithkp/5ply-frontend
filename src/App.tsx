import {  Routes, Route } from "react-router";
import Home from "./Home";
import Terms from "./Terms";
import Refund from "./Refund";
import Privacy from "./Privacy";
import Contactus from "./Contactus";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/refund-and-cancellation-policy" element={<Refund />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>
  )
}
