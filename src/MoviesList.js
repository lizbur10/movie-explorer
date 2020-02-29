import React, { Component } from 'react'

export default class MoviesList extends Component {
    render() {
        const baseURL= "http://image.tmdb.org/t/p/w1280/"
        // console.log(this.props.list) 
        const list = this.props.list.map(movie => 
            <div key={movie.id}>
                <h1>{movie.original_title}</h1>
                <img src={baseURL + movie.poster_path} width="600" alt="Poster" />
            </div>
    )      
        return <div>
            {
                this.props.list.map(movie => 
                    <div key={movie.id}>
                        <h1>{movie.original_title}</h1>
                        <img src={baseURL + movie.poster_path} width="600" alt="Poster" />
                    </div>
            )      
            }
        </div>
    }
}
