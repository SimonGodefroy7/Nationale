import React, { Component } from 'react';
import language from '../functions/languages';
import { connect } from 'react-redux';

const translation = (id, langue) => language[langue][id];

class Translator extends Component {
  render() {
    return (
      <span>{translation(this.props.id, this.props.langue)}</span>
    );
  }
}

const mapStateToProps = state => ({ langue: state.language });

export default connect(mapStateToProps)(Translator);
