import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
     <Container>
     <Row>
      <Col> <h1>This is going to be </h1> </Col>
      <Col> <h1>A Timer App for HIIT workouts</h1> </Col>
     </Row>
     </Container>
    </div>
  );
}

export default App;
