import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default class MoviesList extends React.Component {
  render() {
    //  console.log(this.props.list);
    
      const BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780'
      return (
        <>
           
          {this.props.list.map(el =>
          <>
          <Col md="4">
            <Card className="bg-light">
              <Card.Img className="movieImg" src={BACKDROP_BASE_URL + el.poster_path}/>
              <h3>{el['original_title']}</h3>
              <Card.Text>
                <ul className="list-unstyled infoList">
                  <li><i className="fa fa-star" aria-hidden="true"></i> {el['vote_average']}</li>
                  <li>Release date:<br></br>{el['release_date']}</li>
                  <li><p className="overviewLi">{el['overview']}</p> <a href="javascript:void(0)">read more</a></li>
                  
                </ul>
              </Card.Text>
            </Card>
          </Col>
          </>
          )} 
        </> 
      )
    }
}
