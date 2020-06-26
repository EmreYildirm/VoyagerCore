import React from "react";
import "../common/maincss.css";
import LoginButtons from "../common/LoginButtons";

function Header() {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1"></div>
          <div className="col-4 text-center">
            <p className="blog-header-logo text-dark">Large</p>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <LoginButtons />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
