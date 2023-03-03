import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useUser } from 'hooks/useUser';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetCurrentUserQuery } from 'redux/user/userApi';
import {
  Backdrop,
  CircularProgress,
} from '../../node_modules/@mui/material/index';
import Header from './Header/Header';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = mode => ({
  breakpoints: {
    keys: ['mobile', 'tablet', 'laptop', 'desktop'],
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
    },
    unit: 'px',
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#FF6101',
            light: '#F59256',
          },
          background: {
            paper: '#fff',
            default: '#FDF7F2',
          },
        }
      : {
          primary: {
            main: '#FF6101',
            light: '#F59256',
          },
          background: {
            paper: '#000',
            default: '#000',
          },
        }),

    common: {
      white: '#ffffff',
      black: '#111111',
    },
  },
});

const SharedLayout = () => {
  const [mode, setMode] = React.useState('light');
  const { token } = useUser();
  const { isFetching } = useGetCurrentUserQuery({ skip: !token });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isFetching ? (
          <Backdrop
            sx={{ color: '#F59256', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={isFetching}
          >
            <CircularProgress color="primary" size={75} />
          </Backdrop>
        ) : (
          <>
            <Header />
            <Suspense fallback={<></>}>
              <Container>
                <Outlet />
              </Container>
            </Suspense>
          </>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { SharedLayout, ColorModeContext };
