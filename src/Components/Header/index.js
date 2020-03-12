import React from "react";
import "./styles.css";

export default class Header extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit()
  } 

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
        <div className="header">
            <h3>Movie Explorer</h3>
            <div className="search">
              <i className="fas fa-search"></i>
              <input
                placeholder="Search movies…"
                className="inputRoot"
                onChange={(event) =>{
                  this.props.handleChange(event.target.value)
                } }
              />
            </div>
        </div>
        </form>
      </div>
    );
  }
  
  }
