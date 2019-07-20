import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledMail from '../styledComponents/StyledMail';
import StyledBorderBox from '../styledComponents/StyledBorderBox';

class Contact extends Component {
  render() {
    return (
      <Page>
        <StyledH1>Contacts</StyledH1>
        <StyledParagraph>pour toutes questions sur la Nationale Nord Ouest 2020 vous pouvez nous joindre à ces différents contacts</StyledParagraph>
        <StyledBorderBox>
          <StyledH3>Alain Guillon</StyledH3>
          <StyledParagraph>Mail:<StyledMail href="mailto:cdco77.helene@wanadoo.fr">cdco77.helene@wanadoo.fr</StyledMail></StyledParagraph>
        </StyledBorderBox>
      </Page>
    );
  }
}

export default Contact;
