import React from "react";
import { dis_1, dis_2, dis_3, dis_4, dis_5, dis_6 } from "../../assets";
import "./Display.css";

const Display = () => {
  return (
    <div className="display">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={dis_1} className="w-100 imgdis" alt="dis_1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Selamat Datang di Yoga Arsitektur</h5>
              <p>Bangunan Anda Terjamin Aman, Nyaman, Murah, dan Indah</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={dis_2} className="w-100 imgdis" alt="dis_2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kami Menawarkan Banyak sekali Piliah Design</h5>
              <p>Minimalis, Industrial, Tropis, Tradisional, hingga Modern</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={dis_3} className="w-100 imgdis" alt="dis_3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Dengan Harga Kompetitif</h5>
              <p>Mulai 30 Ribu Rupiah Jadikan Bangunan Impian Anda</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={dis_4} className="w-100 imgdis" alt="dis_4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bebas Revisi Design</h5>
              <p>Revisi 3 Kali, Hingga Berkali-kali Sampai Bangunan Jadi</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={dis_5} className="w-100 imgdis" alt="dis_5" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kami Juga Menyediakan Jasa Kontraktor Terbaik</h5>
              <p>Pekerjaan Cepat, Aman, Rapi, Berkualitas, dan Murah</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={dis_6} className="w-100 imgdis" alt="dis_6" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Segera Bangun Impian Anda</h5>
              <p>Design Terbaik untuk Impian Anda</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Display;
