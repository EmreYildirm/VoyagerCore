import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HostPageList = ({ hosts, onDeleteClick }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th> Update Transaction</th>
                <th> Delete Transaction</th>
            </tr>
        </thead>
        <tbody>
            {hosts.map((host) => {
                return (
                    <tr key={host.id}>
                        <td>{host.id}</td>
                        <td>{host.name}</td>
                        <td>{host.lastName}</td>
                        <td>{host.age}</td>
                        <td>{host.gender}</td>
                        <td>
                            <Link to={`/updateHost/${host.id}`}>
                                <button type="button" className="btn btn-outline-info">Change</button>
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDeleteClick(host.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
);

HostPageList.propTypes = {
    hosts: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default HostPageList;