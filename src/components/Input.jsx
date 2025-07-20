import React from "react";

const Input = ({ type, name, handleChange, required }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        // required={required}
      />
    </>
  );
};

export default Input;
