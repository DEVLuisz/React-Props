import React from 'react';
import Dev from './Dev';
import styles from './Time.module.css';

const Time = (props ) => {

  const css = { backgroundColor: props.corSecundaria };
  const borderBottomColor = {borderColor: props.corPrimaria};

  return (
    props.dev.length > 0 &&
      <section 
      className={styles.timeDev}
      style={css}>
      <h3 
      style={borderBottomColor}
      className={styles.timeTitulo}>
        {props.nome}
      </h3>
      <div className={styles.devs}>
      {props.dev.map(dev => <Dev
      key={dev}
      corDeFundo={props.corPrimaria}
      nome={dev.nome}
      cargo={dev.cargo}
      imagem={dev.imagem}/>)}
      </div>
      </section>
  )
}

export default Time
