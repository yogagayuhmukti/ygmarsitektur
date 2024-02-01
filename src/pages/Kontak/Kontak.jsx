import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Kontak.css";

const Kontak = () => {
  return (
    <div id="kontak">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="kontak">Kontak</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Kontak;
