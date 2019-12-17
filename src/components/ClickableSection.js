import React from 'react';
//import '.ClickableSectio.css';

const ClickableSection = (props) => {
  return (
    <div onClick={props.handleClick}>
      <p>{props.name}</p>
      <p>R$ {props.price},00</p>
      {props.id}
    </div>
  );
}

export default ClickableSection;
