import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class MoviesList extends Component {
    render() {
        return <div className = "row mt-3 justify-content-around">
            {
                this.props.list.map(movie => 
                    <div key = {movie.id} className="col-sm-4 mt-3">
                        <MovieCard  movieObject = {movie}/>
                    </div>
            )      
            }
        </div>
    }
}



// this.props.list.map(movie => 
    //         <div key={movie.id}>
    //             <h1>{movie.original_title}</h1>
    //             <img src={baseURL + movie.poster_path} width="600" alt="Poster" />
    //         </div>
    // )      