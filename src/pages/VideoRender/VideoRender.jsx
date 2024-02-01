import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./VideoRender.css";

const VideoRender = () => {
  return (
    <div id="videorender">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="videorender"> VideoRender</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default VideoRender;
