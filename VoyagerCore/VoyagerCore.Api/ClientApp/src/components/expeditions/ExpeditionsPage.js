import React, { useEffect } from "react";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import NavBar from "../common/NavBar";
import "../common/maincss.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/expeditionActions";
import ExpeditionListPage from './ExpeditionListPage';

function ExpeditionsPage({ ...props }) {

    useEffect(() => {
        //props.fetchAllExpeditions(props.datetime).
        //    catch(err => { alert("Loading Error" + err) });
    }, []);

    function deleteExpedition(id) {
        props.deleteExpedition(id);
    }

    return (
        <div className="container">
            <Header />
            <NavBar />
            <p className="blog-header-logo text-dark">Sefer Listesi</p>
            <ExpeditionListPage expeditions={props.expeditions} onDeleteClick={deleteExpedition} />
            <Footer />
        </div>
  );
}

const mapStateToProps = (state) => ({
    expeditions: state.expeditions.expeditions,
});

const mapDispatchToProps = {
    //fetchAllExpeditions: actions.fetchAllExpeditions,
    deleteExpedition: actions.deleteExpedition,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpeditionsPage);
