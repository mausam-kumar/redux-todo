import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {removeTodo,toggleTodo} from "../redux/action.js"

function TodoList() {
  const todo = useSelector((state) => state.todos);

  const dispatch = useDispatch()

  function handleDelete(id){
    const payload = id
    dispatch(removeTodo(payload))
  }

  function handleToggle(id){
    const payload = id
    dispatch(toggleTodo(payload))
  }

  return <div>
      {
          todo.map((ele) => {
              return(
                  <div style={{marginTop:"20px",width:"500px",display:"flex",justifyContent:"space-around"}} key={ele.id}>
                      <span>{ele.title}</span>
                      <span>{ele.status}</span>
                      <button onClick={() => handleToggle(ele.id)}>Toggle</button>
                      <button onClick={() => handleDelete(ele.id)}>Delete</button>
                  </div>
              )
          })
      }

  </div>;
}

export default TodoList;
