import React from "react";
import { Link } from "react-router-dom";
import "./maincss.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample08"
      >
        <ul class="navbar-nav">
          <li className="nav-item active">
            <Link to="home" className="nav-link" href="#">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="createRoute" className="nav-link active" href="#">
              Rota Oluştur
            </Link>
          </li>
          <li className="nav-item">
            <Link to="bus" className="nav-link active">
              Otobüsler
            </Link>
          </li>
          <li className="nav-item">
            <Link to="createbus" className="nav-link active">
              Otobüs Yarat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="routes" className="nav-link active">
              Rotalar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="createExpedition" className="nav-link active">
              Sefer Oluştur
            </Link>
          </li>
          <li>
            <Link to="createhost" className="nav-link active">
              Muavin Oluştur
            </Link>
          </li>
          <li>
            <Link to="createdriver" className="nav-link active">
              Şoför Oluştur
            </Link>
          </li>
          <li>
            <Link to="hosts" className="nav-link active">
              Muavin Listesi
            </Link>
          </li>
          <li>
            <Link to="drivers" className="nav-link active">
              Şoför Listesi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
