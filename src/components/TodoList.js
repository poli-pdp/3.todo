import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
