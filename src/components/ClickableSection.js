import React from 'react';

//import '.ClickableSectio.css';

const ClickableSection = (props) => {
  return (
    <div onClick={props.onClick}>
      <p>{props.name}</p>
      <p>R$ {props.price}</p>
      {props.id}
    </div>
  );
}

export default ClickableSection;