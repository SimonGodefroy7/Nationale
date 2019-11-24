import React, { Component } from 'react';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Footer extends Component {
  render() {
    return (
      <StyledSection color="#eae9e9">
        <StyledParagraph textAlign="center">
          Copyright &copy; {new Date().getFullYear()} CDCO77. <Translator id="Footer.copyright" />
        </StyledParagraph>
      </StyledSection>
    );
  }
}

export default Footer;
