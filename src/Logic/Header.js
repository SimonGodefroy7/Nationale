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

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledMenuBackground>
          <StyledFlexBox>
            <StyledH1>Nationale Nord Ouest 2020</StyledH1>
            <StyledH1Short>Nationale N-O 2020</StyledH1Short>
            <StyledParagraph>Course d'Orientation à pied du 21 août au 23 août en forêt de Fontainebleau</StyledParagraph>
          </StyledFlexBox>
          <Menu />
          <MenuMobile />
        </StyledMenuBackground>
        <StyledTabletBox>
          <StyledParagraph>Course d'Orientation à pied du 21 août au 23 août en forêt de Fontainebleau</StyledParagraph>
        </StyledTabletBox>
      </StyledHeader>
    );
  }
}

export default Header;
