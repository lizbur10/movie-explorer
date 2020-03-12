import React from 'react';
// import movies from './data';
import MoviesList from "./Components/MovieList/index.js"
import Header from "./Components/Header/index.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm:"all"
    }
  }

   BASE_URL = "https://api.themoviedb.org/3";
   API_KEY = "542003918769df50083a13c415bbc602";

   fetchData = (searchTerm) => {
    if(searchTerm === "all" || searchTerm === ""){
      fetch(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}`)
    .then(resp => resp.json())
    .then(json=> {
      this.setState({
        movies: json.results
      }, () => console.log(this.state))
    })
    }else{
      fetch(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=false`)
    .then(resp => resp.json())
    .then(json=> {
      this.setState({
        movies: json.results
      }, () => console.log(this.state))
    })
    }
  }
  handleClick=(event)=>{
    this.setState({id:event})
  }

  handleSubmit = () =>{
    this.fetchData(this.state.searchTerm)
  }

  handleChange = (word) => {
    this.setState({
      searchTerm:word
    })
  }

  componentDidMount = () => {
    this.fetchData("all")
   }

  render() {
    return (
      <div>
          <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <MoviesList movies={this.state.movies} />        
      </div>
    );
  }
}

export default App;
