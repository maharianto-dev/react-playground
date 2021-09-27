import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './NavBar.module.css';
import jnlogo from '../../assets/JN.png';

const NavBar = () => (
  <div className={`${styles.NavBar} h-100 d-flex flex-row align-items-start`}>
    <div className="h-100 p-2">
      <img className="h-100" src={jnlogo} alt="JN logo" />
    </div>
    <div className="d-flex flex-column h-100 justify-content-evenly">
      <div className="fs-5">
        NavBar Component
      </div>
      <div>
        <Breadcrumb />
      </div>
    </div>
  </div>
);

export default NavBar;
