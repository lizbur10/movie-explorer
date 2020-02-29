import React, { Component } from "react";
import Data from "./data";
import MovieList from "./components/MovieList";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import style from "./App.module.css";
import Aux from "./Aux";

export class App extends Component {
  render() {
    const renderMovie = movieList => {
      return movieList.results.map(movie => {
        return (
          <Col sm={4}>
            <MovieList
              key={movie.id}
              title={movie.title}
              url={movie.backdrop_path}
              overview={movie.overview}
            ></MovieList>
          </Col>
        );
      });
    };

    return (
      <Aux>
        <div>
          <Header></Header>
        </div>
        <div className={style.main}>
          <Container>
            <Row>{renderMovie(Data)}</Row>
          </Container>
        </div>
      </Aux>
    );
  }
}

export default App;

// export default App;
