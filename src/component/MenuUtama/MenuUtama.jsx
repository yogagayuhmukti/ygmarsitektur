import React from "react";
import { menu_1, menu_2, menu_3 } from "../../assets";
import "./MenuUtama.css";

const MenuUtama = () => {
  return (
    <div className="menuutama d-flex">
      <div class="card cardmenu">
        <img src={menu_1} class="card-img-top" alt="menu_1" />
        <div class="card-body">
          <h5 class="card-title">ARSITEKTUR</h5>
          <p class="card-text">Keamanan, Kenyamanan, Keindahan dan Murah</p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div class="card cardmenu">
        <img src={menu_2} class="card-img-top" alt="menu_2" />
        <div class="card-body">
          <h5 class="card-title">KONTRAKTOR</h5>
          <p class="card-text">Murah, berkualitas, dan Pengerjaan Cepat</p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div class="card cardmenu">
        <img src={menu_3} class="card-img-top" alt="menu_3" />
        <div class="card-body">
          <h5 class="card-title">MATERIAL & FURNITURE</h5>
          <p class="card-text">Murah, Berkualitas, dan Beraneka Ragam</p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default MenuUtama;
