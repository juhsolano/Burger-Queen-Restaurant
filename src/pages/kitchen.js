import React from 'react';
import { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';

const Kitchen = () => {

  const [luke, setLuke] = useState([]);
  const [yoda, setYoda] = useState([]);

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

  return (
    <p>JUANITA ESTÁ NA COZINHA PREPARANDO UM CÓDIGO!</p> ,
    <p>QUE DEMORA JUANITA!</p>
  );
};

export default Kitchen;