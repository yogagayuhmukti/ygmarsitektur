import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./DesignRumah.css";

const DesignRumah = () => {
  return (
    <div id="designrumah">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="designrumah">DesignRumah</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DesignRumah;
