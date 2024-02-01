import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Tim.css";

const Tim = () => {
  return (
    <div id="tim">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="tim">tim</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Tim;
