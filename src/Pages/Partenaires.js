import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledPartenaires from '../styledComponents/StyledPartenaires';
import StyledImg from '../styledComponents/StyledImg';
import StyledAnchor from '../styledComponents/StyledAnchor';
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
          <StyledPartenaires>
            <StyledFlexBox>
              <StyledAnchor href="https://www.onf.fr/" textAlign="center">ONF</StyledAnchor>
            </StyledFlexBox>
            <StyledImg src={onfLogo} alt={onfLogo}/>
          </StyledPartenaires>
          <StyledPartenaires>
            <StyledImg src={ffcoLogo} alt={ffcoLogo}/>
            <StyledFlexBox>
              <StyledAnchor href="http://www.ffcorientation.fr/" textAlign="center">FFCO</StyledAnchor>
            </StyledFlexBox>
          </StyledPartenaires>
          <StyledPartenaires>
            <StyledFlexBox>
              <StyledAnchor href="https://www.iledefrance.fr/" textAlign="center"><Translator id="Partners.idf" /></StyledAnchor>
            </StyledFlexBox>
            <StyledImg src={iDFLogo} alt={iDFLogo}/>
          </StyledPartenaires>
          <StyledPartenaires>
            <StyledImg src={ligueIDFLogo} alt={ligueIDFLogo}/>
            <StyledFlexBox>
              <StyledAnchor href="https://www.lifco.fr/" textAlign="center"><Translator id="Partners.lifco" /></StyledAnchor>
            </StyledFlexBox>
          </StyledPartenaires>
          <StyledPartenaires>
            <StyledFlexBox>
              <StyledAnchor href="http://cd77if.free.fr/" textAlign="center">CDCO77</StyledAnchor>
            </StyledFlexBox>
            <StyledImg src={cDCO77Logo} alt={cDCO77Logo}/>
          </StyledPartenaires>
        </StyledSection>
      </Page>
    );
  }
}

export default Partenaires;
