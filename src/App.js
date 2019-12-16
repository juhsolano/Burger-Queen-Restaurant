import React, { useState, useEffect } from 'react';
import firebaseApp from './components/Firebase/firebaseUtils';
import Button from './components/Button';
import ClickableSection from './components/ClickableSection';
// import logo from './logo.svg';
// import './App.css';

const clientOrder = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  //const [order, setOrder] = useState([]);
  //const [total, setTotal] = useState('');

  const submitOrder = (event) => {
    event.preventDefault();
    firebaseApp
      .collection('order')
      .add({
        client,
        table,
        //order,
        //total,
      })
      .then(() => {
        setClient('')
        setTable('')
        //setOrder([])
        //setTotal('')
      });
  }

  return (
    //passar card de input
    <label>
      <input type="text" value={client} onChange={event => setClient(event.currentTarget.value)} />
      <input type="text" value={table} onChange={event => setTable(event.currentTarget.value)} />
      <Button onClick={() => { submitOrder }} text='Enviar' />

    </label>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebaseApp.collection('menu').get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setMenu((currentState) => [...currentState, doc.data()]);
        });
      });
  }, []) //array vazio para nao entrar em looping e ser executado apenas uma vez
  console.log(menu);

  const paloma = (item) => {
    console.log(item);
  }

  return (
    <div>
      {menu.map((item) => <ClickableSection onClick={() => paloma(item)} name={item.name} price={item.price} />)}
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)}
        text="Contador" />
    </div>
  );
}

export default App;

// linha 9 {/* <img src={logo} className="App-logo" alt="logo" /> */}
//as rotas vão ser criadas aqui

//pasta pages onde vão ficar o app.js (garçom) e cozinha