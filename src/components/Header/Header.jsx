import React from 'react';
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} container`}
     >
      <div className={styles.image}><img src="/assets/images/logo.png" alt="pic" /></div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
          </div>
  )
}

export default Header
