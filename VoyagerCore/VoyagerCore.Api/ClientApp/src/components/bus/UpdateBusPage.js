import React, { useEffect, useState } from "react";
import * as actions from "../../redux/actions/busActions";
import { connect } from "react-redux";
import Footer from "../areas/Footer";
import Header from "../areas/Header";
import NavBar from "../common/NavBar";
import TextInput from "../inputs/TextInput";

function UpdateBusPage({ history, ...props }) {
  const [bus, setBus] = useState({ ...props.bus });
  const id = props.match.params.id;

  useEffect(() => {
    props.getByIdBus(id);
  }, []);

  useEffect(() => {
    setBus({ ...props.bus });
  }, [props.bus]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBus((prevBus) => ({
      ...prevBus,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.updateBus(id, bus).then(() => {
      history.push("/bus");
    });
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Otobüs Düzenleme Sayfası</h1>
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

//UpdateBusPage.propTypes = {
//    updateRoute: PropTypes.func.isRequired,
//    getByIdRoute: PropTypes.func.isRequired,
//    route: PropTypes.object.isRequired,
//    handleChange: PropTypes.func.isRequired,
//    handleSave: PropTypes.func.isRequired,
//};

const mapStateToProps = (state) => ({
  bus: state.buses.capturedBus,
  statusCode: state.routes.statusCode,
  contentType: state.routes.contentType,
});

const mapDispatchToProps = {
  updateBus: actions.updateBus,
  getByIdBus: actions.getBusById,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBusPage);
