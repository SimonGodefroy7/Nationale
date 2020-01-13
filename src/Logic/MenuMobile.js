import React, { Component } from 'react';
import StyledMenuMobile from '../styledComponents/StyledMenuMobile';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledImg from '../styledComponents/StyledImg';
import burgerIcon from '../image/burgerIcon.svg';
import Translator from '../Logic/Translator';
import Link from '../Logic/Link';

class MenuMobile extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOpen: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  };
  openMenu() {
    this.setState({ listOpen: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu() {
    this.setState({ listOpen: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <StyledMenuMobile>
        <StyledFlexBox onClick={this.openMenu}>
          <StyledImg src={burgerIcon} alt={burgerIcon} />
        </StyledFlexBox>
        {this.state.listOpen && <StyledUl>
          <StyledAnchor as={Link} hoverless paddingless to="/">
            <StyledLi><Translator id="Menu.home" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/sprint">
            <StyledLi><Translator id="Menu.eventSprint" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/middle-distance">
            <StyledLi><Translator id="Menu.eventMD" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/long-distance">
            <StyledLi><Translator id="Menu.eventLD" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/liste-de-depart">
            <StyledLi><Translator id="Menu.startList" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/resultats">
            <StyledLi><Translator id="Menu.results" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/gallery">
            <StyledLi><Translator id="Menu.gallery" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/hebergements">
            <StyledLi><Translator id="Menu.accommodation" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/partenaires">
            <StyledLi><Translator id="Menu.partners" /></StyledLi>
          </StyledAnchor>
          <StyledAnchor as={Link} hoverless paddingless to="/contact">
            <StyledLi><Translator id="Menu.contact" /></StyledLi>
          </StyledAnchor>
        </StyledUl>}
      </StyledMenuMobile>
    );
  }
}

export default MenuMobile;
