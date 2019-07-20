import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Page from '../Logic/Page'; //eslint-disable-line no-unused-vars
import StyledH1 from '../styledComponents/StyledH1'; //eslint-disable-line no-unused-vars
import StyledH3 from '../styledComponents/StyledH3'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledBorderBox from '../styledComponents/StyledBorderBox'; //eslint-disable-line no-unused-vars

class Home extends Component {
  render() {
    return (
      <Page>
        <StyledH1>Acceuil</StyledH1>
        <StyledBorderBox>
          <StyledH3>Terrain</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Zone gelée</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Livret</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Annonces</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
      </Page>
    );
  }
}

export default Home;
