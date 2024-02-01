import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  BadanUsaha,
  Design2D,
  Design3D,
  DesignBangunanLainnya,
  DesignEksterior,
  DesignInterior,
  DesignRumah,
  FAQ,
  Galery,
  HargaBangunan,
  HargaEksterior,
  HargaInterior,
  Kontak,
  ProjectSedangDikerjakan,
  ProjectSelesaiDikerjakan,
  Tim,
  Ulasan,
  VideoEdukasi,
  VideoRender,
  Vr,
  SignIn,
  LogIn,
} from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
      </Routes>
      <Routes>
        <Route path="/badanusaha" element={<BadanUsaha></BadanUsaha>} />
      </Routes>
      <Routes>
        <Route path="/design2d" element={<Design2D></Design2D>} />
      </Routes>
      <Routes>
        <Route path="/design3d" element={<Design3D></Design3D>} />
      </Routes>
      <Routes>
        <Route
          path="/designbangunanlainnya"
          element={<DesignBangunanLainnya></DesignBangunanLainnya>}
        />
      </Routes>
      <Routes>
        <Route
          path="/designeksterior"
          element={<DesignEksterior></DesignEksterior>}
        />
      </Routes>
      <Routes>
        <Route
          path="/designinterior"
          element={<DesignInterior></DesignInterior>}
        />
      </Routes>
      <Routes>
        <Route path="/designrumah" element={<DesignRumah></DesignRumah>} />
      </Routes>
      <Routes>
        <Route path="/faq" element={<FAQ></FAQ>} />
      </Routes>
      <Routes>
        <Route path="/galery" element={<Galery></Galery>} />
      </Routes>
      <Routes>
        <Route
          path="/hargabangunan"
          element={<HargaBangunan></HargaBangunan>}
        />
      </Routes>
      <Routes>
        <Route
          path="/hargaeksterior"
          element={<HargaEksterior></HargaEksterior>}
        />
      </Routes>
      <Routes>
        <Route path="hargainterior" element={<HargaInterior></HargaInterior>} />
      </Routes>
      <Routes>
        <Route path="/kontak" element={<Kontak></Kontak>} />
      </Routes>
      <Routes>
        <Route
          path="/projectsedangdikerjakan"
          element={<ProjectSedangDikerjakan></ProjectSedangDikerjakan>}
        />
      </Routes>
      <Routes>
        <Route
          path="/projectselesaidikerjakan"
          element={<ProjectSelesaiDikerjakan></ProjectSelesaiDikerjakan>}
        />
      </Routes>
      <Routes>
        <Route path="/tim" element={<Tim></Tim>} />
      </Routes>
      <Routes>
        <Route path="/ulasan" element={<Ulasan></Ulasan>} />
      </Routes>
      <Routes>
        <Route path="/videoedukasi" element={<VideoEdukasi></VideoEdukasi>} />
      </Routes>
      <Routes>
        <Route path="/videorender" element={<VideoRender></VideoRender>} />
      </Routes>
      <Routes>
        <Route path="/vr" element={<Vr></Vr>} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignIn></SignIn>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LogIn></LogIn>} />
      </Routes>
    </Router>
  );
};

export default Rute;
