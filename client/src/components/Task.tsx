import React, { useState, useEffect } from 'react';

function Task() {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => {
      setTasks(data);
    });
}, []);
  return (
    <h1>Hello World!</h1>
  );
}

export default Task;
