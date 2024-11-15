import React from 'react';

import styles from './button.module.css';

const Button = ({image,message,isOutline,onClick,style}) => {
  return (
    <button onClick={onClick} className={ isOutline ? styles.btn3 : styles.button} style={style}>
    <span className={styles.img}> {image}</span>
     <span className={styles.msg}> {message}</span>
    </button>
  )
}

export default Button
