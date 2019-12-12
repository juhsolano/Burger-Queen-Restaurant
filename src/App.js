import React from 'react';
import firebaseApp from './components/Firebase/firebaseUtils';
// import logo from './logo.svg';
// import './App.css';

function App() {
  firebaseApp.collection('menu').get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
      });
    });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// linha 9 {/* <img src={logo} className="App-logo" alt="logo" /> */} 
//as rotas vão ser criadas aqui

//pasta pages onde vão ficar o app.js (garçom) e cozinha