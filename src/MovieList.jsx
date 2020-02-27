import React from 'react';

class MovieList extends React.Component {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';

    generateMovieList = () => {
        return this.props.movies.map(movie => {
            const imageUrl = MovieList.BACKDROP_BASE_URL + movie.backdrop_path;
            return (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={imageUrl} alt={movie.title}/>
                </div>
            )
        })
    }


    render() {
        return (
            <>
                {this.generateMovieList()}
            </>
        )
    }
}

export default MovieList;