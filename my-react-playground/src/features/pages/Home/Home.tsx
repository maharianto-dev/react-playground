import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from '../counter/Counter';
import './Home.css';
import logo from '../../../logo.svg';
import ToastNotification from '../../ui/ToastNotification/ToastNotification';

const Home = () => (
  <div className="{Home}">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <Counter />
      <p>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        Edit <code>src/Home.tsx</code> and save to reload.
      </p>
      <Link to="/others">
        <button type="button" className="btn btn-primary mb-1">
          Go to others
        </button>
      </Link>
      <Link to="/testcollection1">
        <button type="button" className="btn btn-primary mb-1">
          Go to Test Collection 1
        </button>
      </Link>
      <ToastNotification />
      <span>
        <span>Learn </span>
        <a
          className="Home-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="Home-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="Home-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,
        <span> and </span>
        <a
          className="Home-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
);

export default Home;
