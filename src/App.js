import React from 'react';
import './App.css';
// import movies from './data';
import MoviesList from "./MoviesList"
import Header from "./Header"

export default class App extends React.Component {
constructor(){
  super();
  this.state={
    listMovie:[]
  }
}
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=542003918769df50083a13c415bbc602")
    .then(res=>res.json())
    .then(data=>this.setState({
      listMovie:data.results
    }))
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
          <MoviesList list={this.state.listMovie} />
        
      </div>
    );
  }
}

// export default App;
