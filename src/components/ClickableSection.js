import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  optionsStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '18px',
    backgroundColor: '#e67e22',
    borderColor: '#000000',
    borderRadius: 5,
    width: '20vw',
    height: '5vw',
    margin: 3,
  }
});

const ClickableSection = (props) => {
  return (
    <button className={css(styles.optionsStyle)} onClick={props.handleClick} key={props.id}>
      <div>{props.name}</div>
      <div>R${props.price},00</div>
    </button>
  );
}

export default ClickableSection;
