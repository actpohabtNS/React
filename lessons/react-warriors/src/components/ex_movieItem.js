import React from 'react';

const movie = {
    title: "Avengers: Infinity War",
    rate: 8.5,
    image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      release_date: "2018-04-25"
  };
  
class MovieItem extends React.Component {
    constructor() {
      super();
  
      this.state = {
        showed: false,
        liked: false
      };
    }
  
    toggleOverview = () => {
      this.setState({
        showed: !this.state.showed
      })
    }
  
    toggleLiked = () => {
      this.setState({
        liked: !this.state.liked
      })
    }
  
    render() {
      const {data: {title, rate, image, overview}} = this.props;
  
      return (
        <div style={{width: "400px"}}>
          <img src={image} alt={title} style={{width: "100%"}}></img>
          <p>{title}</p>
          <p>{rate}</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <button type="button"
            onClick={this.toggleOverview}>
              {this.state.showed ? "hide" : "show"}
            </button>
            <button type="button" 
            onClick={this.toggleLiked}
            style={{background: this.state.liked ? "azure" : "white"}}>
              {this.state.liked ? "unlike" : "like"}
            </button>
          </div>
          {this.state.showed ? <p>{overview}</p> : null}
        </div>
      )
    }
  }
  
  export default function App() {
    return (
      <div>
        <MovieItem data={movie}/>
      </div>
    )
  }