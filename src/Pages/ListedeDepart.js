import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class ListeDeDepartResultats extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="StartList.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.spTitle" /></StyledH3>
            <StyledParagraph><Translator id="StartList.spParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.mdTitle" /></StyledH3>
            <StyledParagraph><Translator id="StartList.mdParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.ldTitle" /></StyledH3>
            <StyledParagraph><Translator id="Registration.ldParagraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default ListeDeDepartResultats;
