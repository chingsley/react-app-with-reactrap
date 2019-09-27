import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import logo from '../img/matthijs-waanders-salCU9EVdHE-unsplash.jpg';

const CardUnit = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={logo} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="time-stamp">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardUnit;