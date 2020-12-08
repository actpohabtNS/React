import React from "react";
import moviesData from "./moviesData";
import MovieItem from "./movieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesToWatch: []
    }
  }

  removeMovie = movie => {
    const updatedMovies = this.state.movies.filter(item => {
      return item.id !== movie.id;
    })

    this.setState({
      movies: updatedMovies
    });
  }

  addMovieToWatch = movie => {
    const new_moviesToWatch = [...this.state.moviesToWatch, movie];

    this.setState({
      moviesToWatch: new_moviesToWatch
    })
  }

  removeMovieToWatch = movie => {
    const new_moviesToWatch = this.state.moviesToWatch.filter(item => {
      return item.id !== movie.id;
    })

    this.setState({
      moviesToWatch: new_moviesToWatch
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-4 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWatch={this.addMovieToWatch}
                      removeMovieToWatch={this.removeMovieToWatch}
                    /> 
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <div style={{position: "fixed"}}>
              <h4>Will Watch: {this.state.moviesToWatch.length} movies</h4>
              <ul className="list-group">
              {this.state.moviesToWatch.map(movie => {
                return (
                  <li className="list-group-item" key={movie.id}>
                    <div className="d-flex justify-content-between">
                      <div>{movie.title}</div>
                      <div>{movie.vote_average}</div>
                    </div>
                  </li>
                );
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;