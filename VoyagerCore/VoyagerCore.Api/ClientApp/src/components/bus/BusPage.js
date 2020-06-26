import React, { useEffect } from "react";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import NavBar from "../common/NavBar";
import "../common/maincss.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/busActions";
import BusList from "./BusList";

function BusPage({ ...props }) {
  useEffect(() => {
    props.fetchBuses().catch((err) => {
      alert("Loading Error" + err);
    });
  }, []);

  function deleteBus(id) {
    props.deleteBus(id);
  }
  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Otobüs Listesi</h1>
      <BusList buses={props.buses} onDeleteClick={deleteBus} />
      <Footer />
    </div>
  );
}

BusPage.propTypes = {
  buses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  buses: state.buses.buses,
  statusCode: state.buses.statusCode,
});

const mapDispatchToProps = {
  fetchBuses: actions.fetchAllBus,
  deleteBus: actions.deleteBus,
};

export default connect(mapStateToProps, mapDispatchToProps)(BusPage);
