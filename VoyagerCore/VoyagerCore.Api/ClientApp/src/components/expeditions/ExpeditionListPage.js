import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ExpeditionPageList = ({ expeditions, onDeleteClick }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Code</th>
                <th>Update Transaction</th>
                <th>Delete Transaction</th>
            </tr>
        </thead>
        <tbody>
            {expeditions.map((expedition) => {
                return (
                    <tr key={expedition.id}>
                        <td>{expedition.id}</td>
                        <td>{expedition.code}</td>
                        <td>
                            <Link to={`/sellticket/${expedition.id}`}>
                                <button type="button" className="btn btn-outline-info">
                                    Bilet Al
                                </button>
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDeleteClick(expedition.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
);

export default ExpeditionPageList;
