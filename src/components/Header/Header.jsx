import ColorMode from 'components/ColorMode';
import { AppBar, Box, Toolbar } from '@mui/material';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const toolbarStyles = { display: 'flex', justifyContent: 'space-between' };

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={toolbarStyles}>
          <Logo />
          <Navigation />
          <div>
            <ColorMode />
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
