import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div id="LogIn">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="login">Sign In</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LogIn;
