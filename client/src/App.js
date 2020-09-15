import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sets from './components/setsDrop'


function App() {
  return (
    <div className="App">
     <Container>
     <Row>
     <Sets/>
     </Row>
     </Container>
    </div>
  );
}

export default App;
