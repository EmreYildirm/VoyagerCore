import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DriverPageList = ({ drivers, onDeleteClick }) => (
    <table id="routeexpeditionsmargin" className="table" >
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">İsim</th>
                <th scope="col">Soyisim</th>
                <th scope="col">Yaş</th>
                <th scope="col">Cinsiyeti</th>
                <th scope="col">Kimlik Numarası</th>
                <th scope="col">Update Transaction</th>
                <th scope="col">Delete Transaction</th>
            </tr>
        </thead>
        <tbody>
            {drivers.map((driver) => {
                return (
                    <tr key={driver.id}>
                        <td>{driver.id}</td>
                        <td>{driver.name}</td>
                        <td>{driver.lastName}</td>
                        <td>{driver.age}</td>
                        <td>{driver.gender}</td>
                        <td>{driver.identityNumber}</td>
                        <td>
                            <Link to={`/updateDriver/${driver.id}`}>
                                <button type="button" className="btn btn-outline-info">Change</button>
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDeleteClick(driver.id)}>Delete </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

DriverPageList.propTypes = {
    drivers: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default DriverPageList;