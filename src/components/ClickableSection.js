import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  optionsStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: '#732D14',
    boxShadow: '0px 0.5px 1.5px 0.5px #A67314',
    fontWeight: 'bold',
    color: '#ecf0f1',
    borderRadius: 5,
    width: '20vw',
    height: '5vw',
    margin: 3,
    padding: '5px 0px',
  }
});

const ClickableSection = (props) => {
  return (
    <button className={css(styles.optionsStyle)} onClick={props.handleClick} key={props.id}>
      <span>{props.name}</span>
      <span>R${props.price},00</span>
    </button>
  );
};

export default ClickableSection;

