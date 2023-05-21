import React from 'react';
import {ITask} from '../interface/ITask';
import Trash from '../icons/trash.png';
import Pencil from '../icons/pencil-simple-line.png';

type TaskProps = {
  task: ITask;
  handleDeleteTask: (param: number) => void;
  handleUpdateTask: (task : ITask) => void;
}

function Task({task, handleDeleteTask, handleUpdateTask  }: TaskProps) {
  return (
    <div className="task-card" id={task.concluida ? 'concluida' : ''} >
      <h1
        id="todo-edit-input"
      >{task.titulo }</h1>
      <div className="edit-btn-container">
        <button
          onClick={() => handleUpdateTask(task)}
          type="button"
          className="btn-concluir"
        >
          <img src={Pencil} alt="save-icon" width="20px" />
        </button>
        <button
          onClick={() => handleDeleteTask(task.id)}
          type="button"
          className="btn-delete"
        >
          <img src={Trash} alt="save-icon" width="20px" />
        </button>
      </div>
    </div>
  );
}

export default Task;
