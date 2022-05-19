import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const handleInputChange = (e) => {
    //e:{target:{value:value, name:name}}
    props.setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: uuidv4(), title: props.input, completed: false };
    props.setTodos([...props.todos, newTodo]);
    props.setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter to todo"
        className="task-input"
        value={props.input}
        onChange={handleInputChange}
      />
      <button type="submit" className="button-add">
        Add
      </button>
    </form>
  );
};

export default Form;

//props = {input:input, setInput:setInput}
