import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Text, Flex } from 'rebass';

import Balls from '../components/Balls/Balls';
import Action from '../components/Action/Action';

import profile from '../mocks/profile.json';
import profileSuccess from '../mocks/profileSuccess.json';
import spheres from '../mocks/spheres.json';
import spheresSuccess from '../mocks/spheresSuccess.json';

const profileBalls = process.env.REACT_APP_PROFILE === 'SUCCESS' ? profileSuccess.profile : profile.profile 
const dragonBalls = process.env.REACT_APP_PROFILE === 'SUCCESS' ? spheresSuccess : spheres

const Manager = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Action balls={profileBalls.balls}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Balls balls={dragonBalls.balls} profile={profileBalls}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Manager;
