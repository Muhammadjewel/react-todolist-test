import { useState } from "react";

function createTodo(label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

export default function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = useState("");

  const handleUpdateLabel = (e) => setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <li>
      <input
        type="text"
        value={label}
        placeholder="New todo"
        onChange={handleUpdateLabel}
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
}
