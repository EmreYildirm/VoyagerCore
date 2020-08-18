import React from "react";
import { connect } from "react-redux";

function PassengerInfo({ passenger, onChange }) {
  return (
    <div id="passengerinfodiv" className="container">
      <p className="blog-header-logo text-dark">Yolcu Bilgilerinizi Giriniz</p>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="input">İsim</label>
          <input
            name="firstName"
            type="text"
            onChange={onChange}
            value={passenger.firstName}
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
        <div class="form-group col-md-6">
          <label for="input">Kimlik No</label>
          <input
            name="identityNumber"
            type="text"
            onChange={onChange}
            value={passenger.identityNumber}
            className="form-control"
            placeholder="Doğan"
          />
        </div>
      </div>
      <div className="col">
        <label>DateTime</label>
        <input
          id="start"
          name="date"
          type="date"
          onChange={onChange}
          value={passenger.date}
          className="form-control"
        />
      </div>
      <div className="radioWoman">
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
      <div className="radioMan">
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
