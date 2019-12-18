import React, { useState, useEffect } from 'react';
import firebaseApp from '../components/Firebase/firebaseUtils';
import Input from '../components/Input';
import OptionsCard from '../components/OptionsCard';
import OrderCard from '../components/OrderCard';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loungeStandard: {
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

  //Função para deletar item

  // const removeOrder = (item) => {
  //   const idItem = (setOrder.indexOf(item));
  //   console.log(idItem);
  // }
  // const remove = (item) => {
  //   const index = (orderState.indexOf(item));
  //   orderState.splice(index, 1);
  //   setOrder([...orderState]);
  // };

  // delete (id){
  //   this.setState(prevState => ({
  //     data: prevState.data.filter(el => el != id)
  //   }));
  // }

  return (
    <div>
      <div>
        <Input type='text' value={client} placeholder='Nome cliente' handleChange={event => setClient(event.currentTarget.value)} />
        <Input type='number' value={table} placeholder='Nº de Mesa' handleChange={event => setTable(event.currentTarget.value)} />
      </div>
      <div className={css(styles.loungeStandard)}>
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


// removeOrder={removeOrder}


//TO DO LIST
//Função para subtrair (até 1, caso contrário é excluido)
//Função de soma do total
//Arrumar styles da primeira tela
//Função submitOrder

