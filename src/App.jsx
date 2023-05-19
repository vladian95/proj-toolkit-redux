import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const toggleTodoCompleted = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  const removeTodo = (todoId) => {
    // setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList />
    </div>
  );
}

export default App;
