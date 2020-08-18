import React from "react";
import PropTypes from "prop-types";

const BusList = ({ buses, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
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
            <td>{bus.make}</td>
            <td>{bus.plate}</td>
            <td>
              <button type="button" className="btn btn-outline-info">
                Change
              </button>
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
