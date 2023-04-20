import { useEffect, useRef, useState } from 'react';
// import uuidv4 from 'uuid/v4';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: 'TASK 1', complete: false },
  ]);
  const taskNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  function handleAddTask(e) {
    const name = taskNameRef.current.value;
    if (name === '') return;
    console.log(name);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    });
    taskNameRef.current.value = null;
  }

  return (
    <>
      <TodoList todos={todos} />
      <br />
      <input ref={taskNameRef} type="text" />
      <button onClick={handleAddTask}>DO NOT PRESS</button>
      <button>Press Me To Delete The Internet</button>
      <div>0 Things Left</div>
    </>
  );
}

export default App;
