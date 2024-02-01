import React from "react";
import "./Deskripsi.css";

const Deskripsi = () => {
  return (
    <div className="deskripsi">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Semua Kebutuhan Bangunan Ada Disini
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div>
                <h5>Arsitektur :</h5> Eksterior, Interior, 2D, 3D, Video
              </div>
              <div>
                <h5>Kontraktor :</h5> Biaya Tukang, Borongan, Harian
              </div>
              <div>
                <h5>Material :</h5> Harga Semua Material dan Furniture
              </div>
              <div className="deskrip0">Memenuhi Kebutuhan Anda dari 0</div>
              <div>
                Pesan Arsitektur, Lalu Pilih Kontraktor, Sesuaikan Harga dengan
                Material dan Furniture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
