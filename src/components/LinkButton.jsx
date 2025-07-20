import React from "react";

const LinkButton = ({ href, children, title, className, download }) => {
  return (
    <div>
      <a href={href} title={title} className={className ? className : ""} download={download}>
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
