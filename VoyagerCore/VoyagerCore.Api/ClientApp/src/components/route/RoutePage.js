import React, { useEffect } from "react";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import NavBar from "../common/NavBar";
import "../common/maincss.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/routeActions";
import RouteList from "./RoutePageList";

function RoutePage({ ...props }) {
  useEffect(() => {
    props.fetchRoutes().catch((err) => {
      alert("Loading Error" + err);
    });
  }, []);

  function deleteRoute(id) {
    props.deleteRoute(id);
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Rota Listesi</h1>
      <RouteList routes={props.routes} onDeleteClick={deleteRoute} />
      <Footer />
    </div>
  );
}

RoutePage.propTypes = {
  routes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
});

const mapDispatchToProps = {
  fetchRoutes: actions.fetchAllRoutes,
  deleteRoute: actions.deleteRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutePage);
