import React from "react";

const TextInput = ({ label, type, name, onChange, value, placeholder }) => {
  return (
    <div className="col">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
