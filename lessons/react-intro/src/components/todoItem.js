import React from 'react'

class TodoItem extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    id={this.props.item.id}
                />

                <label
                    htmlFor={this.props.item.id}
                >
                    {this.props.item.text}
                </label>
            </div>
        )
    }
}

export default TodoItem