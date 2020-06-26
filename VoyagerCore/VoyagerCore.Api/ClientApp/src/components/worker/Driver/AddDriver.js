import React, { useEffect, useState } from "react";
import * as actions from "../../../redux/actions/driverActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "../../common/NavBar";
import Footer from "../../areas/Footer";
import Header from "../..//areas/Header";
import "../worker.css";
import DateInput from "../../inputs/DateInput";
import TextInput from "../../inputs/TextInput";

function AddDriver({ history, ...props }) {
  const [driver, setDriver] = useState({ ...props.driver });

  useEffect(() => {
    setDriver({ ...props.driver });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: name === "name" ? value : value,
      [name]: name === "lastName" ? value : value,
      [name]: name === "gender" ? value : value,
      [name]: name === "identityNumber" ? value : value,
      [name]: name === "date" ? value.toString() : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.addDriver(driver).then(() => {
      history.push("/drivers");
    });
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Şoför Oluşturma Sayfası</h1>
      <form
        className="container "
        onSubmit={handleSave}
        id="createrouteformmargin"
      >
        <div className="row">
          <TextInput
            label="Name"
            name="name"
            type="text"
            onChange={handleChange}
            value={driver.name}
            className="form-control"
          />
          <TextInput
            name="lastName"
            type="text"
            onChange={handleChange}
            value={driver.lastName}
            className="form-control"
            label="LastName"
          />
          <DateInput
            name="date"
            type="date"
            onChange={handleChange}
            value={driver.date}
            className="form-control"
            label="Birthday"
          />
          <TextInput
            name="identityNumber"
            type="text"
            onChange={handleChange}
            value={driver.identityNumber}
            className="form-control"
            label="IdentityNumber"
          />
        </div>
        <div className="row">
          <div className="radio">
            <label id="mahmut">Cinsiyet</label>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="Kadın"
              checked={driver.gender === "Kadın"}
            />
            <label class="form-check-label" for="exampleRadios1">
              Kadın
            </label>
          </div>
          <div class="radio">
            <input
              type="radio"
              name="gender"
              value="Erkek"
              checked={driver.gender === "Erkek"}
              onChange={handleChange}
            />
            <label class="form-check-label" for="exampleRadios2">
              Erkek
            </label>
          </div>
        </div>
        <div id="kaydetmebuttonu">
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

AddDriver.propTypes = {
  addDriver: PropTypes.func.isRequired,
  driver: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  driver: state.drivers.drivers,
});

const mapDispatchToProps = {
  addDriver: actions.saveNewDriver,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDriver);
