import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sets from './components/setsDrop';
import SetLength from './components/setLength';
import RestLength from './components/restLength';
import SetDisplay from './components/sets'
import SetsContextProvider from './context/sets.js';


function App() {
  return (
    <div className="App">
    <SetsContextProvider>
      <Container>
        <Row>
          <Col>
            <Sets />
            <br/>
            <SetLength />
            <br/>
            <RestLength />
          </Col>
          <Col>
            <SetDisplay />
          </Col>
        </Row>
      </Container>
    </SetsContextProvider>
    </div>
  );
}

export default App;
