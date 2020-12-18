import React from 'react'

class TodoItem extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
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
                >
                    {item.text}
                </label>
            </div>
        )
    }
}

export default TodoItem