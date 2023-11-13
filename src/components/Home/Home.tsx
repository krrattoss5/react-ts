import React, { FC, useState, useEffect } from 'react';
import s from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form';
import Card from '../Card/Card';

interface Task {
  id:number;
  pending: true;
  title: string;
  description: string;
}

const Home: FC = () => {
  const [flag, setFlag] = useState('home');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Obtener tareas desde el localStorage al montar el componente
    const storedTasks = obtenerDesdeLocalStorage('tareas');
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, [tasks]);

  function pushFlag(flag: string) {
    setFlag(flag);
  }

  function obtenerDesdeLocalStorage(clave: string): Task[] | null {
    try {
      const datosString = localStorage.getItem(clave);
      if (datosString) {
        return JSON.parse(datosString);
      }
      return [];
    } catch (error) {
      console.error('Error al obtener desde localStorage:', error);
      return [];
    }
  }

  return (
    <div className={s.container}>
      <NavBar pushFlag={pushFlag} />
      {flag === 'home'?<h1>Todas las Tareas</h1>:null}
      {flag === 'form'?<h1>Crear Nueva Tarea</h1>:null}
      {flag === 'pending'?<h1>Tareas Pendientes</h1>:null}
      {flag === 'finished'?<h1>Tareas Terminadas</h1>:null}

      {flag === 'home' && (
        <div className={s.cards}>
          {tasks.length > 0?tasks.map((task) => (
            <Card key={task.id} task={task} />
          ))
          :<button className={s.learn_more} onClick={()=>pushFlag('form')}>
            <span className={s.circle} aria-hidden="true">
              <span className={`${s.icon} ${s.arrow}`} />
            </span>
            <span className={s.button_text}>Nueva Tarea...</span>
          </button>
        }
        </div>
      )}

      {flag === 'form' && <Form pushFlag={pushFlag} />}

      {flag === 'pending' && (
        <div className={s.cards}>
          {tasks.length > 0?tasks.map((task) => (
            task.pending && <Card key={task.id} task={task} />
          ))
          :<button className={s.learn_more} onClick={()=>pushFlag('form')}>
            <span className={s.circle} aria-hidden="true">
              <span className={`${s.icon} ${s.arrow}`} />
            </span>
            <span className={s.button_text}>Nueva Tarea...</span>
          </button>
        }
        </div>
      )}

      {flag === 'finished' && (
        <div className={s.cards}>
          {tasks.length > 0?tasks.map((task) => (
            !task.pending && <Card key={task.id} task={task} />
          ))
          :<button className={s.learn_more} onClick={()=>pushFlag('form')}>
            <span className={s.circle} aria-hidden="true">
              <span className={`${s.icon} ${s.arrow}`} />
            </span>
            <span className={s.button_text}>Nueva Tarea...</span>
          </button>
        }
        </div>
      )}
    </div>
  );
};

export default Home;
