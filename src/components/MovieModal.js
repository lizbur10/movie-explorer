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



const MovieModal = props => {
    return (
        <div>
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
</Modal>;

        </div>
    )
}



}

export default MovieModal


