import React from 'react';
import ClickableSection from '../components/ClickableSection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  teste: {
    width: '50vw'
  }
});

const OptionsCard = (props) => {
  const breakfastMenu = props.breakfastMenu;
  const lunchMenu = props.lunchMenu;

  return (
    <div className={css(styles.teste)}>
      <section>
        <h4>Café da Manhã</h4>
        {breakfastMenu.map((item) => <ClickableSection handleClick={() => { props.selectOptions(item) }}
          name={item.name} price={item.price}
          key={item.id} />)}
      </section>
      <section>
        <h4>Almoço e jantar</h4>
        {lunchMenu.map((item) => <ClickableSection handleClick={() => { props.selectOptions(item) }}
          name={item.name} price={item.price}
          key={item.id} />)}
      </section>
    </div>
  )
};

export default OptionsCard;
