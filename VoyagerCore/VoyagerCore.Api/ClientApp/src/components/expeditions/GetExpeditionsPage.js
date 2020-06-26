import React, { useState, useEffect } from "react";
import * as actions from "../../redux/actions/expeditionActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../common/Buttons.css";

function GetExpeditionsByDate({ ...props }) {
    const [startDate, setStartDate] = useState(new Date());
    let start = new Date();
    let date = start.getFullYear() + '-' + "0"+(start.getMonth() + 1) + '-' + start.getDate();

    //useEffect(() => {
    //    setStartDate({ start });
    //}, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setStartDate((prevRoute) => ({
            ...prevRoute,
            [name]: name === "date" ? value.toString() : value,
        }));
    };

    function handleClick() {
        debugger;
        props.fetchExpeditions(startDate.date);
    };
    return (
        <div className="container">
            <div className="col">
                <input
                    id="start"
                    name="date"
                    type="date"
                    onChange={handleChange}
                    className="form-control"
                    min={date}
                />
            </div>
            <div id="getexpeditionbuttons">
                <Link to="expeditions">
                <button onClick={handleClick} type="button" class="btn btn-primary btn-sm">
                        Seferleri Getir
                </button>
                </Link>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    fetchExpeditions: actions.fetchAllExpeditions,
}

export default connect(null, mapDispatchToProps)(GetExpeditionsByDate);