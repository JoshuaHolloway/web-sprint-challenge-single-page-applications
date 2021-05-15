import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;

  border: dashed yellow 4px;

  div:first-child {
    background: darkorange;
  }
  h5 {
    background: deeppink;
  }
  p {
    background: darkorchid;
  }
  div:last-child {
    display: flex;
    background: deepskyblue;

    div:first-child {
      height: 100%;
      width: 20%;
      background: blue;
    }
    div:last-child {
      height: 100%;
      width: 20%;
      background: green;
    }
  }
`;

const Cards = () => {
  return (
    <Div>
      <div></div>
      <h5>McDonald's</h5>
      <p>$$ - American - Fast Food - Burgers</p>
      <div>
        <div>20 - 30 min.</div>
        <div>$5.99 Delivery Fee</div>
      </div>
    </Div>
  );
};

export default Cards;