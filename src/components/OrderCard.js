import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const OrderCard = (props) => {
  const client = props.client;
  const table = props.table;

  return (
    <div>
      <section>
        <Input type='text' value={client} placeholder='Nome cliente' onChange={event => setClient(event.currentTarget.value)} />
        <Input type='number' value={table} placeholder='Nº de Mesa' onChange={event => setTable(event.currentTarget.value)} />
      </section>
      <Button onClick{() => submitOrder} title='Enviar Pedido' />
    </div>
  );
}
