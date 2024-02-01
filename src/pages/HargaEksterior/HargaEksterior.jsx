import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./HargaEksterior.css";

const HargaEksterior = () => {
  return (
    <div id="hargaeksterior">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hargaeksterior">HargaEksterior</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HargaEksterior;
