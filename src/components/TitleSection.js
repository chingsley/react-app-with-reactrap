import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const TitleSection = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Popular Posts</h1>
          <p className="lead">Tech Articles written by Eneja Kingsley</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default TitleSection;