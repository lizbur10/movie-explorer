import React, { Component } from "react";
import style from "../App.module.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
export class MovieList extends Component {
  render() {
    const base = "http://image.tmdb.org/t/p/w780";
    let drop = this.props.url;
    let src = base + drop;

    return (
      <div onClick={this.props.click} className={style.main}>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={src} width="100%" />
            <Card.Body>
              <Card.Title className={style.title}>
                {this.props.title}
              </Card.Title>
              <Card.Text className={style.overview}>
                {this.props.overview}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <small>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default MovieList;
