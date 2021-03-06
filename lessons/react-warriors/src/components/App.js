import React from "react";
import MovieTabs from "./MoviesTabs"
import MovieItem from "./movieItem";
import Pages from "./Pages"
import {API_URL, API_KEY_3} from "../api";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesToWatch: [],
      sortBy: "popularity.desc",
      page: 1,
      total_pages: 0
    }
  };

  componentDidMount() {
    this.loadMovies();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy ||
      prevState.page !== this.state.page)
      this.loadMovies();
  }

  loadMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}` +
          `&sort_by=${this.state.sortBy}&page=${this.state.page}`).then(
      response => response.json()
      ).then(data => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages
        })
      });
  }

  addMovieToWatch = movie => {
    const new_moviesToWatch = [...this.state.moviesToWatch, movie];

    this.setState({
      moviesToWatch: new_moviesToWatch
    })
  };

  removeMovieToWatch = movie => {
    const new_moviesToWatch = this.state.moviesToWatch.filter(item => {
      return item.id !== movie.id;
    })

    this.setState({
      moviesToWatch: new_moviesToWatch
    });
  };

  updateSortBy = sortBy => {
    this.setState({
      sortBy: sortBy
    });
  };

  updatePage = newPage => {
    this.setState({
      page: newPage
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs 
                  sortBy={this.state.sortBy}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-4 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      addMovieToWatch={this.addMovieToWatch}
                      removeMovieToWatch={this.removeMovieToWatch}
                    /> 
                  </div>
                );
              })}
            </div>
            <div className="row">
              <Pages
                page={this.state.page}
                total_pages={this.state.total_pages}
                updatePage={this.updatePage}
              />
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