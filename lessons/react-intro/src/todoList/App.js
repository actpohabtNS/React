import React from 'react';
import todosData from './todosData'
import TodoItem from './todoItem'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: todosData
    }
  }
  
  toggleDone = id => {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(item => {
        if (item.id === id)
        return {
          ...item,
          completed: !item.completed
        }

        return item
      })

      return {
        todos: newTodos
      }
    })
  }

  render() {    
    const todoList = this.state.todos.map(item => {
      return <TodoItem
                key={item.id}
                item={item}
                toggleDone={this.toggleDone}
              />
    })

    return (
      <div className="todo-list">
        {todoList}
      </div>
    );
  }
}

export default App