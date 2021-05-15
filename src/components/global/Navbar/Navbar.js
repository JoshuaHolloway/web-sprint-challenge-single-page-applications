import React from 'react';
import styled from 'styled-components';
import {center, font} from '../../../style/mixins.js';
import NavLink from './Nav-Link.js';


const Nav = styled.nav` position: relative; 
  ${center};
  height: 100%;
  width: 100%;
  background: lightgreen;
`;
const Logo = styled.div` position: absolute;
  top: 0;
  left: 0;
  ${center};
  height: 100%;
  width: 100px;
  background: red;

  ${font({ color: "white" })};
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Pizza!</Logo>
      <NavLink name="Home" link="/" />
      <NavLink name="Help" link="/help" />
    </Nav>
  );
};

export default Navbar;