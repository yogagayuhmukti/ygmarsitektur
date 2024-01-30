import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Display from "../Display";
import Deskripsi from "../Deskripsi";
import MenuUtama from "../MenuUtama";
import "./YGMAR.css";

const YGMAR = () => {
  return (
    <div className="lPage">
      <div className="ygmarlp">
        <Navbar></Navbar>
        <Display></Display>
        <Deskripsi></Deskripsi>
        <MenuUtama></MenuUtama>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default YGMAR;
