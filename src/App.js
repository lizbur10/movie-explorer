import React from 'react';
import data from './data';
import MovieList from './MovieList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MovieList movies={data} />
      </div>
    );
  }
}

