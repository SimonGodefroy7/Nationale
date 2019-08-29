import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledMail from '../styledComponents/StyledMail';
import StyledContactBox from '../styledComponents/StyledContactBox';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Contact extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Contact.title" /></StyledH1HeaderTitle>
          <StyledParagraph><Translator id="Contact.paragraph" /></StyledParagraph>
          <StyledContactBox>
            <StyledH3>Alain Guillon</StyledH3>
            <StyledParagraph>Mail:<StyledMail href="mailto:cdco77.helene@wanadoo.fr">cdco77.helene@wanadoo.fr</StyledMail></StyledParagraph>
          </StyledContactBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Contact;
