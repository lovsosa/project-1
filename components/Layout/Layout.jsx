import React from "react";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
