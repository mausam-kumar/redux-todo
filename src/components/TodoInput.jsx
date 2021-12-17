import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/action.js";

function TodoInput() {
  const [state, setState] = React.useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    setState(e.target.value);
  }

  function handleAdd() {
    const payload = {
      id: uuid(),
      status: "false",
      title: state
    };
    dispatch(addTodo(payload));
    console.log("Added");
  }

  return (
    <div>
      <span>Enter Todo</span>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        placeholder="Enter Something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default TodoInput;
