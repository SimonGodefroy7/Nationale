import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }
  .youtubeContainer {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.youtubeContainer iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
`;

export default GlobalStyle;
