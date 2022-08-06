import React from 'react';
import styles from './DropDown.module.css'

const DropDown = (props) => {
  return (
    <div className={styles.list}>
      <label className={styles.listLabel}>{props.label}</label>
      <select
      onChange={event => props.aoAlterar(event.target.value)}
      value={props.valor}
      className={styles.listSelect}
      required={props.required}>
        <option value=" "></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default DropDown
