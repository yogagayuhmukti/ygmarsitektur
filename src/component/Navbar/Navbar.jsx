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
          <ul className="navbar-nav offset-lg-7">
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>Daftar Cari</option>
                <option value="1">Pakaian</option>
                <option value="2">Makanan</option>
                <option value="3">Bangunan</option>
                <option value="4">Kendaraan</option>
                <option value="5">Perlengkapan</option>
              </select>
            </li>
            <li className="nav-item">
              <select class="form-select" aria-label="Default select example">
                <option selected>Informasi</option>
                <option value="1">
                  <HashLink className="nav-link text-black" to="/#testimonial">
                    Testimonial
                  </HashLink>
                </option>
                <option value="2">
                  <HashLink className="nav-link text-black" to="/#faq">
                    FAQ
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
