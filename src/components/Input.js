import React from 'react';

const Input = (props) => {
  return (
    <input
      className="input"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
}

export default Input;
