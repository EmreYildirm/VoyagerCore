import React, { useEffect, useState } from "react";
import * as actions from "../../../redux/actions/driverActions";
import { connect } from "react-redux";
import NavBar from "../../common/NavBar";
import Footer from "../../areas/Footer";
import Header from "../../areas/Header";
import "../worker.css";
import DateInput from "../../inputs/DateInput";
import TextInput from "../../inputs/TextInput";

function UpdateHost({ history, ...props }) {
  const [driver, setDriver] = useState({ ...props.driver });
  const id = props.match.params.id;

  useEffect(() => {
    props.getByIdDriver(id);
  }, []);

  useEffect(() => {
    setDriver({ ...props.driver });
  }, [props.driver]);

  function handleChange(event) {
    const { name, value } = event.target;
    setDriver((prevHost) => ({
      ...prevHost,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.updateDriver(id, driver).then(() => history.push("/hosts"));
  }

  return (
    <div>
      <Header />
      <NavBar />
      <h1>Şoför Düzenleme Sayfası</h1>
      <form onSubmit={handleSave} id="createhostformmargin">
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
        <div id="hostexpeditionsmargin">
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

/*UpdateHost.propTypes = {
    updateHost: PropTypes.func.isRequired,
    getByIdHost: PropTypes.func.isRequired,
    host: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired
};*/

const mapStateToProps = (state) => ({
  driver: state.drivers.capturedDriver,
  statusCode: state.drivers.statusCode,
  contentType: state.drivers.contentType,
});

const mapDispatchToProps = {
  updateDriver: actions.updateDriver,
  getByIdDriver: actions.getDriverById,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateHost);
