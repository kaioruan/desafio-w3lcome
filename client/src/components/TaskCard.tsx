import React, { useState, useEffect } from 'react';
import {ITask} from '../interface/ITask';

type TaskProps = {
  task: ITask;
  handleDeleteTask: (param: number) => void;
}


function Task({task, handleDeleteTask  }: TaskProps) {
  return (
    <div>
      <h1>{task.titulo}</h1>
      <button
      >{ task.concluida}</button>
      <button
        onClick={() => handleDeleteTask(task.id)}
        type="button"
      >apagar</button>
    </div>
  );
}

export default Task;
