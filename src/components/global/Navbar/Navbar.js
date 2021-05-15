import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavLink from './Nav-Link.js';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  background: lightgreen;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink name="Home" link="/" />
      <NavLink name="Help" link="/help" />
    </Nav>
  );
};

export default Navbar;