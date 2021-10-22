import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import { Footer } from './Footer';
import { NavBar } from './NavBar';
import theme from './theme';

interface IPROVIDERSPROPS {
  children: React.ReactNode;
}

const AppThemeProviders: React.FC<IPROVIDERSPROPS> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default AppThemeProviders;
