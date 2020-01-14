import React from 'react';
// import { StyleSheet, css } from 'aphrodite';

// const styles = StyleSheet.create({
//   inputStyle: {
//     display: 'flex',
//     fontSize: '14px',
//     padding: '5px',
//     backgroundColor: '##ecf0f1',
//     borderColor: '#000000',
//     borderStyle: 'groove',
//     borderRadius: '5px',
//     height: '4vw',
//     margin: '1.5px',
//   },
// });

const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
}

export default Input;

//className = { css(styles.inputStyle) }
