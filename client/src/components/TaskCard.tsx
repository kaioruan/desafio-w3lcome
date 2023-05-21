import React, { useState, useEffect } from 'react';
import {ITask} from '../interface/ITask';

type TaskProps = {
  task: ITask;
  handleDeleteTask: (param: number) => void;
  handleUpdateTask: (task : ITask) => void;
}


function Task({task, handleDeleteTask, handleUpdateTask  }: TaskProps) {
  return (
    <div>
      <h1>{task.titulo}</h1>
      <button
        onClick={() => handleUpdateTask(task)}
        type="button"
      >{task.concluida ? 'desfazer' : 'concluir'}</button>
      <button
        onClick={() => handleDeleteTask(task.id)}
        type="button"
      >apagar</button>
    </div>
  );
}

export default Task;
