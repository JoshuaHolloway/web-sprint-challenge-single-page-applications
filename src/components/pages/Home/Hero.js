import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {center} from '../../../style/mixins.js';

const button_width = '100px';
const button_height = '50px';

const Div = styled.div` position: relative;
  ${center};
  
  .Link { position: absolute;

    top: calc( 75% - ${button_height}/2);
    left: calc( 50% - ${button_width}/2);
    
    ${center};
    
    width: ${button_width};
    height: ${button_height};
    background: black;
    color: white;
    cursor: pointer;
    text-decoration: none;



    /* animation: name time func delay iteration dir fill play; */
    animation-name: breathe-color;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    @keyframes breathe-color {
      /* 50% { background: darkslateblue; } */
    }

    transition: transform 0.2s ease;
    &:hover {
      transform: rotateZ(7deg) scaleX(1.3) scaleY(1.3);
    }
  }
`;

const Hero = ({isModalVisible, setModalVisible}) => {
  return (
    <Div className="Hero">
      <h2>Your favorite food, delivered while coding!</h2>

      <Link className="Link" to='/pizza'>
        <h5>Pizza?</h5>
      </Link>
    </Div>
  );
};

export default Hero;