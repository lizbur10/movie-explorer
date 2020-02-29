import React from 'react';
import './App.css';
import movies from './data';
import Movieslist from './MoviesList';
// 
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class App extends React.Component {
  render() {
    console.log(movies.results);
    
    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand className="text-light logo" href="javascript:void(0)">To Watch Next</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline className="right">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          </Container>
        </header>

        <Container>
          <Row>
              <Movieslist list={movies.results}/>
          </Row>  
        </Container>
      </div>
    );
  }
}

// export default App;
