import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 70px;
  background: lightcyan;
`;

const NavLink = ({name, link}) => {
  return (
    <Link to={link}>
      <NavItem>{name}</NavItem>
    </Link>
  );
};

export default NavLink;