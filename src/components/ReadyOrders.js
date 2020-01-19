import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  standardStyle: {
    display: 'flex',
    margin: '20px 5px 0px 5px',
    justifyContent: 'start',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#A67314',
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
  historicList: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#ecf0f1',
    width: 350,
    borderBottom: 'solid',
    borderColor: '#A67314',
    borderWidth: 1.5,
    marginBottom: 20,
    padding: '10px 15px',
    boxSizing: 'border-box',
  },
  timeStyle: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#f1c40f',
  },
  itemStyle: {
    margin: '2px 0px 0px 0px',
  },
  itensList: {
    marginTop: 0,
    textAlign: 'left',
  },
  clientInfo: {
    fontWeight: 'bold',
    marginTop: 5,
  }
});

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
          <div className={css(styles.historicList)} key={ready.id}>
            <span className={css(styles.timeStyle)}>{leadTime(new Date(ready.readyTime), new Date(ready.dispatchTime))}</span>
            <span className={css(styles.clientInfo)}>{ready.clientName} • {ready.table}</span>
            <span className={css(styles.itensList)}><strong>Pedido</strong>
              {ready.clientOrder.map((selectedItens) => (
                <p className={css(styles.itemStyle)}>{selectedItens.count} x {selectedItens.name} </p>
              ))}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
};

export default ReadyOrders;
