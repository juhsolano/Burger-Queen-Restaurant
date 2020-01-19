import React from 'react';
import ClickableSection from '../components/ClickableSection';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  standardStyle: {
    display: 'flex',
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#A67314',
    color: '#ecf0f1',
  },
  menuStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonOrganization: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  }
});

const OptionsCard = (props) => {
  const breakfastMenu = props.breakfastMenu;
  const lunchMenu = props.lunchMenu;

  return (
    <div className={css(styles.standardStyle)}>
      <section className={css(styles.menuStyle)}>
        <h4 className={css(styles.titleStyle)}>CAFÉ DA MANHÃ</h4>
        <div className={css(styles.buttonOrganization)}>
          {breakfastMenu.map((item) => <ClickableSection handleClick={(e) => {
            e.preventDefault();
            props.selectOptions(item)
          }}
            name={item.name} price={item.price}
            key={item.id} />)}
        </div>
      </section>
      <section className={css(styles.menuStyle)}>
        <h4 className={css(styles.titleStyle)}>ALMOÇO E JANTAR</h4>
        <div className={css(styles.buttonOrganization)}>
          {lunchMenu.map((item) => <ClickableSection handleClick={(e) => {
            e.preventDefault();
            props.selectOptions(item)
          }}
            name={item.name} price={item.price}
            key={item.id} />)}
        </div>
      </section>
    </div>
  )
};

export default OptionsCard;
