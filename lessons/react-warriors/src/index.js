import React from 'react';
import ReactDOM from 'react-dom';

const movie = {
  title: "Avengers: Infinity War",
  rate: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: "2018-04-25"
};

class MovieItem extends React.Component {
  render() {
    const {data: {title, rate, image}} = this.props;

    return (
      <div>
        <img src={image} alt={title}></img>
        <p>{title}</p>
        <p>{rate}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
