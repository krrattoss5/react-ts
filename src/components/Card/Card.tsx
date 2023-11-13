import React, { FC } from 'react';
import s from './Card.module.css';
import {RadioButtonUnchecked,RadioButtonChecked,Edit,Close} from '@mui/icons-material';

interface CardProps {
  task: {
    id: number;
    pending: boolean;
    title: string;
    description: string;
  };
}

const Card: FC<CardProps> = ({ task }) => {
  function deleteTask() {
    let tareasString:any = localStorage.getItem('tareas');
    let tareas = JSON.parse(tareasString);

    tareas = tareas.filter((t: any) => t.title !== task.title);

    const datosString = JSON.stringify(tareas);
    localStorage.setItem('tareas', datosString);
  }

  function pendingFlag() {
    let tareasString:any = localStorage.getItem('tareas');
    let tareas = JSON.parse(tareasString);

    tareas = tareas.filter((t: any) => t.title !== task.title);
    task.pending?tareas = [...tareas,{pending:false,title:task.title,description:task.description}]:tareas = [...tareas,{pending:true,title:task.title,description:task.description}]

    const datosString = JSON.stringify(tareas);
    localStorage.setItem('tareas', datosString);
  }

  return (
    <div className={s.container}>
      <button className={s.button} onClick={deleteTask}>
        <Close fontSize='small' />
      </button>
      {task.pending?<button className={s.button_pending0} onClick={()=>pendingFlag()}>
        <RadioButtonUnchecked fontSize='small' />
      </button>:
      <button className={s.button_pending1} onClick={()=>pendingFlag()}>
        <RadioButtonChecked fontSize='small' />
      </button>}
      {/* <button className={s.button_edit} onClick={()=>console.log('yes')}>
        <Edit fontSize='small' />
      </button> */}
      <h2 className={s.h2}>{task.title}</h2>
      <p className={s.p}>{task.description}</p>
    </div>
  );
};

export default Card