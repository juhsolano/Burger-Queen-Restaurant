import React from 'react';

//import './Button.css';

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>{props.title}</button>
  );
}

export default Button;