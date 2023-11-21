import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/LandingPage.css';

const LandingPage = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="landing-page-container">
      <h1>Task Man 1.0</h1>

      <div>
        <h2 className="todo-header">Create Your List Tasks</h2>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;