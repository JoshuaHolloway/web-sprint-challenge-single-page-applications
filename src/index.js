import React, {useState, useRef, useEffect} from "react";
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
const modal_width = '80vw';
const modal_height = '80vh';
const Main = styled.main`  position: relative;
  flex-grow: 1;
  background: lightblue;
`;

// ==============================================

const AppContainer = () => {

  // --------------------------------------------

  const inputRef = useRef('');
  const [isModalVisible, setModalVisible] = useState(false);

  // --------------------------------------------

  function querySelector() {
    const elem = inputRef.current;
    console.log(elem);
    gsap.to(elem, {x: '50px'});
  }

  // --------------------------------------------

  return (
    <App>
      <Header>
        <Navbar></Navbar>
      </Header>

      <div ref={inputRef} className="josh"></div>
      <button onClick={querySelector}>Start</button>

      <Main>


          <Route path="/pizza">

              <Modal visible={true} setVisible={setModalVisible}/>

            <Home isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
          </Route>

          <Route exact path="/">
            <Home isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
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