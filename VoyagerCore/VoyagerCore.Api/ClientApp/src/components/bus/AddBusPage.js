import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/busActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Footer from "../areas/Footer";
import Header from "../areas/Header";
import NavBar from "../common/NavBar";
import TextInput from "../inputs/TextInput";

function AddBusPage({ history, ...props }) {
  const [bus, setBus] = useState({ ...props.bus });

  useEffect(() => {
    setBus({ ...props.bus });
  }, [props.bus]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBus((prevBus) => ({
      ...prevBus,
      [name]: name === "plate" ? value : value,
      [name]: name === "make" ? value : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.saveBus(bus);
    //.
    //then(() => {
    //    history.push("/bus")
    //})
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Otobüs Oluşturma Sayfası</h1>
      <form onSubmit={handleSave} id="createrouteformmargin">
        <div className="row">
          <TextInput
            label="Plate"
            name="plate"
            type="text"
            onChange={handleChange}
            value={bus.plate}
            className="form-control"
          />
          <TextInput
            label="Make"
            name="make"
            type="text"
            onChange={handleChange}
            value={bus.make}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

AddBusPage.propTypes = {
  addBus: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bus: state.buses.bus,
});

const mapDispatchToProps = {
  saveBus: actions.saveNewBus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBusPage);
