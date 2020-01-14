import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const ReadyOrders = (props) => {
  const readyOrders = props.readyOrders;

  const leadTime = (secondTime, firstTime) => {
    const time = ((secondTime.getTime() - firstTime.getTime()) / 1000) / 60;
    if (Math.abs(Math.round(time)) > 1) {
      return `${Math.abs(Math.round(time))} minutos`;
    }
    return `${Math.abs(Math.round(time))} minuto`;
  };

  return (
    <div className={css(styles.standardStyle)}>
      <h4 className={css(styles.titleStyle)}>HISTÓRICO DE PEDIDOS</h4>
      <section>
        {readyOrders.map((ready) => (
          <div key={ready.id}>
            <p>Tempo gasto: {leadTime(new Date(ready.readyTime), new Date(ready.dispatchTime))}</p>
            <p>Cliente: {ready.clientName}</p>
            <p>Nº da Mesa: {ready.table}</p>
            <p>Pedido:</p>
            <p>
              {ready.clientOrder.map((selectedItens) => (
                <p>{selectedItens.count} x {selectedItens.name} </p>
              ))}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
};

export default ReadyOrders;

const styles = StyleSheet.create({
  standardStyle: {
    display: 'flex',
    margin: '20px 5px 0px 5px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '5px',
    borderColor: '#95a5a6',
    color: '#ecf0f1',
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
})