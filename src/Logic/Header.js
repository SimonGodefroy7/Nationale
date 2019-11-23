import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import LangMenu from './LangMenu';
import StyledMenuBackground from '../styledComponents/StyledMenuBackground';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH1Short from '../styledComponents/StyledH1Short';
import StyledHeader from '../styledComponents/StyledHeader';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledLink from '../styledComponents/StyledLink';
import Translator from '../Logic/Translator';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledMenuBackground>
          <StyledLink paddingless hoverless to="/">
            <StyledH1><Translator id="Header.headerTitle" /></StyledH1>
            <StyledH1Short><Translator id="Header.headerTitleShort" /></StyledH1Short>
          </StyledLink>
          <StyledFlexBox>
            <LangMenu />
            <MenuMobile />
          </StyledFlexBox>
        </StyledMenuBackground>
        <Menu />
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
