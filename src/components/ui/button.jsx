import React from "react";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button className={`${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
