import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledPartenaires from '../styledComponents/StyledPartenaires';
import StyledImg from '../styledComponents/StyledImg';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledSection from '../styledComponents/StyledSection';
import onfLogo from '../image/PartnerLogo/onf_logo.png'
import ffcoLogo from '../image/PartnerLogo/ffcoLogo.jpg'
import iDFLogo from '../image/PartnerLogo/logoRegionIDF.svg'
import ligueIDFLogo from '../image/PartnerLogo/LIFCOLogo.jpg'
import cDCO77Logo from '../image/PartnerLogo/logoCDCO77.gif'
import Translator from '../Logic/Translator';

class Partenaires extends Component {
  render() {
    return (
      <Page>
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
