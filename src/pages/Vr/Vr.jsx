import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Vr.css";

const Vr = () => {
  return (
    <div id="vr">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="vr">Vr</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Vr;
