import React, { useState } from 'react';
import s from './Form.module.css'
import Task from '../../interfaces/task';

export default function Form() {

  const [errors,setErrors] = useState({
    title:"",
    description:""
  })

  const [task,setTask] = useState({
    title:'',
    description:''
  })

  function validation(task:Task){

    const errors = {
      title:"",
      description:""
    };

    if(task.title.length < 1) errors.title = "Debe ecribir un titulo!"
    if(task.title.length > 30) errors.title = "El titulo es muy largo!"
    if(task.description.length < 0) errors.description = "Debe haber una descripcion!"
    if(task.description.length > 300) errors.description = "La descripcion es muy larga!"

    return errors;
  }

  function handlerInput(e: any){
    setTask({
      ...task,
      [e.target.name]:e.target.value
    })
    setErrors(validation({
      ...task,
      [e.target.name]:e.target.value
    }))
  }

  function hanldlerSubmit(e: any){
    e.preventDefault()
    console.log(task)
    if(!errors.title.length && !errors.description.length){
      setTask({
        title:'',
        description:''
      })
      setErrors({
        title:'',
        description:''
      })
    }
  }

  return (
    <form className={s.container} onSubmit={hanldlerSubmit}>
      <label>Titulo</label>
        <input className={s.input} name='title' type="text" placeholder='Excribe un titulo...' onChange={(e)=>handlerInput(e)}/>
      <label>Descripción</label>
        <textarea className={s.input} name="description" placeholder='Escribe una descripcion...' onChange={(e)=>handlerInput(e)}/>
      <button type='submit' className={s.button}>CREAR</button>
    </form>
  )
}