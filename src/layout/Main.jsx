import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-274px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
