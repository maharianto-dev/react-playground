import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <div className={styles.Loading} data-testid="Loading">
    <p>Loading...</p>
  </div>
);

export default Loading;
