import React, { FC,useState } from 'react'
import s from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'
import Cards from '../Cards/Cards'

const Home: FC = () => {
  const [flag, setFlag] = useState('home');

function pushFlag(flag: string) {
    setFlag(flag);
  }

  return (
<div className={s.container}>
      {/* Utiliza directamente pushFlag como prop en lugar de usar el operador de propagación */}
      <NavBar pushFlag={pushFlag} />
      <h1>Tareas</h1>
      {flag === 'home' && <Cards />}
      {flag === 'form' && <Form />}
    </div>
  );
};

export default Home;