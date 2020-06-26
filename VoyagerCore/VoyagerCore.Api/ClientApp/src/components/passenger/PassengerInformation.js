import React from "react";
import { connect } from "react-redux";
import "../bus/Bus.css";

function PassengerInfo({ passenger, onChange }) {
  return (
    <div id="passengerinfodiv" className="container">
      <p className="blog-header-logo text-dark">Yolcu Bilgilerinizi Giriniz</p>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="input">İsim</label>
          <input
            name="name"
            type="text"
            onChange={onChange}
            value={passenger.name}
            className="form-control"
            placeholder="Tugay"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="input">Soyisim</label>
          <input
            name="lastName"
            type="text"
            onChange={onChange}
            value={passenger.lastname}
            className="form-control"
            placeholder="Doğan"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="input">Yaş</label>
        <input
          name="age"
          type="text"
          onChange={onChange}
          value={passenger.age}
          className="form-control"
          placeholder="27"
        />
      </div>
      <div className="col">
        <label>DateTime</label>
        <input
          id="start"
          name="date"
          type="datetime-local"
          onChange={onChange}
          value={passenger.date}
          className="form-control"
        />
      </div>
      <div className="radio">
        <label id="mahmut">Cinsiyet</label>
        <input
          type="radio"
          name="gender"
          onChange={onChange}
          value="Kadın"
          checked={passenger.gender === "Kadın"}
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
          checked={passenger.gender === "Erkek"}
          onChange={onChange}
        />
        <label class="form-check-label" for="exampleRadios2">
          Erkek
        </label>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  passenger: state.passengers.newPassenger,
});

export default connect(mapStateToProps)(PassengerInfo);
