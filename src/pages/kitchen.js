import React from 'react';
import { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';
import Forwarded from '../components/Forwarded';
import ReadyOrders from '../components/ReadyOrders';

const Kitchen = () => {
  const [forwarded, setForwarded] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);

  useEffect(() => {
    firebaseApp
      .collection('order')
      .orderBy('dispatchTime', 'asc')
      .onSnapshot((snapshot) => {
        const request = snapshot.docs.map((ord) => ({
          id: ord.id,
          ...ord.data()
        }))
        setForwarded(request.filter((forwardedItens) => forwardedItens.status === 'Encaminhado'));

        const final = snapshot.docs.map((ord) => ({
          id: ord.id,
          ...ord.data()
        }))
        setReadyOrders(final.filter((readyItens) => readyItens.status === 'Pronto'));
        console.log(final)
      })
  }, [])

  const changeStatus = (orderItem) => {
    firebaseApp.collection('order')
      .doc(orderItem.id)
      .update({
        status: 'Pronto',
        readyTime: new Date().getTime(),
        deliverOrder: 'A entregar',
      })
    console.log('Olá Juanitinha, mudei meu STATUS e adicionei coisinhas')
  }

  return (
    <div>
      <h1>COZINHA</h1>
      <h2>PEDIDOS A PREPARAR</h2>
      <div>
        <Forwarded
          forwarded={forwarded}
          changeStatus={changeStatus}
        />
        <ReadyOrders
          readyOrders={readyOrders}
        />
      </div>
    </div>
  );

};

export default Kitchen;
