import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Display from "../Display";
import "./YGMAR.css";

const YGMAR = () => {
  return (
    <div className="lPage">
      <div className="ygmarlp">
        <Navbar></Navbar>
        <Display></Display>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default YGMAR;
