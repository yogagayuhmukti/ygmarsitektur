import React from "react";
import { menu_1, menu_2, menu_3 } from "../../assets";
import "./MenuUtama.css";

const MenuUtama = () => {
  return (
    <div className="menuutama d-flex">
      <div className="card cardmenu">
        <img src={menu_1} className="card-img-top" alt="menu_1" />
        <div className="card-body">
          <h5 className="card-title">ARSITEKTUR</h5>
          <p className="card-text">Keamanan, Kenyamanan, Keindahan dan Murah</p>
          <a href="/architecture" className="btn btn-warning btnmnutm">
            Cek Arsitektur
          </a>
        </div>
      </div>
      <div className="card cardmenu">
        <img src={menu_2} className="card-img-top" alt="menu_2" />
        <div className="card-body">
          <h5 className="card-title">KONTRAKTOR</h5>
          <p className="card-text">Murah, berkualitas, dan Pengerjaan Cepat</p>
          <a href="/kontraktor" className="btn btn-warning btnmnutm">
            Cek Kontraktor
          </a>
        </div>
      </div>
      <div className="card cardmenu">
        <img src={menu_3} className="card-img-top" alt="menu_3" />
        <div className="card-body">
          <h5 className="card-title">MATERIAL & FURNITURE</h5>
          <p className="card-text">Murah, Berkualitas, dan Beraneka Ragam</p>
          <a href="/materialfurniture" className="btn btn-warning btnmnutm">
            Cek Material & Furniture
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuUtama;
