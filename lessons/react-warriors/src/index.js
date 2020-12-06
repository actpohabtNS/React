import React from 'react';
import ReactDOM from 'react-dom';

function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rate}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <MovieItem title="Title new" rate={8.5}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
