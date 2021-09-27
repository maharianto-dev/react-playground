import React from 'react';
import './App.css';
import Main from './features/Main/Main';
import NavBar from './features/NavBar/NavBar';

function App() {
  return (
    <div className="App h-100 d-flex flex-column">
      <div className="w-100 h-25 d-flex flex-column">
        <NavBar />
      </div>
      <div className="w-100 h-75 d-flex flex-column">
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
