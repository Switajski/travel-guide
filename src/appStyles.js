import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: rgba(0,0,0,0.75);
  background-image: url('../resources/Star-field-near-M31.jpg');
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
      border-radius: 4px;
      flex: 0 0 45%;
      font-size: 24px;
      height: 72px;
      margin: 12px;
      max-width: 520px;
      min-width: 260px;
      padding: 12px;
      transform-origin: center center;
      transition: all .5s ease-in;

      .listItem__population {
        display: none;
        color: yellow;
        font-size: 12px;
      }

      &:hover, &:focus {
        background-color: rgba(255,255,255, 0.25);
        transform: translate3d(-24px,0,0);
        .listItem__population {
          display: block;
        }
      }

      &:nth-of-type(2n+2):hover {
        transform: translate3d(24px,0,0);
      }
     

    }
  }
`;

export const Details = styled.section`
  background-color: black;

  /* can be treated like a fallback */
  background-color: #3a1313;

  /* will be "on top", if browser supports it */
  background-image: linear-gradient(
      to bottom,
      #3a1313,
      ${props => props.theme.bg};
    );

  /* these will reset other properties, like background-position, but it does know what you mean */
  background: red;
  background: linear-gradient(
    to top,
    #3a1313,
    black 33%
  );

  border-bottom: 25px inset #2a2a2a;
  border-top: 25px solid #3e3e11;
  border-right: 25px inset #111;
  border-left: 25px solid #111;
  border-radius: 50%;
  display: block;
  height: calc(50vh);
  margin: 48px auto 24px;
  padding:24px;
  position: relative;
  transition: all .3s ease-in;
  width: calc(50vh);
  &:hover {
    border-bottom: 25px inset #3e3e11;
    border-top: 25px solid #2a2a2a;
    border-right: 25px inset #2a2a2a;
    border-left: 25px solid #3e3e11;
  }
  h2 {
    bottom: 0px;
    letter-spacing: 6px;
    position: relative;
    text-transform: uppercase;
  }

  ul {
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
    li {
      border: 0;
      color: yellow;
      height: auto;
      margin: 0 auto;
      max-width: 280px;
      min-height: 84px;
      width: 66%;

      &:nth-of-type(1) {
        position: absolute;
        top: -348px;
        left: -240px;
      }
      &:nth-of-type(2) {
        position: absolute;
        top: -348px;
        right: -240px;
      }
      &:nth-of-type(3) {
        position: absolute;
        top: -150px;
        left: -240px;
      }
        &:nth-of-type(4) {
        position: absolute;
        top: -150px;
        right: -240px;
      }
      a {
        color: yellow;
      }
    }
  }
`;

export const ImageWrapper = styled.div`

  animation: App-logo-spin infinite 40s linear;
  border-radius: 50%;
  display: block;
  height: 200px;
  margin: 48px auto 24px;
  overflow: hidden;
  text-align: center;
  transition: all .3s ease-in;
  width: 200px;
  img {
    display: block;
    max-width: 400px;
    min-width: 200px;
    min-height: 200px;
    text-align: center;
    width: auto;
  }
  &:hover {
    img {
      cursor: pointer;
      box-shadow: 4px -4px 22px 2px #2d2d2d;
    }
  }
  .loader {
    height: auto;
    margin: 48px auto 24px;
    max-width: 200px;
    min-width: 200px;
    min-height: 200px;
    width: 100%;
  }
`;

Details.defaultProps = {
  theme: {
    bg: 'black' + '33%',
  },
};

export const SearchInputForm = styled.div`
  margin: 0px auto 24px;
  max-width: 320px;
  min-width: 280px;
  width: 50%;

  input {
    border-radius: 4px;
    border: 1px solid #222;
    height: 32px;
    padding: 12px;
    font-size: 18px;
    width: 100%;
  }
`;

export const Vader = styled.section`
  margin: 96px auto 24px;
  width: 50%;
  input {
    border-radius: 4px;
    border: 1px solid #222;
    height: 32px;
    padding: 12px;
    font-size: 18px;
    width: 33%;
  }
  .vaderRed{
    color: red;
  }
`;