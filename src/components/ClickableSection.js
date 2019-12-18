import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  optionsStyle: {
    display: 'flex',
    // justifyContent: 'space-around',
    fontSize: '14px',
    backgroundColor: '#e67e22',
    borderColor: '#000000',
    borderBottomStyle: 'double',
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
