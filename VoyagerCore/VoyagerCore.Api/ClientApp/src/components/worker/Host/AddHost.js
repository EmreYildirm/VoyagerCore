import React, { useEffect, useState } from "react";
import * as actions from "../../../redux/actions/hostActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavBar from "../../common/NavBar";
import Footer from "../../areas/Footer";
import Header from "../../areas/Header";
import "../worker.css";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";

function AddHost({ history, ...props }) {
  const [host, setHost] = useState({ ...props.host });

  useEffect(() => {
    setHost({ ...props.host });
  }, [props.host]);

  function handleChange(event) {
    const { name, value } = event.target;
    setHost((prevHost) => ({
      ...prevHost,
      [name]: name === "name" ? value : value,
      [name]: name === "lastName" ? value : value,
      [name]: name === "identityNumber" ? value : value,
      [name]: name === "date" ? value.toString() : value,
    }));
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    props
      .addHost(host)
      .then(() => {
        history.push("/hosts");
      })
      .catch((error) => {
        console.log(error + "kriptoyu anana sor");
      });
  }

  return (
    <div className="container">
      <Header />
      <NavBar />
      <h1>Muavin Oluşturma Sayfası</h1>
      <form onSubmit={handleSave} id="createhostformmargin">
        <div className="row">
          <TextInput
            name="name"
            type="text"
            label="Name"
            onChange={handleChange}
            value={host.name}
            className="form-control"
            placeholder="Emre"
          />
          <TextInput
            label="Soyisim"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={host.lastname}
            className="form-control"
            placeholder="Yıldırım"
          />
          <TextInput
            label="Kimlik No"
            name="identityNumber"
            type="text"
            onChange={handleChange}
            value={host.identityNumber}
            className="form-control"
            placeholder="12345678901"
          />
          <DateInput
            name="date"
            type="date"
            label="Doğum Tarihi"
            onChange={handleChange}
            value={host.date}
            className="form-control"
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
              checked={host.gender === "Kadın"}
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
              checked={host.gender === "Erkek"}
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

AddHost.propTypes = {
  addHost: PropTypes.func.isRequired,
  host: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  host: state.hosts.newHost,
});

const mapDispatchToProps = {
  addHost: actions.saveNewHost,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHost);
