import React from 'react';
import ClickableSection from '../components/ClickableSection';

const OptionsCard = (props) => {
  const breakfastMenu = props.breakfastMenu;
  const lunchMenu = props.lunchMenu;

  const getItem = (item) => {
    console.log(item.price);
  }

  return (
    <div>
      <section>
        <h4>Café da Manhã</h4>
        {breakfastMenu.map((item) => <ClickableSection onClick={() => getItem(item)} name={item.name} price={item.price} key={item.id} />)}
      </section>
      <section>
        <h4>Almoço e jantar</h4>
        {lunchMenu.map((item) => <ClickableSection onClick={() => getItem(item)} name={item.name} price={item.price} key={item.id} />)}
      </section>
    </div>
  )
};

export default OptionsCard;
