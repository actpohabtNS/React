import React from 'react'

function Header(props) {
    const {subproject, handleChange} = props

    return (
        <div className="header">
            <label>
                <input
                    type="radio"
                    name="subproject"
                    value="Todo List"
                    checked={subproject === "Todo List"}
                    onChange={handleChange}
                />
                <text>Todo List</text>
            </label>

            <label>
                <input
                    type="radio"
                    name="subproject"
                    value="Meme Generator"
                    checked={subproject === "Meme Generator"}
                    onChange={handleChange}
                />
                <text>Meme Generator</text>
            </label>
        </div>
    )
}

export default Header