import React from 'react';
// import {Card} from 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';

class MovieList extends React.Component{
    render(){
        return (
            <MDBRow >

            {this.props.list.map(movie =>{
               return  <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-responsive" src={'http://image.tmdb.org/t/p/w780'+movie.backdrop_path} waves />
                    <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>{movie.overview}
                    </MDBCardText>
                    <MDBBtn href="#">{movie.title}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

            })}
                
            </MDBRow>
            
          )
    }
   
}

export default MovieList;