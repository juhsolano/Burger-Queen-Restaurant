import React from 'react';
import { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';
import { StyleSheet, css } from 'aphrodite';
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
        setForwarded(request.filter((forwardedItens) => forwardedItens.status === 'A preparar'));

        const final = snapshot.docs.map((ord) => ({
          id: ord.id,
          ...ord.data()
        }))
        setReadyOrders(final.filter((readyItens) => readyItens.status === 'Pronto para entrega'));
      })
  }, [])

  const changeStatus = (orderItem) => {
    firebaseApp.collection('order')
      .doc(orderItem.id)
      .update({
        status: 'Pronto para entrega',
        readyTime: new Date().getTime(),
        deliverOrder: 'A entregar',
      })
  }

  return (
    <div className={css(styles.kitchenStyle)}>
      <Forwarded
        forwarded={forwarded}
        changeStatus={changeStatus}
      />
      <ReadyOrders
        readyOrders={readyOrders}
      />
    </div>
  );

};

export default Kitchen;

const styles = StyleSheet.create({
  kitchenStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});
