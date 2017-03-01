import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: rgba(0,0,0,0.75);
  font-size: 18px;
  height: calc(100vh);
  padding: 48px;
  width: 100%;
  ul {
      list-style:none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;

      li {
          background-color: rgba(255,255,255, 0.075);
          border: 1px solid #5a5a5a;
          border-radius: 12px;
          flex: 0 0 45%;
          font-size: 24px;
          margin: 12px;
          padding: 12px;
          transition: all .5s ease-in;

          &:hover {
              background-color: rgba(255,255,255, 0.25);
          }
      }
  }
`;

export default Wrapper;