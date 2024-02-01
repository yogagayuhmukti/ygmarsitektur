import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./VideoEdukasi.css";

const VideoEdukasi = () => {
  return (
    <div id="videoedukasi">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="videoedukasi"> VideoEdukasi</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default VideoEdukasi;
