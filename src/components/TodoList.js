import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const completed = (todo) => {
    const newTodos = props.todos.map(
      (item) => {
        if (item.id === todo.id) {
          const newTodo = { ...item, completed: !item.completed };
          return newTodo;
        } else {
          return item;
        }
      }
      /* Optimizado
      return item.id === todo.id
        ? { ...item, completed: !item.completed }
        : item;
  }*/
    );
    props.setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = props.todos.filter((item) => item.id !== todo.id);
    props.setTodos(newTodos);
  };

  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completed={completed}
          setEdit={props.setEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
