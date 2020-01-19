import React from 'react';
import Logo from '../img/logo_gsq.png';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '120vh',
    margin: 'none',
  },
  mainLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    width: 360,
    padding: 5,
    margin: 15,
  },
  mainLink: {
    margin: 20,
    width: 450,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#122A40',
    boxShadow: '0px 3px 10px 2px #2E6CA6',
    color: '#A67314',
    fontSize: 40,
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
    textDecorationLine: 'none',
  }
});

const Main = () => {

  return (
    <div className={css(styles.mainStyle)}>
      <img src={Logo} alt={'Burger Queen'} className={css(styles.mainLogo)} />
      <nav>
        <Link to="/lounge" className={css(styles.mainLink)}>SALÃO</Link>
        <Link to="/kitchen" className={css(styles.mainLink)}>COZINHA</Link>
      </nav>
    </div>
  );
};

export default Main;
