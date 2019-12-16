import React, { useState, useEffect } from 'react';
import firebaseApp from '../components/Firebase/firebaseUtils';
import Button from '../components/Button'
import ClickableSection from '../components/ClickableSection';

// const ClientOrder = () => {
//     const [client, setClient] = useState('');
//     const [table, setTable] = useState('');
//     //const [order, setOrder] = useState([]);
//     //const [total, setTotal] = useState('');

//     const submitOrder = (event) => {
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

//     return (
//         //passar card de input
//         <label>
//             <input type="text" value={client} onChange={event => setClient(event.currentTarget.value)} />
//             <input type="text" value={table} onChange={event => setTable(event.currentTarget.value)} />
//             <Button onClick={() => { submitOrder }} text='Enviar' />

//         </label>
//     )
// }

function Lounge() {
  const [counter, setCounter] = useState(0);
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);

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

  const paloma = (item) => {
    console.log(item.price);
  }

  return (
    <div>
      <p>CAFÉ DA MANHÃ</p>
      {breakfastMenu.map((item) => <ClickableSection onClick={() => paloma(item)} name={item.name} price={item.price} key={item.id} />)}
      <p>ALMOÇO</p>
      {lunchMenu.map((item) => <ClickableSection onClick={() => paloma(item)} name={item.name} price={item.price} key={item.id} />)}
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)}
        title="Contador" />
    </div>
  );
}

export default Lounge;


// useEffect(() => {
//   firebaseApp.collection('menu').get()
//     .then(function (querySnapshot) {
//       querySnapshot.forEach(function (doc) {
//         setMenu((currentState) => [...currentState, doc.data()]);
//       });
//     });
// }, []) //array vazio para nao entrar em looping e ser executado apenas uma vez
// console.log(menu);