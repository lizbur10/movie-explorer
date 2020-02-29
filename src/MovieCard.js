import React from 'react';
import { MDBRow ,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import "./App.css"
class MovieCard extends React.Component {
    render(){
        // const baseURL= "http://image.tmdb.org/t/p/w1280/"     
      return (
        <MDBRow>
            <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src={"http://image.tmdb.org/t/p/w1280/" + this.props.movieObject.poster_path} />
                <MDBCardBody>
                <MDBCardTitle>{this.props.movieObject.original_title}</MDBCardTitle>
                <MDBCardText>
                    <p className="paragraph">
                    {this.props.movieObject.overview}
                    </p>
                </MDBCardText>
                <MDBBtn color={"dark"} href="#">See More ...</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
      )
    }
}

export default MovieCard;