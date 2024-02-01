import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Ulasan.css";

const Ulasan = () => {
  return (
    <div id="ulasan">
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" ulasan"> Ulasan</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Ulasan;
