import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledPartenaires from '../styledComponents/StyledPartenaires';
import StyledImg from '../styledComponents/StyledImg';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledSection from '../styledComponents/StyledSection';
import onfLogo from '../image/onf_logo.png'
import ffcoLogo from '../image/ffcoLogo.jpg'
import iDFLogo from '../image/logoRegionIDF.svg'
import ligueIDFLogo from '../image/LIFCOLogo.jpg'
import cDCO77Logo from '../image/logoCDCO77.gif'
import Translator from '../Logic/Translator';

class Partenaires extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Partners.title" /></StyledH1>
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