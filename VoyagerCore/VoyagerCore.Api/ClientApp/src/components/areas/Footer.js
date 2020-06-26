import React from "react";
import "../common/maincss.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <footer className="container">
        <div id="stickyfooter" className="container">
          <div id="footerleftblock">
            <p>Tüm Hakları Tarafımızdan Saklıdır. Evet Tarafımızdan.</p>
          </div>
          <div id="footerrightblock">
            <a href="https://www.linkedin.com/in/emreyildrm/">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
