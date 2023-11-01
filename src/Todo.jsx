import { useState } from "react";

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () => {
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleUpdateLabel = (e) => {
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });
  };

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  return (
    <li style={{ textAlign: "left" }}>
      <label htmlFor={todo.id}>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />

        {editing === true ? (
          <input type="text" value={todo.label} onChange={handleUpdateLabel} />
        ) : (
          <span>{todo.label}</span>
        )}
      </label>

      <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
      {!editing && <button onClick={handleDeleteClick}>Delete</button>}
    </li>
  );
}
