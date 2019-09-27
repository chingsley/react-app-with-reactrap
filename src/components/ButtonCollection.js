import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const ButtonCollection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button color="info">info button</Button>{' '}
          <Button color="danger">danger button!</Button>{' '}
          <Button color="warning">Warining button!</Button>{' '}
          <Button color="success">Success button!</Button>{' '}
          <Button color="success" outline>Success button with outline</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonCollection;
