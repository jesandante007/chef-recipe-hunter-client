import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-274px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
