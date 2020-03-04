import React, { useState } from "react";
import Data from "./data";
import MovieList from "./components/MovieList";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import style from "./App.module.css";
import Aux from "./Aux";
import Movie from "./components/Movie";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

const App = props => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [id, setId] = React.useState(null);
  const handleOpen = id => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderMovie = movieList => {
    return movieList.results.map(movie => {
      return (
        <Col sm={4}>
          <MovieList
            key={movie.id}
            title={movie.title}
            url={movie.backdrop_path}
            overview={movie.overview}
            click={() => handleOpen(movie.id)}
          ></MovieList>
        </Col>
      );
    });
  };

  return (
    <Aux>
      {console.log({ id }.id)}
      <div>
        <Header></Header>
      </div>
      <div className={style.main}>
        <Container>
          <Row>{renderMovie(Data)}</Row>
        </Container>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">
              <Movie id={{ id }.id}></Movie>
            </p>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </Aux>
  );
};

export default App;

// export default App;
