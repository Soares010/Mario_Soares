import React from "react";

const Li = ({ children, key, className }) => {
  return (
    <div>
      <li className={className} key={key}>
        {children}
      </li>
    </div>
  );
};

export default Li;
