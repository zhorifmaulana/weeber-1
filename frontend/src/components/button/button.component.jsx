import React from 'react';
import './button.styles.scss';

const Button = ({children, color, form}) => (
  <button className={`btn ${color ? color : 'btn-primary'} ${form ? form : null}`}>
    {children}
  </button>
);

export default Button;
