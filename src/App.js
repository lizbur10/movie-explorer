import React from 'react';
import './App.css';
import movies from './data';
import MoviesList from "./MoviesList"
import Header from "./Header"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className = "container">
          <MoviesList list={movies.results} />
          </div>
      </div>
    );
  }
}

// export default App;
