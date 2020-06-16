import React, { useState } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

const items = [
  {
    src: require('../images/BlackManBlackWomanUsingLaptop.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require('../images/BlackManandWomanWorkingonCalendar.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require('../images/TwoBlackMenUsingLaptop.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const see = {
              height: "100%",
              padding: "100px",
              margin: "10px"
            }

const imgStyle = {
                  display: "block",
                  width: "auto",
                  height: "auto",
                  "max-width": "100%",
                  "max-height": "90%",
                  margin: "20px auto"
                };

const Body = () => {




  return (
    <div style={see}>
      <Container>
        <Row>
          <Col xs="6"><img src={require('../images/BlackManBlackWomanUsingLaptop.jpg')} style={imgStyle} /></Col>
          <Col xs="6">Create</Col>
        </Row>
        <Row>
          <Col xs="6">Contribute</Col>
          <Col xs="6"><img src={require('../images/BlackManandWomanWorkingonCalendar.jpg')} style={imgStyle} /></Col>
        </Row>
        <Row>
          <Col xs="6"><img src={require('../images/TwoBlackMenUsingLaptop.jpg')} style={imgStyle} /></Col>
          <Col xs="6">Consume</Col>
        </Row>
        <Row>
          <Col xs="6">Critique</Col>
          <Col xs="6"><img src={require('../images/BlackMillennialsatOffice.jpg')} style={imgStyle} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
