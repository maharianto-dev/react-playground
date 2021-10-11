import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Main from './features/Main/Main';
import NavBar from './features/ui/NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App h-100 d-flex flex-column">
      <div className="AppNavbar w-100 h-15p d-flex flex-column">
        <NavBar />
      </div>
      <div className="AppMain container-fluid">
        <div className="w-100 h-85p d-flex flex-column">
          <Main />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default App;
