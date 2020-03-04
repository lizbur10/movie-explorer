import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Movie from "./Movie";
export default class MoviesList extends Component {
  state = { clicked: null, id: null };
  clicked = id => {
    this.setState({ id: id, clicked: true });
  };
  render() {
    const baseURL = "http://image.tmdb.org/t/p/w1280/";
    // console.log(this.props.list)
    const list = this.props.list.map(movie => (
      <Grid item xs={4}>
        <Paper>
          <Card onClick={() => this.clicked(movie.id)}>
            <CardActionArea>
              <CardContent>
                <img
                  src={baseURL + movie.poster_path}
                  width="100%"
                  alt="Poster"
                />
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.original_title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    ));
    if (this.state.clicked === null) {
      return (
        <div className="main">
          <Grid container spacing={3}>
            {list}
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <Movie id={this.state.id}></Movie>;
        </div>
      );
    }
  }
}
