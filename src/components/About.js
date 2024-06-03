import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const About = () => {
  return (
    <Container>
      <Row>
        <Col className='mx-auto my-3 col-12'>
          <h1 className="display-3">About</h1>
          <hr />
          <p><span className='fw-bold'>Outplay Ai</span> is simply a forecasting (time-series predicting) Machine Learning model on React.
          <br/>
          <br/>

          Currently it's just Rock, Paper, Scissors. Please do suggest any other games that you might want to see.

          <br/>
          <br/>
          It trains on a dataset of your recentmost 10 moves. The first move is always paper since that is how I've initialized the training set.
          
          </p>

          <h1 className='display-6'>Ingredients</h1>
          <p>The app is built using:
          </p>
          <ul>
            <li>ReactJS</li>
            <li>React Bootstrap (for styling)</li>
            <li>React Router DOM (for front-end routing)</li>
            <li>Redux Toolkit aka RTK (For state management)</li>
            <li>BrainJS (for implementing LSTM logic; ML stuff)</li>
          </ul>

          
        </Col>
      </Row>
    </Container>
  )
}

export default About