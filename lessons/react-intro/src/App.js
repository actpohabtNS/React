import React from 'react'
import TodoApp from './todoList/App';
import MemeApp from './memeGenerator/App'
import Header from './header'
import './App.css'

class App extends React.Component {
   constructor() {
       super()

       this.state = {
           subproject: "Todo List"
       }
   }

   handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
   }

   render() {

        let component

        if (this.state.subproject === "Todo List")
            component = <TodoApp />
        else component = <MemeApp />

        return (
            <div>
                <Header 
                    subproject={this.state.subproject}
                    handleChange={this.handleChange}
                />

                {component}

            </div>
        )
   }
}

export default App