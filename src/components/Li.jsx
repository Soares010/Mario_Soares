import React from "react";

const Li = ({ children, id, className }) => {
  return (
    <div>
      <li className={className} key={id}>
        {children}
      </li>
    </div>
  );
};

export default Li;
