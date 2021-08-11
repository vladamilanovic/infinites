import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Pace from './shared/components/Pace';
import routes, { renderRoutes } from './router';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />

        {renderRoutes(routes)}
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
