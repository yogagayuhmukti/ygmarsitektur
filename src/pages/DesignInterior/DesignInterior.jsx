import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./DesignInterior.css";

const DesignInterior = () => {
  return (
    <div id="designinterior">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="designinterior">DesignInterior</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DesignInterior;
