import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Galery.css";

const Galery = () => {
  return (
    <div id="galery">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="galery">Galery</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Galery;
