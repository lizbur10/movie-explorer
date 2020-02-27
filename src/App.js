import React from 'react';
import './App.css';
import movies from './data';
import MovieList from './MovieList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <MovieList />
        </header>
      </div>
    );
  }
}

// export default App;
