import React from 'react';

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>{props.title}</button>
  );
};

export default Button;
