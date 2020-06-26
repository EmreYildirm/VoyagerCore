import React, { useHook, useState } from "react";
import Header from "../areas/Header";
import Footer from "../areas/Footer";
import Navbar from "../common/NavBar";
import "./CreateExpeditionPage.css";

const ExpeditionForm = ({
  drivers,
  expedition,
  routes,
  expeditions,
  onSave,
  onChange,
  hosts,
  buses,
}) => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <p className="blog-header-logo text-dark">Sefer Oluştur</p>
      <form onSubmit={onSave}>
        <div id="createexpeditionpageleftblock">
          <div className="form-group">
            <label for="exampleFormControlSelect2">Rota Seçiniz</label>
            <div className="field">
              <select
                name="routeId"
                value={expedition.routeId || ""}
                onChange={onChange}
              >
                <option>Select Route</option>
                {routes.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Otobüs Seçiniz</label>
            <div className="field">
              <select
                name="busId"
                value={expedition.busId || ""}
                onChange={onChange}
              >
                <option>Select Bus</option>
                {buses.map((bus) => (
                  <option key={bus.id} value={bus.id}>
                    {bus.plate}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Şoför Seçiniz</label>
            <div className="field">
              <select
                name="driverId"
                value={expedition.driverId || ""}
                onChange={onChange}
              >
                <option>Select Driver</option>
                {drivers.map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.fullName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Muavin Seçiniz</label>
            <div className="field">
              <select
                name="hostId"
                value={expedition.hostId || ""}
                onChange={onChange}
              >
                <option>Select Host</option>
                {hosts.map((host) => (
                  <option key={host.id} value={host.id}>
                    {host.fullName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div id="createexpeditionrigthblock">
          <div id="selectarrivaltime" className="form-group">
            <label for="formGroupExampleInput">Kalkış Zamanı</label>
            <input
              type="datetime-local"
              name="departureDate"
              onChange={onChange}
              value={expedition.departureDate}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
        </div>
        <button id="savebutton" type="submit" className="btn btn-success">
          Kaydet
        </button>
      </form>
      <Footer />
    </div>
  );
};
export default ExpeditionForm;

/*
<div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label" for="defaultCheck1">
              Yimah var?
            </label>
          </div>
*/
