import React, { useEffect } from "react";
import Header from "../../areas/Header";
import Footer from "../../areas/Footer";
import NavBar from "../../common/NavBar";
import * as actions from "../../../redux/actions/hostActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HostPageList from "./HostPageList";

function HostPage({ ...props }) {
  useEffect(() => {
    props.fetchHosts();
  }, []);

  useEffect(() => {
    props.fetchHosts();
  }, [props.hosts]);

  function deleteHost(id) {
    props.deleteHost(id);
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Muavin Listesi</h1>
      <HostPageList hosts={props.hosts} onDeleteClick={deleteHost} />
      <Footer />
    </div>
  );
}

HostPage.propTypes = {
  hosts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  hosts: state.hosts.hosts,
});

const mapDispatchToProps = {
  fetchHosts: actions.fetchAllHosts,
  deleteHost: actions.deleteHost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HostPage);
