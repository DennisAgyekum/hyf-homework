"use client";
import React, { useState } from 'react';
import { useTodos } from "./TodoContext";
import './TodoApp.css';

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (!input) {
      alert("You must write something!");
      return;
    }
    addTodo(input);
    setInput("");
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List
          <img
            src="https://github.com/DennisAgyekum/to-do-list/blob/main/icon.png?raw=true"
            alt="icon"
          />
        </h2>
        <div className="row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add your text"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul id="list-container">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={todo.completed ? "checked" : ""}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
              <span onClick={(e) => { e.stopPropagation(); removeTodo(index); }}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;