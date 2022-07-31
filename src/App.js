import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [globalID, setGlobalID] = useState(0)

  function createTodo(event) {
    event.preventDefault()
    if (task) {
      setTodos(oldTodos => {
        return [...oldTodos, { todo: task, id: globalID }]
      })
      setGlobalID(globalID + 1)
      setTask('')
    }
  }

  function deleteItem(itemID) {
    setTodos(oldTodos => {
      return oldTodos.filter(({ id }) => id !== itemID)
    })
  }

  return <div>
    <h1>Best To Do App Ever</h1>
    <form onSubmit={createTodo}>
      <input
        type="text"
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <button type="submit">Create Todo</button>
    </form>
    <ul>
      {
        todos.map(item => <div key={item.id}>
          <li>
            {item.todo}
            <button onClick={() => { deleteItem(item.id) }}>Delete</button>
          </li>
        </div>
        )
      }
    </ul>
  </div>;
}

export default App;
