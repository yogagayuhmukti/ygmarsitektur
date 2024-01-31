import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, BadanUsaha } from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
      </Routes>
      <Routes>
        <Route path="/badanusaha" element={<BadanUsaha></BadanUsaha>} />
      </Routes>
    </Router>
  );
};

export default Rute;
