import React from 'react';
import styled from 'styled-components';
import {center} from '../../../style/mixins.js';
import { Link } from 'react-router-dom';

const NavItem = styled.div`
  ${center};
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