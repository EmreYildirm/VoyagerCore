import React from "react";

const DateInput = ({ label, value, onChange, name, type }) => {
  return (
    <div className="col">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
      />
    </div>
  );
};

export default DateInput;
