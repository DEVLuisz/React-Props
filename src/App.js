import { useState } from 'react';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Time from './Components/Time';

function App() {
  
  const times = [
    {
    nome: 'Front-End Developer',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Back-End Developer',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8FBFF'
  },
  {
    nome: 'Fullstack Developer',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Mobile Developer',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'UX/UI Design',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'DevOps',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]

  const [dev, setDev] = useState([]);

  const newCadastro = (devs) => {
    setDev([...dev, devs]);
  }

  return (
    <div>
      <Banner />
      <Form
      times={times.map(time => time.nome)}
      cadastrar={devs => newCadastro(devs)}/>
      {times.map(time => <Time key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      dev={dev.filter(devs => devs.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
