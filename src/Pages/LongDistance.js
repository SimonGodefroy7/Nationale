import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class LongDistance extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Compétitions | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1><Translator id="LDEvent.title" /></StyledH1>
        </StyledSection>
      </Page>
    );
  }
}

export default LongDistance;
