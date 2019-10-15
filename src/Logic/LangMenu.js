import React, { Component } from 'react';
import StyledLangButton from '../styledComponents/StyledLangButton';
import StyledImg from '../styledComponents/StyledImg';
import StyledLang from '../styledComponents/StyledLang';
import { LANG_FR, LANG_EN } from '../redux/actions/types';
import frIcon from '../image/Flag/Flag_of_France.svg';
import enIcon from '../image/Flag/Flag_of_the_United_Kingdom.svg';
import { connect } from 'react-redux';

class LangMenu extends Component {
  constructor(props){
    super(props);

    this.onClickFR = this.onClickFR.bind(this);
    this.onClickEN = this.onClickEN.bind(this);
  }

  onClickFR() {
    const action = {type: LANG_FR};
    this.props.dispatch(action);
  }

  onClickEN() {
    const action = {type: LANG_EN};
    this.props.dispatch(action);
  }

  render() {
    return (
      <StyledLang>
        <StyledLangButton onClick={this.onClickFR}>
          <StyledImg src={frIcon} alt={frIcon} />
        </StyledLangButton>
        <StyledLangButton onClick={this.onClickEN}>
          <StyledImg src={enIcon} alt={enIcon} />
        </StyledLangButton>
      </StyledLang>
    );
  }
}

export default connect()(LangMenu);
