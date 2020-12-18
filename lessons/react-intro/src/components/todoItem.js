import React from 'react'

function TodoItem() {

    const {item, toggleDone} = this.props

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                id={item.id}
                onClick={() => toggleDone(item.id)}
            />

            <label
                htmlFor={item.id}
                className={item.completed ? "completed" : ""}
            >
            {item.text}
            </label>
        </div>
    )
}

export default TodoItem