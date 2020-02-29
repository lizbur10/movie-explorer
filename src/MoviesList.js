import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';


export default class MoviesList extends Component {
    render() {
        const baseURL= "http://image.tmdb.org/t/p/w1280/"
         
    // console.log(movie)

        return <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
    
                >
            {
                this.props.list.map(movie => 
                    <Grid 
                    item
                    container
                    direction="row"
                    justify="center"
                     xs={4} 
                     key={movie.id} 
                     style={{ marginBottom: "50px"}} 
                     >
                    <MovieCard title={movie.original_title}
                     link={baseURL + movie.poster_path}
                     date={movie.release_date}
                     overview={movie.overview}
                     
                     />
                  </Grid>
            )      
            }
            </Grid>
        </div>
    }
}
