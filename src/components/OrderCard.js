import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  standardStyle: {
    width: '50vw'
  },
  orderCardStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  // removeOrderStyle: {
  //   backgroundColor: '#c0392b',
  // },
});

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className={css(styles.standardStyle)}>
      <section>
        {order.map((element) => (
          <div key={element.id} className={css(styles.orderCardStyle)}>
            <div>
              <Button className={'fas fa-minus-circle'} />
            </div>
            <div>{element.count}</div>
            <div>{element.name}</div>
            <div>R${element.price},00</div>
            <div>
              <Button className={'fas fa-trash'} />
            </div>
          </div>
        ))}

      </section>
    </div>
  );
}

export default OrderCard;

//Ao final da section adicionar o button de submitOrder

{/* <Button handleClick{() => submitOrder} title='Enviar Pedido' /> */ }
