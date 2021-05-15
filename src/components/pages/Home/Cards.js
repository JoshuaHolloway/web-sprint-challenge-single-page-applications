import React from 'react';
import styled from 'styled-components';
import Card from './Card.js';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const H2 = styled.h2`
  padding: 20px 0;
  background: green;
`;
const CardContainer =  styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:    repeat(2, 1fr);
  border: dashed blue 4px;
`;

const Cards = () => {
  return (
    
    <Div className="Cards">
      <H2>Food Delivered in Gotham City</H2>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Div>
  );
};

export default Cards;