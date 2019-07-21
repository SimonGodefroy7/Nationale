import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledSection from '../styledComponents/StyledSection';

class Evenements extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1>Événements</StyledH1>
          <StyledParagraph>Évenement composé de 3 courses:</StyledParagraph>
          <StyledParagraph>Le 21 août: Un sprint urbain</StyledParagraph>
          <StyledParagraph>Le 22 août: Une moyenne distance</StyledParagraph>
          <StyledParagraph>Le 23 août: La Nationale, une longue distance</StyledParagraph>
          <StyledBorderBox>
            <StyledH3>Sprint</StyledH3>
            <StyledParagraph>Le sprint aura lieu le 21 août</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>MD</StyledH3>
            <StyledParagraph>La MD aura lieu le 22 août</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>LD</StyledH3>
            <StyledParagraph>La LD aura lieu le 21 août</StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Evenements;
