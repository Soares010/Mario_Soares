import React from "react";

const LinkButton = ({ href, children, title, className }) => {
  return (
    <div>
      <a href={href} title={title} className={className ? className : ""}>
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
