import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BusList = ({ buses, onDeleteClick }) => (
  <table id="routeexpeditionsmargin" className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Make</th>
        <th scope="col">Plate</th>
        <th scope="col">Update Transaction</th>
        <th scope="col">Delete Transaction</th>
      </tr>
    </thead>
    <tbody>
      {buses.map((bus) => {
        return (
          <tr key={bus.id}>
            <td>{bus.id}</td>
            <td>{bus.make}</td>
            <td>{bus.plate}</td>
            <td>
              <Link to={`/updatebus/${bus.id}`}>
                <button type="button" className="btn btn-outline-info">
                  Change
                </button>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(bus.id)}
              >
                Delete{" "}
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BusList.propTypes = {
  buses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default BusList;
