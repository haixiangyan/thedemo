import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <p style={{ textAlign: 'center' }}>
        <a rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
          粤ICP备2021095802号
        </a>
      </p>
    </div>
  );
}

export default App;
