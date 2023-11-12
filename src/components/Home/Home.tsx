import React, { FC } from 'react'
import s from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import Form from '../Form/Form'

const Home: FC = ()=>{
  return (
    <div className={s.container}>
      <NavBar />
      <h1>Tareas</h1>
      <Form />
    </div>
  )
}

export default Home;