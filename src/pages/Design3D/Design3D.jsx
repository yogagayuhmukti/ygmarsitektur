import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Design3D.css";

const Design3D = () => {
  return (
    <div id="design3d">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="design3d">Design3D</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Design3D;
