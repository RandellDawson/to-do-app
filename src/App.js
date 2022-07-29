import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [globalID, setGlobalID] = useState(0)

  function createTodo(event) {
    // event.preventDefault()
    setTodos(oldTodos => {
      const id = globalID
      setGlobalID(globalID + 1)
      return [...oldTodos, { todo: task, id }]
    })
  }

  function deleteItem(itemID) {
    setTodos(oldTodos => {
      return oldTodos.filter(({ id }) => id !== itemID)
    })
  }

  return <div>
    <h1>Best To Do App Ever</h1>
      <input
        type="text"
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <button onClick={createTodo}>Create Todo</button>
    <ul>
      {
      todos.map(item => <div key={item.id}>
          <li>
            {item.todo}
            <button onClick={deleteItem(item.id)}>Delete</button>
          </li>
        </div>
      )
    }
    </ul>
  </div>;
}

export default App;
