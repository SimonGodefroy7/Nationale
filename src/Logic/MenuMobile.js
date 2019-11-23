import React, { Component } from 'react';
import StyledMenuMobile from '../styledComponents/StyledMenuMobile';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledMenuLink from '../styledComponents/StyledMenuLink';
import StyledImg from '../styledComponents/StyledImg';
import burgerIcon from '../image/burgerIcon.svg';
import Translator from '../Logic/Translator';

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
          <StyledMenuLink to="/"><StyledLi><Translator id="Menu.home" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/evenements"><StyledLi><Translator id="Menu.events" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/inscription"><StyledLi><Translator id="Menu.registration" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/liste-de-depart"><StyledLi><Translator id="Menu.startList" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/resultats"><StyledLi><Translator id="Menu.results" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/gallery"><StyledLi><Translator id="Menu.gallery" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/hebergements"><StyledLi><Translator id="Menu.accommodation" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/partenaires"><StyledLi><Translator id="Menu.partners" /></StyledLi></StyledMenuLink>
          <StyledMenuLink to="/contact"><StyledLi><Translator id="Menu.contact" /></StyledLi></StyledMenuLink>
        </StyledUl>}
      </StyledMenuMobile>
    );
  }
}

export default MenuMobile;
