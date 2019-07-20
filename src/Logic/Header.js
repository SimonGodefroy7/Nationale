import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'; //eslint-disable-line no-unused-vars
import Menu from './Menu'; //eslint-disable-line no-unused-vars
import StyledMenuBackground from '../styledComponents/StyledMenuBackground'; //eslint-disable-line no-unused-vars
import StyledH1 from '../styledComponents/StyledH1'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledHeader from '../styledComponents/StyledHeader'; //eslint-disable-line no-unused-vars
import StyledFlexBox from '../styledComponents/StyledFlexBox'; //eslint-disable-line no-unused-vars

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
      </StyledHeader>
    );
  }
}

export default Header;
