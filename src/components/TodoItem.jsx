const TodoItem = ({ id, text, completed, removeTodo, toggleTodoCompleted }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompleted(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        x
      </span>
    </li>
  );
};

export default TodoItem;
