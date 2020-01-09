import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  inputStyle: {
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    fontSize: '14px',
    backgroundColor: '##ecf0f1',
    borderColor: '#000000',
    borderStyle: 'groove',
    borderRadius: '5px',
    width: '25vw',
    height: '4vw',
    margin: '1.5px',
  },
});

const Input = (props) => {
  return (
    <input
      className={css(styles.inputStyle)}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
}

export default Input;
