import React from 'react';
import {MdMessage} from 'react-icons/md';
import {IoCall} from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import Button from '../components/Button/Button';
import styles from './form.module.css';

const Form = () => {
  return (
    <div className={`${styles.form}`}>
      <div className={styles.btn} >
      <Button  image={<MdMessage fontSize="8px"/>} message={"VIA SUPPORT CHAT"} />
      <Button image={<IoCall fontSize="8px"/>} message={"VIA CALL"}/>
      </div>
      <Button image={<MdEmail fontSize="8px"/>} message={"VIA EMAIL FORM"} isOutline={true}/>

    </div>
  )
}

export default Form
