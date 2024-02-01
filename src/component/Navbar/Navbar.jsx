import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logo } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-8 shadow-md-sm">
      <div className="container-fluid justify-content-start-md">
        <Link
          to="/"
          className="navbar-brand text-blue logoLP d-none d-sm-block "
        >
          <img src={logo} alt="logo" className="logoLP pb-2" />
          YGM Arsitektur
        </Link>
        <Link to="/" className="navbar-brand logoLP  fw-bold d-block d-sm-none">
          <img src={logo} alt="logo" className="logoLP" />
          YGM Arsitektur
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
        <div className="collapse navbar-collapse mt-3" id="navbarNav">
          <ul className="navbar-nav offset-lg-3">
            <li className="nav-item dropdown">
              <div
                cldivss="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                className="dropdownNav"
              >
                Menu
              </div>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="nav-link text-black" to="/">
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/signin">
                    Sign In
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/login">
                    Log In
                  </HashLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                cldivss="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                className="dropdownNav"
              >
                Portofolio
              </div>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="nav-link text-black" to="/designrumah">
                    Design Rumah
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/designinterior"
                  >
                    Design Interior
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/designeksterior"
                  >
                    Design Eksterior
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/designbangunanlainnya"
                  >
                    Design Bangunan Lainnya
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/projectsedangdikerjakan"
                  >
                    Prioject sedang dikerjakan
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/projectselesaidikerjakan"
                  >
                    Project Selesai dikerjakan
                  </HashLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                cldivss="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                className="dropdownNav"
              >
                360 VR & Video
              </div>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="nav-link text-black" to="/vr">
                    360 vr
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/videorender">
                    video render
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/videoedukasi">
                    Video Edukasi
                  </HashLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <div
                cldivss="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                className="dropdownNav"
              >
                Harga dan Layanan
              </div>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="nav-link text-black" to="/hargabangunan">
                    Design Bangunan
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    className="nav-link text-black"
                    to="/hargaeksterior"
                  >
                    Design Eksterior
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/hargainterior">
                    Design Interior
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/design2d">
                    Design 2D
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/design3d">
                    Design 3D
                  </HashLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <div
                cldivss="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                className="dropdownNav"
              >
                Tentang Kami
              </div>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="nav-link text-black" to="/badanusaha">
                    Badan Usaha
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/tim">
                    Tim
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/galery">
                    Galery
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/ulasan">
                    Ulasan
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/FAQ">
                    FAQ
                  </HashLink>
                </li>
                <li>
                  <HashLink className="nav-link text-black" to="/Kontak">
                    Kontak
                  </HashLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
