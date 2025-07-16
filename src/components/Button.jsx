import React from "react";

const Button = ({ children, handleClick }) => {
  return (
    <>
      <button
        onClick={
          handleClick ? handleClick : () => console.log("Clicou no botão")
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;
