import React from 'react';
import { Link } from "react-router-dom";
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  navStyle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  colorNav: {
    backgroundColor: '#2c3e50',
    fontSize: 30,
    fontWeight: 'bold',
    boxShadow: '0px 3px 10px 2px #1e272e',
    color: '#27ae60',
    padding: 10,
    width: '100%',
    textDecorationLine: 'none',
  }
});

const Nav = () => {
  return (
    <nav className={css(styles.navStyle)}>
      <Link to="/lounge"
        className={css(styles.colorNav)}>SALÃO</Link>
      <Link to="/kitchen"
        className={css(styles.colorNav)}>COZINHA</Link>
    </nav>
  );
};

export default Nav;