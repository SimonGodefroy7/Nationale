import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledPartenairesLink from '../styledComponents/StyledPartenairesLink';
import StyledImg from '../styledComponents/StyledImg';
import StyledSection from '../styledComponents/StyledSection';
import onfLogo from '../image/PartnerLogo/ONFLogo.jpg'
import ffcoLogo from '../image/PartnerLogo/FFCOLogo.jpg'
import iDFLogo from '../image/PartnerLogo/logoRegionIDF.svg'
import ligueIDFLogo from '../image/PartnerLogo/LIFCOLogo.jpg'
import cDCO77Logo from '../image/PartnerLogo/CDCO77Logo.jpg'
import Translator from '../Logic/Translator';

class Partenaires extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Partenaires | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Partners.title" /></StyledH1HeaderTitle>
          <StyledPartenairesLink href="https://www.onf.fr/">
            <StyledImg src={onfLogo} alt={onfLogo}/>
          </StyledPartenairesLink>
          <StyledPartenairesLink href="http://www.ffcorientation.fr" paddingless hoverless>
            <StyledImg src={ffcoLogo} alt={ffcoLogo}/>
          </StyledPartenairesLink>
          <StyledPartenairesLink href="https://www.iledefrance.fr/">
            <StyledImg src={iDFLogo} alt={iDFLogo}/>
          </StyledPartenairesLink>
          <StyledPartenairesLink href="https://www.lifco.fr/">
            <StyledImg src={ligueIDFLogo} alt={ligueIDFLogo}/>
          </StyledPartenairesLink>
          <StyledPartenairesLink href="http://cd77if.free.fr/">
            <StyledImg src={cDCO77Logo} alt={cDCO77Logo}/>
          </StyledPartenairesLink>
        </StyledSection>
      </Page>
    );
  }
}

export default Partenaires;
