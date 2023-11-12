import React, { useState, useEffect } from 'react';
import s from './Form.module.css';
import Task from '../../interfaces/task';

export default function Form() {
  const [tareas, setTareas] = useState<any[]>([]);

  useEffect(() => {
    const tareasGuardadas = obtenerDesdeLocalStorage('tareas');
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  }, []);

  const obtenerDesdeLocalStorage = (clave: string): any[] | null => {
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
  };

  const [errors, setErrors] = useState({
    title: '',
    description: '',
  });

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  function validation(task: Task) {
    const errors = {
      title: '',
      description: '',
    };

    if (task.title.length < 1) errors.title = 'Debe escribir un título!';
    if (task.title.length > 30) errors.title = 'El título es muy largo!';
    if (task.description.length < 0) errors.description = 'Debe haber una descripción!';
    if (task.description.length > 300) errors.description = 'La descripción es muy larga!';

    return errors;
  }

  function handlerInput(e: any) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    setErrors(validation({
      ...task,
      [e.target.name]: e.target.value,
    }));
  }

  function hanldlerSubmit(e: any) {
    e.preventDefault();
    console.log(task);
    if (!errors.title.length && !errors.description.length) {
      setTareas((prevTareas) => [...prevTareas, task]);
      const datosString = JSON.stringify([...tareas, task]);
      localStorage.setItem('tareas', datosString);
      setTask({
        title: '',
        description: '',
      });
      setErrors({
        title: '',
        description: '',
      });
    }
  }

  return (
    <form className={s.container} onSubmit={hanldlerSubmit}>
      <label>Título</label>
        <input className={s.input} name='title' type='text' placeholder='Escribe un título...' onChange={(e) => handlerInput(e)} />
        {errors.title.length?<p className={s.error}>{errors.title}</p>:null}
      <label>Descripción</label>
        <textarea className={s.input} name='description' placeholder='Escribe una descripción...' onChange={(e) => handlerInput(e)} />
        {errors.description.length?<p className={s.error}>{errors.description}</p>:null}
      <button type='submit' className={s.button}>
        CREAR
      </button>
    </form>
  );
}
