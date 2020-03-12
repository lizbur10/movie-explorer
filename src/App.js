import React from 'react';
import './App.css';
// import movies from './data';
import MoviesList from "./MoviesList"
import Header from "./Header"
import { colors } from '@material-ui/core';

export default class App extends React.Component {
constructor(){
  super();
  this.state={
    listMovie:[],
    search:"",
    movie:null
  }
}
  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=542003918769df50083a13c415bbc602")
    .then(res=>res.json())
    .then(data=>this.setState({
      listMovie:data.results
    }))
}

handelSearchApp=()=>{
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=542003918769df50083a13c415bbc602&query=${this.state.search}&include_adult=false
  `)
  .then(res=>res.json())
  .then(data=>this.setState({
    listMovie:data.results
  }))
}

handelChange=(event)=>{
this.setState({
  search:event.target.value
})
}
  render() {
    return (
      <div className="App">
        <div >
          <Header onsearch={this.handelSearchApp} search={this.handelChange} />
        </div>
          <MoviesList list={this.state.listMovie}  />
      </div>
    );
  }
}

// export default App;
