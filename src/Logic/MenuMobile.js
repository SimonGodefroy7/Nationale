import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import StyledMenuMobile from '../styledComponents/StyledMenuMobile'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledFlexBox from '../styledComponents/StyledFlexBox'; //eslint-disable-line no-unused-vars
import StyledUl from '../styledComponents/StyledUl'; //eslint-disable-line no-unused-vars
import StyledLi from '../styledComponents/StyledLi'; //eslint-disable-line no-unused-vars
import StyledLink from '../styledComponents/StyledLink'; //eslint-disable-line no-unused-vars
import StyledImg from '../styledComponents/StyledImg'; //eslint-disable-line no-unused-vars
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
          <StyledLi>
            <StyledLink to="/"><Translator id="Menu.home" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/evenements"><Translator id="Menu.events" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/inscription"><Translator id="Menu.registration" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/liste-de-depart"><Translator id="Menu.startList" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/resultats"><Translator id="Menu.results" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/gallery"><Translator id="Menu.gallery" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/hebergements"><Translator id="Menu.accommodation" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/partenaires"><Translator id="Menu.partners" /></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/contact"><Translator id="Menu.contact" /></StyledLink>
          </StyledLi>
        </StyledUl>}
      </StyledMenuMobile>
    );
  }
}

export default MenuMobile;
