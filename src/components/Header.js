import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  navegationStyle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  buttonLink: {
    backgroundColor: '#1D4466',
    fontSize: 30,
    fontWeight: 'bold',
    boxShadow: '0px 3px 10px 2px #1e272e',
    color: '#A67314',
    padding: 10,
    width: '100%',
    textDecorationLine: 'none',
  },
  hover: {
    ':hover': {
      background: '#802D0F',
      color: '#B3780C',
    }
  }
});

const Header = (props) => {
  return (
    <header>
      <nav className={css(styles.navegationStyle)}>
        <Link to='/lounge' className={css(styles.buttonLink, styles.hover)}>SALÃO</Link>
        <Link to='/kitchen' className={css(styles.buttonLink, styles.hover)}>COZINHA</Link>
      </nav>
    </header>
  );
};

export default Header;