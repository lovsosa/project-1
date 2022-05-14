import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sponsors from "./Sponsors/Sponsors";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Layout;
