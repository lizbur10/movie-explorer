import React from 'react';
import './App.css';
import movies from './data';
import Movieslist from './MoviesList';
export default class App extends React.Component {
  render() {
    console.log(movies.results);
    
    return (
      <div className="App">
        <header className="App-header">
          <Movieslist list={movies.results}/>
        </header>
      </div>
    );
  }
}

// export default App;
