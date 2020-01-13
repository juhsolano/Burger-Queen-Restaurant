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
    <div>
      <section>
        {readyOrders.map((ready) => (
          <div key={ready.id}>
            <p>{leadTime(new Date(readyOrders.readyTime), new Date(readyOrders.dispatchTime))}</p>
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