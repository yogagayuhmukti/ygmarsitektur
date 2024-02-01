import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Design2D.css";

const Design2D = () => {
  return (
    <div id="design2d">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="design2d">Design2D</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Design2D;
