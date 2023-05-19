import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { ITask } from '../interface/ITask';

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

  return (
    <div>
      <input 
        type="text"
        placeholder="Nova tarefa"
        onChange={e => setNewTask(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAddTask}
      >Adicionar</button>
      { tasks.map((task : ITask) => (
        <TaskCard 
        task={task}
        handleDeleteTask={handleDeleteTask}
        key={task.id} />
      ))}
    </div>
  );
}

export default Task;
