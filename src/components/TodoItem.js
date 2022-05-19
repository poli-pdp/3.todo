import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = (props) => {
  return (
    <li className="list">
      <div className="list-item">{props.todo.title}</div>
      <div>
        <button className="button-complete">
          <FaCheckCircle />
        </button>
        <button className="button-edit">
          <FaEdit />
        </button>
        <button className="button-delete">
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
