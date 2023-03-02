import ColorMode from 'components/ColorMode';
import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" as="header">
        <Toolbar>
          <Logo />
          <Navigation />
          <ColorMode />
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
