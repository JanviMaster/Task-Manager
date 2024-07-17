import React, { useState } from 'react';
import './App.css';
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };
  const handlecompleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1 className='heading'>To-Do List</h1> 
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      /><br></br>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button onClick={() => handlecompleteTask(index)}>Done</button>
          </li>
        ))}
      
      </ul>
    </div>
  );
};

export default TodoList;
