import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';

const App = () => {
  return (
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
