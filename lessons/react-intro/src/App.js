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
    const todoList = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

    return (
      <div className="todo-list">
        {todoList}
      </div>
    );
  }
}

export default App