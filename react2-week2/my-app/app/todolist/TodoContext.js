"use client";
import React, { createContext, useReducer, useContext } from 'react';


const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';


const initialState = [];


function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, completed: false }];
    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}


const TodoContext = createContext();


export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => dispatch({ type: ADD_TODO, payload: text });
  const removeTodo = (index) => dispatch({ type: REMOVE_TODO, payload: index });
  const toggleTodo = (index) => dispatch({ type: TOGGLE_TODO, payload: index });

  return (
    <TodoContext.Provider value={{ todos: state, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}


export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
}