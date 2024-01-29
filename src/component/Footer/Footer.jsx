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
      <div className="yogaleft">
        <div>
          <div className="yogalink">
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
            <a href="https://www.facebook.com/yogagayuh.mukti?mibextid=ZbWKwL">
              <img className="yogalinkpic" src={facebook} alt="facebook" />
            </a>
            <a href="https://instagram.com/gmstudi0_?igshid=ZDdkNTZiNTM= ">
              <img className="yogalinkpic" src={instagram} alt="instagram" />
            </a>
            <ReactWhatsapp
              className="whatsappbutton"
              number="=+6285326721633"
              message="hello"
            >
              <img className="yogalinkpic" src={whatsapp} alt="whatsapp" />
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
