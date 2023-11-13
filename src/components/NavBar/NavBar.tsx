import {FC} from 'react'
import s from './NavBar.module.css'

interface NavBarProps {
  pushFlag: (flag: string) => void;
}

const NavBar: FC<NavBarProps> = ({ pushFlag }) => {
  return(
    <div className={s.container}>
      <div className={s.nav}>
        <p onClick={()=>pushFlag('home')} className={s.buttonNav}>Inicio</p>
        <p onClick={()=>pushFlag('form')} className={s.buttonNav}>Nueva Tarea</p>
        <p onClick={()=>pushFlag('finished')} className={s.buttonNav}>Finalizado</p>
        <p onClick={()=>pushFlag('pending')} className={s.buttonNav}>Pendientes</p>
      </div>
    </div>
  )
}

export default NavBar;