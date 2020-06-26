import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/routeActions";
import { connect } from "react-redux";
import NavBar from "../common/NavBar";
import Footer from "../areas/Footer";
import Header from "../areas/Header";
import TextInput from "../inputs/TextInput";

function UpdateRoute({ history, ...props }) {
  const [route, setRoute] = useState({ ...props.route });
  const id = props.match.params.id;

  useEffect(() => {
    props.getByIdRoute(id);
  }, []);

  useEffect(() => {
    setRoute({ ...props.route });
  }, [props.route]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRoute((prevRoute) => ({
      ...prevRoute,
      /*[name]: name === "distance" ? parseInt(value, 10) : value,
            [name]: name === "arrivalLocation" ? value : value,
            [name]: name === "departureLocation" ? value : value,*/
      [name]: value,
    }));
    //debugger;
    console.log(route.arrivalLocation);
    console.log(route.departureLocation);
    console.log(route.distance);
  }

  function handleSave(event) {
    event.preventDefault();
    props.updateRoute(id, route);
    debugger;
    console.log(route.arrivalLocation);
    console.log(route.departureLocation);
    console.log(route.distance);
    /*.
        then(() => {
            history.push("/routes")
        });*/
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Rota Düzenleme Sayfası</h1>
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
            Update
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

UpdateRoute.propTypes = {
  /*updateRoute: PropTypes.func.isRequired,
    getByIdRoute: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,    
    handleSave: PropTypes.func.isRequired,*/
};

const mapStateToProps = (state) => ({
  route: state.routes.capturedRoute,
  statusCode: state.routes.statusCode,
  contentType: state.routes.contentType,
});

const mapDispatchToProps = {
  updateRoute: actions.updateRoute,
  getByIdRoute: actions.getByIdRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRoute);
