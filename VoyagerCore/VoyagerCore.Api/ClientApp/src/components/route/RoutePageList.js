import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoutePageList = ({ routes, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>DepartureLocation</th>
        <th>ArrivalLocation</th>
        <th>Distance</th>
        <th>Update Transaction</th>
        <th>Delete Transaction</th>
      </tr>
    </thead>
    <tbody>
      {routes.map((route) => {
        return (
          <tr key={route.id}>
            <td>{route.id}</td>
            <td>{route.departureLocation}</td>
            <td>{route.arrivalLocation}</td>
            <td>{route.distance}</td>
            <td>
              <Link to={`/updateRoute/${route.id}`}>
                <button type="button" className="btn btn-outline-info">
                  Change
                </button>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(route.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

RoutePageList.propTypes = {
  routes: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default RoutePageList;
