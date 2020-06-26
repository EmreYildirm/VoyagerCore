import React from "react";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import HomePageBody from "./HomePageBody";
import NavBar from "../common/NavBar";
import "../common/maincss.css";

const HomePage = () => (
  <div className="container">
    <Header />
    <NavBar />
    <HomePageBody />
    <Footer />
  </div>
);

export default HomePage;
