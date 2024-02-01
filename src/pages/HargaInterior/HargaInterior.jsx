import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./HargaInterior.css";

const HargaInterior = () => {
  return (
    <div id="hargainterior">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hargainterior">HargaInterior</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HargaInterior;
