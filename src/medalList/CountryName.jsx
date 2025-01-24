import React, { useState } from "react";
const SAMPLE_TODOS = [
  { id: 1, text: "" }
];

const PascalCase = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    setTodos([{ id: crypto.randomUUID(), text: todoText }, ...todos]);
    setTodoText("");
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={handleChange} />
        <button type="submit">국가추가</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PascalCase;