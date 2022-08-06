import React from 'react';
import styles from './Dev.module.css';

const Dev = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className={styles.container}>
      <div  className={styles.header}
      style={{ backgroundColor: corDeFundo}}>
          <img src={imagem} alt={nome}
          className={styles.foto}/>
      </div>

      <div  className={styles.footer}>
        <h4  className={styles.nome}
        style={{color: corDeFundo}}>{nome}</h4>
        <h5  className={styles.cargo}>{cargo}</h5>
      </div>
    </div>
  )
}

export default Dev
