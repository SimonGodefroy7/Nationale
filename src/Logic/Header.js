import React, { Component } from 'react';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import StyledMenuBackground from '../styledComponents/StyledMenuBackground';
import StyledH1 from '../styledComponents/StyledH1';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledHeader from '../styledComponents/StyledHeader';
import StyledFlexBox from '../styledComponents/StyledFlexBox';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledMenuBackground>
          <StyledH1>Nationale Nord Ouest 2020</StyledH1>
          <StyledFlexBox>
            <StyledParagraph>Course d'Orientation à pied du 21 août au 23 août en forêt de Fontainebleau</StyledParagraph>
          </StyledFlexBox>
        </StyledMenuBackground>
        <Menu />
        <MenuMobile />
      </StyledHeader>
    );
  }
}

export default Header;
