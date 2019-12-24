import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  optionsStyle: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    fontSize: '14px',
    backgroundColor: '#e67e22',
    borderColor: '#000000',
    borderStyle: 'groove',
    borderRadius:'5px',
    width: '20vw',
    height: '5vw',
    margin: '1.5px',
  },
});

const ClickableSection = (props) => {
  return (
    <button className={css(styles.optionsStyle)} onClick={props.handleClick}>
      <div>{props.name}</div>
      <div>R${props.price},00</div>
      {props.id}
    </button>
  );
}

export default ClickableSection;
