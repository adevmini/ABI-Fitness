import React from "react";
import "./MainLayout.scss";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
