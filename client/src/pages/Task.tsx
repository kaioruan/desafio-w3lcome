import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { ITask } from '../interface/ITask';
import AddTask from '../icons/file-plus.png';
import ToDoList from '../icons/clipboard-text.png';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchAPI = async () => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'GET'
      })
    const data = await response.json();
    setTasks(data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleAddTask = () => {
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({titulo: newTask, concluida: false})
    })
      .then(res => res.json())
      .then(data => {
        fetchAPI();
      });
  }

  const handleDeleteTask = async (id: number) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE'
    })
    fetchAPI();
  }

  const handleUpdateTask = async (task : ITask) => {
    task.concluida = !task.concluida;
    await fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    fetchAPI();
  }

  return (
    <div>
      <header>
        <section>
          <h1>Lista de Tarefas W3lcome</h1>
          <img src={ToDoList} alt="save-icon" width="20px" />
        </section>
        <form className="add-task-container">
          <input 
            type="text"
            placeholder="Nova tarefa"
            id="todo-input"
            onChange={e => setNewTask(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddTask}
          >
            <img src={AddTask} alt="save-icon" width="20px" />
          </button>
        </form>
      </header>
      <div className='task-content' >
        { tasks.map((task : ITask) => (
          <TaskCard 
          task={task}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
          key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default Task;
