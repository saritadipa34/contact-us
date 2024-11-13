import React from 'react';

import styles from './button.module.css';

const Button = ({image,message,isOutline}) => {
  return (
    <button  className={ isOutline ? styles.btn3 : styles.button} >
    <span className={styles.img}> {image}</span>
     <span className={styles.msg}> {message}</span>
    </button>
  )
}

export default Button
