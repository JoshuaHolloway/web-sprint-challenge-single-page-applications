import React, {useRef} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gsap } from "gsap";
import "./index.css";
import './App.scss';

import styled from 'styled-components';
import Home from './components/pages/Home/Home.js';
import Navbar from './components/global/Navbar/Navbar.js';
import Modal from './components/global/Modal/Modal.js';

// ==============================================

const App = styled.div` position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .josh {
    height: 100px;
    width: 100px;
    background: darkorchid;
  }

`;

const Header = styled.header`
  height: 70px;
`;

const Main = styled.main`  position: relative;
  flex-grow: 1;
  background: lightblue;
`;

// ==============================================

const AppContainer = () => {

  // --------------------------------------------

  return (
    <App>
      <Header>
        <Navbar></Navbar>
      </Header>

      <Main>

          <Route path="/pizza">
            <Modal/>
            <Home/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
  
          <Route path="/help">
            Help
          </Route>
  
      </Main>

      
    </App>
  );
};

// ==============================================


ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>, 
  document.getElementById("root")
);