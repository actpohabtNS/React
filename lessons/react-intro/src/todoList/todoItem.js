import React from 'react'

function TodoItem(props) {

    const {item, toggleDone} = props

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                id={item.id}
                onChange={() => toggleDone(item.id)}
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