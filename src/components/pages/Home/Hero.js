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


const Hero = ({isModalVisible, setModalVisible}) => {
  return (
    <Div className="Hero">
      <h2>Your favorite food, delivered while coding!</h2>
      <button onClick={() => {
        console.log('clicked');
        setModalVisible(!isModalVisible);
        console.log('Hero.js ::: isModalVisible: ', isModalVisible);
      }}>Pizza?</button>
    </Div>
  );
};

export default Hero;