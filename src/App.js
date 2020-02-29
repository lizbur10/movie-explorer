import React from 'react';
import './App.css';
import movies from './data';
// import data from "./data"
import MovieList from './MovieList';

export default class App extends React.Component {
  render() {
    console.log(movies.results);
    return (
      
      <div className="App">
        <header className="App-header">
        {/* {movies.results.map(movie => <MovieList title={movie.title} img={'http://image.tmdb.org/t/p/w780'+movie.backdrop_path} overview={movie.overview}/>)} */}
        <MovieList list={movies.results} />
        </header>
      </div>
    );
  }
}

// export default App;
