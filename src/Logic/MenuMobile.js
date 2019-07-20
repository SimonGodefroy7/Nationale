import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import StyledMenuMobile from '../styledComponents/StyledMenuMobile'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledFlexBox from '../styledComponents/StyledFlexBox'; //eslint-disable-line no-unused-vars
import StyledUl from '../styledComponents/StyledUl'; //eslint-disable-line no-unused-vars
import StyledLi from '../styledComponents/StyledLi'; //eslint-disable-line no-unused-vars
import StyledLink from '../styledComponents/StyledLink'; //eslint-disable-line no-unused-vars
import StyledImg from '../styledComponents/StyledImg'; //eslint-disable-line no-unused-vars
import burgerIcon from '../image/burgerIcon.svg';

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
            <StyledLink to="/">Acceuil</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/evenements/">Évenements</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/inscription/">Inscriptions</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/listeDeDepart">Listes de départ</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/Resultats">Résultats</StyledLink>
          </StyledLi>
          <StyledLi>
          <StyledLink to="/hebergements">Hébergements</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/partenaires/">Partenaires</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/contact/">Contacts</StyledLink>
          </StyledLi>
        </StyledUl>}
      </StyledMenuMobile>
    );
  }
}

export default MenuMobile;
