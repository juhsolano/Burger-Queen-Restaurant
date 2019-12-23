import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  standardStyle: {
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '5px',
    borderColor: '#ecf0f1',
    color: '#ecf0f1'
  },
  orderCardStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  // removeOrderStyle: {
  //   fontSize: '#c0392b',
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
              <Button className={'fas fa-minus-circle'}
                handleClick={(e) => {
                  e.preventDefault();
                  props.reduceItem(element);
                }} />
            </div>
            <div>{element.count}</div>
            <div>{element.name}</div>
            <div>R${element.price},00</div>
            <div>
              <Button className={'fas fa-trash'}
                handleClick={(e) => {
                  e.preventDefault();
                  props.removeOrder(element);
                }} />
            </div>
          </div>
        ))}
        <p>Total = R${props.total},00</p>
      </section>
    </div>
  );
}

export default OrderCard;

// `${css(styles.removeOrderStyle)}`

{/* <Button handleClick{() => submitOrder} title='Enviar Pedido' /> */ }


