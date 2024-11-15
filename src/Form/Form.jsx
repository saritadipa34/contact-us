import React, { useState } from 'react';
import {MdMessage, MdEmail} from 'react-icons/md';
import {IoCall} from 'react-icons/io5';
import Button from '../components/Button/Button';
import styles from './form.module.css';


const Form = () => {
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[area,setArea]=useState('')

const handleSubmit=(e)=>{
  e.preventDefault()
  setName(e.target.elements.names.value)
  setEmail(e.target.elements.emails.value)
  setArea(e.target.elements.texts.value)

console.log(e.target.elements.names.value);  
console.log(e.target.elements.emails.value);
console.log(e.target.elements.texts.value);
}

  return (
    <div className={styles.form}>
      <div className={styles.btn}>
      <Button image={<MdMessage fontSize="8px"/>} message={"VIA SUPPORT CHAT"}  />
      <Button image={<IoCall fontSize="8px"/>} message={"VIA CALL"}/>
      </div>
      <Button image={<MdEmail fontSize="8px"/>} message={"VIA EMAIL FORM"} isOutline={true}/>
 
      <div className={styles.flexing}>
 <div>
<form onSubmit={handleSubmit} className={styles.formcontrol} >
  <label className={styles.label1} htmlFor="names">Name</label>
  <input className={styles.input1}maxLength={10} title='name' name='names' type="text"/>
  <label className={styles.label2} htmlFor="emails">E-mail</label>
  <input className={styles.input2} maxLength={16} type="email" title='email' name='emails' id='emails'/>
  <label className={styles.area}  htmlFor="textarea">TEXT</label>
  <textarea className={styles.textarea} maxLength={16} rows={5} name="texts" id="texts"></textarea>
 
 <Button type="submit" message={"Submit"} style={{margin:"5px 0 0 62%"}}/>
 <div className={styles.view}>
   <div><b>Name:</b>{name} </div>
   <div><b> E-mail:</b>{email} </div>
  <div><b>Text:</b>{area}</div> 
  </div>
</form>
</div>

 <div className={styles.contact}> <img  src="/assets/images/contact.jpeg" alt="contact" /> </div>
    </div>
    </div>
  )
}

export default Form
