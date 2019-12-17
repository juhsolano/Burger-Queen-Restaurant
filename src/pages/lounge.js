import React, { useState, useEffect } from 'react';
import firebaseApp from '../components/Firebase/firebaseUtils';
import Input from '../components/Input';
import OptionsCard from '../components/OptionsCard';
import OrderCard from '../components/OrderCard';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  mudarNome: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});

function Lounge() {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    firebaseApp.collection('menu')
      .get()
      .then((snapshot) => {
        const breakfastFood = snapshot.docs.filter(docs => docs.data().breakfast).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setBreakfastMenu(breakfastFood);

        const lunchFood = snapshot.docs.filter(doc => doc.data().lunch).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setLunchMenu(lunchFood);
      })
  }, [])

  const selectOptions = (item) => {
    if (!order.includes(item)) {
      item.count = 1;
      setOrder([...order, item])
    } else {
      item.count += 1;
      setOrder([...order])
    }
  }
  console.log(order);

  //criar a minha funcao submitOrder


  return (
    <div>
      <div>
        <Input type='text' value={client} placeholder='Nome cliente' handleChange={event => setClient(event.currentTarget.value)} />
        <Input type='number' value={table} placeholder='Nº de Mesa' handleChange={event => setTable(event.currentTarget.value)} />
      </div>
      <div className={css(styles.mudarNome)}>
        <OptionsCard
          breakfastMenu={breakfastMenu}
          lunchMenu={lunchMenu}
          selectOptions={selectOptions}
        />
        <OrderCard
          order={order}
        />
      </div>
    </div>
  );
}

export default Lounge;
