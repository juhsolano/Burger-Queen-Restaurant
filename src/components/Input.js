import React from 'react';

const Input = (props) => {
  return (
    <input className="input" type={props.type}
      placeholder={props.placeholder} />
  );
}

export default Input;
