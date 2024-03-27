import { Route } from "react-router-dom";
import React from "react";
import { Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PaymentPage from "./pages/Payment";
import AboutUsPage from "./pages/AboutUs";
import MemberShipPage from "./pages/MemberShip";
import TargetPage from "./pages/Target";
import InstructorPage from "./pages/Instructor";
import DashboardPage from "./pages/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/membership" element={<MemberShipPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/target" element={<TargetPage />} />
      <Route path="/instructor" element={<InstructorPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default Router;
