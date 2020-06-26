import React, { useEffect, useState } from "react";
import * as actions from "../../../redux/actions/hostActions";
import { connect } from "react-redux";
import NavBar from "../../common/NavBar";
import Footer from "../../areas/Footer";
import Header from "../../areas/Header";
import TextInput from "../../inputs/TextInput";
import DateInput from "../../inputs/DateInput";

function UpdateHost({ history, ...props }) {
  const [host, setHost] = useState({ ...props.host });
  const id = props.match.params.id;

  useEffect(() => {
    props.getByIdHost(id);
  }, []);

  useEffect(() => {
    setHost({ ...props.host });
  }, [props.host]);

  function handleChange(event) {
    const { name, value } = event.target;
    setHost((prevHost) => ({
      ...prevHost,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    props.updateHost(id, host);
    //then(() => history.push("/hosts"));
  }

  return (
    <div>
      <Header />
      <NavBar />
      <h1>Muavin Düzenleme Sayfası</h1>
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
  host: state.hosts.capturedHost,
  statusCode: state.hosts.statusCode,
  contentType: state.hosts.contentType,
});

const mapDispatchToProps = {
  updateHost: actions.updateHost,
  getByIdHost: actions.getByIdHost,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateHost);
