import {FC} from 'react'
import s from './NavBar.module.css'

const NavBar: FC= ()=>{
  return(
    <div className={s.container}>
      <div className={s.nav}>
        <p className={s.buttonNav}>Nueva Tarea</p>
        <p className={s.buttonNav}>Finalizado</p>
        <p className={s.buttonNav}>Pendientes</p>
      </div>
    </div>
  )
}

export default NavBar;