import React, { useState, useRef } from "react";
import { email, facebook, instagram, whatsapp } from "../../assets";
import Button from "react-bootstrap/Button";
import ReactWhatsapp from "react-whatsapp";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import "./Footer.css";

const Footer = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className="footer">
      <div className="yogaright">
        <h5>Office | Studio :</h5>
        <div>
          Jl. Nasional III, Desa Klapagading Wetan RT.02/03, Wangon, Banyumas,
          Jawa Tengah - Indonesia, 53176
        </div>
        <div>Buka : Senin - Minggu Jam 08.30-15.30 WIB</div>
      </div>
      <div className="yogaleft">
        <div>
          <h5>Kontak Kami :</h5>
          <div className="yogalink">
            <div>
              <Button
                className="buttonmail"
                ref={target}
                onClick={() => setShow(!show)}
              >
                <img className="yogalinkpic" src={email} alt="email" />
              </Button>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    ygmukti@gmail.com
                  </Tooltip>
                )}
              </Overlay>
              <h6>Email</h6>
            </div>
            <div>
              <a href="https://www.facebook.com/yogagayuh.mukti?mibextid=ZbWKwL">
                <img className="yogalinkpic" src={facebook} alt="facebook" />
              </a>
              <h6>Facebook</h6>
            </div>
            <div>
              <a href="https://instagram.com/gmstudi0_?igshid=ZDdkNTZiNTM= ">
                <img className="yogalinkpic" src={instagram} alt="instagram" />
              </a>
              <h6>Instagram</h6>
            </div>
            <div>
              <ReactWhatsapp
                className="whatsappbutton"
                number="=+6285326721633"
                message="hello"
              >
                <img className="yogalinkpic" src={whatsapp} alt="whatsapp" />
              </ReactWhatsapp>
              <h6>Whatsapp</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
