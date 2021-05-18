import React from 'react';
import styled from 'styled-components';
import Hero from './Hero.js';
import Cards from './Cards.js';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: yellow;

  .Hero {
    height: 400px;
    background: lightslategray;
  }
  .Cards {
    flex-grow: 1;
    padding: 0 5%;
    background: lightblue;
  }
`;

const Home = () => {
  return (
    <Div>
      <Hero />
      <Cards />
    </Div>
  );
};

export default Home;