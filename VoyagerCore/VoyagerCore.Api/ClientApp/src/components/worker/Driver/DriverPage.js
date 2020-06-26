import React, { useEffect } from "react";
import Header from "../../areas/Header";
import Footer from "../../areas/Footer";
import NavBar from "../../common/NavBar";
import "../../common/maincss.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/driverActions";
import DriverList from "./DriverPageList";

function DriverPage({ ...props }) {
  useEffect(() => {
    props.fetchDrivers().catch((error) => {
      alert("Loading Error" + error);
    });
  }, []);

  function deleteDriver(id) {
    props.deleteDriver(id);
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Şoför Listesi</h1>
      <DriverList drivers={props.drivers} onDeleteClick={deleteDriver} />
      <Footer />
    </div>
  );
}

DriverPage.propTypes = {
  drivers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  drivers: state.drivers.drivers,
});

const mapDispatchToProps = {
  fetchDrivers: actions.fetchAllDrivers,
  deleteDriver: actions.deleteDriver,
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverPage);
