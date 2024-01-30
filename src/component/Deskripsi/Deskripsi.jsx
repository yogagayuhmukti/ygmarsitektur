import React from "react";
import "./Deskripsi.css";

const Deskripsi = () => {
  return (
    <div className="deskripsi">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
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
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div>Arsitektur : Eksterior, Interior, 2D, 3D, Video</div>
              <div>Kontraktor : Biaya Tukang, Borongan, Harian</div>
              <div>Material : Harga Semua Material dan Furniture</div>
              <div>Memenuhi Kebutuhan Anda dari 0</div>
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
