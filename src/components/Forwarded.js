import React from 'react';
import Button from './Button';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  standardStyle: {
    display: 'flex',
    margin: '20px 5px 0px 5px',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center',
    alignContent: 'space-around',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#95a5a6',
    color: '#ecf0f1'
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  forwardedStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: '#bdc3c7',
    textAlign: 'center',
    color: '#000000',
    width: '350px',
    boxShadow: '0px 3px 15px 0px rgba(0, 0, 0, 0.79)',
    borderRadius: 20,
    marginBottom: 20,
    padding: '20px 25px',
    boxSizing: 'border-box',
  },
  orderList: {
    textAlign: 'left',
  },
  changeButton: {
    display: 'inline-flex',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ecf0f1',
    backgroundColor: '#27ae60',
    borderColor: '#000000',
    borderRadius: 5,
    marginTop: 20,
    height: '5vw',
  }
});

const Forwarded = (props) => {
  const forwarded = props.forwarded;

  return (
    <div className={css(styles.standardStyle)}>
      <h4 className={css(styles.titleStyle)}>A PREPARAR</h4>
      <section>
        {forwarded.map((individualOrder) => (
          <div key={individualOrder.id} className={css(styles.forwardedStyle)}>
            <h1>{individualOrder.clientName} • {individualOrder.table}</h1>
            <div className={css(styles.orderList)}>
              {individualOrder.clientOrder.map((selectedItens) => (
                <p>{selectedItens.count} x {selectedItens.name} </p>
              ))}
            </div>
            <Button
              id={individualOrder.id}
              className={css(styles.changeButton)}
              handleClick={(e) => {
                e.preventDefault();
                props.changeStatus(individualOrder);
              }}>{'PREPARADO'}</Button>
          </div>
        ))}
      </section>
    </div>
  )
};

export default Forwarded;

