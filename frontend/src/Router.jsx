import { Route } from "react-router-dom";
import React from "react";
import { Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PaymentPage from "./pages/Payment";
import AboutUsPage from "./pages/AboutUs";
import MemberShipPage from "./pages/MemberShip";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/membership" element={<MemberShipPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default Router;
