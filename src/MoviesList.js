import React from 'react';

export default class MoviesList extends React.Component {
  render() {
    //  console.log(this.props.list);
    
      const BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780'
      return (
       <div>
          {this.props.list.map(el =>
          <div>
            <h2>{el['original_title']}</h2>
            <img src={BACKDROP_BASE_URL + el.poster_path}/>
           </div>
          )}  
       </div>
      )
    }
}