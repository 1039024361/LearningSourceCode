import React, { useState } from 'react';
// import ContextPage from './pages/CreatContext/ContextPage'
// import GetChildContext from './pages/GetChildContext/ContextPage'
import FirstPage from './pages/FirstPage'
import Provider from './plugin/plugin-model/Provider'
// import logo from './logo.svg';
import './App.css';

export async function getInitialState () {
  return await new Promise(res => {
    setTimeout(() => {
      res({
        userName: 'ZhongDerer'
      })
    }, 1000)
  })
}

function App() {
  // const [state, setState] = useState(
  //   () => {
  //     console.log('OK')
  //     return 'OK'
  //   }
  // )
  return (
    <>
      {/* { state } */}
      {/* <ContextPage />
      <GetChildContext /> */}
      <Provider>
        <FirstPage />
      </Provider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
