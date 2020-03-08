import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledImg from '../styledComponents/StyledImg';
import StyledSection from '../styledComponents/StyledSection';
import onfLogo from '../image/PartnerLogo/ONFLogo.jpg'
import ffcoLogo from '../image/PartnerLogo/FFCOLogo.jpg'
import iDFLogo from '../image/PartnerLogo/logoRegionIDF.svg'
import ligueIDFLogo from '../image/PartnerLogo/logoLifcoSmall.JPG'
import cDCO77Logo from '../image/PartnerLogo/CDCOLogoSmall.jpg'
import cdosLogo from '../image/PartnerLogo/CDOSLogoSmall.jpg'
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
          <StyledH1><Translator id="Partners.title" /></StyledH1>
          <StyledBorderBox>
            <StyledAnchor href="https://www.onf.fr/" centerimg paddingless hoverless>
              <StyledImg
                src={onfLogo}
                alt={onfLogo}
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledAnchor href="http://www.ffcorientation.fr" centerimg paddingless hoverless>
              <StyledImg
                src={ffcoLogo}
                alt={ffcoLogo}
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledAnchor href="https://www.iledefrance.fr/" centerimg paddingless hoverless>
              <StyledImg
                src={iDFLogo}
                alt={iDFLogo}
                imageWidth={'20rem'}
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledAnchor href="https://www.lifco.fr/" centerimg paddingless hoverless>
              <StyledImg
                src={ligueIDFLogo}
                alt={ligueIDFLogo}
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledAnchor href="http://cd77if.free.fr/" centerimg paddingless hoverless>
              <StyledImg
                src={cDCO77Logo}
                alt={cDCO77Logo}
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledAnchor href="https://seineetmarne.franceolympique.com/accueil.php" centerimg paddingless hoverless>
              <StyledImg
                src={cdosLogo}
                alt={cdosLogo}
              />
            </StyledAnchor>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Partenaires;
