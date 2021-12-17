import React from "react";
import TodoList from "./TodoList.jsx";
import TodoInput from "./TodoInput.jsx";
function Todo() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
export default Todo;
