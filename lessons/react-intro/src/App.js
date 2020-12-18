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
      return (
        <div className="todo-list">
          <TodoItem />
        </div>
      );
  }
}

export default App