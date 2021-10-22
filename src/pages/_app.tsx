import { AppProps } from 'next/app';

import AppThemeProviders from '../layout/ThemeProvider';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppThemeProviders>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </AppThemeProviders>
);

export default MyApp;
