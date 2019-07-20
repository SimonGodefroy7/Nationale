import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import StyledNav from '../styledComponents/StyledNav'; //eslint-disable-line no-unused-vars
import StyledUl from '../styledComponents/StyledUl'; //eslint-disable-line no-unused-vars
import StyledLi from '../styledComponents/StyledLi'; //eslint-disable-line no-unused-vars
import StyledLink from '../styledComponents/StyledLink'; //eslint-disable-line no-unused-vars

class Menu extends Component {
  render() {
    return (
      <StyledNav>
        <StyledUl>
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
        </StyledUl>
      </StyledNav>
    );
  }
}

export default Menu;
