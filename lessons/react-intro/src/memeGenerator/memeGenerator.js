import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount = () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data

                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator