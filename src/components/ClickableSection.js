import React from 'react';

//import '.ClickableSectio.css';

const ClickableSection = (props) => {
  return (
    <div onClick={props.onClick}>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default ClickableSection;

//adicionar depois onclick