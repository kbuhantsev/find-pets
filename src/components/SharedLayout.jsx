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
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#F59256',
          },
          accent: {
            main: '#FF6101',
          },
        }
      : {
          primary: {
            main: '#F59256',
          },
          accent: {
            main: '#FF6101',
          },
        }),
    colors: {
      white: '#ffffff',
      black: '#111111',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
    },
  },
});

const SharedLayout = () => {
  const [mode, setMode] = React.useState('light');
  const { token } = useUser();
  const { isLoading } = useGetCurrentUserQuery({ skip: !token });

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
        {isLoading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
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
