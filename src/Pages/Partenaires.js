import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledH3 from "../styledComponents/StyledH3";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledPartners from "../styledComponents/StyledPartners";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledImg from "../styledComponents/StyledImg";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import onfLogo from "../image/PartnerLogo/Logo-ONFSmall.jpg";
import ffcoLogo from "../image/PartnerLogo/FFCO_LOGO_1Small.jpg";
import ligueIDFLogo from "../image/PartnerLogo/logoLifcoSmall.JPG";
import cdosLogo from "../image/PartnerLogo/cdos_seine_et_marne_logo_quadri_exe_copieSmall.jpg";
import chateauLandonLogo from "../image/PartnerLogo/LOGO CHATEAU LANDONSmall.png";
import oriensportLogo from "../image/PartnerLogo/LOGO ORIENSPORTSmall.jpg";
import seineEtMarneLogo from "../image/PartnerLogo/LogoNew77Small.jpg";
import airXtrem from "../image/PartnerLogo/AirXtrem_logo_Horizontal_grosSmall.jpg";
import balise77 from "../image/PartnerLogo/balise77Small.jpg";
import csaCNSD from "../image/PartnerLogo/CSA CNSDSmall.jpg";
import erco from "../image/PartnerLogo/ERCO.gif";
import fontainebleau from "../image/PartnerLogo/fontainebleauSmall.png";
import laGatine from "../image/PartnerLogo/LOGOSmall.png";
import asSamois from "../image/PartnerLogo/logo assamoisSmall.jpg";
import assap77 from "../image/PartnerLogo/logo ASSAP77.jpg";
import chambon from "../image/PartnerLogo/Logo ChambonSmall.png";
import cnsd from "../image/PartnerLogo/logo CNSDSmall.jpg";
import dlc from "../image/PartnerLogo/Logo DLC (carré blanc_rouge) - Artisan ChocolatierSmall.jpg";
import opa from "../image/PartnerLogo/LOGO OPASmall.jpg";
import tom from "../image/PartnerLogo/LOGO TOMSmall.jpg";
import ansa from "../image/PartnerLogo/logo_ANSASmall.jpg";
import regionIDF from "../image/PartnerLogo/LOGO_RIDF_2019_WEBSmall.jpg";
import sportident from "../image/PartnerLogo/Logo_sportidentSmall.png";
import asIGN from "../image/PartnerLogo/logo-as4c-IGN-2.0Small.jpg";
import sprint from "../image/PartnerLogo/SPPRINT-_logo5-e1577523745594Small.png";
import usMelun from "../image/PartnerLogo/US MELUNSmall.jpg";
import asco from "../image/PartnerLogo/ascoSmall.jpg";
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
        <StyledSection justify>
          <StyledH1>
            <Translator id="Partners.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Partners.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Partners.box1title" />
            </StyledH3>
            <StyledPartners
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
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
                  href="https://seineetmarne.franceolympique.com/accueil.php"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={cdosLogo} alt={cdosLogo} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://www.iledefrance.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={regionIDF} alt={regionIDF} />
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
                  href="http://www.fontainebleau.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={fontainebleau} alt={fontainebleau} />
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
                <StyledImg src={cnsd} alt={cnsd} />
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
                  href="http://www.coasign.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={asIGN} alt={asIGN} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://sportident.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={sportident} alt={sportident} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://www.spprint.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={sprint} alt={sprint} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="http://www.asco-orleans.com/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={asco} alt={asco} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={chambon} alt={chambon} />
              </StyledFlexBox>

              <StyledFlexBox>
                <StyledAnchor
                  href="http://www.biere-la-gatine.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={laGatine} alt={laGatine} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://www.deslischocolat.com/fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={dlc} alt={dlc} />
                </StyledAnchor>
              </StyledFlexBox>
            </StyledPartners>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Partners.box2title" />
            </StyledH3>
            <StyledPartners
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <StyledFlexBox>
                <StyledAnchor
                  href="http://balise77.com/site/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={balise77} alt={balise77} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://www.opamontigny.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={opa} alt={opa} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="http://www.csacnsd.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={csaCNSD} alt={csaCNSD} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="http://www.esprit-raid.org/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={erco} alt={erco} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://toutesorientationsmeaux.blogspot.com/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={tom} alt={tom} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={ansa} alt={ansa} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="http://www.samois.coursedorientation.fr/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={asSamois} alt={asSamois} />
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={assap77} alt={assap77} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledAnchor
                  href="https://usmelunco.wordpress.com/"
                  centerimg
                  paddingless
                  hoverless
                >
                  <StyledImg src={usMelun} alt={usMelun} />
                </StyledAnchor>
              </StyledFlexBox>
            </StyledPartners>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Partenaires;
