import React, { useState } from 'react';
import Button from './Button';
import DropDown from './DropDown';
import styles from './Form.module.css';
import Input from './Input';

const Form = (props) => {

  const [ nome, setNome] = useState('');
  const [ cargo, setCargo] = useState('');
  const [ imagem, setImagem] = useState('');
  const [ time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.cadastrar({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
      <section className={styles.wrapper}>
        <form className={styles.forms} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Preencha os dados para fazer parte da Equipe!</h2>
          <Input
          label='Nome'
          obrigatorio={true}
          placeholder="Digite o seu Nome"
          valor={nome}
          orChanger={valor => setNome(valor)}/>
          <Input
          label='Cargo' 
          obrigatorio={true}
          placeholder="Digite o seu Cargo"
          valor={cargo}
          orChanger={valor => setCargo(valor)}/>
          <Input
          label='Imagem'
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          orChanger={valor => setImagem(valor)}/>
          <DropDown
          label='Time' 
          obrigatorio={true}
          itens={props.times}
          valor={time}
          aoAlterar={valor => setTime(valor)}/>
          <Button>
            Cadastrar 
          </Button>
        </form>
      </section>
  )
}

export default Form
