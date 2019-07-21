import React, { Component } from 'react';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import StyledMenuBackground from '../styledComponents/StyledMenuBackground';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH1Short from '../styledComponents/StyledH1Short';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledHeader from '../styledComponents/StyledHeader';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledTabletBox from '../styledComponents/StyledTabletBox';
import Translator from '../Logic/Translator';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledMenuBackground>
          <StyledFlexBox>
            <StyledH1><Translator id="Header.headerTitle" /></StyledH1>
            <StyledH1Short><Translator id="Header.headerTitleShort" /></StyledH1Short>
            <StyledParagraph><Translator id="Header.headerParagraph" /></StyledParagraph>
          </StyledFlexBox>
          <Menu />
          <MenuMobile />
        </StyledMenuBackground>
        <StyledTabletBox>
          <StyledParagraph><Translator id="Header.headerParagraph" /></StyledParagraph>
        </StyledTabletBox>
      </StyledHeader>
    );
  }
}

export default Header;
