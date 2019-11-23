import React, { Component } from 'react';
import Router from './Logic/Router';
import GlobalStyle from './styledComponents/GlobalStyle';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
