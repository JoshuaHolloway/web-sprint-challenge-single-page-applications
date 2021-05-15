import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
`;

const Header = styled.header`
  height: 70px;
`;
const Main = styled.main`
  flex-grow: 1;
  background: lightblue;
`;

// ==============================================

const AppContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <App>
      <Header>
        <Navbar></Navbar>
      </Header>

      <Main>
        <Switch>
          <Route exact path="/">
            <Home isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
          </Route>

          <Route path="/help">
            Help
          </Route>
          
        </Switch>
      </Main>

      <Modal visible={isModalVisible} setVisible={setModalVisible}/>
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