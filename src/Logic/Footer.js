import React, { Component } from 'react';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledFooter from '../styledComponents/StyledFooter';
import Translator from '../Logic/Translator';

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledParagraph textAlign="center">
          Copyright &copy; {new Date().getFullYear()} CDCO77. <Translator id="Footer.copyright" />
        </StyledParagraph>
      </StyledFooter>
    );
  }
}

export default Footer;
