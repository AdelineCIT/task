import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function ToDoList({ todoList, onChangeStatus, onDelete }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.description} - {todo.status}
          <button
            class="btn btn-secondary btn-sm"
            onClick={() => onChangeStatus(todo.id, "New")}
          >
            New
          </button>
          <button
            class="btn btn-secondary btn-sm"
            onClick={() => onChangeStatus(todo.id, "In Progress")}
          >
            In Progress
          </button>
          <button
            class="btn btn-secondary btn-sm"
            onClick={() => onChangeStatus(todo.id, "Completed")}
          >
            Completed
          </button>
          <button
            class="btn btn-danger btn-sm"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
