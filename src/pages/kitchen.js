import React from 'react';
import { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';
import KitchenCard from '../components/KitchenCard';

const Kitchen = () => {

  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    firebaseApp.collection('order')
      .where('status', '==', 'Encaminhado')
      .orderBy('dispatchTime', 'asc')
      .get()
      .then((snapshot) => {
        const printOrder = snapshot.docs.map((ord) => ({
          id: ord.id,
          ...ord.data()
        }))
        setOrdered(printOrder);
      }, [])
  });

  const changeStatus = (orderItem) => {
    firebaseApp.collection('order')
      .doc(orderItem.id)
      .update({
        deliver: 'A entregar',
        status: 'Pronto',
        dispatchTime: new Date().getTime(),
      })
    console.log('Olá Juanitinha')
  }

  return (
    <div>
      <h1>COZINHA</h1>
      <h2>PEDIDOS A PREPARAR</h2>
      <div>
        {ordered.map((item) =>
          <KitchenCard
            changeStatus={changeStatus}
            clientName={item.clientName}
            table={item.table}
            clientOrder={item.clientOrder}
            dispatchTime={item.dispatchTime}
            status={item.status}
            key={item.id}
          />
        )}
      </div>
    </div>
  );

};

export default Kitchen;












// const [luke, setLuke] = useState([]);
// const [yoda, setYoda] = useState([]);
//   useEffect(() => {
//     firebaseApp.collection('order')
//       .where('status', '==', 'Encaminhado')
//       .orderBy('dispatchTime', 'asc')
//       .then((snapshot) => {
//         const ray = snapshot.docs.map((orderItem) => {
//           id: orderItem.id,
//         ...orderItem.data()
//       })
//     setLuke(orderItem);
//   })
// }, []);