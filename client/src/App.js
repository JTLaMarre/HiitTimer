import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sets from './components/setsDrop';
import SetLength from './components/setLength';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Sets />
            <br/>
            <SetLength />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
