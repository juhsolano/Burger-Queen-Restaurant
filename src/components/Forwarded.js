import React from 'react';
import Button from './Button';
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

const Forwarded = (props) => {
  const forwarded = props.forwarded;

  return (
    <div>
      <section>
        {forwarded.map((individualOrder) => (
          <div key={individualOrder.id}>
            <p> Cliente: {individualOrder.clientName}</p>
            <p>Nº da Mesa: {individualOrder.table}</p>
            {console.log(individualOrder.dispatchTime)}
            <p>Pedido:</p>
            <p>
              {individualOrder.clientOrder.map((selectedItens) => (
                <p>{selectedItens.count} x {selectedItens.name} </p>
              ))}
            </p>
            <p>{individualOrder.status}</p>
            <Button
              id={individualOrder.id}
              className={css(styles.changeButton)}
              handleClick={(e) => {
                e.preventDefault();
                props.changeStatus(individualOrder);
              }}
              title='Preparado' />
          </div>
        ))}
      </section>
    </div>
  )
};

export default Forwarded;

//<p>{new Date(individualOrder.dispatchTime).toLocaleTimeString('pt-BR')}</p>
