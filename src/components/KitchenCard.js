import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  changeButton: {
    justifyContent: 'space-evenly',
    fontSize: '14px',
    backgroundColor: '#2ecc71',
    borderColor: '#000000',
    borderStyle: 'groove',
    borderRadius: '5px',
    width: '20vw',
    height: '5vw',
    margin: '1.5px',
  },
});

const KitchenCard = (props) => {

  return (
    <div>
      <section>
        <p>Cliente: {props.clientName}</p>
        <p>Nº da Mesa: {props.table}</p>
        <p>Pedido:{props.clientOrder.map((individualOrder) =>
          <p> {individualOrder.count} x {individualOrder.name}</p>
        )}
        </p>
        <p>{props.dispatchTime}</p>
        <p>{props.status}</p>
        {props.id}
        <div>
          <Button
            className={css(styles.changeButton)}
            handleClick={(e) => {
              e.preventDefault();
              props.changeStatus()
            }}
            title='Preparado' />
        </div>
      </section>
    </div>
  )
};

export default KitchenCard;