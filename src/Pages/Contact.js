import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Page from '../Logic/Page'; //eslint-disable-line no-unused-vars
import StyledH1 from '../styledComponents/StyledH1'; //eslint-disable-line no-unused-vars
import StyledH3 from '../styledComponents/StyledH3'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledMail from '../styledComponents/StyledMail'; //eslint-disable-line no-unused-vars
import StyledBorderBox from '../styledComponents/StyledBorderBox'; //eslint-disable-line no-unused-vars

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
