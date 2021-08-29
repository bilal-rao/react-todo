import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, index, toggleTodo, deleteTodo, onEditTodo }) {
  return (
    <div id={index} className={todo.isComplete ? "todo-row complete" : "todo-row"}>
      <input
        type="checkbox"
        className="checkbox-large"
        defaultChecked={todo.isCompleted}
        onClick={(e) => toggleTodo(e, index)}
      ></input>
      <input className={`${todo.isCompleted ? "complete" : ""}`} value={todo.text} onChange={(ev) => onEditTodo(ev, index)} disabled={todo.isCompleted ? true : false}>
      </input>
      <div className="icons">
        <button className="btn" onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrash} size={"lg"} color="silver" />
        </button>
      </div>
    </div>
  );
}
