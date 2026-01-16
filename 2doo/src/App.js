import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  // read localStorage once at the beginning
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (!text) return; 
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map((item, index) => (
            <div className="item" key={index}>
              <li
                className={item.completed ? "done" : ""}
                onClick={() => handleItemDone(index)}
              >
                {item.text}
              </li>
              <span className="trash" onClick={() => handleDeleteItem(index)}>
                ❌
              </span>
            </div>
          ))}
        </ul>
        <input
          name="text"
          className="input"
          ref={inputRef}
          placeholder="Enter item...."
        />
        <button className="button" role="button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
