import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  standardStyle: {
    margin: '5px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    verticalAlign: 'middle',
    // alignItems: 'center',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '5px',
    borderColor: '#95a5a6',
    color: '#ecf0f1',
    fontSize: '20px',
  },
  orderCardStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    display: 'flex',
    margin: '3px',
    color: '#000000',
    // backgroundColor: '#c0392b',
    borderRadius: '100px',
    // border: '2px solid black',
    padding: '20px',
    textAlign: 'center',
    fontSize: '20px',
    display: 'inline - block',
    width: '5vw',
    height: '5vw'
  },
  totalStyle: {
    borderTopStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: '#ecf0f1',
  }
});

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className={css(styles.standardStyle)}>
      <section>
        <h4>PEDIDO</h4>
        {order.map((element) => (
          <div key={element.id} className={css(styles.orderCardStyle)}>
            <div>
              <Button className={css(styles.buttonStyle)}
                handleClick={(e) => {
                  e.preventDefault();
                  props.reduceItem(element);
                }}
                title='➖'
              />
            </div>
            <div>{element.count}</div>
            <div>{element.name}</div>
            <div>R${element.price},00</div>
            <div>
              <Button className={css(styles.buttonStyle)}
                handleClick={(e) => {
                  e.preventDefault();
                  props.removeOrder(element);
                }}
                title='✖'
              />
            </div>
          </div>
        ))}
        <div className={css(styles.totalStyle)}>
          <p>Total = R${props.total},00</p>
        </div>
        <Button handleClick={(e) => {
          e.preventDefault();
          props.submitOrder();
        }}
          title='ENVIAR PEDIDO' />
      </section>
    </div>
  );
}

export default OrderCard;
