import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/routeActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "../common/NavBar";
import Footer from "../areas/Footer";
import Header from "../areas/Header";
import TextInput from "../inputs/TextInput";

function AddRoute({ history, ...props }) {
  const [route, setRoute] = useState({ ...props.route });

  useEffect(() => {
    setRoute({ ...props.route });
  }, [props.route]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRoute((prevRoute) => ({
      ...prevRoute,
      [name]: name === "distance" ? parseInt(value, 10) : value,
      [name]: name === "arrivalLocation" ? value : value,
      [name]: name === "departureLocation" ? value : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.addRoute(route).then(() => {
      history.push("/routes");
    });
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Rota Oluşturma Sayfası</h1>
      <form onSubmit={handleSave} id="createrouteformmargin">
        <div className="row">
          <TextInput
            name="departureLocation"
            type="text"
            onChange={handleChange}
            value={route.departureLocation}
            className="form-control"
            placeholder="İstanbul"
            label="Departure Location"
          />
          <TextInput
            name="arrivalLocation"
            type="text"
            label="Arrival Location"
            onChange={handleChange}
            value={route.arrivalLocation}
            className="form-control"
            placeholder="Ankara"
          />
          <TextInput
            label="Distance"
            name="distance"
            type="text"
            onChange={handleChange}
            value={route.distance}
            className="form-control"
            placeholder="450km"
          />
        </div>
        <div id="routeexpeditionsmargin">
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

AddRoute.propTypes = {
  addRoute: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  route: state.routes.newRoute,
});

const mapDispatchToProps = {
  addRoute: actions.saveNewRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRoute);
