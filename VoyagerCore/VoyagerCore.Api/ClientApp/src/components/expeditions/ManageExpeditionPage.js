import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as expeditionActions from "../../redux/actions/expeditionActions";
import * as busActions from "../../redux/actions/busActions";
import * as driverActions from "../../redux/actions/driverActions";
import * as routeActions from "../../redux/actions/routeActions";
import * as hostActions from "../../redux/actions/hostActions";
import ExpeditionForm from "./CreateExpeditionPage";

function ManageExpeditionPage({ history, ...props }) {
  const [expedition, setExpedition] = useState({ ...props.expedition });

  useEffect(() => {
    props.fetchAllBus();
    props.fetchAllDrivers();
    props.fetchAllHosts();
    props.fetchAllRoutes();
  }, []);

  function handleSave(event) {
    event.preventDefault();
    props.saveNewExpedition(expedition).then(() => {
      history.push("/expeditions");
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setExpedition((prevExpedition) => ({
      ...prevExpedition,
      [name]: name === "busId" ? value : value,
      [name]: name === "routeId" ? value : value,
      [name]: name === "hostId" ? value : value,
      [name]: name === "driverId" ? value : value,
      [name]: name === "departureDate" ? value.toString() : value,
      [name]: name === "arrivalDate" ? value.toString() : value,
    }));
  }
  return (
    <ExpeditionForm
      expedition={expedition}
      expeditions={props.expeditions}
      hosts={props.hosts}
      routes={props.routes}
      drivers={props.drivers}
      buses={props.buses}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}
//ManageExpeditionPage.propTypes = {
//  expedition: PropTypes.object.isRequired,
//  buses: PropTypes.array.isRequired,
//  expeditipns: PropTypes.array.isRequired,
//  fetchAllExpeditions: PropTypes.func.isRequired,
//  getallDriver: PropTypes.func.isRequired,
//  addExpedition: PropTypes.func.isRequired,
//  history: PropTypes.object.isRequired,
//};

function mapStateToProps(state) {
  return {
    drivers: state.drivers.drivers,
    expedition: state.expeditions.newExpedition,
    hosts: state.hosts.hosts,
    routes: state.routes.routes,
    buses: state.buses.buses,
  };
}

const mapDispatchToProps = {
  fetchAllBus: busActions.fetchAllBus,
  fetchAllDrivers: driverActions.fetchAllDrivers,
  fetchAllHosts: hostActions.fetchAllHosts,
  fetchAllRoutes: routeActions.fetchAllRoutes,
  saveNewExpedition: expeditionActions.saveNewExpedition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageExpeditionPage);
