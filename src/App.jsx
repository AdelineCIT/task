import Header from "./Components/Header";
import Content from "./Components/Content";
import { UserProvider } from "./Providers/UserProvider";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ToDoList from "./Components/ToDoList";
function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      description: "Buy Groceries",
      status: "New",
    },
    {
      id: 2,
      description: "Finish project report",
      status: "In Progress",
    },
    {
      id: 3,
      description: "Call mom",
      status: "Completed",
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newId = todoList.length + 1;
    const newTodoItem = {
      id: newId,
      description: newTodo,
      status: "New",
    };

    setTodoList([...todoList, newTodoItem]);
    setNewTodo("");
  };

  const changeStatus = (id, newStatus) => {
    const updatedList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });

    setTodoList(updatedList);
  };

  const deleteTodo = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };
  return (
    <>
      <UserProvider>
        <Header></Header>
        <Content></Content>
      </UserProvider>
      <h1>TASK LIST</h1>
      <div className="App">
        <h3>What do I need to do?</h3>
        <div className="todo-form">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button class="btn btn-secondary btn-sm" onClick={addTodo}>
            Add
          </button>
        </div>
        <ToDoList
          todoList={todoList}
          onChangeStatus={changeStatus}
          onDelete={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
