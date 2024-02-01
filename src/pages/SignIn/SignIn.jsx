import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div id="vr">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="signin">Sign In</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SignIn;
