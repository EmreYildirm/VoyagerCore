import React from "react";
import { Link } from "react-router-dom";

const ExpeditionPageList = ({
  onGetExpeditionClick,
  expeditions,
  onDeleteClick,
}) => (
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
              <Link to={`/sellticket`}>
                <button
                  type="button"
                  onClick={() => onGetExpeditionClick(expedition.id)}
                  className="btn btn-outline-info"
                >
                  Bilet Al
                </button>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(expedition.id)}
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

export default ExpeditionPageList;
