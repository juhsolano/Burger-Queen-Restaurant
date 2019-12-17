import React from 'react';
// import Button from '../components/Button';

const OrderCard = (props) => {
  const order = props.order;
  // const client = props.client;
  // const table = props.table;

  return (
    <div>
      <section>
        {order.map((element) => (
          <p key={element.id}>{element.name}</p>
        ))}

      </section>
    </div>
  );
}

export default OrderCard;

{/* <Button handleClick{() => submitOrder} title='Enviar Pedido' /> */ }
