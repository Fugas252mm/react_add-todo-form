import './App.scss';
import { TodoInfo } from './components/TodoInfo';
import { TodoList } from './components/TodoList';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);

  return (
    <div className="App">
      <TodoInfo
        todos={todos}
        users={usersFromServer}
        createNewTodo={setTodos}
      />
      <TodoList todos={todos} users={usersFromServer} />
    </div>
  );
};
