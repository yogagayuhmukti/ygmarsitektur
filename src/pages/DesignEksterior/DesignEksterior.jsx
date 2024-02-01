import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./DesignEksterior.css";

const DesignEksterior = () => {
  return (
    <div id="designeksterior">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="designeksterior">DesignEksterior</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DesignEksterior;
