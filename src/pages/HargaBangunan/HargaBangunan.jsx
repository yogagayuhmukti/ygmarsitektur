import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./HargaBangunan.css";

const HargaBangunan = () => {
  return (
    <div id="HargaBangunan">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hargabangunan">HargaBangunan</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HargaBangunan;
