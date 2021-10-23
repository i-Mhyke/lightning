import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import { GlobalStyles } from './globalstyles';
import { NavBar } from './NavBar';
import theme from './theme';

interface IPROVIDERSPROPS {
  children: React.ReactNode;
}

const AppThemeProviders: React.FC<IPROVIDERSPROPS> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default AppThemeProviders;
