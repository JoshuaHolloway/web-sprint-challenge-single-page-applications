import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./index.css";
import './App.scss';

import styled from 'styled-components';
import Home from './components/pages/Home/Home.js';
import Navbar from './components/global/Navbar/Navbar.js';

// ==============================================

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  height: 70px;
`;
const Main = styled.main`
  flex-grow: 1;
  background: lightblue;
`;

// ==============================================

ReactDOM.render(
  <Router>
    <App>
      <Header>
        <Navbar></Navbar>
      </Header>

      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/help">
            Help
          </Route>
          
        </Switch>
      </Main>
    </App>
  </Router>, 
  document.getElementById("root")
);