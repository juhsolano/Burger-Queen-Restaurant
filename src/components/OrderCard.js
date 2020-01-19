import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  standardStyle: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#A67314',
    color: '#ecf0f1',
    fontSize: 20,
  },
  orderCardStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    display: 'flex',
    margin: 10,
    backgroundColor: '#BFAA82',
    boxShadow: '0.8px 1.2px 1.2px 0.8px #40392B',
    borderColor: '#BFAA82',
    borderRadius: '100px',
    padding: 18,
    textAlign: 'center',
    fontSize: 25,
  },
  orderButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#011140',
    backgroundColor: '#9EA626',
    borderColor: '#011140',
    boxShadow: '0.5px 1px 1px 0.5px #2E6EA6',
    borderRadius: 5,
    width: '20vw',
    height: '5vw',
  },
  totalStyle: {
    borderTopStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#A67314',
  },
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    width: '60%',
  },
  countStyle: {
    marginRight: 10,
  },
  priceStyle: {
    marginLeft: 25,
    width: '30%',
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
                }}>{<FontAwesomeIcon icon={faMinus} size="xs" color='#732D14' />}</Button>
            </div>
            <div className={css(styles.itemStyle)}>
              <div className={css(styles.countStyle)}>{element.count} x</div>
              <div className={css(styles.nameStyle)}>{element.name}</div>
              <div className={css(styles.priceStyle)}>R${element.price},00</div>
            </div>
            <div>
              <Button className={css(styles.buttonStyle)}
                handleClick={(e) => {
                  e.preventDefault();
                  props.removeOrder(element);
                }}>{<FontAwesomeIcon icon={faTrash} size="xs" color='#732D14' />}</Button>
            </div>
          </div>
        ))}
        <div className={css(styles.totalStyle)}>
          <p>Total = R${props.total},00</p>
        </div>
        <Button className={css(styles.orderButton)}
          handleClick={(e) => {
            e.preventDefault();
            props.submitOrder();
          }}>{'ENVIAR PEDIDO'}</Button>
      </section>
    </div>
  );
};

export default OrderCard;
