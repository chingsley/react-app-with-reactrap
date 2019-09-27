import React from 'react';
import CardUnit from './Card';
import { Container, Row, Col } from 'reactstrap';

const CardCollection = () => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4"><CardUnit /></Col>
        <Col xs="6" sm="4"><CardUnit /></Col>
        <Col xs="6" sm="4"><CardUnit /></Col>
      </Row>
    </Container >
  );
};

export default CardCollection;
