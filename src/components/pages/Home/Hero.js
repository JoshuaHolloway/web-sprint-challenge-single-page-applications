import React from 'react';
import styled from 'styled-components';
import {center} from '../../../style/mixins.js';

const button_width = '100px';
const button_height = '50px';

const Div = styled.div` position: relative;
  ${center};
  
  button { position: absolute;

    top: calc( 75% - ${button_height}/2);
    left: calc( 50% - ${button_width}/2);
    width: ${button_width};
    height: ${button_height};
    background: yellow;
  }
`;


const Hero = () => {
  return (
    <Div className="Hero">
      <h2>Your favorite food, delivered while coding!</h2>
      <button>Pizza?</button>
    </Div>
  );
};

export default Hero;