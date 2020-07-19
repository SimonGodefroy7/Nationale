import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledPartners from "../styledComponents/StyledPartners";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledImg from "../styledComponents/StyledImg";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import onfLogo from "../image/PartnerLogo/Logo-ONFSmall.jpg";
import ffcoLogo from "../image/PartnerLogo/FFCO_LOGO_1Small.jpg";
import iDFLogo from "../image/PartnerLogo/logo-region-ile-de-franceSmall.png";
import ligueIDFLogo from "../image/PartnerLogo/logoLifcoSmall.JPG";
import cDCO77Logo from "../image/PartnerLogo/CD77 PFSmall.jpg";
import cdosLogo from "../image/PartnerLogo/cdos_seine_et_marne_logo_quadri_exe_copieSmall.jpg";
import chateauLandonLogo from "../image/PartnerLogo/LOGO CHATEAU LANDONSmall.png";
import oriensportLogo from "../image/PartnerLogo/LOGO ORIENSPORTSmall.jpg";
import cndsLogo from "../image/PartnerLogo/logo_CNDSSmall.jpg";
import seineEtMarneLogo from "../image/PartnerLogo/LogoNew77Small.jpg";
import airXtrem from "../image/PartnerLogo/AirXtrem_logo_Horizontal_grosSmall.jpg";
import Translator from "../Logic/Translator";

class Partenaires extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Partenaires | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection>
          <StyledH1>
            <Translator id="Partners.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Partners.lastUpate" />
          </StyledSpan>
          <StyledPartners flexDirection="row" alignItems="center">
            <StyledFlexBox>
              <StyledAnchor
                href="https://www.onf.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={onfLogo} alt={onfLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="http://www.ffcorientation.fr"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={ffcoLogo} alt={ffcoLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://www.iledefrance.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={iDFLogo} alt={iDFLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://orientsport.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={oriensportLogo} alt={oriensportLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://www.agencedusport.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={cndsLogo} alt={cndsLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://www.seine-et-marne.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={seineEtMarneLogo} alt={seineEtMarneLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://boutique.airxtrem.com/index.php"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={airXtrem} alt={airXtrem} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="http://chateau-landon.com/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={chateauLandonLogo} alt={chateauLandonLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://www.lifco.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={ligueIDFLogo} alt={ligueIDFLogo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="http://cd77if.free.fr/"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={cDCO77Logo} alt={cDCO77Logo} />
              </StyledAnchor>
            </StyledFlexBox>
            <StyledFlexBox>
              <StyledAnchor
                href="https://seineetmarne.franceolympique.com/accueil.php"
                centerimg
                paddingless
                hoverless
              >
                <StyledImg src={cdosLogo} alt={cdosLogo} />
              </StyledAnchor>
            </StyledFlexBox>
          </StyledPartners>
        </StyledSection>
      </Page>
    );
  }
}

export default Partenaires;
