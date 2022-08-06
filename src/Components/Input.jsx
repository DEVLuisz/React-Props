import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {

  const marcaDaAgua = `${props.placeholder}...`;

  const handleChange = (event) => {
    props.orChanger(event.target.value);
  }

  return (
    <div className={styles.campo}>
      <label className={styles.campoLabel}>{props.label}</label>
      <input value={props.valor} onChange={handleChange} className={styles.campoInput} required={props.obrigatorio} placeholder={marcaDaAgua}/>
    </div>
  )
}

export default Input
