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
import Translator from '../Logic/Translator';

class Header extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.history.push("/");
  }

  render() {
    return (
      <StyledHeader>
        <StyledMenuBackground>
          <StyledFlexBox onClick={this.onClick}>
            <StyledH1><Translator id="Header.headerTitle" /></StyledH1>
            <StyledH1Short><Translator id="Header.headerTitleShort" /></StyledH1Short>
          </StyledFlexBox>
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
