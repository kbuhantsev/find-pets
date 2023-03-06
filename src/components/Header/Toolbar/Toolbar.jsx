import React from 'react';
import ColorMode from 'components/ColorMode';
import { Box, IconButton } from '@mui/material';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { ToolbarStyled } from './Toolbar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const Toolbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('mobile'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box display="flex">
      <ToolbarStyled>
        <Logo />
        <Navigation />
        <Box display="flex" flexDirection="row">
          <ColorMode />
          <UserMenu />
        </Box>
      </ToolbarStyled>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleMenu}
      >
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
    </Box>
  );
};

export default Toolbar;
