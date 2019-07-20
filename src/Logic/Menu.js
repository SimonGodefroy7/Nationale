import React, { Component } from 'react';
import StyledNav from '../styledComponents/StyledNav';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledLink from '../styledComponents/StyledLink';

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
