import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-8 shadow-md-sm">
      <div className="container-fluid justify-content-start-md">
        <Link
          to="/"
          className="navbar-brand text-white logoLP d-none d-sm-block offset-md-1"
        >
          Yoga Arsitektur
        </Link>
        <Link
          to="/"
          className="navbar-brand logoLP offset-md-1 fw-bold d-block d-sm-none"
        >
          Yoga Arsitektur
        </Link>
        <button
          className="navbar-toggler offset-sm-8 offset-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav offset-lg-3">
            <button>
              <HashLink className="nav-link text-black" to="/#testimonial">
                Home
              </HashLink>
            </button>
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>Portofolio</option>
                <option value="1">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Semua Portofolio
                  </HashLink>
                </option>
                <option value="2">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Rumah
                  </HashLink>
                </option>
                <option value="3">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Interior
                  </HashLink>
                </option>
                <option value="4">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Eksterior
                  </HashLink>
                </option>
                <option value="5">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Bangunan Lainnya
                  </HashLink>
                </option>
                <option value="6">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Prioject sedang dikerjakan
                  </HashLink>
                </option>
                <option value="7">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Project Selesai dikerjakan
                  </HashLink>
                </option>
              </select>
            </li>
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>360 VR & Video</option>
                <option value="1">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    360 vr
                  </HashLink>
                </option>
                <option value="2">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    video render
                  </HashLink>
                </option>
                <option value="3">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Video Edukasi
                  </HashLink>
                </option>
              </select>
            </li>
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>Harga dan Layanan</option>
                <option value="1">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Bangunan
                  </HashLink>
                </option>
                <option value="2">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Eksterior
                  </HashLink>
                </option>
                <option value="3">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design Interior
                  </HashLink>
                </option>
                <option value="4">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design 2D
                  </HashLink>
                </option>
                <option value="5">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Design 3D
                  </HashLink>
                </option>
              </select>
            </li>
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>Tentang Kami</option>
                <option value="1">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Badan Usaha
                  </HashLink>
                </option>
                <option value="2">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Tim
                  </HashLink>
                </option>
                <option value="3">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Galery
                  </HashLink>
                </option>
                <option value="4">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Ulasan
                  </HashLink>
                </option>
                <option value="5">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    FAQ
                  </HashLink>
                </option>
                <option value="6">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Kontak
                  </HashLink>
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
