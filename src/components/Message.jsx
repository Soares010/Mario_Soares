import React from "react";

const Message = ({ name, handleChange, required }) => {
  return (
    <>
      <textarea
        name={name}
        onChange={handleChange}
        // required={required}
      ></textarea>
    </>
  );
};

export default Message;
