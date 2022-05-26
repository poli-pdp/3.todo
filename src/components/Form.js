import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const handleInputChange = (e) => {
    //e:{target:{value:value, name:name}}
    props.setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.edit) {
      updateTodo(edit.id, props.input, edit.completed);
    } else {
      const newTodo = { id: uuidv4(), title: props.input, completed: false };
      props.setTodos([...props.todos, newTodo]);
      props.setInput("");
    }
  };

  const updateTodo = (id, title, completed) => {
    const newTodos = props.todos.map((todo) =>
      todo.id === id ? { id, title, completed } : todo
    );
    props.setTodos(newTodos);
    props.setEdit(null);
  };

  const { edit, setInput } = props;
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit, setInput]);

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
        {props.edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;

//props = {input:input, setInput:setInput}
