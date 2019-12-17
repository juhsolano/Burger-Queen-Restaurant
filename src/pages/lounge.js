import React, { useState, useEffect } from 'react';
import firebaseApp from '../components/Firebase/firebaseUtils';
// import Button from '../components/Button'
import ClickableSection from '../components/ClickableSection';
import OptionsCard from '../components/OptionsCard';
// import OrderCard from '../components/OrderCard';

function Lounge() {
  // const [counter, setCounter] = useState(0);
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  // const [client, setClient] = useState('');
  // const [table, setTable] = useState('');
  // const [order, setOrder] = useState([]);
  // const [total, setTotal] = useState('');

  useEffect(() => {
    firebaseApp.collection('menu')
      .where('breakfast', '==', true)
      .onSnapshot((snapshot) => {
        const food = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setBreakfastMenu(food);
      })
  }, [])

  useEffect(() => {
    firebaseApp.collection('menu')
      .where('lunch', '==', true)
      .onSnapshot((snapshot) => {
        const food = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setLunchMenu(food);
      })
  }, [])

  // const submitOrder = (event) => {
  //         event.preventDefault();
  //         firebaseApp
  //             .collection('order')
  //             .add({
  //                 client,
  //                 table,
  //                 //order,
  //                 //total,
  //             })
  //             .then(() => {
  //                 setClient('')
  //                 setTable('')
  //                 //setOrder([])
  //                 //setTotal('')
  //             });
  //     }

  return (
    <OptionsCard
      breakfastMenu={breakfastMenu}
      lunchMenu={lunchMenu} />
  );
}

export default Lounge;



//RETURNO
// return (
//   <div>
//     <p>CAFÉ DA MANHÃ</p>
//     {breakfastMenu.map((item) => <ClickableSection onClick={() => getItem(item)} name={item.name} price={item.price} key={item.id} />)}
//     <p>ALMOÇO</p>
//     {lunchMenu.map((item) => <ClickableSection onClick={() => getItem(item)} name={item.name} price={item.price} key={item.id} />)}
//     <p>{counter}</p>
//     <Button onClick={() => setCounter(counter + 1)}
//       title="Contador" />
//   </div>
// );

// useEffect(() => {
//   firebaseApp.collection('menu').get()
//     .then(function (querySnapshot) {
//       querySnapshot.forEach(function (doc) {
//         setMenu((currentState) => [...currentState, doc.data()]);
//       });
//     });
// }, []) //array vazio para nao entrar em looping e ser executado apenas uma vez
// console.log(menu);