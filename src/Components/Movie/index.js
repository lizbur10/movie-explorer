import React from 'react';
import Actor from '../Actor';
const baseURL = "http://image.tmdb.org/t/p/w300/"


const Movie = ({match, movies,actors}) => {

    const movie =  movies.find(movie =>
        movie.id == match.params.id
        )
        
        return (<div>
            <section style={{ marginTop:"50px" , display: "flex"}}>
            <div style={{width: "30%" ,maxWidth:"300px" , padding: "20px" }}>
            <img src={baseURL+movie.poster_path} width="100%"/>
            </div>
            <div style={{fontSize: "24px"}}>
             <h2>{movie.title}</h2>
            <p> Movie Information</p>
            <ul>
                <li>Popularity{movie.popularity}</li>
                <li>vote_count{movie.vote_count}</li>
                <li>vote_average{movie.vote_average}</li>
                <li>release_date{movie.release_date}</li>
                <li>Popularity{movie.popularity}</li>
            </ul>  
            <p>overview : {movie.overview}</p>
            </div>
        </section>
            <h3 style={{paddingLeft: "30px"}}>List our actors</h3>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            {actors.map(actor => 
                <Actor actor={actor} key={Math.random()}/>
                )}
                </div>
        </div>)
}

export default Movie;

Movie.defaultProps = {
    movies: {
        id: 1
    }
}