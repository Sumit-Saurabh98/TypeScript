import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random() * 10, text: text },
    ]);
  };

  const todoDeleteHandler = (id: number) => {
    setTodos(prevTodos =>{
      return prevTodos.filter(todo => todo.id !== id);
    })
  }
  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <Todo items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
