import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div id="faq">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="faq">FAQ</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FAQ;
