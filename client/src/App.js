import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sets from './components/setsDrop';
import SetLength from './components/setLength';
import RestLength from './components/restLength';
import SetDisplay from './components/sets';
import SecsDisplay from './components/secs';
import MinDisplay from './components/min';
import TimeDisplay from './components/timeDisplay';
import StartTimer from './components/startTimer';
import SetsContextProvider from './context/sets.js';
import SecsContextProvider from './context/setSecs';
import MinContextProvider from './context/min';
import TimeContextProvider from './context/time';


function App() {
  return (
    <div className="App">
    <TimeContextProvider>
    <SetsContextProvider>
    <SecsContextProvider>
    <MinContextProvider>
      <Container>
      <Row>
        <Col>
          <TimeDisplay/>
        </Col>
      </Row>
        <Row>
          <Col>
            <Sets />
            <br/>
            <SetLength />
            <br/>
            <RestLength />
            <br/>
            <StartTimer/>
          </Col>
          <Col>
            <SetDisplay />
            <SecsDisplay/>
            <MinDisplay/>
          </Col>
        </Row>
      </Container>
    </MinContextProvider>
    </SecsContextProvider>
    </SetsContextProvider>
    </TimeContextProvider>
    </div>
  );
}

export default App;
