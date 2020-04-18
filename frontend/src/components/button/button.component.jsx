import React from "react";
import "./button.styles.scss";

const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`btn ${className ? className : null}`}>
    {children}
  </button>
);

export default Button;
