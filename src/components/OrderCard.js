import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import Button from '../components/Button';

const styles = StyleSheet.create({
  teste: {
    width: '50vw'
  },
  carpadio: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className={css(styles.teste)}>
      <section>
        {order.map((element) => (
          <div key={element.id} className={css(styles.carpadio)}>
            <div>{element.count}</div>
            <div>{element.name}</div>
            <div>R$ {element.price}</div>
          </div>
        ))}
        
      </section>
    </div>
  );
}

export default OrderCard;

{/* <Button handleClick{() => submitOrder} title='Enviar Pedido' /> */ }
