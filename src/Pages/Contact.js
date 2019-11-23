import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>Contact | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
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
