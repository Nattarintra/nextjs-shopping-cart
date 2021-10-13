import { useEffect } from 'react';
import { createTheme } from 'src/theme';
import { THEMES } from 'src/constants';
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    theme: THEMES.LIGHT,
  });

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
