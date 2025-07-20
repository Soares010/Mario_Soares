import React from "react";

const Form = ({ submit, children, reference }) => {
  return (
    <>
      <form onSubmit={(e) => submit(e)} ref={reference != "" ? reference : ""}>
        {children}
      </form>
    </>
  );
};

export default Form;
