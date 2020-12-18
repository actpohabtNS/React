import React from 'react';
import todosData from './todosData'
import TodoItem from './components/todoItem'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: todosData
    }
  }
  
  render() {    
    const todoList = this.state.todos.map(item => {
      return (
        <div key={item.id}>
          <TodoItem item={item}/>
        </div>
      )
    })

    return (
      <div className="todo-list">
        {todoList}
      </div>
    );
  }
}

export default App