import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import logo from "./travolta.gif";

const PageNotFound = () => {
  return (
    <div className="error">
      <img className="lan" src={logo} alt="" />
      <h1 className="h1">Bir şey oldu</h1>
      <h3 className="h3">Bir şey oldu</h3>
      <Link to="home">
        <button>Geri Dön Ne olur GERİ dön</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
