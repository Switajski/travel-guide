import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: rgba(0,0,0,0.75);
  font-size: 18px;
  min-height: calc(100vh);
  height: 100%;
  padding: 48px;
  width: 100%;
  &:after {
    clear:both;
    float:none;
  }
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

export const Details = styled.section`
    background-color: rgba(black, 0.75);
    border: 1px solid #5a5a5a;
    border-radius: 12px;
    img {
      max-width:200px;
      height: auto;
      margin: 12px auto;
      width:100%;
    }
    margin: 24px auto;
    padding:24px;
    ul {
      li {
        border: 0;
      }
    }

`;