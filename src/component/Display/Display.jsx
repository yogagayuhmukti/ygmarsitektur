import React from "react";
import { dis_1, dis_2, dis_3, dis_4, dis_5, dis_6 } from "../../assets";
import "./Display.css";

const Display = () => {
  return (
    <div className="display">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={dis_1} class="w-100 imgdis" alt="dis_1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Selamat Datang di Yoga Arsitektur</h5>
              <p>Bangunan Anda Terjamin Aman, Nyaman, Murah, dan Indah</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dis_2} class="w-100 imgdis" alt="dis_2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kami Menawarkan Banyak sekali Piliah Design</h5>
              <p>Minimalis, Industrial, Tropis, Tradisional, hingga Modern</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dis_3} class="w-100 imgdis" alt="dis_3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Dengan Harga Kompetitif</h5>
              <p>Mulai 30 Ribu Rupiah Jadikan Bangunan Impian Anda</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dis_4} class="w-100 imgdis" alt="dis_4" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Bebas Revisi Design</h5>
              <p>Revisi 3 Kali, Hingga Berkali-kali Sampai Bangunan Jadi</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dis_5} class="w-100 imgdis" alt="dis_5" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kami Juga Menyediakan Jasa Kontraktor Terbaik</h5>
              <p>Pekerjaan Cepat, Aman, Rapi, Berkualitas, dan Murah</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dis_6} class="w-100 imgdis" alt="dis_6" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Segera Bangun Impian Anda</h5>
              <p>Design Terbaik untuk Impian Anda</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Display;
