import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = (props) => {
  /*
  const handlerDelete = () => {
    props.deleteTodo(props.todo);
  };
*/
  return (
    <li className="list">
      <div className={`list-item ${props.todo.completed ? "complete" : ""}`}>
        {props.todo.title}
      </div>
      <div>
        <button
          className="button-complete"
          onClick={() => props.completed(props.todo)}
        >
          <FaCheckCircle />
        </button>
        <button
          className="button-edit"
          onClick={() => props.setEdit(props.todo)}
        >
          <FaEdit />
        </button>
        <button
          className="button-delete"
          onClick={() => props.deleteTodo(props.todo)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
